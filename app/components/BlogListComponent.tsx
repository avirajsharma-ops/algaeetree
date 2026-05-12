"use client";

import { useState, useEffect } from "react";
import { ref, onValue, query, orderByChild } from "firebase/database";
import { database } from "@/lib/firebase";
import { motion } from "motion/react";

interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    author: string;
    publishedAt: number;
    status: "draft" | "published";
}

export function BlogListComponent() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        try {
            const blogsRef = ref(database, "blogs");
            const unsubscribe = onValue(blogsRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    // Filter only published blogs and sort by date
                    const publishedBlogs = Object.entries(data)
                        .filter(([, blog]: any) => blog.status === "published")
                        .map(([id, blog]: any) => ({
                            id,
                            ...blog,
                        }))
                        .sort((a: any, b: any) => b.publishedAt - a.publishedAt);

                    setBlogs(publishedBlogs);
                }
                setIsLoading(false);
            });

            return () => unsubscribe();
        } catch (err) {
            console.error("Error loading blogs:", err);
            setError("Failed to load blogs");
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2d5a27]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
                {error}
            </div>
        );
    }

    if (blogs.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-[#7f7f7f] font-nimbus">No blog posts published yet.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
                <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                    {/* Blog Image */}
                    {blog.image && (
                        <div className="relative h-48 overflow-hidden bg-[#f5f5f5]">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col h-full">
                        <div>
                            <h3 className="text-lg font-bold text-[#2d5a27] font-space-grotesk mb-2 line-clamp-2">
                                {blog.title}
                            </h3>

                            <p className="text-sm text-[#7f7f7f] font-nimbus mb-4 line-clamp-3">
                                {blog.excerpt}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-[#e0e0e0] pt-4 mt-auto">
                            <div className="flex justify-between items-center text-xs text-[#9b9b9b] font-nimbus mb-4">
                                <span>{blog.author}</span>
                                <span>
                                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>

                            <a
                                href={`/blog/${blog.slug}`}
                                className="inline-block px-4 py-2 bg-[#2d5a27] text-white text-sm font-medium rounded-lg hover:bg-[#1b5e20] transition-colors"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default BlogListComponent;
