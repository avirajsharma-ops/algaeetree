"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { DEPLOYMENT_ITEMS } from "./b2cContent";

export default function B2cDeploymentSection() {
    return (
        <section className="w-full bg-[#0f2200]">
            <div className="page-px py-[60px] md:hidden">
                <div className="mx-auto flex max-w-[408px] flex-col gap-10">
                    <div className="flex justify-center">
                        <h2 className="font-space-grotesktext-center text-[28px] leading-[normal] text-white">
                            <span className="block">Deployment</span>
                            <span className="block">Environments</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6">
                        {DEPLOYMENT_ITEMS.map((item, index) => (
                            <motion.article
                                key={item.title}
                                transition={{ duration: 0.25, delay: index * 0.03, ease: "easeOut" }}
                                whileHover={{ y: -4 }}
                                className="grid h-[192px] grid-cols-2 overflow-hidden rounded-[12px] bg-[#121a22]"
                            >
                                <div className="relative h-[192px]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        loading="eager"
                                        sizes="204px"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-start gap-2 px-6 py-8">
                                    <h3 className="font-space-grotesk text-[20px] font-bold leading-[28px] text-[#e8fff0]">
                                        {item.title}
                                    </h3>
                                    <p className="font-manrope text-[14px] leading-[20px] text-[#a0acb9]">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>

            <div className="page-px hidden py-16 md:block xl:py-[120px]">
                <div className="mx-auto flex max-w-[1440px] flex-col gap-20">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="font-space-grotesktext-[48px] leading-[72px] text-white">
                            Deployment Environments
                        </h2>
                        <p className="font-manrope text-[18px] leading-[28px] text-[#a0acb9]">
                            Engineered for the diverse landscapes of human activity.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {DEPLOYMENT_ITEMS.map((item, index) => (
                            <motion.article
                                key={item.title}
                                transition={{ duration: 0.25, delay: index * 0.03, ease: "easeOut" }}
                                whileHover={{ y: -6 }}
                                className={`overflow-hidden rounded-[12px] bg-[#121a22] ${index < 3 ? "min-h-[332px]" : "min-h-[312px]"}`}
                            >
                                <div className="relative h-[192px] w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        loading="eager"
                                        sizes="(max-width: 1279px) 33vw, 464px"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 px-8 py-8">
                                    <h3 className="font-space-grotesk text-[20px] font-bold leading-[28px] text-[#e8fff0]">
                                        {item.title}
                                    </h3>
                                    <p className="font-manrope text-[14px] leading-[20px] text-[#a0acb9]">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}