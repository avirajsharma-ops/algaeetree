"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function B2cCallToActionSection() {
    return (
        <section className="w-full bg-white">
            <div className="px-4 py-[60px] md:px-6 md:py-16 xl:px-[120px] xl:py-[120px]">
                <motion.div className="relative mx-auto h-[408px] max-w-[408px] overflow-hidden rounded-[32px] bg-[#151e26] p-[80px] md:h-auto md:max-w-[1488px] md:p-[80px]">
                    <div className="absolute left-[-80px] top-[-80px] size-[256px] rounded-full bg-[rgba(171,214,0,0.15)] opacity-40 blur-[50px]" />
                    <div className="absolute bottom-[-80px] right-[-80px] size-[256px] rounded-full bg-[rgba(171,214,0,0.15)] opacity-40 blur-[50px]" />

                    <div className="relative flex h-full items-center justify-center md:hidden">
                        <div className="relative h-[248px] w-[248px] overflow-visible">
                            <h2 className="absolute left-1/2 top-0 w-[408.69px] -translate-x-1/2 text-center font-space-grotesk text-[48px] font-bold leading-[48px] text-white">
                                Ready to deploy?
                            </h2>

                            <p className="absolute left-1/2 top-20 w-[692.82px] -translate-x-1/2 text-center font-manrope text-[20px] leading-[28px] text-white/90">
                                Best For: Organizations and cities seeking visible climate infrastructure
                                that captures carbon, improves air quality, and supports sustainability
                                goals.
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="absolute left-1/2 top-[184px] w-[285.64px] -translate-x-1/2"
                            >
                                <Link
                                    href="/contact"
                                    className="inline-flex min-h-16 w-full items-center justify-center rounded-[9999px] bg-[#2d5a27] px-10 py-5 font-space-grotesk text-[16px] font-bold uppercase tracking-[1.6px] text-[#e8fff0] transition-colors hover:bg-[#234820]"
                                >
                                    Start Collaboration
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    <div className="relative hidden flex-col items-center gap-8 text-center md:flex">
                        <h2 className="font-space-grotesk text-[48px] font-bold leading-[48px] text-white">
                            Ready to deploy?
                        </h2>

                        <p className="max-w-[692px] font-manrope text-[20px] leading-[28px] text-white/90">
                            Best For: Organizations and cities seeking visible climate infrastructure
                            that captures carbon, improves air quality, and supports sustainability
                            goals.
                        </p>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/contact"
                                className="inline-flex min-h-16 min-w-[285.64px] items-center justify-center rounded-[9999px] bg-[#2d5a27] px-10 py-5 font-space-grotesk text-[16px] font-bold uppercase tracking-[1.6px] text-[#e8fff0] transition-colors hover:bg-[#234820]"
                            >
                                Start Collaboration
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}