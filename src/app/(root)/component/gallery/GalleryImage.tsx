'use client';

import Image from 'next/image';
import { useState } from 'react';

const BLUR_DATA_URL =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDEyMDAgOTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjZTdlNWUxIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjY2JkNWUxIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2cpIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI5MDAiLz48L3N2Zz4=';

interface GalleryImageProps {
    src: string;
    alt: string;
    className: string;
    placeholderLabel?: string;
    priority?: boolean;
}

export default function GalleryImage({
    src,
    alt,
    className,
    placeholderLabel = 'Billede kommer snart',
    priority = false,
}: GalleryImageProps) {
    const [failed, setFailed] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    if (!src || failed) {
        return (
            <div
                className={`${className} bg-linear-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center`}
                aria-label={alt}
                role="img"
            >
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-700 dark:text-zinc-200 text-center px-4">
                    {placeholderLabel}
                </span>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden">
            {!isLoaded ? (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 animate-pulse"
                />
            ) : null}

            <Image
                src={src}
                alt={alt}
                width={1200}
                height={900}
                className={`${className} transition-all duration-300 ${isLoaded ? 'blur-0 scale-100 opacity-100' : 'blur-md scale-[1.03] opacity-70'}`}
                onError={() => setFailed(true)}
                onLoad={() => setIsLoaded(true)}
                priority={priority}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
            />
        </div>
    );
}
