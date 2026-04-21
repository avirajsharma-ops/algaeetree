"use client";

import { motion } from "motion/react";

const FEATURES = [
    {
        title: "Solar Powered",
        description:
            "Runs on integrated solar energy, enabling clean and sustainable operation without constant external power.",
    },
    {
        title: "Biological Carbon Capture",
        description:
            "Living microalgae naturally absorb carbon dioxide and transform it into oxygen through photosynthesis.",
    },
    {
        title: "Smart Air Purification",
        description:
            "Multi-stage filtration reduces harmful airborne particles before air enters the system.",
    },
    {
        title: "Smart Environmental Monitoring",
        description:
            "Advanced sensors continuously monitor air quality, temperature, and surrounding conditions.",
    },
    {
        title: "AI-Driven System Control",
        description:
            "Adaptive algorithms optimize airflow, lighting, and nutrients for stable algae growth.",
    },
    {
        title: "Connected Monitoring Platform",
        description:
            "Cloud connectivity enables remote performance tracking and environmental insights.",
    },
];

export default function FeaturesGridSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-12 lg:py-[60px]">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-nevera text-[32px] leading-[1.1] text-black lg:text-[56px] lg:leading-[64px]"
                >
                    Features
                </motion.h2>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
                    {FEATURES.map((feature, i) => (
                        <motion.article
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.5,
                                delay: (i % 3) * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{ y: -6 }}
                            className="flex flex-col items-center gap-6 overflow-hidden rounded-[16px] bg-[#f3f4f6] px-4 pb-6 lg:gap-10 lg:px-8 lg:pb-10"
                        >
                            <div className="h-[180px] w-full rounded-[16px] bg-[#d9d9d9] lg:h-[280px]" />
                            <div className="flex w-full flex-col gap-2">
                                <h3 className="font-nimbus text-[20px] font-bold leading-[26px] text-black lg:text-[26px]">
                                    {feature.title}
                                </h3>
                                <p className="font-nimbus text-[16px] leading-[24px] text-black lg:text-[22px] lg:leading-[30px]">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
