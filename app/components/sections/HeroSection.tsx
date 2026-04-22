"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../Button";

const VIDEO_HEADLINES = [
    "What if your infrastructure quietly captured CO₂ while powering itself?",
    "What if your footpath could photosynthesize?",
    "What if your dividers cleaned the air faster than forests?",
];

const IMAGE_HEADLINE = "On the Edge of Experiencing Something Truly Extraordinary";
const VIDEO_LINE_DURATION_MS = 2600;
const IMAGE_DISPLAY_MS = 3600;
const INDICATOR_ACTIVE = "#12A61A";
const INDICATOR_INACTIVE = "#2D6B35";
const INDICATOR_VIDEO_SMALL = "#FFFFFF";

type HeroPhase = "video" | "image";

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
    const [videoLineIndex, setVideoLineIndex] = useState(0);
    const [mobileVideoLineIndex, setMobileVideoLineIndex] = useState(0);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            if (heroPhase === "video") {
                if (videoLineIndex < VIDEO_HEADLINES.length - 1) {
                    setVideoLineIndex((currentIndex) => currentIndex + 1);
                    return;
                }

                setHeroPhase("image");
                setVideoLineIndex(0);
                return;
            }

            setVideoLineIndex(0);
            setHeroPhase("video");
        }, heroPhase === "video" ? VIDEO_LINE_DURATION_MS : IMAGE_DISPLAY_MS);

        return () => {
            window.clearTimeout(timer);
        };
    }, [heroPhase, videoLineIndex]);

    useEffect(() => {
        const mobileTextTimer = window.setInterval(() => {
            setMobileVideoLineIndex((currentIndex) => (currentIndex + 1) % VIDEO_HEADLINES.length);
        }, VIDEO_LINE_DURATION_MS);

        return () => {
            window.clearInterval(mobileTextTimer);
        };
    }, []);

    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative hidden h-258.5 w-full lg:block">
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
                                preload="auto"
                            >
                                <source src="/Homepage BG Video.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,28,11,0.42)_0%,rgba(3,28,11,0.08)_54%,rgba(3,28,11,0.22)_100%)]" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="desktop-image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/figma/hero-bg.png"
                                alt="Microscopic algae inspired visual"
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="absolute inset-0">
                    <div className="absolute left-30 top-108.25 inline-flex w-130.5 flex-col items-start justify-start gap-6">
                        <div className="relative min-h-42 w-130.5">
                            {heroPhase === "video" ? (
                                <AnimatedHeadline
                                    text={VIDEO_HEADLINES[videoLineIndex]}
                                    className="font-nimbus flex w-130.5 flex-col justify-center text-[40px] font-bold leading-14 text-white"
                                />
                            ) : (
                                <AnimatePresence mode="wait">
                                    <motion.h1
                                        key="desktop-static-headline"
                                        initial={{ opacity: 0, y: 32 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -32 }}
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        className="font-nimbus flex w-130.5 flex-col justify-center text-[40px] font-bold leading-14 text-[#2D5A27]"
                                    >
                                        {IMAGE_HEADLINE}
                                    </motion.h1>
                                </AnimatePresence>
                            )}
                        </div>

                        {heroPhase === "image" ? <Button className="self-start">Glimpse Now</Button> : null}
                    </div>

                    <div className="absolute left-30 top-237 flex w-95 items-center justify-start gap-2.5">
                        <motion.div
                            className="h-2 rounded-full"
                            initial={false}
                            animate={{
                                width: heroPhase === "video" ? "176px" : "84px",
                                backgroundColor: heroPhase === "video" ? INDICATOR_ACTIVE : INDICATOR_INACTIVE,
                            }}
                            transition={{ duration: 0.55, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="h-2 rounded-full"
                            initial={false}
                            animate={{
                                width: heroPhase === "image" ? "176px" : "84px",
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

            <div className="relative h-213 w-full overflow-hidden bg-[#004c0f] lg:hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <video
                        className="h-full w-full object-cover object-center"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src="/Homepage BG Video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,35,10,0.12)_0%,rgba(0,35,10,0.34)_100%)]" />
                </motion.div>

                <div className="absolute left-4 right-4 top-1/2 max-w-87.5 -translate-y-1/2">
                    <AnimatedHeadline
                        text={VIDEO_HEADLINES[mobileVideoLineIndex]}
                        className="font-nimbus text-[26.82px] font-bold leading-[37.548px] text-white"
                    />
                </div>
            </div>
        </section>
    );
}
