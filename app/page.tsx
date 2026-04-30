import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import CO2Section from "./components/sections/CO2Section";
import NaturesGeniusSection from "./components/sections/NaturesGeniusSection";
import IntroducingSection from "./components/sections/IntroducingSection";
import FeatureShowcaseClientOnly from "./components/sections/FeatureShowcaseClientOnly";
import FeaturePackSection from "./components/sections/FeaturePackSection";
import InsideSection from "./components/sections/InsideSection";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col bg-white">
      <Header />
      <main className="home-page-typography flex w-full flex-col bg-white">
        <HeroSection />
        <CO2Section />
        <NaturesGeniusSection />
        <IntroducingSection />
        <FeatureShowcaseClientOnly />
        <FeaturePackSection />
        <InsideSection />
      </main>
      <Footer />
    </div>
  );
}
