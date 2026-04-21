"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const AUTOPLAY_DELAY_MS = 4500;

const BASE_TESTIMONIAL = {
    quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    source: "Publication",
};

const TESTIMONIALS = Array.from({ length: 4 }, () => BASE_TESTIMONIAL);

export default function TestimonialsCarousel() {
    const reduceMotion = useReducedMotion();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (reduceMotion || isPaused) {
            return;
        }

        const intervalId = window.setInterval(() => {
            setCurrentIndex((index) => (index + 1) % TESTIMONIALS.length);
        }, AUTOPLAY_DELAY_MS);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [isPaused, reduceMotion]);

    const activeTestimonial = TESTIMONIALS[currentIndex];

    return (
        <div className="flex w-full max-w-[596px] flex-col gap-5">
            <div className="overflow-hidden rounded-[6px] bg-[rgba(101,101,101,0.5)] p-6 backdrop-blur-[40px] sm:p-8">
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: -18 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex min-h-[280px] flex-col sm:min-h-[351px]"
                    >
                        <Image
                            src="/figma/contact/quote-left.svg"
                            alt=""
                            aria-hidden
                            width={60}
                            height={60}
                            className="size-[52px] sm:size-[60px]"
                        />

                        <div className="h-8" />

                        <p className="font-space-grotesk text-[16px] font-medium leading-[24px] text-[#eceff1] sm:text-[18px] sm:leading-[27px]">
                            &ldquo;{activeTestimonial.quote}&rdquo;
                        </p>

                        <div className="mt-auto flex items-end justify-end pt-8">
                            <div className="flex items-center gap-3">
                                <p className="font-space-grotesk text-[18px] font-[550] leading-[27px] text-[#eceff1] sm:text-[20px] sm:leading-[30px]">
                                    {activeTestimonial.source}
                                </p>
                                <div className="h-[65px] w-[100px] rounded-[6px] bg-white" />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-[6px]">
                    <button
                        type="button"
                        aria-label="Previous testimonial"
                        onClick={() => setCurrentIndex((index) => (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                        className="flex h-[42px] w-[36px] items-center justify-center rounded-l-[6px] bg-white transition-colors hover:bg-[#f0f0f0]"
                    >
                        <Image src="/figma/contact/arrow-left.svg" alt="" aria-hidden width={18} height={18} />
                    </button>

                    <button
                        type="button"
                        aria-label="Next testimonial"
                        onClick={() => setCurrentIndex((index) => (index + 1) % TESTIMONIALS.length)}
                        className="flex h-[42px] w-[36px] items-center justify-center rounded-r-[6px] bg-white transition-colors hover:bg-[#f0f0f0]"
                    >
                        <Image src="/figma/contact/arrow-right.svg" alt="" aria-hidden width={18} height={18} />
                    </button>
                </div>

                <div className="relative h-[6px] min-w-0 flex-1 rounded-[4px] bg-[#eceff1] xl:max-w-[456px]">
                    <motion.div
                        className="absolute top-0 h-full rounded-[4px] bg-[#9e9e9e]"
                        style={{ width: `${100 / TESTIMONIALS.length}%` }}
                        animate={{ left: `${(currentIndex * 100) / TESTIMONIALS.length}%` }}
                        transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
                    />
                </div>

                <button
                    type="button"
                    aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
                    aria-pressed={isPaused}
                    onClick={() => setIsPaused((value) => !value)}
                    className="flex size-[42px] items-center justify-center rounded-[6px] bg-white transition-colors hover:bg-[#f0f0f0]"
                >
                    <Image src="/figma/contact/pause.svg" alt="" aria-hidden width={18} height={18} />
                </button>
            </div>
        </div>
    );
}