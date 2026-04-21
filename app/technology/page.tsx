import Header from "../components/Header";
import Footer from "../components/Footer";
import TechHero from "../components/sections/technology/TechHero";
import HowItWorksSection from "../components/sections/technology/HowItWorksSection";
import FeaturesGridSection from "../components/sections/technology/FeaturesGridSection";
import PowerAutonomySection from "../components/sections/technology/PowerAutonomySection";
import SustainabilitySection from "../components/sections/technology/SustainabilitySection";
import CertificationsSection from "../components/sections/technology/CertificationsSection";

export const metadata = {
    title: "Technology — AlgaeTree",
    description:
        "How the AlgaeTree system captures CO₂, purifies air, and operates autonomously using microalgae and renewable energy.",
};

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
