"use client";

import { useState, useCallback, useEffect } from "react";

const FEATURES = [
    {
        title: "Solar Powered",
        description:
            "Runs on integrated solar energy, enabling clean and sustainable operation without constant external power.",
    },
    {
        title: "Biological Carbon Capture",
        description:
            "Living microalgae naturally absorb carbon dioxide and transform it into oxygen through photosynthesis.",
    },
    {
        title: "Smart Air Purification",
        description:
            "Multi-stage filtration reduces harmful airborne particles before air enters the system.",
    },
    {
        title: "Smart Environmental Monitoring",
        description:
            "Advanced sensors continuously monitor air quality, temperature, and surrounding conditions.",
    },
    {
        title: "AI-Driven System Control",
        description:
            "Adaptive algorithms optimize airflow, lighting, and nutrients for stable algae growth.",
    },
    {
        title: "Connected Monitoring Platform",
        description:
            "Cloud connectivity enables remote performance tracking and environmental insights.",
    },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden
            className={direction === "right" ? "rotate-180" : ""}
        >
            <circle cx="14" cy="14" r="13.5" stroke="#2d5a27" />
            <path
                d="M16 8L10 14L16 20"
                stroke="#2d5a27"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function MobileCarousel() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const next = useCallback(() => setIndex((i) => (i + 1) % FEATURES.length), []);
    const prev = useCallback(
        () => setIndex((i) => (i - 1 + FEATURES.length) % FEATURES.length),
        [],
    );

    // Auto-advance (pauses on hover / touch)
    useEffect(() => {
        if (paused) return;
        const id = window.setInterval(next, 4000);
        return () => window.clearInterval(id);
    }, [paused, next]);

    const card = FEATURES[index];

    const pause = () => setPaused(true);
    const resume = () => setPaused(false);

    return (
        <div
            className="flex w-full flex-col items-center gap-4"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={pause}
            onTouchEnd={resume}
        >
            <article className="flex h-[436px] w-full flex-col items-start gap-6 overflow-hidden rounded-[16px] bg-white px-4 pb-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="h-[256px] w-full bg-[#d9d9d9]" />
                <div className="flex w-full flex-col gap-2 text-black">
                    <h3 className="font-nimbus text-[24px] font-bold leading-tight">
                        {card.title}
                    </h3>
                    <p className="font-nimbus text-[16px] leading-[24px]">
                        {card.description}
                    </p>
                </div>
            </article>

            <div className="flex items-center gap-1.5">
                <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous feature"
                    className="size-7"
                >
                    <ArrowIcon direction="left" />
                </button>
                <div className="flex items-center gap-2.5 px-2">
                    {FEATURES.map((_, i) => {
                        const active = i === index;
                        return (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Go to feature ${i + 1}`}
                                onClick={() => setIndex(i)}
                                className="relative flex items-center justify-center"
                            >
                                <span
                                    className={`block rounded-full ${active
                                        ? "size-[11px] bg-[#2d5a27]"
                                        : "size-[8px] border border-[#2d5a27]/60 bg-transparent"
                                        }`}
                                />
                            </button>
                        );
                    })}
                </div>
                <button
                    type="button"
                    onClick={next}
                    aria-label="Next feature"
                    className="size-7"
                >
                    <ArrowIcon direction="right" />
                </button>
            </div>
        </div>
    );
}

export default function FeaturesGridSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-8 lg:py-[60px]">
                <h2 className="font-nevera text-center text-[28px] leading-[1.1] text-black lg:text-left lg:text-[56px] lg:leading-[64px]">
                    Features
                </h2>

                {/* Mobile / tablet: carousel */}
                <div className="mt-4 lg:hidden">
                    <MobileCarousel />
                </div>

                {/* Desktop: 3x2 grid */}
                <div className="mt-12 hidden grid-cols-3 gap-8 lg:grid">
                    {FEATURES.map((feature) => (
                        <article
                            key={feature.title}
                            className="flex flex-col items-center gap-10 overflow-hidden rounded-[16px] bg-[#f3f4f6] px-8 pb-10"
                        >
                            <div className="h-[280px] w-full rounded-[16px] bg-[#d9d9d9]" />
                            <div className="flex w-full flex-col gap-2">
                                <h3 className="font-nimbus text-[26px] font-bold leading-[34px] text-black">
                                    {feature.title}
                                </h3>
                                <p className="font-nimbus text-[22px] leading-[30px] text-black">
                                    {feature.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
