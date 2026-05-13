"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function B2cCallToActionSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-15 md:py-16 xl:py-30">
                <motion.div className="relative mx-auto max-w-372 overflow-hidden rounded-4xl bg-[#151e26] px-6 py-12 sm:px-10 sm:py-14 md:px-16 md:py-16 xl:px-20 xl:py-20">
                    <div className="absolute -left-18 -top-18 size-45 rounded-full bg-[rgba(171,214,0,0.15)] opacity-40 blur-[50px] sm:-left-20 sm:-top-20 sm:size-55 xl:size-64" />
                    <div className="absolute -bottom-18 -right-18 size-45 rounded-full bg-[rgba(171,214,0,0.15)] opacity-40 blur-[50px] sm:-bottom-20 sm:-right-20 sm:size-55 xl:size-64" />

                    <div className="relative flex min-h-70 flex-col items-center justify-center text-center sm:min-h-80 md:min-h-90">
                        <div className="mx-auto flex w-full max-w-190 flex-col items-center gap-5 sm:gap-6 md:gap-8">
                            <h2 className="font-space-grotesk text-[34px] font-bold leading-[1.05] text-white sm:text-[40px] md:text-[48px] md:leading-12">
                                Ready to deploy?
                            </h2>

                            <p className="max-w-173 text-balance font-manrope text-[16px] leading-6.5 text-white/90 sm:text-[18px] sm:leading-7 md:text-[20px] md:leading-7">
                                Best For: Organizations and cities seeking visible climate infrastructure
                                that captures carbon, improves air quality, and supports sustainability
                                goals.
                            </p>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                                <Link
                                    href="/contact"
                                    className="inline-flex min-h-14 w-full items-center justify-center rounded-[9999px] bg-[#2d5a27] px-8 py-4 text-center font-space-grotesk text-[14px] font-bold uppercase tracking-[1.4px] text-[#e8fff0] transition-colors hover:bg-[#234820] sm:min-h-16 sm:min-w-[285.64px] sm:px-10 sm:py-5 sm:text-[16px] sm:tracking-[1.6px]"
                                >
                                    Start Collaboration
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}