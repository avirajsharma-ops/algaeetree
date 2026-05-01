import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsEventsSection from "../components/sections/news/NewsEventsSection";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "News and Events",
    description:
        "Explore the latest AlgaeTree announcements, media coverage, milestones, and event participation updates.",
    path: "/news-events",
    keywords: ["AlgaeTree news", "climate events", "company updates"],
});

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