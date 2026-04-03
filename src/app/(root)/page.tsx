import type { Metadata } from 'next';
import HeroSection from "./component/HeroSection";
import AboutPreview from "./component/AboutPreview";
import FeaturedWork from "./component/FeaturedWork";
import CTASection from "./component/CTASection";

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
      <AboutPreview />
      <FeaturedWork />
      <CTASection />
    </div>
  );
}