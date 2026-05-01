import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TechHero from "../components/sections/technology/TechHero";
import HowItWorksSection from "../components/sections/technology/HowItWorksSection";
import FeaturesGridSection from "../components/sections/technology/FeaturesGridSection";
import PowerAutonomySection from "../components/sections/technology/PowerAutonomySection";
import SustainabilitySection from "../components/sections/technology/SustainabilitySection";
import CertificationsSection from "../components/sections/technology/CertificationsSection";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Technology",
    description:
        "Understand how AlgaeTree uses microalgae biology, automation, and resilient engineering to capture carbon and improve urban air quality.",
    path: "/technology",
    keywords: ["microalgae technology", "air quality technology", "autonomous CCUS"],
});

export default function TechnologyPage() {
    return (
        <div className="flex w-full flex-col bg-white">
            <Header />
            <main>
                <TechHero />
                <HowItWorksSection />
                <FeaturesGridSection />
                <PowerAutonomySection />
                <SustainabilitySection />
                <CertificationsSection />
            </main>
            <Footer />
        </div>
    );
}
