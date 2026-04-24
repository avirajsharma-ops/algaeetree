"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function B2cHeroSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-4 md:py-8 xl:py-[50px]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="relative mx-auto aspect-[816/1704] w-full max-w-[1488px] overflow-hidden rounded-[16px] bg-[#0f1514] sm:aspect-[2976/1616] md:rounded-[40px]"
                >
                    <Image
                        src="/figma/solutions/b2c/Hero%20Mobile.png"
                        alt="B2C climate solution photobioreactor in a nighttime urban setting"
                        fill
                        priority
                        sizes="(max-width: 767px) calc(100vw - 32px), 0px"
                        className="object-cover object-bottom sm:hidden"
                    />

                    <Image
                        src="/figma/solutions/b2c/Hero%20Destop.png"
                        alt=""
                        aria-hidden
                        fill
                        priority
                        sizes="(min-width: 1728px) 1488px, (min-width: 1280px) calc(100vw - 240px), (min-width: 768px) calc(100vw - 48px), 0px"
                        className="hidden object-cover object-bottom sm:block"
                    />

                    <div className="absolute inset-y-0 left-0 hidden w-[62%] bg-gradient-to-r from-black/40 via-black/8 to-transparent md:block" />

                    <div className="absolute inset-x-4 bottom-6 flex max-w-[372px] items-start gap-4 md:hidden">
                        <div className="w-[7px] shrink-0 self-stretch rounded-[8px] bg-white" />

                        <div className="flex flex-1 flex-col gap-4">
                            <h1 className="font-nimbus text-[26px] font-bold leading-[32px] text-white">
                                B2C Climate Solutions
                            </h1>

                            <div className="font-nimbus text-[14px] leading-[21px] text-[#d0d0d0]">
                                <p className="mb-[6px]">
                                    Microalgae powered clean air and carbon capture for everyday
                                    environments.
                                </p>
                                <p>
                                    AlgaeTree brings advanced climate technology into homes,
                                    workplaces, and public spaces. Each system captures CO₂,
                                    releases oxygen, and improves air quality while delivering real
                                    time environmental insights.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-[clamp(24px,5vw,106px)] top-1/2 hidden w-[min(72vw,702px)] -translate-y-1/2 items-start gap-8 md:flex">
                        <div className="w-[7px] shrink-0 self-stretch rounded-[8px] bg-white" />

                        <div className="flex w-full flex-col gap-4">
                            <h1 className="font-nimbus text-[40px] font-bold leading-[56px] text-white">
                                B2C Climate Solutions
                            </h1>

                            <div className="font-nimbus text-[20px] leading-[28px] text-[#d0d0d0]">
                                <p className="mb-0">
                                    Microalgae powered clean air and carbon capture for everyday
                                    environments.
                                </p>
                                <p>
                                    AlgaeTree brings advanced climate technology into homes,
                                    workplaces, and public spaces. Each system captures CO₂,
                                    releases oxygen, and improves air quality while delivering real
                                    time environmental insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}