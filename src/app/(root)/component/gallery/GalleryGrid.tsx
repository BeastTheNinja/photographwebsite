import GalleryCard from './GalleryCard';
import type { GalleryImage } from './types';

interface GalleryGridProps {
    images: GalleryImage[];
    onOpenImage: (image: GalleryImage) => void;
}

export default function GalleryGrid({ images, onOpenImage }: GalleryGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
                <GalleryCard key={image.id} image={image} onOpen={onOpenImage} />
            ))}
        </div>
    );
}
