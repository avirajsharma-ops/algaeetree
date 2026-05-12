"use client";

import { useState, useEffect, useRef } from "react";
import { ref, set, onValue, remove, push } from "firebase/database";
import { database } from "@/lib/firebase";

interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    mediaType?: "image" | "video";
    author: string;
    publishedAt: number;
    status: "draft" | "published";
}

interface BlogFormData {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    mediaType: "image" | "video";
    author: string;
    status: "draft" | "published";
}

export function BlogsSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
    const [error, setError] = useState("");
    const [mediaType, setMediaType] = useState<"image" | "video">("image");
    const [mediaPreview, setMediaPreview] = useState<string>("");
    const [isUploadingMedia, setIsUploadingMedia] = useState(false);
    const mediaFileRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<BlogFormData>({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        image: "",
        mediaType: "image",
        author: "",
        status: "draft",
    });

    useEffect(() => {
        const blogsRef = ref(database, "blogs");
        const unsubscribe = onValue(blogsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list: Blog[] = Object.entries(data).map(([id, val]) => ({
                    id,
                    ...(val as Omit<Blog, "id">),
                }));
                list.sort((a, b) => b.publishedAt - a.publishedAt);
                setBlogs(list);
            } else {
                setBlogs([]);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const inferMediaTypeFromUrl = (value: string): "image" | "video" => {
        const lower = value.toLowerCase();
        if (
            lower.startsWith("data:video") ||
            lower.includes(".mp4") ||
            lower.includes(".webm") ||
            lower.includes(".mov") ||
            lower.includes(".ogv") ||
            lower.includes(".m4v")
        ) {
            return "video";
        }
        return "image";
    };

    const handleMediaFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setError("");
        setIsUploadingMedia(true);
        try {
            const uploadData = new FormData();
            uploadData.append("file", file);
            uploadData.append("mediaType", mediaType);

            const response = await fetch("/api/admin/upload-media", {
                method: "POST",
                body: uploadData,
            });
            const result = await response.json();

            if (!response.ok) {
                setError(result?.error ?? "Media upload failed");
                return;
            }

            const uploadedUrl = result?.url as string;
            setMediaPreview(uploadedUrl);
            setFormData((prev) => ({ ...prev, image: uploadedUrl, mediaType }));
        } catch {
            setError("Media upload failed");
        } finally {
            setIsUploadingMedia(false);
        }
    };

    const resetMedia = () => {
        setMediaPreview("");
        setMediaType("image");
        setFormData((prev) => ({ ...prev, image: "", mediaType: "image" }));
        if (mediaFileRef.current) mediaFileRef.current.value = "";
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddBlog = async () => {
        if (!formData.title || !formData.slug || !formData.content) {
            setError("Please fill in all required fields");
            return;
        }
        if (isUploadingMedia) {
            setError("Please wait for media upload to finish");
            return;
        }
        setError("");

        try {
            const blogData = {
                ...formData,
                publishedAt: editingBlog ? editingBlog.publishedAt : Date.now(),
            };

            if (editingBlog) {
                await set(ref(database, `blogs/${editingBlog.id}`), blogData);
            } else {
                await push(ref(database, "blogs"), blogData);
            }

            setFormData({
                title: "",
                slug: "",
                excerpt: "",
                content: "",
                image: "",
                mediaType: "image",
                author: "",
                status: "draft",
            });
            resetMedia();
            setIsFormOpen(false);
            setEditingBlog(null);
        } catch {
            setError("Failed to save blog. Please try again.");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this blog post?")) return;
        await remove(ref(database, `blogs/${id}`));
    };

    const handleEdit = (blog: Blog) => {
        setEditingBlog(blog);
        setFormData({
            title: blog.title,
            slug: blog.slug,
            excerpt: blog.excerpt,
            content: blog.content,
            image: blog.image,
            mediaType: blog.mediaType ?? inferMediaTypeFromUrl(blog.image),
            author: blog.author,
            status: blog.status,
        });
        if (blog.image) {
            setMediaPreview(blog.image);
            setMediaType(blog.mediaType ?? inferMediaTypeFromUrl(blog.image));
        } else {
            setMediaPreview("");
            setMediaType("image");
        }
        setIsFormOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-[#2d5a27] font-space-grotesk">Blog Posts</h2>
                    <p className="text-[#7f7f7f] font-nimbus text-sm mt-1">Manage your blog content</p>
                </div>

                <button
                    onClick={() => {
                        setEditingBlog(null);
                        setFormData({
                            title: "",
                            slug: "",
                            excerpt: "",
                            content: "",
                            image: "",
                            mediaType: "image",
                            author: "",
                            status: "draft",
                        });
                        resetMedia();
                        setIsFormOpen(!isFormOpen);
                    }}
                    className="px-6 py-2 bg-[#2d5a27] text-white rounded-lg font-nimbus font-medium hover:bg-[#1b5e20] transition-colors"
                >
                    {isFormOpen ? "Cancel" : "+ Add Blog"}
                </button>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg font-nimbus">
                    {error}
                </div>
            )}

            {/* Form */}
            {isFormOpen && (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e0e0e0] space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-[#2d5a27] font-nimbus mb-2">
                                Title *
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Blog title"
                                className="w-full px-4 py-2 rounded-lg border border-[#cfcfcf] focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#2d5a27] font-nimbus mb-2">
                                Slug *
                            </label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                placeholder="blog-post-slug"
                                className="w-full px-4 py-2 rounded-lg border border-[#cfcfcf] focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-[#2d5a27] font-nimbus mb-2">Author</label>
                            <input
                                type="text"
                                name="author"
                                value={formData.author}
                                onChange={handleInputChange}
                                placeholder="Author name"
                                className="w-full px-4 py-2 rounded-lg border border-[#cfcfcf] focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#2d5a27] font-nimbus mb-2">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-lg border border-[#cfcfcf] focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent"
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#2d5a27] font-nimbus mb-2">Excerpt</label>
                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleInputChange}
                            placeholder="Brief summary of the blog post"
                            rows={2}
                            className="w-full px-4 py-2 rounded-lg border border-[#cfcfcf] focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent resize-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#2d5a27] font-nimbus mb-2">
                            Content *
                        </label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            placeholder="Full blog content"
                            rows={8}
                            className="w-full px-4 py-2 rounded-lg border border-[#cfcfcf] focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent resize-none font-mono text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#2d5a27] font-nimbus mb-2">
                            Featured Media
                        </label>

                        {/* Media type dropdown */}
                        <div className="flex items-center gap-3 mb-3">
                            <select
                                value={mediaType}
                                onChange={(e) => {
                                    const selectedType = e.target.value as "image" | "video";
                                    setMediaType(selectedType);
                                    setMediaPreview("");
                                    setFormData((prev) => ({ ...prev, image: "", mediaType: selectedType }));
                                    if (mediaFileRef.current) mediaFileRef.current.value = "";
                                }}
                                className="px-4 py-2 rounded-lg border border-[#cfcfcf] focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent font-nimbus text-sm"
                            >
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                            </select>

                            <input
                                ref={mediaFileRef}
                                type="file"
                                accept={mediaType === "image" ? "image/*" : "video/*"}
                                onChange={handleMediaFile}
                                className="hidden"
                                id="blog-media-input"
                            />
                            <label
                                htmlFor="blog-media-input"
                                className="cursor-pointer px-4 py-2 bg-[#2d5a27] text-white rounded-lg font-nimbus text-sm hover:bg-[#1b5e20] transition-colors"
                            >
                                {isUploadingMedia
                                    ? "Uploading..."
                                    : `Choose ${mediaType === "image" ? "Image" : "Video"}`}
                            </label>

                            {mediaPreview && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setMediaPreview("");
                                        setFormData((prev) => ({ ...prev, image: "" }));
                                        if (mediaFileRef.current) mediaFileRef.current.value = "";
                                    }}
                                    className="px-3 py-2 text-red-600 border border-red-200 rounded-lg font-nimbus text-sm hover:bg-red-50 transition-colors"
                                >
                                    Remove
                                </button>
                            )}
                        </div>

                        {/* Preview */}
                        {mediaPreview ? (
                            <div className="rounded-lg overflow-hidden border border-[#e0e0e0] bg-[#f5f5f5]">
                                {mediaType === "image" ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={mediaPreview}
                                        alt="Preview"
                                        className="w-full max-h-[280px] object-contain"
                                    />
                                ) : (
                                    <video
                                        src={mediaPreview}
                                        controls
                                        className="w-full max-h-[280px] object-contain"
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-[100px] rounded-lg border-2 border-dashed border-[#e0e0e0] bg-[#fafafa]">
                                <p className="text-sm text-[#b0b0b0] font-nimbus">
                                    No {mediaType} selected
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            onClick={handleAddBlog}
                            disabled={isUploadingMedia}
                            className="flex-1 px-6 py-2 bg-[#2d5a27] text-white rounded-lg font-nimbus font-medium hover:bg-[#1b5e20] transition-colors"
                        >
                            {isUploadingMedia
                                ? "Uploading Media..."
                                : editingBlog
                                    ? "Update Blog"
                                    : "Create Blog"}
                        </button>
                        <button
                            onClick={() => { setIsFormOpen(false); resetMedia(); }}
                            className="flex-1 px-6 py-2 bg-[#f5f5f5] text-[#2d5a27] rounded-lg font-nimbus font-medium hover:bg-[#e0e0e0] transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Blogs List */}
            {blogs.length === 0 ? (
                <div className="bg-white rounded-lg p-12 text-center border border-[#e0e0e0]">
                    <p className="text-[#7f7f7f] font-nimbus mb-4">No blogs yet</p>
                    <p className="text-sm text-[#9b9b9b]">Create your first blog post to get started.</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-lg p-4 border border-[#e0e0e0] hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="font-bold text-[#2d5a27] font-space-grotesk">{blog.title}</h3>
                                    <p className="text-sm text-[#7f7f7f] font-nimbus mt-1">{blog.excerpt}</p>
                                    <div className="flex gap-2 mt-3">
                                        <span
                                            className={`text-xs px-3 py-1 rounded-full font-semibold ${blog.status === "published"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {blog.status}
                                        </span>
                                        <span className="text-xs text-[#7f7f7f] font-nimbus">By {blog.author}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(blog)}
                                        className="text-[#2d5a27] hover:bg-[#f5f5f5] px-3 py-1.5 rounded text-xs font-nimbus transition-colors border border-[#e0e0e0]"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(blog.id)}
                                        className="text-red-600 hover:bg-red-50 px-3 py-1.5 rounded text-xs font-nimbus transition-colors border border-red-100"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
