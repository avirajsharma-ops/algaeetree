import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogListSection from "../components/sections/blog/BlogListSection";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Blog",
    description: "Read the latest insights, stories, and climate-tech updates from AlgaeTree.",
    path: "/blog",
    keywords: ["AlgaeTree blog", "sustainability stories", "clean air insights"],
});

export default function BlogPage() {
    return (
        <div className="font-nimbus flex w-full flex-col bg-white">
            <Header />
            <main>
                <BlogListSection />
            </main>
            <Footer />
        </div>
    );
}
