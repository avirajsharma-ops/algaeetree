import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import CO2Section from "./components/sections/CO2Section";
import NaturesGeniusSection from "./components/sections/NaturesGeniusSection";
import IntroducingSection from "./components/sections/IntroducingSection";
import FeatureShowcaseClientOnly from "./components/sections/FeatureShowcaseClientOnly";
// import FeaturePackSection from "./components/sections/FeaturePackSection";
import InsideSection from "./components/sections/InsideSection";
import { buildPageMetadata } from "./lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Engineering biology to restore the air we breathe",
  description:
    "AlgaeTree builds self-sustaining microalgae systems that capture CO2, release oxygen, and help cities scale climate-positive infrastructure.",
  path: "/",
  keywords: ["urban carbon capture", "CO2 reduction", "oxygen generation"],
});

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
        {/* <FeaturePackSection /> */}
        <InsideSection />
      </main>
      <Footer />
    </div>
  );
}
