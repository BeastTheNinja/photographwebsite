import HeroSection from "./component/HeroSection";
import AboutPreview from "./component/AboutPreview";
import FeaturedWork from "./component/FeaturedWork";
import CTASection from "./component/CTASection";

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