'use client';

import { useMemo, useState } from 'react';
import GalleryCategoryFilter from './GalleryCategoryFilter';
import { galleryCategories, galleryImages } from './galleryData';
import GalleryGrid from './GalleryGrid';
import GalleryLightbox from './GalleryLightbox';
import type { GalleryImage } from './types';

export default function GallerySection() {
    const [selectedCategory, setSelectedCategory] = useState('Alle');
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const filteredImages = useMemo(() => {
        if (selectedCategory === 'Alle') {
            return galleryImages;
        }

        return galleryImages.filter((image) => image.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <section className="py-16 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                        Galleri
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Udskift placeholders med dine egne billeder, eller brug denne struktur direkte på tværs af flere sider.
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
