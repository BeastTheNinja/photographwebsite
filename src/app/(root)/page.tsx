import type { Metadata } from 'next';
import { Suspense } from 'react';
import HeroSection from "./component/HeroSection";
import HomeSecondarySections from './HomeSecondarySections';

export const metadata: Metadata = {
  title: 'Fotograf i Brønderslev',
  description:
    'DinFotografAnninka er fotograf i Brønderslev med fokus på portrætter, familiefotografering, bryllupsfotografering, natur og konfirmation.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="dark:bg-gray-900 transition-colors">
      <HeroSection />
      <Suspense
        fallback={
          <div className="bg-white dark:bg-gray-900" aria-hidden="true">
            <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 md:py-20">
              <div className="h-10 w-64 max-w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
              <div className="mt-6 h-5 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
              <div className="mt-3 h-5 w-11/12 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
            </div>
          </div>
        }
      >
        <HomeSecondarySections />
      </Suspense>
    </div>
  );
}