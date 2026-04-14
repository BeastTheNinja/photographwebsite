'use client';

import { memo } from 'react';
import GalleryImage from './GalleryImage';
import type { GalleryImage as GalleryImageType } from './types';

interface GalleryCardProps {
    image: GalleryImageType;
    onOpen: (image: GalleryImageType) => void;
}

const categoryLabels: Record<string, string> = {
    Alle: 'Alle',
    Portraet: 'Portræt',
    Natur: 'Natur',
};

function GalleryCard({ image, onOpen }: GalleryCardProps) {
    return (
        <button
            type="button"
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group text-left"
            onClick={() => onOpen(image)}
        >
            <GalleryImage
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64 md:h-72"
                placeholderLabel={image.category}
            />
            <div className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-black/60 to-transparent pb-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:pb-6">
                <div className="text-center">
                    <p className="text-white text-sm mb-1">{categoryLabels[image.category] ?? image.category}</p>
                    <span className="text-white text-xs opacity-80">Tryk for at se stort</span>
                </div>
            </div>
        </button>
    );
}

export default memo(GalleryCard);
