"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function TeamInspirationSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            aria-labelledby="team-inspiration-heading"
            className="page-px w-full pb-4 sm:pb-8 xl:pb-[60px]"
        >
            <div className="mx-auto flex w-full max-w-[408px] flex-col gap-4 md:max-w-none xl:max-w-[1488px] xl:gap-0">
                <div className="flex flex-col gap-2 px-4 xl:flex-row xl:items-start xl:justify-between xl:gap-6 xl:px-4">
                    <h2
                        id="team-inspiration-heading"
                        className="font-nevera text-[28px] leading-[40px] text-black md:text-[36px] md:leading-[44px] xl:text-[48px] xl:leading-[64px]"
                    >
                        <span className="block xl:hidden">Team Inspiration</span>
                        <span className="hidden xl:block">Team</span>
                        <span className="hidden xl:block">Inspiration</span>
                    </h2>

                    <p className="max-w-[840px] font-nimbus text-[14px] leading-[normal] text-[#686868] md:text-[16px] md:leading-[24px] xl:text-[20px] xl:leading-[28px]">
                        Guided by the philosophy of <strong className="font-bold">“Vasudhaiva Kutumbakam”—the world is one family</strong>,
                        our work reflects a shared responsibility toward people, our country, and the
                        planet we all depend on.
                    </p>
                </div>

                <motion.div className="relative h-[160px] w-full xl:mt-10 xl:h-[400px]">
                    <img
                        src="/figma/team/mobile/inspiration-subtract.png"
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-fill xl:hidden"
                    />
                    <img
                        src="/figma/team/inspiration-shape.png"
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 hidden h-full w-full object-cover xl:block"
                    />

                    <div className="absolute inset-x-[9.5px] top-1/2 flex -translate-y-1/2 items-center gap-[4.661px] xl:hidden">
                        <Image
                            src="/figma/team/mobile/quote-left.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="shrink-0 self-start"
                        />

                        <p className="flex-1 font-nevera text-center text-[16px] uppercase leading-[20px] text-white">
                            Nature’s smallest organisms can restore the planet’s greatest need. clean air.
                        </p>

                        <Image
                            src="/figma/team/mobile/quote-right.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="shrink-0 self-end"
                        />
                    </div>

                    <div className="absolute inset-0 hidden items-center justify-center px-4 sm:px-8 xl:flex xl:px-[132px]">
                        <div className="flex items-center gap-3 sm:gap-4 xl:gap-[17px]">
                            <Image
                                src="/figma/team/quote-left.svg"
                                alt=""
                                width={56}
                                height={56}
                                className="size-7 shrink-0 sm:size-10 xl:size-14"
                            />

                            <p className="max-w-[1079px] font-nevera text-center text-[18px] uppercase leading-[24px] text-white sm:text-[24px] sm:leading-[30px] xl:text-[40px] xl:leading-[48px]">
                                Nature’s smallest organisms can restore the planet’s greatest need. clean air.
                            </p>

                            <Image
                                src="/figma/team/quote-right.svg"
                                alt=""
                                width={56}
                                height={56}
                                className="size-7 shrink-0 sm:size-10 xl:size-14"
                            />
                        </div>
                    </div>

                    <motion.div
                        animate={reduceMotion ? undefined : { y: [0, -5, 0], scale: [1, 1.02, 1] }}
                        transition={
                            reduceMotion
                                ? undefined
                                : {
                                    duration: 3.2,
                                    repeat: Infinity,
                                }
                        }
                        className="absolute bottom-0 right-0 size-[35.645px] xl:size-[130px]"
                    >
                        <img
                            src="/figma/team/inspiration-arrow.svg"
                            alt=""
                            aria-hidden="true"
                            className="h-full w-full object-contain xl:hidden"
                        />
                        <Image src="/figma/team/inspiration-arrow.svg" alt="" fill className="hidden object-contain xl:block" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}