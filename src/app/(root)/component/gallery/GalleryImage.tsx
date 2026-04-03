'use client';

import Image from 'next/image';
import { useState } from 'react';

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
        <Image
            src={src}
            alt={alt}
            width={1200}
            height={900}
            className={className}
            onError={() => setFailed(true)}
            priority={priority}
        />
    );
}
