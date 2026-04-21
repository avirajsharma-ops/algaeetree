import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamHeroSection from "../components/sections/team/TeamHeroSection";
import TeamGridSection from "../components/sections/team/TeamGridSection";
import TeamInspirationSection from "../components/sections/team/TeamInspirationSection";

export const metadata = {
    title: "Team — AlgaeTree",
    description:
        "Meet the multidisciplinary founders, researchers, engineers, and makers behind AlgaeTree.",
};

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