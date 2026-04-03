import type { GalleryImage } from './types';

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: '/images/gallery/bryllup-01.jpg',
        alt: 'Bryllupsfoto ved kirke',
        category: 'Bryllup',
    },
    {
        id: 2,
        src: '/images/gallery/portraet-01.jpg',
        alt: 'Portraet i naturligt lys',
        category: 'Portraet',
    },
    {
        id: 3,
        src: '/images/gallery/familie-01.jpg',
        alt: 'Familiefoto i park',
        category: 'Familie',
    },
    {
        id: 4,
        src: '/images/gallery/natur-01.jpg',
        alt: 'Naturbillede fra strand',
        category: 'Natur',
    },
    {
        id: 5,
        src: '/images/gallery/golden-hour-01.jpg',
        alt: 'Golden hour fotografering',
        category: 'Natur',
    },
    {
        id: 6,
        src: '/images/gallery/portraet-02.jpg',
        alt: 'Sort-hvid portraet',
        category: 'Portraet',
    },
];

export const galleryCategories = [
    'Alle',
    ...Array.from(new Set(galleryImages.map((image) => image.category))),
];
