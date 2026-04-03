'use client';

import GalleryImage from './GalleryImage';
import type { GalleryImage as GalleryImageType } from './types';

interface GalleryCardProps {
    image: GalleryImageType;
    onOpen: (image: GalleryImageType) => void;
}

export default function GalleryCard({ image, onOpen }: GalleryCardProps) {
    return (
        <button
            type="button"
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group text-left"
            onClick={() => onOpen(image)}
        >
            <GalleryImage
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                placeholderLabel={image.category}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="text-center">
                    <p className="text-white text-sm mb-1">{image.category}</p>
                    <span className="text-white text-xs opacity-80">Tryk for at se stort</span>
                </div>
            </div>
        </button>
    );
}
