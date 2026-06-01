'use client';

import { useEffect, useRef, useState } from 'react';

// Blur placeholder handled via the skeleton div below.

interface GalleryImageProps {
    src: string;
    alt: string;
    className: string;
    placeholderLabel?: string;
    priority?: boolean;
}

export default function GalleryImage({ src, alt, className, placeholderLabel = 'Billede kommer snart', priority = false }: GalleryImageProps) {
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [failed, setFailed] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const imageElement = imageRef.current;

        if (imageElement?.complete && imageElement.naturalWidth > 0) {
            setIsLoaded(true);
        }
    }, [src]);

    if (!src || failed) {
        return <div className={`${className} bg-linear-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center`} aria-label={alt} role="img"><span className="text-xs tracking-[0.2em] uppercase text-zinc-700 dark:text-zinc-200 text-center px-4">{placeholderLabel}</span></div>;
    }

    return (
        <div className="relative overflow-hidden">
            {!isLoaded ? <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 animate-pulse" /> : null}
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                className={`${className} transition-all duration-300 ${isLoaded ? 'blur-0 scale-100 opacity-100' : 'blur-md scale-[1.03] opacity-70'}`}
                onError={() => setFailed(true)}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
}