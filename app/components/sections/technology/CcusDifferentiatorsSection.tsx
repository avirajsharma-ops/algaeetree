"use client";

import Image from "next/image";
import { motion } from "motion/react";

const SMALL_CARD_BASE =
    "rounded-[20px] px-6 py-8 xl:h-[320px] xl:px-[40px] xl:py-[48px]";

export default function CcusDifferentiatorsSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-4 md:hidden">
                <div className="mx-auto flex w-full max-w-[408px] flex-col gap-4">
                    <div className="px-2">
                        <h2 className="font-nevera text-[28px] leading-[36px] text-black">
                            <span className="block">Why AlgaeTree</span>
                            <span className="block">Carbon Capture</span>
                            <span className="block">is Different</span>
                        </h2>
                    </div>

                    <motion.article
                        whileHover={{ y: -6 }}
                        className="relative h-[212px] overflow-hidden rounded-[20px] bg-[#012d1d] px-6 py-[34px]"
                    >
                        <div className="absolute inset-y-0 left-1/2 right-0 opacity-20">
                            <Image
                                src="/figma/technology/ccus/green-energy.png"
                                alt=""
                                aria-hidden
                                fill
                                loading="eager"
                                unoptimized
                                sizes="204px"
                                className="object-cover"
                            />
                        </div>

                        <div className="relative flex flex-col">
                            <img src="/figma/technology/ccus/icon-energy.svg" alt="" aria-hidden="true" className="size-10 pb-2" />
                            <h3 className="pb-3 font-manrope text-[20px] font-bold leading-[36px] text-white">
                                Low Energy Operation
                            </h3>
                            <p className="font-manrope text-[16px] leading-[24px] text-[#86af99]">
                                Biological photosynthesis replaces energy-intensive chemical capture
                                processes.
                            </p>
                        </div>
                    </motion.article>

                    <motion.article whileHover={{ y: -6 }} className="rounded-[20px] bg-[#eceeed] p-6">
                        <img src="/figma/technology/ccus/icon-monitoring.svg" alt="" aria-hidden="true" className="size-10 pb-2" />
                        <h3 className="pb-3 font-manrope text-[20px] font-bold leading-[28px] text-[#012d1d]">
                            <span className="block">Intelligent</span>
                            <span className="block">Environmental Monitoring</span>
                        </h3>
                        <p className="font-manrope text-[16px] leading-[24px] text-[#414844]">
                            AI-assisted sensors track CO₂ levels, particulate pollution, and system
                            performance.
                        </p>
                    </motion.article>

                    <motion.article whileHover={{ y: -6 }} className="rounded-[20px] bg-[#ceed44] p-6">
                        <img src="/figma/technology/ccus/icon-scalable.svg" alt="" aria-hidden="true" className="size-10 pb-2" />
                        <h3 className="pb-3 font-manrope text-[20px] font-bold leading-[28px] text-[#012d1d]">
                            <span className="block">Scalable</span>
                            <span className="block">Distributed Networks</span>
                        </h3>
                        <p className="font-manrope text-[16px] leading-[24px] text-[#596a00]">
                            Multiple units can form city-wide carbon capture systems.
                        </p>
                    </motion.article>

                    <motion.article whileHover={{ y: -6 }} className="flex flex-col gap-8 rounded-[20px] bg-[#f2f4f3] p-6">
                        <div>
                            <img src="/figma/technology/ccus/icon-urban.svg" alt="" aria-hidden="true" className="size-10 pb-2" />
                            <h3 className="pb-3 pt-3 font-manrope text-[20px] font-bold leading-[28px] text-[#012d1d]">
                                Urban Infrastructure Integration
                            </h3>
                            <p className="font-manrope text-[16px] leading-[24px] text-[#414844]">
                                Deployable across roads, highways, public spaces, and industrial zones.
                            </p>
                        </div>

                        <div className="relative h-[160px] overflow-hidden rounded-[16px] bg-white p-2 shadow-[0px_20px_40px_0px_rgba(1,45,29,0.06)]">
                            <div className="relative h-full w-full overflow-hidden rounded-[8px]">
                                <Image
                                    src="/figma/technology/ccus/smart-city.png"
                                    alt="Urban infrastructure integration"
                                    fill
                                    loading="eager"
                                    sizes="360px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.article>

                    <motion.article whileHover={{ y: -6 }} className="rounded-[20px] bg-[#eceeed] p-6">
                        <img
                            src="/figma/technology/ccus/icon-carbon-capture.svg"
                            alt=""
                            aria-hidden="true"
                            className="h-10 w-[46.25px] object-contain pb-2"
                        />
                        <h3 className="pb-3 font-manrope text-[20px] font-bold leading-[28px] text-[#012d1d]">
                            <span className="block">Continuous</span>
                            <span className="block">Carbon Capture</span>
                        </h3>
                        <p className="font-manrope text-[16px] leading-[24px] text-[#414844]">
                            Microalgae absorb carbon dioxide continuously during system operation.
                        </p>
                    </motion.article>

                    <motion.article
                        whileHover={{ y: -6 }}
                        className="relative h-[212px] overflow-hidden rounded-[20px] bg-[#012d1d] px-6 py-[34px]"
                    >
                        <div className="absolute inset-y-0 left-1/2 right-0 opacity-20">
                            <Image
                                src="/figma/technology/ccus/green-energy.png"
                                alt=""
                                aria-hidden
                                fill
                                loading="eager"
                                unoptimized
                                sizes="204px"
                                className="object-cover"
                            />
                        </div>

                        <div className="relative flex flex-col">
                            <img src="/figma/technology/ccus/icon-oxygen.svg" alt="" aria-hidden="true" className="size-10 pb-2" />
                            <h3 className="pb-3 font-manrope text-[20px] font-bold leading-[36px] text-white">
                                Oxygen Generation
                            </h3>
                            <p className="font-manrope text-[16px] leading-[24px] text-[#86af99]">
                                Carbon capture simultaneously produces oxygen through natural biological
                                processes.
                            </p>
                        </div>
                    </motion.article>
                </div>
            </div>

            <div className="page-px hidden py-8 sm:py-10 md:block xl:py-[120px]">
                <div className="mx-auto flex w-full max-w-[1488px] flex-col gap-10 xl:gap-12">
                    <h2 className="font-nevera text-[32px] leading-[40px] text-black md:max-w-[760px] md:text-[42px] md:leading-[50px] xl:max-w-[1018px] xl:text-[56px] xl:leading-[72px]">
                        <span className="block">Why AlgaeTree</span>
                        <span className="block">Carbon Capture is Different</span>
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                        <motion.article
                            whileHover={{ y: -6 }}
                            className="relative overflow-hidden rounded-[20px] bg-[#012d1d] px-6 py-8 md:col-span-2 xl:col-span-2 xl:h-[320px] xl:px-[40px] xl:py-[48px]"
                        >
                            <div className="absolute inset-y-0 left-1/2 right-0 opacity-20">
                                <Image
                                    src="/figma/technology/ccus/green-energy.png"
                                    alt=""
                                    aria-hidden
                                    fill
                                    loading="eager"
                                    unoptimized
                                    sizes="(max-width: 1279px) 50vw, 490px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative flex flex-col gap-4 xl:gap-6">
                                <img src="/figma/technology/ccus/icon-energy.svg" alt="" aria-hidden="true" className="size-10" />
                                <div className="pt-2 xl:pt-4">
                                    <h3 className="font-manrope text-[24px] font-bold leading-[30px] text-white xl:text-[30px] xl:leading-[36px]">
                                        Low Energy Operation
                                    </h3>
                                </div>
                                <p className="max-w-[448px] text-[16px] leading-[24px] text-[#86af99] xl:w-[370px] xl:text-[18px] xl:leading-[28px]">
                                    Biological photosynthesis replaces energy-intensive chemical capture
                                    processes.
                                </p>
                            </div>
                        </motion.article>

                        <motion.article whileHover={{ y: -6 }} className={`${SMALL_CARD_BASE} bg-[#eceeed]`}>
                            <div className="flex flex-col gap-4 xl:gap-6">
                                <img src="/figma/technology/ccus/icon-monitoring.svg" alt="" aria-hidden="true" className="size-8" />
                                <div className="pt-2 xl:pt-3">
                                    <h3 className="font-manrope text-[22px] font-bold leading-[28px] text-[#012d1d] xl:text-[24px] xl:leading-[32px]">
                                        <span className="block">Intelligent</span>
                                        <span className="block">Environmental Monitoring</span>
                                    </h3>
                                </div>
                                <p className="text-[16px] leading-[24px] text-[#414844]">
                                    AI-assisted sensors track CO₂ levels, particulate pollution, and system
                                    performance.
                                </p>
                            </div>
                        </motion.article>

                        <motion.article whileHover={{ y: -6 }} className={`${SMALL_CARD_BASE} bg-[#ceed44]`}>
                            <div className="flex flex-col gap-4 xl:gap-6">
                                <img src="/figma/technology/ccus/icon-scalable.svg" alt="" aria-hidden="true" className="size-8" />
                                <div className="pt-2 xl:pt-3">
                                    <h3 className="font-manrope text-[22px] font-bold leading-[28px] text-[#012d1d] xl:text-[24px] xl:leading-[32px]">
                                        <span className="block">Scalable</span>
                                        <span className="block">Distributed Networks</span>
                                    </h3>
                                </div>
                                <p className="text-[16px] leading-[24px] text-[#596a00]">
                                    Multiple units can form city-wide carbon capture systems.
                                </p>
                            </div>
                        </motion.article>

                        <motion.article
                            whileHover={{ y: -6 }}
                            className="grid overflow-hidden rounded-[20px] bg-[#f2f4f3] md:col-span-2 xl:col-span-2 xl:grid-cols-[434px_minmax(0,1fr)] xl:px-[40px] xl:py-[48px]"
                        >
                            <div className="flex flex-col gap-4 px-6 py-8 xl:justify-center xl:px-0 xl:py-0 xl:pr-8">
                                <img src="/figma/technology/ccus/icon-urban.svg" alt="" aria-hidden="true" className="size-8" />
                                <div className="pt-2 xl:pt-3">
                                    <h3 className="font-manrope text-[22px] font-bold leading-[28px] text-[#012d1d] xl:text-[24px] xl:leading-[32px]">
                                        Urban Infrastructure Integration
                                    </h3>
                                </div>
                                <p className="text-[16px] leading-[24px] text-[#414844]">
                                    Deployable across roads, highways, public spaces, and industrial zones.
                                </p>
                            </div>

                            <div className="px-6 pb-6 xl:flex xl:items-center xl:justify-center xl:px-0 xl:pb-0">
                                <div className="relative h-[180px] overflow-hidden rounded-[16px] bg-white p-2 shadow-[0px_20px_40px_0px_rgba(1,45,29,0.06)] xl:h-[224px] xl:w-full">
                                    <div className="relative h-full w-full overflow-hidden rounded-[8px]">
                                        <Image
                                            src="/figma/technology/ccus/smart-city.png"
                                            alt="Urban infrastructure integration"
                                            fill
                                            loading="eager"
                                            sizes="(max-width: 1279px) 100vw, 418px"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.article>

                        <motion.article whileHover={{ y: -6 }} className={`${SMALL_CARD_BASE} bg-[#eceeed]`}>
                            <div className="flex flex-col gap-4 xl:gap-6">
                                <img
                                    src="/figma/technology/ccus/icon-carbon-capture.svg"
                                    alt=""
                                    aria-hidden="true"
                                    className="h-8 w-[37px] object-contain"
                                />
                                <div className="pt-2 xl:pt-3">
                                    <h3 className="font-manrope text-[22px] font-bold leading-[28px] text-[#012d1d] xl:text-[24px] xl:leading-[32px]">
                                        <span className="block">Continuous</span>
                                        <span className="block">Carbon Capture</span>
                                    </h3>
                                </div>
                                <p className="text-[16px] leading-[24px] text-[#414844]">
                                    Microalgae absorb carbon dioxide continuously during system operation.
                                </p>
                            </div>
                        </motion.article>

                        <motion.article
                            whileHover={{ y: -6 }}
                            className="relative overflow-hidden rounded-[20px] bg-[#012d1d] md:col-span-2 xl:col-span-2 xl:h-[320px]"
                        >
                            <div className="absolute inset-y-0 left-1/2 right-0 opacity-20">
                                <Image
                                    src="/figma/technology/ccus/green-energy.png"
                                    alt=""
                                    aria-hidden
                                    fill
                                    loading="eager"
                                    unoptimized
                                    sizes="(max-width: 1279px) 50vw, 490px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative flex flex-col gap-4 px-6 py-8 xl:gap-6 xl:px-[40px] xl:py-[48px]">
                                <img src="/figma/technology/ccus/icon-oxygen.svg" alt="" aria-hidden="true" className="size-10" />
                                <div className="pt-2 xl:pt-4">
                                    <h3 className="font-manrope text-[24px] font-bold leading-[30px] text-white xl:text-[30px] xl:leading-[36px]">
                                        Oxygen Generation
                                    </h3>
                                </div>
                                <p className="max-w-[448px] text-[16px] leading-[24px] text-[#86af99] xl:w-[389px] xl:text-[18px] xl:leading-[28px]">
                                    Carbon capture simultaneously produces oxygen through natural biological
                                    processes.
                                </p>
                            </div>
                        </motion.article>
                    </div>
                </div>
            </div>
        </section>
    );
}