"use client";

import { motion } from "motion/react";
import { CORE_TECHNOLOGY_ITEMS } from "./b2cContent";

export default function B2cCoreTechnologySection() {
    return (
        <section className="w-full bg-[#0f2200]">
            <div className="page-px py-10 md:hidden">
                <div className="mx-auto flex max-w-[408px] flex-col gap-8">
                    <div className="flex justify-center">
                        <h2 className="font-nevera text-[28px] leading-[normal] text-white">
                            Core Technology
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6">
                        {CORE_TECHNOLOGY_ITEMS.map((item) => (
                            <motion.article
                                key={item.number}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                whileHover={{ y: -4 }}
                                className="rounded-[16px] bg-[rgba(236,238,237,0.04)] p-4"
                                style={{ minHeight: item.mobileHeight }}
                            >
                                <div className="flex flex-col gap-[10.9px]">
                                    <div className="flex size-12 items-center justify-center rounded-[2px] bg-[#172129]">
                                        <img
                                            src={item.icon}
                                            alt=""
                                            aria-hidden="true"
                                            className="max-h-5 max-w-5 object-contain"
                                        />
                                    </div>

                                    <h3 className="pt-[13px] font-space-grotesk text-[20px] font-bold leading-[28px] text-[#e8fff0]">
                                        {item.title}
                                    </h3>

                                    <div className="font-manrope text-[14px] leading-[22.75px] text-[#a0acb9]">
                                        {item.mobileDescriptionLines.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>

            <div className="page-px hidden py-16 md:block xl:py-[120px]">
                <div className="mx-auto flex max-w-[1488px] items-start gap-20">
                    <div className="w-[363px] shrink-0">
                        <h2 className="font-nevera text-[48px] leading-[72px] text-white">
                            <span className="block">Core</span>
                            <span className="block">Technology</span>
                        </h2>
                    </div>

                    <div className="grid min-w-0 flex-1 grid-cols-2 gap-6">
                        {CORE_TECHNOLOGY_ITEMS.map((item, index) => (
                            <motion.article
                                key={item.number}
                                transition={{ duration: 0.25, delay: index * 0.03, ease: "easeOut" }}
                                whileHover={{ y: -6 }}
                                className="min-h-[220px] rounded-[16px] bg-[rgba(236,238,237,0.04)] p-6"
                            >
                                <div className="mb-4 font-inter text-[16px] leading-[24px] text-[#abd600]">
                                    {item.number}
                                </div>

                                <h3 className="mb-4 font-space-grotesk text-[24px] leading-[32px] text-[#e8fff0]">
                                    {item.title}
                                </h3>

                                <p className="font-manrope text-[16px] leading-[26px] text-[#a0acb9]">
                                    {item.description}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}