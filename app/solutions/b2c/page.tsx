import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import B2cHeroSection from "../../components/sections/solutions/b2c/B2cHeroSection";
import B2cOverviewSection from "../../components/sections/solutions/b2c/B2cOverviewSection";
import B2cCoreTechnologySection from "../../components/sections/solutions/b2c/B2cCoreTechnologySection";
import B2cWhyChooseSection from "../../components/sections/solutions/b2c/B2cWhyChooseSection";
import B2cDeploymentSection from "../../components/sections/solutions/b2c/B2cDeploymentSection";
import B2cCallToActionSection from "../../components/sections/solutions/b2c/B2cCallToActionSection";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Solutions B2C",
    description:
        "Discover AlgaeTree B2C solutions that deliver cleaner air, carbon capture, and measurable environmental impact for everyday spaces.",
    path: "/solutions/b2c",
    keywords: ["B2C clean air", "home air innovation", "consumer climate solutions"],
});

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