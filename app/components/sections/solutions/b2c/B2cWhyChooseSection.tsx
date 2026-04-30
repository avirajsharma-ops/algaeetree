"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { WHY_CHOOSE_ITEMS } from "./b2cContent";

export default function B2cWhyChooseSection() {
    return (
        <section className="w-full overflow-hidden bg-white">
            <div className="page-px py-10 md:hidden">
                <div className="mx-auto grid max-w-[408px] grid-cols-1 gap-[60px]">
                    <div className="flex flex-col gap-10">
                        <h2 className="font-space-grotesk text-[28px] font-medium leading-[32px] uppercase text-black">
                            <span className="block">Why Organizations</span>
                            <span className="block">Choose AlgaeTree</span>
                        </h2>

                        <div className="flex flex-col gap-8">
                            {WHY_CHOOSE_ITEMS.map((item) => (
                                <motion.div key={item.number} className="flex min-h-20 items-start gap-6">
                                    <span className="font-space-grotesk text-[24px] font-bold leading-[32px] text-[#abd600]">
                                        {item.number}
                                    </span>
                                    <div className="flex flex-col gap-1" style={{ width: item.mobileTextWidth }}>
                                        <h3 className="font-space-grotesk text-[20px] font-bold leading-[28px] text-black">
                                            {item.title}
                                        </h3>
                                        <div className="font-manrope text-[16px] leading-[24px] text-[#686868]">
                                            {item.mobileDescriptionLines.map((line) => (
                                                <p key={line}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div className="relative h-[326px] overflow-visible rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                        <Image
                            src="/figma/solutions/b2c/impact-case-v2.png"
                            alt="AlgaeTree installation in a campus interior"
                            fill
                            loading="eager"
                            sizes="408px"
                            className="rounded-[12px] object-cover"
                        />

                        <div className="absolute bottom-[-16px] left-[-9px] rounded-[7.613px] border-[0.634px] border-[rgba(61,73,84,0.2)] bg-[rgba(18,26,34,0.6)] px-[20.934px] py-[20.934px] backdrop-blur-[7.613px]">
                            <p className="mb-[4.758px] font-inter text-[7.613px] uppercase tracking-[0.7613px] text-[#abd600]">
                                Impact Case
                            </p>
                            <p className="font-space-grotesk text-[11.419px] font-bold leading-[17.763px] text-[#e8fff0]">
                                <span className="block">&quot;AlgaeTree redefined our</span>
                                <span className="block">campus air quality within 90</span>
                                <span className="block">days of deployment.&quot;</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="page-px hidden py-16 md:block xl:py-[120px]">
                <div className="relative mx-auto max-w-[1488px]">
                    <div className="pointer-events-none absolute inset-y-0 left-[66.67%] right-0 opacity-10">
                        <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(45,90,39,0.25),transparent_60%)]" />
                    </div>

                    <div className="grid grid-cols-2 gap-20">
                        <motion.div className="relative h-[568px] overflow-visible rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                            <Image
                                src="/figma/solutions/b2c/impact-case-v2.png"
                                alt="AlgaeTree installation in a campus interior"
                                fill
                                loading="eager"
                                sizes="(max-width: 1279px) 50vw, 704px"
                                className="rounded-[12px] object-cover"
                            />

                            <div className="absolute bottom-[-34px] left-[-32px] rounded-[12px] border border-[rgba(61,73,84,0.2)] bg-[rgba(18,26,34,0.6)] px-[33px] py-[33px] backdrop-blur-[12px]">
                                <p className="mb-[7.5px] font-inter text-[12px] uppercase tracking-[1.2px] text-[#abd600]">
                                    Impact Case
                                </p>
                                <p className="font-space-grotesk text-[18px] font-bold leading-[28px] text-[#e8fff0]">
                                    <span className="block">&quot;AlgaeTree redefined our</span>
                                    <span className="block">campus air quality within 90</span>
                                    <span className="block">days of deployment.&quot;</span>
                                </p>
                            </div>
                        </motion.div>

                        <motion.div className="flex flex-col gap-10 pb-6">
                            <h2 className="font-space-grotesk text-[40px] font-medium leading-[44px] uppercase text-black xl:text-[56px] xl:leading-[64px]">
                                <span className="block">Why Organizations</span>
                                <span className="block">Choose AlgaeTree</span>
                            </h2>

                            <div className="flex flex-col gap-8">
                                {WHY_CHOOSE_ITEMS.map((item) => (
                                    <motion.div
                                        key={item.number}
                                        className="flex items-start gap-6"
                                    >
                                        <span className="font-space-grotesk text-[24px] font-bold leading-[32px] text-[#abd600]">
                                            {item.number}
                                        </span>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="font-space-grotesk text-[20px] font-bold leading-[28px] text-black">
                                                {item.title}
                                            </h3>
                                            <p className="font-manrope text-[16px] leading-[24px] text-[#686868]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}