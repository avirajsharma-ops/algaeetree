"use client";

import Image from "next/image";
import { useState } from "react";

type Feature = {
    title: string;
    subtitle?: string;
    bodyTop: string;
    bodyBottom?: string;
    backgroundSrc?: string;
    backgroundPosition?: string;
    overlayColor?: string;
};

const FEATURES: Feature[] = [
    {
        title: "Hybrid Renewable",
        subtitle: "Power Deck",
        bodyTop: "Solar integration for continuous,",
        bodyBottom: "autonomous operation in any environment.",
        backgroundSrc: "/figma/bloom-micro-algae.png",
        backgroundPosition: "center top",
        overlayColor: "rgba(6, 19, 0, 0.18)",
    },
    {
        title: "Core Bio-Reactor",
        bodyTop: "The heart of Algaetree™- a living engine where",
        bodyBottom: "microalgae rapidly convert CO₂ into pure oxygen.",
    },
    {
        title: "OptiLight",
        subtitle: "Photonic Shell",
        bodyTop: "High-transparency structure engineered to maximise",
        bodyBottom: "sunlight capture and optimise photosynthetic output.",
    },
    {
        title: "Closed-Loop",
        subtitle: "Biofluid System",
        bodyTop: "A self-recycling nutrient and water circuit that",
        bodyBottom: "sustains algae growth with near-zero waste.",
    },
    {
        title: "NeuroControl",
        subtitle: "AI Hub",
        bodyTop: "An adaptive intelligence module that monitors",
        bodyBottom: "conditions and fine-tunes performance in real time.",
    },
    {
        title: "EnviroSense",
        subtitle: "Data Grid",
        bodyTop: "A sensor network that measures air quality, temperature, humidity, and operational metrics with scientific accuracy.",
    },
    {
        title: "Atmospheric Intake",
        subtitle: "& Purification System",
        bodyTop: "Precision air channels that capture and filter",
        bodyBottom: "pollutants before they reach the bio-reactor.",
    },
    {
        title: "IoT Connectivity Hub",
        bodyTop: "Enables remote monitoring and control of Algaetree™",
        bodyBottom: "via real-time data, and diagnostics from any location.",
    },
];

function ArrowButton({
    direction,
    onClick,
}: {
    direction: "left" | "right";
    onClick: () => void;
}) {
    const iconSrc = direction === "left" ? "/figma/arrow-left-1.svg" : "/figma/arrow-right.svg";

    return (
        <button
            onClick={onClick}
            aria-label={direction === "left" ? "Previous" : "Next"}
            className="relative block size-10 overflow-hidden rounded-[4px] border border-white bg-[#2d5a27]"
        >
            <Image
                src="/figma/arrow-bg.png"
                alt=""
                fill
                sizes="40px"
                className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <img src={iconSrc} alt="" className="block size-6 max-w-none" />
            </div>
        </button>
    );
}

export default function FeatureShowcaseSection() {
    const [index, setIndex] = useState(0);
    const total = FEATURES.length;
    const current = FEATURES[index];
    const backgroundSrc = current.backgroundSrc ?? "/figma/bloom-micro-algae.png";
    const backgroundPosition = current.backgroundPosition ?? "center center";
    const overlayColor = current.overlayColor ?? "rgba(0, 0, 0, 0.6)";

    const prev = () => setIndex((i) => (i - 1 + total) % total);
    const next = () => setIndex((i) => (i + 1) % total);

    return (
        <section className="relative w-full overflow-hidden bg-[#193100]">
            <div className="relative h-[875px] w-full lg:h-[1136px]">
                <div className="absolute inset-0 lg:hidden">
                    <div className="absolute left-[-532px] top-0 h-[843px] w-[1504px]">
                        <img src={backgroundSrc} alt="" className="block size-full max-w-none object-cover" />
                    </div>
                    <div className="absolute inset-x-0 top-0 h-[843px] bg-black/56" />

                    <div className="relative flex h-full flex-col items-center gap-6 px-4 py-6">
                        <div className="relative h-[539px] w-full max-w-[408px] overflow-hidden rounded-[24px] bg-[#f3f4f6]">
                            <img
                                src="/figma/slider-product.png"
                                alt={current.title}
                                className="absolute max-w-none object-cover"
                                style={{ left: "48.5%", top: "52.4%", width: "221.4%", height: "104.7%", transform: "translate(-50%, -50%)" }}
                            />
                        </div>

                        <div className="flex w-full max-w-[408px] items-center gap-2">
                            <ArrowButton direction="left" onClick={prev} />
                            <ArrowButton direction="right" onClick={next} />
                        </div>

                        <div className="relative h-[6px] w-[calc(100%+32px)] overflow-hidden">
                            <div className="absolute left-0 right-0 top-1/2 h-0 border-t border-dashed border-white/90 -translate-y-1/2" />
                            <div className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#9fe884]" style={{ width: `${((index + 1) / total) * 100}%` }} />
                        </div>

                        <div className="min-h-[138px] w-full max-w-[408px] text-left text-white">
                            <div className="font-nimbus text-[clamp(34px,10vw,40px)] font-bold leading-[1]">
                                <p>{current.title}</p>
                                {current.subtitle && <p>{current.subtitle}</p>}
                            </div>
                            <div className="mt-2 font-nimbus text-[14px] leading-normal">
                                <p>{current.bodyTop}</p>
                                {current.bodyBottom && <p>{current.bodyBottom}</p>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 hidden lg:block">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${backgroundSrc})`,
                            backgroundPosition,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />

                    <div className="absolute left-[122px] top-0 flex h-[1136px] w-0 items-center justify-center">
                        <div className="-rotate-90">
                            <div className="relative h-0 w-[1136px]">
                                <div className="absolute inset-[-2px_0_0_0]">
                                    <img src="/figma/line1.svg" alt="" className="block size-full max-w-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-[117px] top-[80px] h-[80px] w-[8px] rounded-[8px] bg-white" />

                    <div className="absolute left-[calc(50%+376px)] top-1/2 size-[736px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[13.6px] bg-white">
                        <div className="absolute left-[-223px] top-0 h-[736px] w-[1177.6px]">
                            <Image
                                src="/figma/slider-product.png"
                                alt={current.title}
                                fill
                                sizes="1177px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="absolute left-[189px] top-1/2 h-[200px] w-[659px] -translate-y-1/2 overflow-hidden">
                        <div className="absolute left-0 top-0 flex w-[678px] flex-col items-start gap-[56px] text-left text-white">
                            <div className="flex w-full flex-col items-start justify-center gap-4">
                                <div className="font-nimbus flex flex-col justify-center text-[56px] font-bold text-white">
                                    <p className="leading-[64px]">{current.title}</p>
                                    {current.subtitle && <p className="leading-[64px]">{current.subtitle}</p>}
                                </div>
                                <div className="font-nimbus flex min-w-full flex-col justify-center text-[24px] text-white">
                                    <p className={`leading-[28px] ${current.bodyBottom ? "mb-0" : ""}`}>{current.bodyTop}</p>
                                    {current.bodyBottom && <p className="leading-[28px]">{current.bodyBottom}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-[189px] top-[748px] flex items-center gap-4">
                        <ArrowButton direction="left" onClick={prev} />
                        <ArrowButton direction="right" onClick={next} />
                    </div>
                </div>
            </div>
        </section>
    );
}
