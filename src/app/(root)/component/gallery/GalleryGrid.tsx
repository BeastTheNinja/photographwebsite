'use client';

import GalleryCard from './GalleryCard';
import type { GalleryImage } from './types';

interface GalleryGridProps {
    images: GalleryImage[];
    onOpenImage: (image: GalleryImage) => void;
}

export default function GalleryGrid({ images, onOpenImage }: GalleryGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {images.map((image) => (
                <GalleryCard key={image.id} image={image} onOpen={onOpenImage} />
            ))}
        </div>
    );
}
