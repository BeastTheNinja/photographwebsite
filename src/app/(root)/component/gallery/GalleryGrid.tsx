'use client';

import GalleryCard from './GalleryCard';
import type { GalleryImage } from './types';

interface GalleryGridProps {
    images: GalleryImage[];
    onOpenImage: (image: GalleryImage) => void;
}

export default function GalleryGrid({ images, onOpenImage }: GalleryGridProps) {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-6 2xl:grid-cols-5">
            {images.map((image) => (
                <GalleryCard key={image.id} image={image} onOpen={onOpenImage} />
            ))}
        </div>
    );
}
