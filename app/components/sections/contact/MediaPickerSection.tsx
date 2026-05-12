"use client";

import { useRef, useState } from "react";

type MediaType = "image" | "video";

export default function MediaPickerSection() {
    const [mediaType, setMediaType] = useState<MediaType>("image");
    const [mediaUrl, setMediaUrl] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        if (mediaUrl) URL.revokeObjectURL(mediaUrl);
        setMediaUrl(URL.createObjectURL(file));
        setFileName(file.name);
    }

    function handleTypeSwitch(type: MediaType) {
        setMediaType(type);
        setMediaUrl(null);
        setFileName("");
        if (inputRef.current) inputRef.current.value = "";
    }

    return (
        <section className="w-full bg-white">
            <div className="page-px py-6 lg:py-10">
                <div className="mx-auto w-full max-w-372">
                    <h2 className="font-space-grotesk text-[28px] font-bold text-[#2d5a27] sm:text-[34px]">
                        Upload Media
                    </h2>
                    <p className="mt-2 font-nimbus text-[16px] text-[#7f7f7f]">
                        Select an image or video from your device to display here.
                    </p>

                    {/* Type toggle */}
                    <div className="mt-6 inline-flex rounded-xl border border-[#e0e0e0] bg-[#f5f5f5] p-1">
                        <button
                            onClick={() => handleTypeSwitch("image")}
                            className={`rounded-lg px-5 py-2 font-nimbus text-sm font-medium transition-colors ${mediaType === "image"
                                    ? "bg-[#2d5a27] text-white shadow"
                                    : "text-[#7f7f7f] hover:text-[#2d5a27]"
                                }`}
                        >
                            Image
                        </button>
                        <button
                            onClick={() => handleTypeSwitch("video")}
                            className={`rounded-lg px-5 py-2 font-nimbus text-sm font-medium transition-colors ${mediaType === "video"
                                    ? "bg-[#2d5a27] text-white shadow"
                                    : "text-[#7f7f7f] hover:text-[#2d5a27]"
                                }`}
                        >
                            Video
                        </button>
                    </div>

                    {/* File input */}
                    <div className="mt-5 flex items-center gap-4">
                        <input
                            ref={inputRef}
                            type="file"
                            accept={mediaType === "image" ? "image/*" : "video/*"}
                            onChange={handleFileChange}
                            className="hidden"
                            id="media-file-input"
                        />
                        <label
                            htmlFor="media-file-input"
                            className="cursor-pointer rounded-xl bg-[#2d5a27] px-6 py-3 font-nimbus text-sm font-medium text-white transition-opacity hover:opacity-90"
                        >
                            Choose {mediaType === "image" ? "Image" : "Video"}
                        </label>
                        {fileName && (
                            <span className="font-nimbus text-sm text-[#7f7f7f] truncate max-w-[240px]">
                                {fileName}
                            </span>
                        )}
                    </div>

                    {/* Preview */}
                    {mediaUrl && (
                        <div className="mt-8 overflow-hidden rounded-[24px] border border-[#e0e0e0] bg-[#f5f5f5]">
                            {mediaType === "image" ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={mediaUrl}
                                    alt={fileName}
                                    className="w-full max-h-[560px] object-contain"
                                />
                            ) : (
                                <video
                                    src={mediaUrl}
                                    controls
                                    className="w-full max-h-[560px] object-contain"
                                />
                            )}
                        </div>
                    )}

                    {/* Empty state */}
                    {!mediaUrl && (
                        <div className="mt-8 flex min-h-[240px] items-center justify-center rounded-[24px] border-2 border-dashed border-[#e0e0e0] bg-[#f9f9f9]">
                            <p className="font-nimbus text-sm text-[#b0b0b0]">
                                Your selected {mediaType} will appear here
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
