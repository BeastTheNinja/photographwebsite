'use client';

import { useEffect, useRef } from 'react';
import GalleryImage from './GalleryImage';
import type { GalleryImage as GalleryImageType } from './types';

interface GalleryLightboxProps {
    image: GalleryImageType | null;
    onClose: () => void;
}

export default function GalleryLightbox({ image, onClose }: GalleryLightboxProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (image) {
            previousFocusRef.current = document.activeElement as HTMLElement;
            closeButtonRef.current?.focus();

            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    onClose();
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            };
        } else if (previousFocusRef.current) {
            previousFocusRef.current.focus();
            previousFocusRef.current = null;
        }
    }, [image, onClose]);

    if (!image) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
            onClick={onClose}
        >
            <button
                ref={closeButtonRef}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all text-2xl"
                onClick={onClose}
                aria-label="Luk"
                type="button"
            >
                ✕
            </button>
            <div className="max-w-6xl max-h-[90vh]" onClick={(event) => event.stopPropagation()}>
                <GalleryImage
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    placeholderLabel={image.category}
                    priority
                />
                <p className="text-white text-center mt-6 text-xl">{image.category}</p>
            </div>
        </div>
    );
}
