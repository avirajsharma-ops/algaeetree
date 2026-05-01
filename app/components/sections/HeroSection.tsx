"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";

const VIDEO_HEADLINES = [
    "What if your infrastructure quietly captured CO₂ while powering itself?",
    "What if your footpath could photosynthesize?",
    "What if your dividers cleaned the air faster than forests?",
];

const IMAGE_HEADLINE = "On the Edge of Experiencing Something Truly Extraordinary";
const VIDEO_LINE_DURATION_MS = 2600;
const IMAGE_DISPLAY_MS = 5200;
const VIDEO_TRANSITION_DELAY_MS = 800;
const VIDEO_RETURN_DELAY_MS = 1000;
const INDICATOR_ACTIVE = "#12A61A";
const INDICATOR_INACTIVE = "#2D6B35";
const INDICATOR_VIDEO_SMALL = "#FFFFFF";

type HeroPhase = "video" | "image";
type HeroContentPhase = HeroPhase | "hidden";

function AnimatedHeadline({
    text,
    className,
}: {
    text: string;
    className: string;
}) {
    return (
        <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.h2
                    key={text}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={className}
                >
                    {text}
                </motion.h2>
            </AnimatePresence>
        </div>
    );
}


export default function HeroSection() {
    const [heroPhase, setHeroPhase] = useState<HeroPhase>("image");
    const [isHeroImageReady, setIsHeroImageReady] = useState(false);
    const [videoLineIndex, setVideoLineIndex] = useState(0);
    const [showVideoHeadline, setShowVideoHeadline] = useState(false);
    const [mobileVideoLineIndex, setMobileVideoLineIndex] = useState(0);
    const videoIntroTimerRef = useRef<number | null>(null);
    const videoReturnTimerRef = useRef<number | null>(null);
    const heroContentPhase: HeroContentPhase = heroPhase === "image" ? (isHeroImageReady ? "image" : "hidden") : showVideoHeadline ? "video" : "hidden";

    useEffect(() => {
        if (heroPhase !== "image") {
            return;
        }

        const timer = window.setTimeout(() => {
            setHeroPhase("video");
        }, IMAGE_DISPLAY_MS);

        return () => {
            window.clearTimeout(timer);
        };
    }, [heroPhase]);

    useEffect(() => {
        if (videoIntroTimerRef.current !== null) {
            window.clearTimeout(videoIntroTimerRef.current);
            videoIntroTimerRef.current = null;
        }

        if (videoReturnTimerRef.current !== null) {
            window.clearTimeout(videoReturnTimerRef.current);
            videoReturnTimerRef.current = null;
        }

        setShowVideoHeadline(false);
        setVideoLineIndex(0);

        if (heroPhase !== "video") {
            return;
        }

        videoIntroTimerRef.current = window.setTimeout(() => {
            setShowVideoHeadline(true);
        }, VIDEO_TRANSITION_DELAY_MS);

        return () => {
            if (videoIntroTimerRef.current !== null) {
                window.clearTimeout(videoIntroTimerRef.current);
                videoIntroTimerRef.current = null;
            }

            if (videoReturnTimerRef.current !== null) {
                window.clearTimeout(videoReturnTimerRef.current);
                videoReturnTimerRef.current = null;
            }
        };
    }, [heroPhase]);

    useEffect(() => {
        if (heroPhase !== "video" || !showVideoHeadline) {
            return;
        }

        const timer = window.setTimeout(() => {
            if (videoLineIndex < VIDEO_HEADLINES.length - 1) {
                setVideoLineIndex((currentIndex) => currentIndex + 1);
                return;
            }

            setShowVideoHeadline(false);
            videoReturnTimerRef.current = window.setTimeout(() => {
                setHeroPhase("image");
            }, VIDEO_RETURN_DELAY_MS);
        }, VIDEO_LINE_DURATION_MS);

        return () => {
            window.clearTimeout(timer);
        };
    }, [heroPhase, showVideoHeadline, videoLineIndex]);

    useEffect(() => {
        const mobileTextTimer = window.setInterval(() => {
            setMobileVideoLineIndex((currentIndex) => (currentIndex + 1) % VIDEO_HEADLINES.length);
        }, VIDEO_LINE_DURATION_MS);

        return () => {
            window.clearInterval(mobileTextTimer);
        };
    }, []);

    return (
        <section className="relative w-full overflow-hidden bg-[#031c0b]">
            <div className="relative hidden w-full lg:block lg:h-[min(84svh,100vh)] lg:min-h-170 xl:h-[min(90svh,100vh)]">
                <AnimatePresence mode="wait">
                    {heroPhase === "video" ? (
                        <motion.div
                            key="desktop-video"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <video
                                className="h-full w-full object-cover object-center"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            >
                                <source src="/Homepage BG Video.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,28,11,0.42)_0%,rgba(3,28,11,0.08)_54%,rgba(3,28,11,0.22)_100%)]" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="desktop-image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHeroImageReady ? 1 : 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/hero%20section%20slider%20resized.webp"
                                alt="Microscopic algae inspired visual"
                                fill
                                priority
                                sizes="(min-width: 1024px) 100vw, 0px"
                                onLoad={() => setIsHeroImageReady(true)}
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,28,11,0.52)_0%,rgba(3,28,11,0.22)_54%,rgba(3,28,11,0.34)_100%)]" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="absolute inset-0">
                    <div className="absolute left-4 top-1/2 inline-flex w-[min(43vw,522px)] -translate-y-1/2 flex-col items-start justify-start gap-5 md:left-6 xl:left-[120px] xl:gap-6">
                        <div className="relative min-h-30 w-full xl:min-h-42">
                            <AnimatePresence mode="wait" initial={false}>
                                {heroContentPhase === "video" ? (
                                    <AnimatedHeadline
                                        key="desktop-video-headline"
                                        text={VIDEO_HEADLINES[videoLineIndex]}
                                        className="font-space-grotesk flex w-full flex-col justify-center text-3xl font-bold leading-tight text-white xl:text-[40px] xl:leading-14"
                                    />
                                ) : heroContentPhase === "image" ? (
                                    <motion.h1
                                        key="desktop-static-headline"
                                        initial={{ opacity: 0, y: 32 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -32 }}
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        className="font-space-grotesk flex w-full flex-col justify-center text-3xl font-bold leading-tight text-white xl:text-[40px] xl:leading-14"
                                    >
                                        {IMAGE_HEADLINE}
                                    </motion.h1>
                                ) : null}
                            </AnimatePresence>
                        </div>

                        {heroPhase === "image" && isHeroImageReady ? <Button className="self-start">Glimpse Now</Button> : null}
                    </div>

                    <div className="absolute bottom-[clamp(32px,6svh,72px)] left-4 flex w-[min(28vw,380px)] items-center justify-start gap-2.5 md:left-6 xl:left-[120px]">
                        <motion.div
                            className="h-2 rounded-full"
                            initial={false}
                            animate={{
                                width: heroPhase === "video" ? "64%" : "34%",
                                backgroundColor: heroPhase === "video" ? INDICATOR_ACTIVE : INDICATOR_INACTIVE,
                            }}
                            transition={{ duration: 0.55, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="h-2 rounded-full"
                            initial={false}
                            animate={{
                                width: heroPhase === "image" ? "64%" : "34%",
                                backgroundColor:
                                    heroPhase === "image"
                                        ? INDICATOR_ACTIVE
                                        : heroPhase === "video"
                                            ? INDICATOR_VIDEO_SMALL
                                            : INDICATOR_INACTIVE,
                            }}
                            transition={{ duration: 0.55, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </div>

            <div className="relative h-[min(75svh,100vh)] min-h-130 w-full overflow-hidden bg-[#004c0f] lg:hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <video
                        className="h-full w-full object-cover object-[64%_50%]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    >
                        <source src="/Homepage BG Video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,35,10,0.12)_0%,rgba(0,35,10,0.34)_100%)]" />
                </motion.div>

                <div className="page-px absolute left-0 right-0 top-[52%] -translate-y-1/2">
                    <div className="max-w-[min(88vw,350px)]">
                        <AnimatedHeadline
                            text={VIDEO_HEADLINES[mobileVideoLineIndex]}
                            className="font-space-grotesk text-[clamp(30px,6.6vw,36px)] font-bold leading-[1.2] text-white"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
