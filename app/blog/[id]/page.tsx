import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogDetailSection from "../../components/sections/blog/BlogDetailSection";

type BlogDetailPageProps = {
    params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
    title: "Blog Details",
    description: "Explore the complete article details from AlgaeTree blogs.",
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { id } = await params;

    return (
        <div className="font-nimbus flex w-full flex-col bg-white">
            <Header />
            <main>
                <BlogDetailSection blogId={id} />
            </main>
            <Footer />
        </div>
    );
}
