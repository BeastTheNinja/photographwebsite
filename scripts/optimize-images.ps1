param(
    [string]$RootPath = "public",
    [int]$MaxLongEdge = 2000,
    [int]$Quality = 75,
    [string]$BackupRoot = "public/_image-backups"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if ($Quality -lt 1 -or $Quality -gt 100) {
    throw "Quality must be between 1 and 100."
}

Add-Type -AssemblyName System.Drawing

function Get-JpegCodec {
    return [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
        Where-Object { $_.MimeType -eq "image/jpeg" } |
        Select-Object -First 1
}

function Save-Jpeg {
    param(
        [System.Drawing.Image]$Image,
        [string]$Path,
        [int]$JpegQuality,
        [System.Drawing.Imaging.ImageCodecInfo]$JpegCodec
    )

    $qualityEncoder = [System.Drawing.Imaging.Encoder]::Quality
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($qualityEncoder, [long]$JpegQuality)

    try {
        $Image.Save($Path, $JpegCodec, $encoderParams)
    }
    finally {
        $encoderParams.Dispose()
    }
}

function Get-RelativePathCompat {
    param(
        [string]$BasePath,
        [string]$TargetPath
    )

    $baseFull = [System.IO.Path]::GetFullPath($BasePath)
    $targetFull = [System.IO.Path]::GetFullPath($TargetPath)

    if (-not $baseFull.EndsWith([System.IO.Path]::DirectorySeparatorChar)) {
        $baseFull += [System.IO.Path]::DirectorySeparatorChar
    }

    $baseUri = New-Object System.Uri($baseFull)
    $targetUri = New-Object System.Uri($targetFull)
    $relativeUri = $baseUri.MakeRelativeUri($targetUri)
    return [System.Uri]::UnescapeDataString($relativeUri.ToString()).Replace('/', '\\')
}

$repoRoot = (Get-Location).Path
$backupStamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupSessionPath = Join-Path $BackupRoot $backupStamp

$jpgFiles = Get-ChildItem $RootPath -Recurse -File |
    Where-Object {
        $_.Extension -match '^\.(jpe?g)$' -and
        -not $_.FullName.StartsWith((Join-Path $repoRoot $BackupRoot), [System.StringComparison]::OrdinalIgnoreCase)
    }

if (-not $jpgFiles) {
    Write-Output "No JPG files found under '$RootPath'."
    exit 0
}

$jpegCodec = Get-JpegCodec
if (-not $jpegCodec) {
    throw "JPEG codec not found on this machine."
}

$stats = @()

foreach ($file in $jpgFiles) {
    $relativePath = Get-RelativePathCompat -BasePath $repoRoot -TargetPath $file.FullName

    $backupFilePath = Join-Path $backupSessionPath $relativePath.Replace("/", "\\")
    $backupDir = Split-Path $backupFilePath -Parent
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
    Copy-Item -Path $file.FullName -Destination $backupFilePath -Force

    $originalBytes = $file.Length

    $sourceImage = $null
    $resizedBitmap = $null
    $graphics = $null
    $tempPath = "$($file.FullName).tmp"
    $newBytes = $null

    try {
        $sourceImage = [System.Drawing.Image]::FromFile($file.FullName)

        $width = $sourceImage.Width
        $height = $sourceImage.Height
        $longEdge = [Math]::Max($width, $height)
        $scale = 1.0

        if ($longEdge -gt $MaxLongEdge) {
            $scale = $MaxLongEdge / [double]$longEdge
        }

        $targetWidth = [Math]::Max(1, [int][Math]::Round($width * $scale))
        $targetHeight = [Math]::Max(1, [int][Math]::Round($height * $scale))

        $resizedBitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($resizedBitmap)
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($sourceImage, 0, 0, $targetWidth, $targetHeight)

        Save-Jpeg -Image $resizedBitmap -Path $tempPath -JpegQuality $Quality -JpegCodec $jpegCodec
    }
    finally {
        if ($graphics) { $graphics.Dispose() }
        if ($resizedBitmap) { $resizedBitmap.Dispose() }
        if ($sourceImage) { $sourceImage.Dispose() }
    }

    Copy-Item -Path $tempPath -Destination $file.FullName -Force
    Remove-Item -Path $tempPath -Force

    $newBytes = (Get-Item $file.FullName).Length

    $stats += [PSCustomObject]@{
        Path = $relativePath.Replace('\\', '/')
        OriginalKB = [Math]::Round($originalBytes / 1KB, 1)
        NewKB = [Math]::Round($newBytes / 1KB, 1)
        SavedKB = [Math]::Round(($originalBytes - $newBytes) / 1KB, 1)
        SavedPct = if ($originalBytes -gt 0) { [Math]::Round((($originalBytes - $newBytes) * 100.0) / $originalBytes, 1) } else { 0 }
        Resolution = "$width x $height -> $targetWidth x $targetHeight"
    }
}

$totalOriginal = ($stats | Measure-Object OriginalKB -Sum).Sum
$totalNew = ($stats | Measure-Object NewKB -Sum).Sum
$totalSaved = [Math]::Round($totalOriginal - $totalNew, 1)
$totalSavedPct = if ($totalOriginal -gt 0) { [Math]::Round((($totalOriginal - $totalNew) * 100.0) / $totalOriginal, 1) } else { 0 }

Write-Output "Optimized $($stats.Count) JPG files."
Write-Output "Backup folder: $backupSessionPath"
Write-Output "Total: ${totalOriginal}KB -> ${totalNew}KB (saved ${totalSaved}KB, ${totalSavedPct}%)"
Write-Output ""
$stats | Sort-Object SavedKB -Descending | Select-Object -First 20 | Format-Table -AutoSize
