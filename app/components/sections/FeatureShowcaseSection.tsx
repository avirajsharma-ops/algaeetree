"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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
        backgroundSrc: "/figma/bloom-micro-algae.webp",
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

const FRAME_COUNT = 420;
const FRAME_DIR = "/Cylender Animation 420 frames";
const FRAME_BATCHES = [
    { start: 1, end: 105, prefix: 344 },
    { start: 106, end: 161, prefix: 345 },
    { start: 162, end: 242, prefix: 346 },
    { start: 243, end: 358, prefix: 348 },
    { start: 359, end: 420, prefix: 349 },
] as const;

function getFrameSrc(frameNumber: number) {
    const batch = FRAME_BATCHES.find(({ start, end }) => frameNumber >= start && frameNumber <= end);

    if (!batch) {
        return encodeURI(`${FRAME_DIR}/Cylender Animation.344.1.png`);
    }

    return encodeURI(`${FRAME_DIR}/Cylender Animation.${batch.prefix}.${frameNumber}.png`);
}

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

export default function FeatureShowcaseSection() {
    const [frameIndex, setFrameIndex] = useState(0);
    const [isDesktopViewport, setIsDesktopViewport] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const preloadedFramesRef = useRef<Set<number>>(new Set());
    const currentFrame = frameIndex + 1;
    const currentFeature = FEATURES[clamp(Math.floor(frameIndex / (FRAME_COUNT / FEATURES.length)), 0, FEATURES.length - 1)];
    const frameSrc = getFrameSrc(currentFrame);
    const backgroundSrc = currentFeature.backgroundSrc ?? "/figma/bloom-micro-algae.webp";
    const backgroundPosition = currentFeature.backgroundPosition ?? "center center";
    const overlayColor = currentFeature.overlayColor ?? "rgba(0, 0, 0, 0.58)";
    const scrollStep = isDesktopViewport ? 20 : 14;
    const progressRatio = FRAME_COUNT > 1 ? frameIndex / (FRAME_COUNT - 1) : 0;

    const updateScrollState = useCallback(() => {
        const section = sectionRef.current;
        const content = contentRef.current;

        if (!section || !content) {
            return;
        }

        const sectionTop = section.offsetTop;
        const currentScrollY = window.scrollY;

        // Section is visible if it enters viewport
        const animationScrollDistance = (FRAME_COUNT - 1) * scrollStep;
        const scrolledSinceSectionTop = currentScrollY - sectionTop;
        const progress = clamp(scrolledSinceSectionTop / animationScrollDistance, 0, 1);

        // Pin if we're within the animation scroll range (works both directions)
        const shouldPin = scrolledSinceSectionTop >= 0 && scrolledSinceSectionTop <= animationScrollDistance;

        setIsPinned(shouldPin);

        // Calculate frame index based on scroll progress (reversible)
        if (scrolledSinceSectionTop >= 0) {
            const nextFrame = clamp(Math.floor(progress * FRAME_COUNT), 0, FRAME_COUNT - 1);
            setFrameIndex(nextFrame);
        }
    }, [scrollStep]);

    const preloadFrame = useCallback((frameNumber: number) => {
        if (frameNumber < 1 || frameNumber > FRAME_COUNT || preloadedFramesRef.current.has(frameNumber)) {
            return;
        }

        preloadedFramesRef.current.add(frameNumber);
        const image = new window.Image();
        image.src = getFrameSrc(frameNumber);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const applyViewport = () => {
            setIsDesktopViewport(mediaQuery.matches);
        };

        applyViewport();
        mediaQuery.addEventListener("change", applyViewport);

        return () => {
            mediaQuery.removeEventListener("change", applyViewport);
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (rafRef.current !== null) {
                return;
            }

            rafRef.current = window.requestAnimationFrame(() => {
                rafRef.current = null;
                updateScrollState();
            });
        };

        updateScrollState();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);

            if (rafRef.current !== null) {
                window.cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, [updateScrollState]);

    useEffect(() => {
        updateScrollState();
    }, [isDesktopViewport, updateScrollState]);

    useEffect(() => {
        const preloadWindow = isDesktopViewport ? 8 : 5;

        for (let offset = -preloadWindow; offset <= preloadWindow; offset += 1) {
            preloadFrame(currentFrame + offset);
        }

        if (currentFrame <= preloadWindow + 1) {
            for (let frameNumber = 1; frameNumber <= Math.min(24, FRAME_COUNT); frameNumber += 1) {
                preloadFrame(frameNumber);
            }
        }
    }, [currentFrame, isDesktopViewport, preloadFrame]);

    // Calculate spacer height to maintain scroll distance
    const spacerHeight = (FRAME_COUNT - 1) * scrollStep;

    return (
        <section ref={sectionRef} className="relative w-full overflow-visible bg-[#071700]">
            <div
                ref={contentRef}
                className={`transition-[position] duration-300 ${isPinned ? "fixed inset-0 z-10 h-screen overflow-hidden" : "relative w-full"}`}
                style={isPinned ? {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100vh",
                    zIndex: 10,
                    overflow: "hidden",
                } : {
                    position: "relative",
                }}
            >
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(159,232,132,0.22),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(87,179,52,0.18),transparent_28%),linear-gradient(180deg,rgba(6,16,0,0.7)_0%,rgba(5,12,0,0.88)_100%)]" />

                <div className="page-px relative mx-auto flex h-full w-full max-w-372 flex-col-reverse items-stretch justify-center gap-6 py-6 lg:flex-row lg:items-center lg:gap-14 xl:gap-20 xl:py-10">
                    <div className="w-full max-w-160 text-left text-white lg:flex-1">
                        <h2 className="font-space-grotesk text-[44px] font-bold leading-[0.92] text-white">
                            <span
                                className="block"
                            >
                                {currentFeature.title}
                            </span>
                            {currentFeature.subtitle && (
                                <span className="mt-1 block text-[44px] leading-[0.92]">
                                    {currentFeature.subtitle}
                                </span>
                            )}
                        </h2>

                        <div className="mt-4 max-w-136 font-nimbus text-[15px] leading-[1.55] text-white/92 sm:text-[16px] lg:mt-6 lg:text-[24px] lg:leading-7">
                            <p className="max-w-none text-balance whitespace-normal">
                                {currentFeature.bodyTop}
                                {currentFeature.bodyBottom ? ` ${currentFeature.bodyBottom}` : ""}
                            </p>
                        </div>

                        <div className="mt-6 flex max-w-136 items-center gap-4 text-white/75 lg:mt-8">
                            <div className="h-px flex-1 bg-white/20">
                                <div className="h-px bg-[#9fe884] transition-[width] duration-75 ease-linear" style={{ width: `${progressRatio * 100}%` }} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:flex-[0_0_min(40vw,560px)]">
                        <div className="mx-auto w-full max-w-90 overflow-hidden rounded-[28px] border border-white/10 bg-[#f3f4f0] shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:max-w-100 lg:max-w-115">
                            <div className="relative aspect-4/5 w-full">
                                <Image
                                    src={frameSrc}
                                    alt={`Cylinder animation frame ${frameIndex + 1} of ${FRAME_COUNT}`}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 1023px) 100vw, 48vw"
                                    draggable={false}
                                    className="object-cover"
                                    style={{ transform: "scaleX(1.08)", transformOrigin: "center center" }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Spacer to maintain scroll distance and allow next section to appear */}
            <div style={{ height: `${spacerHeight}px` }} />
        </section>
    );
}
