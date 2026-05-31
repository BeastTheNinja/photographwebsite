import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { siteDescription, siteName } from "@/lib/config";
import { getStructuredData, themeInitScript } from "@/lib/siteData";
import { getSiteUrl } from "@/app/lib/siteUrl";
import "./globals.css";

const siteUrl = getSiteUrl();

function getMetadataBase() {
  return new URL(siteUrl);
}
const structuredData = getStructuredData(siteUrl);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "fotograf",
    "fotograf Brønderslev",
    "fotograf Nordjylland",
    "portrætfotograf",
    "bryllupsfotograf",
    "familiefotografering",
    "naturfotografering",
    "konfirmationsfotografering",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/icons/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/icons/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  applicationName: siteName,
  category: "photography",
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="da"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Spring til indhold
        </a>
        {children}
      </body>
    </html>
  );
}
