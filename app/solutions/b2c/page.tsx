import Header from "../../components/Header";
import Footer from "../../components/Footer";
import B2cHeroSection from "../../components/sections/solutions/b2c/B2cHeroSection";
import B2cOverviewSection from "../../components/sections/solutions/b2c/B2cOverviewSection";
import B2cCoreTechnologySection from "../../components/sections/solutions/b2c/B2cCoreTechnologySection";
import B2cWhyChooseSection from "../../components/sections/solutions/b2c/B2cWhyChooseSection";
import B2cDeploymentSection from "../../components/sections/solutions/b2c/B2cDeploymentSection";
import B2cCallToActionSection from "../../components/sections/solutions/b2c/B2cCallToActionSection";

export const metadata = {
    title: "Solutions — B2C | AlgaeTree",
    description:
        "B2C climate solutions from AlgaeTree™ that bring microalgae powered clean air, carbon capture, and real-time environmental insight to everyday spaces.",
};

export default function B2cSolutionsPage() {
    return (
        <div className="flex w-full flex-col bg-white">
            <Header />
            <main>
                <B2cHeroSection />
                <B2cOverviewSection />
                <B2cCoreTechnologySection />
                <B2cWhyChooseSection />
                <B2cDeploymentSection />
                <B2cCallToActionSection />
            </main>
            <Footer />
        </div>
    );
}