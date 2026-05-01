import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHeroSection from "../components/sections/contact/ContactHeroSection";
import SocialHandlesSection from "../components/sections/contact/SocialHandlesSection";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Contact",
    description:
        "Get in touch with AlgaeTree for partnerships, pilot deployments, media, and clean-air infrastructure collaboration.",
    path: "/contact",
    keywords: ["contact AlgaeTree", "clean air partnerships", "climate tech pilots"],
});

export default function ContactPage() {
    return (
        <div className="flex w-full flex-col bg-white">
            <Header />
            <main>
                <ContactHeroSection />
                <SocialHandlesSection />
            </main>
            <Footer />
        </div>
    );
}