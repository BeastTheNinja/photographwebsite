'use client';

import { useMemo, useState } from 'react';
import GalleryCategoryFilter from '../component/gallery/GalleryCategoryFilter';
import { galleryCategories, galleryImages } from '../component/gallery/galleryData';
import GalleryGrid from '../component/gallery/GalleryGrid';
import GalleryLightbox from '../component/gallery/GalleryLightbox';
import type { GalleryImage } from '../component/gallery/types';

export default function GalleryPageClient() {
    const [selectedCategory, setSelectedCategory] = useState('Alle');
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const filteredImages = useMemo(() => {
        if (selectedCategory === 'Alle') {
            return galleryImages;
        }

        return galleryImages.filter((image) => image.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <section className="bg-linear-to-b from-gray-50 to-white py-12 transition-colors sm:py-14 md:py-16 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h1 className="mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 bg-clip-text text-4xl text-transparent sm:text-5xl md:text-6xl dark:from-zinc-100 dark:to-zinc-300">
                        Galleri
                    </h1>
                    <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl dark:text-gray-400">
                        Et udvalg af portrætter og naturbilleder fra mine seneste fotosessions.
                    </p>
                </div>

                <GalleryCategoryFilter
                    categories={galleryCategories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                <GalleryGrid images={filteredImages} onOpenImage={setSelectedImage} />
            </div>

            <GalleryLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
        </section>
    );
}
