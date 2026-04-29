import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsEventsSection from "../components/sections/news/NewsEventsSection";

export const metadata = {
    title: "News & Events — AlgaeTree",
    description:
        "Latest AlgaeTree news, media coverage, milestones, and event highlights.",
};

export default function NewsEventsPage() {
    return (
        <div className="font-nimbus flex w-full flex-col bg-white">
            <Header />
            <main>
                <NewsEventsSection />
            </main>
            <Footer />
        </div>
    );
}