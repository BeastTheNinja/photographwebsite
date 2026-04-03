import type { GalleryImage } from './types';

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: '/Naja Blackwhite.jpg',
        alt: 'Sort-hvidt portraet af ung kvinde',
        category: 'Portraet',
    },
    {
        id: 2,
        src: '/Naja Farve.jpg',
        alt: 'Portraet af ung kvinde i farver',
        category: 'Portraet',
    },
    {
        id: 3,
        src: '/Naja dia.jpg',
        alt: 'Kreativt portraet med dia-lys',
        category: 'Portraet',
    },
    {
        id: 4,
        src: '/Naja side eye.jpg',
        alt: 'Portraet med sideblik',
        category: 'Portraet',
    },
    {
        id: 5,
        src: '/Far Cool.JPG',
        alt: 'Portraet af far med cool udtryk',
        category: 'Portraet',
    },
    {
        id: 6,
        src: '/Far sur.JPG',
        alt: 'Portraet af far med alvorligt udtryk',
        category: 'Portraet',
    },
    {
        id: 7,
        src: '/And.JPG',
        alt: 'Naturbillede af and ved vandet',
        category: 'Natur',
    },
    {
        id: 8,
        src: '/Ænder.JPG',
        alt: 'Naturbillede af aender i roligt miljoe',
        category: 'Natur',
    },
    {
        id: 9,
        src: '/Ænder i cirkel.JPG',
        alt: 'Naturbillede af aender i cirkel',
        category: 'Natur',
    },
];

const preferredCategoryOrder = ['Portraet', 'Natur'];

export const galleryCategories = [
    'Alle',
    ...preferredCategoryOrder.filter((category) =>
        galleryImages.some((image) => image.category === category),
    ),
    ...Array.from(new Set(galleryImages.map((image) => image.category))).filter(
        (category) => !preferredCategoryOrder.includes(category),
    ),
];
