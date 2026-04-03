'use client';

import { useEffect, useRef } from 'react';
import GalleryImage from './GalleryImage';
import type { GalleryImage as GalleryImageType } from './types';

interface GalleryLightboxProps {
    image: GalleryImageType | null;
    onClose: () => void;
}

const categoryLabels: Record<string, string> = {
    Alle: 'Alle',
    Portraet: 'Portræt',
    Natur: 'Natur',
};

export default function GalleryLightbox({ image, onClose }: GalleryLightboxProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const dialogTitleId = 'gallery-lightbox-title';

    useEffect(() => {
        if (image) {
            previousFocusRef.current = document.activeElement as HTMLElement;
            closeButtonRef.current?.focus();

            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    onClose();
                    return;
                }

                if (event.key !== 'Tab') {
                    return;
                }

                const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
                );

                if (!focusableElements || focusableElements.length === 0) {
                    return;
                }

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                const activeElement = document.activeElement as HTMLElement | null;

                if (!activeElement || !dialogRef.current?.contains(activeElement)) {
                    event.preventDefault();
                    firstElement.focus();
                    return;
                }

                if (event.shiftKey && activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                    return;
                }

                if (!event.shiftKey && activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
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
            ref={dialogRef}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
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
                <h2 id={dialogTitleId} className="sr-only">
                    Billede i stor visning: {categoryLabels[image.category] ?? image.category}
                </h2>
                <GalleryImage
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    placeholderLabel={categoryLabels[image.category] ?? image.category}
                    priority
                />
                <p className="text-white text-center mt-6 text-xl">{categoryLabels[image.category] ?? image.category}</p>
            </div>
        </div>
    );
}
