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

const SLIDE_INTERVAL_MS = 3500;

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
            className="relative block size-10 overflow-hidden rounded-sm border border-white bg-[#2d5a27]"
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
    const [isDesktopViewport, setIsDesktopViewport] = useState(false);
    const total = FEATURES.length;
    const directionRef = useRef<1 | -1>(1);
    const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
    const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
    const autoplayTimeoutRef = useRef<number | null>(null);
    const videoPauseTimeoutRef = useRef<number | null>(null);
    const playAttemptRef = useRef(0);
    const productVideoSrc = "/Algae%20Cylender%20Shape%201800x2796.mp4";
    const current = FEATURES[index];
    const backgroundSrc = current.backgroundSrc ?? "/figma/bloom-micro-algae.png";
    const backgroundPosition = current.backgroundPosition ?? "center center";
    const overlayColor = "rgba(0, 0, 0, 0.56)";
    const progressRatio = total > 1 ? index / (total - 1) : 0;

    const move = useCallback(
        (manualDirection?: 1 | -1) => {
            setIndex((currentIndex) => {
                if (total <= 1) {
                    return currentIndex;
                }

                if (manualDirection) {
                    directionRef.current = manualDirection;
                }

                let direction = directionRef.current;
                let nextIndex = currentIndex + direction;

                if (nextIndex >= total || nextIndex < 0) {
                    direction = direction === 1 ? -1 : 1;
                    directionRef.current = direction;
                    nextIndex = currentIndex + direction;
                }

                return nextIndex;
            });
        },
        [total],
    );

    const clearAutoplayTimer = useCallback(() => {
        if (autoplayTimeoutRef.current !== null) {
            window.clearTimeout(autoplayTimeoutRef.current);
            autoplayTimeoutRef.current = null;
        }
    }, []);

    const clearVideoPauseTimer = useCallback(() => {
        if (videoPauseTimeoutRef.current !== null) {
            window.clearTimeout(videoPauseTimeoutRef.current);
            videoPauseTimeoutRef.current = null;
        }
    }, []);

    const playVideoForCurrentSlide = useCallback(
        (video: HTMLVideoElement) => {
            if (!Number.isFinite(video.duration) || video.duration <= 0) {
                return;
            }

            const attemptId = ++playAttemptRef.current;
            clearVideoPauseTimer();
            video.pause();

            const segmentDuration = video.duration / total;
            const segmentStart = index * segmentDuration;
            const segmentEnd = Math.min(video.duration, segmentStart + segmentDuration);

            video.currentTime = Math.min(segmentStart + 0.01, segmentEnd);

            const segmentMs = Math.max(1, (segmentEnd - segmentStart) * 1000);
            video.playbackRate = Math.max(0.5, Math.min(segmentMs / SLIDE_INTERVAL_MS, 2.5));
            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === "function") {
                playPromise.catch(() => {
                    // Ignore expected interruption errors from rapid slide changes.
                });
            }

            const pauseAfterMs = Math.max(300, Math.min(SLIDE_INTERVAL_MS - 30, (segmentMs / video.playbackRate)));
            videoPauseTimeoutRef.current = window.setTimeout(() => {
                if (playAttemptRef.current !== attemptId) {
                    return;
                }
                video.currentTime = segmentEnd;
                video.pause();
            }, pauseAfterMs);
        },
        [clearVideoPauseTimer, index, total],
    );

    const syncVideosWithSlide = useCallback(() => {
        const activeVideo = isDesktopViewport ? desktopVideoRef.current : mobileVideoRef.current;
        if (activeVideo) {
            playVideoForCurrentSlide(activeVideo);
        }
    }, [isDesktopViewport, playVideoForCurrentSlide]);

    const scheduleAutoplay = useCallback(() => {
        clearAutoplayTimer();
        autoplayTimeoutRef.current = window.setTimeout(() => {
            move();
        }, SLIDE_INTERVAL_MS);
    }, [clearAutoplayTimer, move]);

    const prev = () => {
        move(-1);
        scheduleAutoplay();
    };

    const next = () => {
        move(1);
        scheduleAutoplay();
    };

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
        syncVideosWithSlide();
        scheduleAutoplay();
    }, [index, scheduleAutoplay, syncVideosWithSlide]);

    useEffect(() => {
        return () => {
            clearAutoplayTimer();
            clearVideoPauseTimer();
        };
    }, [clearAutoplayTimer, clearVideoPauseTimer]);

    return (
        <section className="relative w-full overflow-hidden bg-[#193100]">
            <div className="relative h-218.75 w-full lg:h-284">
                <div className="absolute inset-0 lg:hidden">
                    <div className="absolute -left-133 top-0 h-210.75 w-376">
                        <img src={backgroundSrc} alt="" className="block size-full max-w-none object-cover" />
                    </div>
                    <div className="absolute inset-x-0 top-0 h-210.75 bg-black/56" />

                    <div className="relative flex h-full flex-col items-center gap-6 px-4 py-6">
                        <div className="relative h-134.75 w-full max-w-102 overflow-hidden rounded-3xl bg-[#f3f4f6]">
                            <video
                                key={productVideoSrc}
                                ref={mobileVideoRef}
                                src={productVideoSrc}
                                muted
                                playsInline
                                preload="metadata"
                                onLoadedMetadata={syncVideosWithSlide}
                                className="h-full w-full transform-gpu object-contain"
                            />
                        </div>

                        <div className="flex w-full max-w-102 items-center gap-2">
                            <ArrowButton direction="left" onClick={prev} />
                            <ArrowButton direction="right" onClick={next} />
                        </div>

                        <div className="relative h-1.5 w-[calc(100%+32px)] overflow-hidden">
                            <div className="absolute left-0 right-0 top-1/2 h-0 border-t border-dashed border-white/90 -translate-y-1/2" />
                            <div className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#9fe884]" style={{ width: `${progressRatio * 100}%` }} />
                        </div>

                        <div className="min-h-34.5 w-full max-w-102 text-left text-white">
                            <div className="font-nimbus text-[clamp(34px,10vw,40px)] font-bold leading-none">
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

                    <div className="absolute left-30.5 top-0 flex h-284 w-0 items-center justify-center">
                        <div className="-rotate-90">
                            <div className="relative h-0 w-284">
                                <div className="absolute inset-[-2px_0_0_0]">
                                    <img src="/figma/line1.svg" alt="" className="block size-full max-w-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute left-29.25 h-20 w-2 rounded-lg bg-white transition-all duration-500 ease-in-out"
                        style={{ top: `${80 + progressRatio * 976}px` }}
                    />

                    <div className="absolute left-[calc(50%+376px)] top-1/2 size-184 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[13.6px] bg-white">
                        <video
                            key={`${productVideoSrc}-desktop`}
                            ref={desktopVideoRef}
                            src={productVideoSrc}
                            muted
                            playsInline
                            preload="metadata"
                            onLoadedMetadata={syncVideosWithSlide}
                            className="h-full w-full transform-gpu object-contain"
                        />
                    </div>

                    <div className="absolute left-47.25 top-1/2 h-50 w-164.75 -translate-y-1/2 overflow-hidden">
                        <div className="absolute left-0 top-0 flex w-169.5 flex-col items-start gap-14 text-left text-white">
                            <div className="flex w-full flex-col items-start justify-center gap-4">
                                <div className="font-nimbus flex flex-col justify-center text-[56px] font-bold text-white">
                                    <p className="leading-16">{current.title}</p>
                                    {current.subtitle && <p className="leading-16">{current.subtitle}</p>}
                                </div>
                                <div className="font-nimbus flex min-w-full flex-col justify-center text-[24px] text-white">
                                    <p className={`leading-7 ${current.bodyBottom ? "mb-0" : ""}`}>{current.bodyTop}</p>
                                    {current.bodyBottom && <p className="leading-7">{current.bodyBottom}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-47.25 top-187 flex items-center gap-4">
                        <ArrowButton direction="left" onClick={prev} />
                        <ArrowButton direction="right" onClick={next} />
                    </div>
                </div>
            </div>
        </section>
    );
}
