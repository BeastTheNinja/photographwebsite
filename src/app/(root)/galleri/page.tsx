import type { Metadata } from 'next';
import GalleryPageClient from './GalleryPageClient';

export const metadata: Metadata = {
    title: 'Galleri',
    description:
        'Se et udvalg af portrætter, naturbilleder og stemningsbilleder fra DinFotografAnninkas seneste fotosessions.',
    alternates: {
        canonical: '/galleri',
    },
};

export default function GalleryPage() {
    return <GalleryPageClient />;
}
