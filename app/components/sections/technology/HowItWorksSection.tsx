"use client";

import Image from "next/image";
import { motion } from "motion/react";

const STEPS = [
    {
        number: "1",
        image: "/figma/technology/step-1.png",
        title: ["Air", "Intake"],
        description: "Urban air is drawn into the system through a controlled intake.",
    },
    {
        number: "2",
        image: "/figma/technology/step-2.png",
        title: ["Particulate", "Filtration"],
        description: "PM2.5 and PM10 pollutants are filtered before entering the biological chamber.",
    },
    {
        number: "3",
        image: "/figma/technology/step-3.png",
        title: ["Microalgae", "Carbon Capture"],
        description: "Microalgae absorb CO₂ through photosynthesis and convert it into biomass.",
    },
    {
        number: "4",
        image: "/figma/technology/step-4.png",
        title: ["Oxygen", "Release"],
        description: "Cleaned air with oxygen is released back into the surrounding environment.",
    },
    {
        number: "5",
        image: "/figma/technology/step-5.png",
        title: ["Continuous", "Monitoring"],
        description: "AI-driven sensors track air quality and optimize system performance.",
    },
];

const stepGradient =
    "linear-gradient(96.18deg, rgb(0,168,166) 5.23%, rgb(5,84,83) 95.99%)";

export default function HowItWorksSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-12 lg:py-[120px]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex w-full items-start gap-6 lg:gap-12"
                >
                    <div className="self-stretch w-[5px] shrink-0 rounded-[8px] bg-black lg:w-[7px]" />
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <h2 className="font-nevera text-[32px] leading-[1.1] text-black lg:text-[56px] lg:leading-[64px]">
                            How AlgaeTree Works
                        </h2>
                        <p className="font-nimbus max-w-[593px] text-[15px] leading-[22px] text-[#686868] lg:text-[20px] lg:leading-[28px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris ligula consectetur, ultrices mauris.
                        </p>
                    </div>
                </motion.div>

                <div className="relative mt-10 lg:mt-20">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-[6%] right-[6%] top-[calc(246px+60px)] hidden h-[3px] lg:block"
                        style={{
                            background:
                                "linear-gradient(to right, rgba(0,244,208,0) 0%, #00f4d0 50%, rgba(0,244,208,0) 100%)",
                        }}
                    />
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-16 lg:gap-y-10">
                        {STEPS.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="flex flex-col items-center gap-4 text-center"
                            >
                                <div className="relative aspect-square w-full max-w-[246px]">
                                    <Image
                                        src={step.image}
                                        alt={step.title.join(" ")}
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 246px"
                                        className="object-cover"
                                    />
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                                    className="relative flex size-[100px] items-center justify-center rounded-full shadow-[0px_30px_37.5px_-7.5px_rgba(0,0,0,0.1),0px_12px_15px_-9px_rgba(0,0,0,0.1)] lg:size-[120px]"
                                    style={{ backgroundImage: stepGradient }}
                                >
                                    <span className="font-bold text-white text-[36px] leading-none lg:text-[45px]">
                                        {step.number}
                                    </span>
                                </motion.div>
                                <h3 className="text-[20px] font-bold leading-[26px] text-black lg:text-[24px] lg:leading-[28px]">
                                    {step.title.map((line) => (
                                        <span key={line} className="block">
                                            {line}
                                        </span>
                                    ))}
                                </h3>
                                <p className="text-[15px] leading-[22px] text-black lg:text-[18px] lg:leading-[24px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
