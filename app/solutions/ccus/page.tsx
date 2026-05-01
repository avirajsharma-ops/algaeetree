import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CcusHeroSection from "../../components/sections/technology/CcusHeroSection";
import CcusOverviewSection from "../../components/sections/technology/CcusOverviewSection";
import CcusDifferentiatorsSection from "../../components/sections/technology/CcusDifferentiatorsSection";
import CcusApplicationsSection from "../../components/sections/technology/CcusApplicationsSection";
import CcusImpactSection from "../../components/sections/technology/CcusImpactSection";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Solutions CCUS",
    description:
        "Explore AlgaeTree CCUS solutions for distributed urban carbon capture, oxygen generation, and advanced environmental monitoring.",
    path: "/solutions/ccus",
    keywords: ["CCUS solutions", "distributed carbon capture", "urban climate infrastructure"],
});

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