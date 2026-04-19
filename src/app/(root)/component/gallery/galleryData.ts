import type { GalleryImage } from './types';

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: '/portrait/ung-pige-blackwhite.jpg',
        alt: 'Portræt af ung pige i sort-hvid',
        category: 'Portraet',
        featured: true,
        featuredTitle: 'Portræt',
        featuredDescription: 'Udvalgte portrætter med naturligt udtryk',
    },
    {
        id: 2,
        src: '/portrait/ung-pige-farve.jpg',
        alt: 'Portræt af ung pige i farver',
        category: 'Portraet',
    },
    {
        id: 3,
        src: '/portrait/ung-pige-dia.jpg',
        alt: 'Portræt af ung pige med dia-lys',
        category: 'Portraet',
    },
    {
        id: 4,
        src: '/portrait/ung-pige-side-eye.jpg',
        alt: 'Portræt af ung pige med sideblik',
        category: 'Portraet',
    },
    {
        id: 5,
        src: '/portrait/Far Cool.JPG',
        alt: 'Portræt af far med afslappet udtryk',
        category: 'Portraet',
    },
    {
        id: 6,
        src: '/portrait/Far sur.JPG',
        alt: 'Portræt af far med alvorligt udtryk',
        category: 'Portraet',
    },
    {
        id: 7,
        src: '/portrait/ung-pige-og-far-bag-klitter.jpg',
        alt: 'Portræt af ung pige og hendes far bag klitterne',
        category: 'Portraet',
    },
    {
        id: 8,
        src: '/portrait/ung-pige-og-far-kigger.jpg',
        alt: 'Portræt af ung pige og hendes far, der kigger mod kameraet',
        category: 'Portraet',
    },
    {
        id: 9,
        src: '/portrait/ung-pige-og-far-med-sten.jpg',
        alt: 'Portræt af ung pige og hendes far med sten i hænderne',
        category: 'Portraet',
        featured: true,
        featuredTitle: 'Ung pige og hendes far',
        featuredDescription: 'Portræt af ung pige og hendes far med sten i hænderne',
    },
    {
        id: 10,
        src: '/nature/And.JPG',
        alt: 'Naturbillede af and ved vandet',
        category: 'Natur',
        featured: true,
        featuredTitle: 'Natur',
        featuredDescription: 'Naturbillede med roligt motiv',
    },
    {
        id: 11,
        src: '/nature/Ænder.JPG',
        alt: 'Naturbillede af ænder i roligt miljø',
        category: 'Natur',
    },
    {
        id: 12,
        src: '/nature/Ænder i cirkel.JPG',
        alt: 'Naturbillede af ænder i cirkel',
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
