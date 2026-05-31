import type { Metadata } from 'next';
import AboutHero from "@/features/about/AboutHero";
import AboutStory from "@/features/about/AboutStory";
import AboutFocus from "@/features/about/AboutFocus";
import AboutProcess from "@/features/about/AboutProcess";
import AboutCTA from "@/features/about/AboutCTA";

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
