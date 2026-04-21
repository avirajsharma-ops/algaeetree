import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHeroSection from "../components/sections/contact/ContactHeroSection";
import SocialHandlesSection from "../components/sections/contact/SocialHandlesSection";

export const metadata = {
    title: "Contact Us — AlgaeTree",
    description:
        "Start a conversation with AlgaeTree about partnerships, pilots, and clean-air infrastructure projects.",
};

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