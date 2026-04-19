export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    category: string;
    featured?: boolean;
    featuredTitle?: string;
    featuredDescription?: string;
}
