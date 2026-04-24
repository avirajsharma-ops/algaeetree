import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/sections/about/AboutHero";
import StoryHeaderSection from "../components/sections/about/StoryHeaderSection";
import VisionSection from "../components/sections/about/VisionSection";
import MissionSection from "../components/sections/about/MissionSection";
import AlignmentSection from "../components/sections/about/AlignmentSection";
import InsideAlgaetreeSection from "../components/sections/about/InsideAlgaetreeSection";
import GallerySection from "../components/sections/about/GallerySection";

export const metadata = {
    title: "About Us — AlgaeTree",
    description:
        "AlgaeTree™ — a self-sustaining microalgae-based carbon capture system designed to clean urban air and accelerate India's climate goals.",
};

export default function AboutPage() {
    return (
        <div className="flex w-full flex-col bg-white">
            <Header />
            <main>
                <AboutHero />
                <StoryHeaderSection />
                <VisionSection />
                <MissionSection />
                <AlignmentSection />
                <InsideAlgaetreeSection />
                <GallerySection />
            </main>
            <Footer />
        </div>
    );
}
