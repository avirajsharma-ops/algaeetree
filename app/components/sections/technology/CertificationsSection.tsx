"use client";

import Image from "next/image";
import { motion } from "motion/react";

const CERTS = [
    { src: "/figma/technology/cert-1.png", alt: "Patent eFiling — NPA filing receipt" },
    { src: "/figma/technology/cert-2.png", alt: "Mushroom World Umbrella Ltd. 14064" },
    { src: "/figma/technology/cert-3.png", alt: "Mushroom World Umbrella Ltd. 14001" },
    { src: "/figma/technology/cert-4.png", alt: "Mushroom World Umbrella Ltd. 10993" },
];

export default function CertificationsSection() {
    return (
        <section className="w-full bg-[#0d1f00]">
            <div className="page-px py-12 lg:py-[120px]">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-nevera text-[32px] leading-[1.1] text-white lg:text-[56px] lg:leading-[72px]"
                >
                    Our Certifications
                </motion.h2>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-10">
                    {CERTS.map((cert, i) => (
                        <motion.div
                            key={cert.alt}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{ scale: 1.02 }}
                            className="flex aspect-[2479/3508] w-full items-center justify-center bg-white p-3"
                        >
                            <div className="relative size-full">
                                <Image
                                    src={cert.src}
                                    alt={cert.alt}
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 342px"
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
