import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamHeroSection from "../components/sections/team/TeamHeroSection";
import TeamGridSection from "../components/sections/team/TeamGridSection";
import TeamInspirationSection from "../components/sections/team/TeamInspirationSection";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Team",
    description:
        "Meet the multidisciplinary founders, researchers, engineers, and operators building AlgaeTree climate technology.",
    path: "/team",
    keywords: ["AlgaeTree team", "founders", "climate scientists"],
});

export default function TeamPage() {
    return (
        <div className="flex w-full flex-col bg-white">
            <Header />
            <main>
                <TeamHeroSection />
                <TeamGridSection />
                <TeamInspirationSection />
            </main>
            <Footer />
        </div>
    );
}