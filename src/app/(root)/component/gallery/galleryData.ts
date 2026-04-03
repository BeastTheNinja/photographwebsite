import type { GalleryImage } from './types';

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: 'https://via.placeholder.com/1200x900?text=Bryllup+01',
        alt: 'Bryllupsfoto ved kirke',
        category: 'Bryllup',
    },
    {
        id: 2,
        src: 'https://via.placeholder.com/1200x900?text=Portraet+01',
        alt: 'Portraet i naturligt lys',
        category: 'Portraet',
    },
    {
        id: 3,
        src: 'https://via.placeholder.com/1200x900?text=Familie+01',
        alt: 'Familiefoto i park',
        category: 'Familie',
    },
    {
        id: 4,
        src: 'https://via.placeholder.com/1200x900?text=Natur+01',
        alt: 'Naturbillede fra strand',
        category: 'Natur',
    },
    {
        id: 6,
        src: 'https://via.placeholder.com/1200x900?text=Golden+Hour+01',
        alt: 'Golden hour fotografering',
        category: 'Natur',
    },
    {
        id: 7,
        src: 'https://via.placeholder.com/1200x900?text=Portraet+02',
        alt: 'Sort-hvid portraet',
        category: 'Portraet',
    },
];

export const galleryCategories = [
    'Alle',
    ...Array.from(new Set(galleryImages.map((image) => image.category))),
];
