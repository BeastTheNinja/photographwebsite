import type { Metadata } from 'next';
import BookingPageClient from './BookingPageClient';

export const metadata: Metadata = {
    title: 'Booking',
    description:
        'Book en fotograf-session hos DinFotografAnninka. Udfyld formularen for portrætter, familiefotografering, bryllupper eller andre særlige begivenheder.',
    alternates: {
        canonical: '/book',
    },
};

export default function BookingPage() {
    return <BookingPageClient />;
}
