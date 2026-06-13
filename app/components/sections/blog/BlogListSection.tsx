"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { BlogItem } from "./types";

function buildSummary(blog: BlogItem) {
    if (blog.contentSections && blog.contentSections.length > 0) {
        const firstParagraph = blog.contentSections
            .map((section) => section.paragraph?.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim() ?? "")
            .find(Boolean);
        if (firstParagraph) return firstParagraph;
    }

    const lines = (blog.content ?? "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .filter((line) => !line.startsWith("H1:") && !line.startsWith("H2:") && !line.startsWith("H3:"));

    const first = lines[0] ?? "";
    return first || "Open the article to read full details.";
}

export default function BlogListSection() {
    const [blogs, setBlogs] = useState<BlogItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let mounted = true;

        const load = async () => {
            try {
                const response = await fetch("/api/blogs");
                const result = await response.json();
                if (!response.ok) {
                    throw new Error(result?.error ?? "Failed to load blogs");
                }

                if (!mounted) return;
                setBlogs((result?.items as BlogItem[]) ?? []);
            } catch (err) {
                if (!mounted) return;
                const message = err instanceof Error ? err.message : "Failed to load blogs";
                setError(message);
            } finally {
                if (mounted) setIsLoading(false);
            }
        };

        load();
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <section className="page-px w-full bg-[#f4f4f4] py-8 sm:py-12 lg:py-14">
            <div className="w-full">
                <article className="relative aspect-816/1704 w-full overflow-hidden rounded-2xl border border-[#d7dee7] bg-[#d9d9d9] sm:aspect-4/3 sm:rounded-[20px] lg:aspect-2976/1616 lg:rounded-[40px] mb-8">
                    <Image
                        src="/figma/news/news-hero-mobile.webp"
                        alt="Latest updates mobile"
                        fill
                        priority
                        sizes="(max-width: 639px) calc(100vw - 32px), 0px"
                        className="object-cover object-center sm:hidden"
                    />
                    <Image
                        src="/figma/news/news-hero-desktop.webp"
                        alt="Latest updates"
                        fill
                        priority
                        sizes="(min-width: 1728px) 1488px, (min-width: 1280px) calc(100vw - 240px), (min-width: 640px) calc(100vw - 48px), 0px"
                        className="hidden object-cover object-center sm:block"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#07111bea] via-[#09131ea6] to-transparent sm:bg-linear-to-r sm:from-[#09131ee8] sm:via-[#09131e91] sm:to-transparent" />
                    <div className="absolute inset-y-0 left-0 flex max-w-105 items-end px-4 pb-6 sm:inset-0 sm:max-w-135 sm:items-center sm:px-12 sm:pb-0 lg:left-[clamp(24px,5vw,106px)] lg:max-w-[min(68vw,564px)] lg:px-0">
                        <div className="flex items-start gap-4 lg:gap-5">
                            <span className="mt-1 block h-14 w-0.75 rounded-full bg-white/90 sm:h-16 lg:h-32.5" />
                            <div>
                                <h1 className="font-nimbus text-[24px] font-medium leading-7 uppercase text-white sm:text-[36px] sm:leading-10 lg:text-[40px] lg:leading-11">
                                    Latest Updates
                                </h1>
                                <p className="mt-2 font-nimbus text-[12px] leading-4.5 text-white/82 sm:mt-3 sm:text-[14px] sm:leading-5.5 lg:text-[16px] lg:leading-6">
                                    Stay updated with the latest breakthroughs in microalgae-powered carbon capture, clean air innovation, and real-world deployments transforming urban environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>

                {error && (
                    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                        {error}
                    </div>
                )}

                {isLoading ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white">
                                <div className="h-56 animate-pulse bg-[#dddddd]" />
                                <div className="space-y-3 p-5">
                                    <div className="h-4 w-3/5 animate-pulse rounded bg-[#e5e5e5]" />
                                    <div className="h-5 w-5/6 animate-pulse rounded bg-[#ececec]" />
                                    <div className="h-4 w-full animate-pulse rounded bg-[#efefef]" />
                                    <div className="h-4 w-4/5 animate-pulse rounded bg-[#efefef]" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="rounded-2xl border border-[#e3e3e3] bg-white px-6 py-16 text-center">
                        <p className="font-nimbus text-[#555]">No published blogs yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <article key={blog.id} className="overflow-hidden rounded-2xl border border-[#e4e4e4] bg-white shadow-sm transition-shadow hover:shadow-md">
                                <Link href={`/blog/${blog.id}`} className="block">
                                    <div className="relative h-56 bg-[#e5e5e5]">
                                        {(blog.heroMediaType ?? blog.mediaType) === "video" ? (
                                            <video
                                                className="h-full w-full object-cover"
                                                preload="metadata"
                                                muted
                                                playsInline
                                            >
                                                <source src={blog.heroMediaUrl ?? blog.mediaUrl} />
                                            </video>
                                        ) : (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={blog.heroMediaUrl ?? blog.mediaUrl} alt={blog.title} className="h-full w-full object-cover" />
                                        )}

                                        <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 font-space-grotesk text-[11px] font-semibold uppercase tracking-[0.8px] text-[#085c5b]">
                                            Blog #{blog.id}
                                        </span>
                                    </div>
                                </Link>

                                <div className="space-y-3 p-5">
                                    <div className="flex flex-wrap items-center gap-2 font-nimbus text-xs text-[#8a8a8a]">
                                        <span>{new Date(blog.createdAt).toLocaleDateString("en-IN")}</span>
                                        <span>•</span>
                                        <span>{blog.readMinutes} min read</span>
                                    </div>
                                    <h2 className="line-clamp-2 font-space-grotesk text-[34px] leading-10 font-bold text-[#191919]">
                                        {blog.title}
                                    </h2>
                                    <p className="line-clamp-2 font-nimbus text-[15px] leading-7 text-[#6f6f6f]">{buildSummary(blog)}</p>
                                    <Link href={`/blog/${blog.id}`} className="inline-flex items-center gap-2 font-space-grotesk text-sm font-semibold text-[#065c5b]">
                                        Read more
                                        <span aria-hidden>→</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
