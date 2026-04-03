import type { Metadata } from 'next';
import AboutHero from '../component/about/AboutHero';
import AboutStory from '../component/about/AboutStory';
import AboutFocus from '../component/about/AboutFocus';
import AboutProcess from '../component/about/AboutProcess';
import AboutCTA from '../component/about/AboutCTA';

export const metadata: Metadata = {
    title: 'Om mig',
    description:
        'Læs om Annika, hendes tilgang til fotografering og hvilke typer portrætter, familiebilleder og bryllupsbilleder hun arbejder mest med.',
    alternates: {
        canonical: '/om',
    },
};

export default function AboutPage() {
    return (
        <div className="dark:bg-gray-900 transition-colors">
            <AboutHero />
            <AboutStory />
            <AboutFocus />
            <AboutProcess />
            <AboutCTA />
        </div>
    );
}
