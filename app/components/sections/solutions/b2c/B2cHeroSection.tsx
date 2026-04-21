"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function B2cHeroSection() {
    return (
        <section className="w-full bg-white">
            <div className="px-4 py-4 md:px-6 md:py-8 xl:px-[120px] xl:py-[113px]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="relative mx-auto h-[852px] w-full max-w-[408px] overflow-hidden rounded-[16px] bg-[#0f1514] md:h-[808px] md:max-w-[1488px] md:rounded-[40px]"
                >
                    <Image
                        src="/figma/solutions/b2c/hero.png"
                        alt="B2C climate solution photobioreactor in a nighttime urban setting"
                        width={1276}
                        height={900}
                        priority
                        className="absolute left-[-736px] top-0 h-[900px] w-[1276px] max-w-none md:hidden"
                    />

                    <Image
                        src="/figma/solutions/b2c/hero.png"
                        alt=""
                        aria-hidden
                        fill
                        priority
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) calc(100vw - 48px), 1488px"
                        className="hidden object-cover object-center md:block"
                    />

                    <div className="absolute left-[18px] top-[576px] flex w-[372px] items-start gap-4 md:hidden">
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

                    <div className="absolute left-[106px] top-1/2 hidden -translate-y-1/2 items-start gap-8 md:flex">
                        <div className="w-[7px] shrink-0 self-stretch rounded-[8px] bg-white" />

                        <div className="flex w-[702px] flex-col gap-4">
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