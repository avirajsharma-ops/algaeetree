"use client";

import Image from "next/image";
import { motion } from "motion/react";

const SOCIAL_CARDS = [
    {
        href: "https://in.linkedin.com/company/algaetree",
        icon: "/figma/contact/linkedin-fill.svg",
        iconAlt: "LinkedIn icon",
        title: "LinkedIn · algaetree",
    },
    {
        href: "https://www.instagram.com/algae.tree_official/",
        icon: "/figma/contact/instagram.svg",
        iconAlt: "Instagram icon",
        title: "Instagram · algae.tree_official",
    },
    {
        href: "https://youtube.com/@algaetree",
        icon: "/figma/contact/g10.png",
        iconAlt: "YouTube icon",
        title: "YouTube · @AlgaeTree",
    },
];

export default function SocialHandlesSection() {
    return (
        <section className="w-full px-4 py-8 sm:px-6 sm:py-10 xl:px-[120px] xl:py-[60px]">
            <div className="mx-auto flex w-full max-w-[1488px] flex-col overflow-hidden rounded-[24px] border-[0.5px] border-[#6c6c6c] bg-white pt-6 sm:pt-8 xl:gap-[40px] xl:pt-[40px]">
                <div className="flex flex-col gap-4 px-4 sm:px-8 xl:flex-row xl:items-center xl:justify-between xl:px-[64px]">
                    <div className="flex items-center gap-4 xl:gap-[48px]">
                        <div className="h-[96px] w-[6px] shrink-0 rounded-[8px] bg-[#2d5a27] xl:h-[128px] xl:w-[7px]" />
                        <h2 className="font-space-grotesk xl:uppercase text-[32px] leading-[36px] text-[#2d5a27] sm:text-[40px] sm:leading-[44px] xl:text-[56px] xl:leading-[64px]">
                            Social Handles
                        </h2>
                    </div>

                    <p className="max-w-[651px] font-nimbus text-[14px] leading-[21px] text-[#686868] sm:text-[16px] sm:leading-[24px] xl:text-[20px] xl:leading-[28px]">
              You’ll find more than just updates here. We share what we’re building, what we’re learning, and what’s changing in the world of climate tech and urban design. If this space interests you, you’ll probably enjoy following along.
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-4 bg-gradient-to-b from-white to-[#5e9357] px-4 py-8 sm:grid-cols-2 sm:px-8 sm:py-12 xl:grid-cols-3 xl:gap-[24px] xl:px-[64px] xl:py-[120px]">
                    {SOCIAL_CARDS.map((card, index) => (
                        <motion.a
                            key={card.title}
                            href={card.href}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -6, scale: 1.015 }}
                            transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.06 }}
                            className={`${index === SOCIAL_CARDS.length - 1 ? "sm:col-span-2 xl:col-span-1" : ""} flex h-[240px] items-center justify-center rounded-[16px] bg-white p-6 sm:h-[280px] xl:h-[304px]`}
                        >
                            <div className="flex flex-col items-center gap-4">
                                <Image
                                    src={card.icon}
                                    alt={card.iconAlt}
                                    width={120}
                                    height={120}
                                    loading="eager"
                                    className="h-[96px] w-[96px] object-contain xl:h-[120px] xl:w-[120px]"
                                />
                                <p className="font-nimbus text-center text-[20px] leading-[24px] text-black xl:text-[24px] xl:leading-[29px]">
                                    {card.title}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}