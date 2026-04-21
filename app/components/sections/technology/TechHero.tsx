"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function TechHero() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-4 lg:py-[113px]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-[860px] w-full overflow-hidden rounded-[16px] bg-[#d9d9d9] lg:h-[808px] lg:rounded-[40px]"
                >
                    <Image
                        src="/figma/technology/hero.png"
                        alt="AlgaeTree Technology"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 1488px"
                        className="object-cover object-[78%_center] lg:object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
                    {/* Mobile heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="font-nimbus absolute left-4 top-6 text-[26px] font-bold leading-[32px] text-white lg:hidden"
                    >
                        <span className="block">Living hardware for</span>
                        <span className="block">real-time atmospheric repair.</span>
                    </motion.h1>
                    {/* Desktop heading */}
                    <motion.h1
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="font-nimbus absolute left-[106px] top-1/2 hidden max-w-[564px] -translate-y-1/2 text-[40px] font-bold leading-[56px] text-white lg:block"
                    >
                        <span className="block">A SOLUTION THIS</span>
                        <span className="block">PLANET IS LOOKING FOR!</span>
                    </motion.h1>
                </motion.div>
            </div>
        </section>
    );
}
