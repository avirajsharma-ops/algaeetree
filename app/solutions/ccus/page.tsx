import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CcusHeroSection from "../../components/sections/technology/CcusHeroSection";
import CcusOverviewSection from "../../components/sections/technology/CcusOverviewSection";
import CcusDifferentiatorsSection from "../../components/sections/technology/CcusDifferentiatorsSection";
import CcusApplicationsSection from "../../components/sections/technology/CcusApplicationsSection";
import CcusImpactSection from "../../components/sections/technology/CcusImpactSection";

export const metadata = {
    title: "Solutions — CCUS | AlgaeTree",
    description:
        "Urban CCUS infrastructure with AlgaeTree™ for distributed carbon capture, oxygen generation, and environmental monitoring.",
};

export default function CcusSolutionsPage() {
    return (
        <div className="flex w-full flex-col bg-white">
            <Header />
            <main>
                <CcusHeroSection />
                <CcusOverviewSection />
                <CcusDifferentiatorsSection />
                <CcusApplicationsSection />
                <CcusImpactSection />
            </main>
            <Footer />
        </div>
    );
}