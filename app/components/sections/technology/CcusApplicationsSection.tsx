"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const APPLICATIONS = [
    {
        title: "Roads & Traffic Corridors",
        description: "Capture carbon emissions from vehicles across busy city roads and intersections.",
        image: "/figma/technology/ccus/application-roads-v2.webp",
        desktopSpan: "xl:col-span-2",
    },
    {
        title: "Highways & Transport Networks",
        description: "Reduce pollution along high-traffic highways and logistics corridors.",
        image: "/figma/technology/ccus/application-highways-v2.webp",
        desktopSpan: "xl:col-span-2",
    },
    {
        title: "Industrial Zones",
        description: "Support carbon reduction near manufacturing plants, refineries, and industrial parks.",
        image: "/figma/technology/ccus/application-industrial-v2.webp",
        desktopSpan: "xl:col-span-2",
    },
    {
        title: "Smart City Infrastructure",
        description: "Integrate AlgaeTree™ systems into smart city climate and sustainability initiatives.",
        image: "/figma/technology/ccus/application-smart-city-v2.webp",
        desktopSpan: "xl:col-span-3",
    },
    {
        title: "Public Spaces & Campuses",
        description: "Deploy in parks, public plazas, and university campuses to improve urban air quality.",
        image: "/figma/technology/ccus/application-public-spaces-v2.webp",
        desktopSpan: "xl:col-span-3",
    },
];

function MobileSwiper() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = useCallback((index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.children[index] as HTMLElement;
        if (!card) return;
        track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(track.children).indexOf(entry.target as HTMLElement);
                        if (index !== -1) setActiveIndex(index);
                    }
                });
            },
            { root: track, threshold: 0.6 }
        );

        Array.from(track.children).forEach((child) => observer.observe(child));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col gap-5">
            {/* Scrollable track */}
            <div
                ref={trackRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ paddingLeft: "var(--page-px, 1.25rem)", paddingRight: "var(--page-px, 1.25rem)" }}
            >
                {APPLICATIONS.map((application) => (
                    <article
                        key={application.title}
                        className="w-[78vw] max-w-[300px] flex-none snap-start overflow-hidden rounded-[16px] bg-[#f3f4f6]"
                    >
                        <div className="relative h-[180px] w-full">
                            <Image
                                src={application.image}
                                alt={application.title}
                                fill
                                sizes="78vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 px-4 py-4">
                            <h3 className="font-nimbus text-[17px] font-bold leading-[22px] text-black">
                                {application.title}
                            </h3>
                            <p className="font-nimbus text-[14px] leading-[20px] text-black">
                                {application.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2">
                {APPLICATIONS.map((application, i) => (
                    <button
                        key={application.title}
                        aria-label={`Go to ${application.title}`}
                        onClick={() => scrollToIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-white" : "w-2 bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function CcusApplicationsSection() {
    return (
        <section className="w-full bg-[#0f2200]">
            {/* ── Mobile: heading + swiper ── */}
            <div className="flex flex-col gap-8 py-12 md:hidden">
                <h2 className="page-px font-space-grotesk text-[28px] leading-[36px] text-white">
                    <span className="block">Urban Carbon</span>
                    <span className="block">Capture Applications</span>
                </h2>
                <MobileSwiper />
            </div>

            {/* ── Tablet / Desktop: grid ── */}
            <div className="page-px hidden py-8 sm:py-10 md:block xl:py-[120px]">
                <div className="mx-auto flex w-full max-w-[1488px] flex-col gap-10 xl:gap-16">
                    <h2 className="font-space-grotesk text-[32px] leading-[40px] text-white md:max-w-[520px] md:text-[42px] md:leading-[50px] xl:max-w-[753px] xl:text-[56px] xl:leading-[72px]">
                        <span className="block">Urban Carbon</span>
                        <span className="block">Capture Applications</span>
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6 xl:gap-8">
                        {APPLICATIONS.map((application, index) => (
                            <motion.article
                                key={application.title}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.25, ease: "easeOut", delay: index * 0.03 }}
                                className={`${application.desktopSpan} flex flex-col overflow-hidden rounded-[16px] bg-[#f3f4f6]`}
                            >
                                <div className="relative h-[220px] w-full xl:h-[280px]">
                                    <Image
                                        src={application.image}
                                        alt={application.title}
                                        fill
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 475px"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 px-6 py-6 xl:px-8 xl:py-10">
                                    <h3 className="font-nimbus text-[22px] font-bold leading-[28px] text-black xl:text-[26px] xl:leading-[31px]">
                                        {application.title}
                                    </h3>
                                    <p className="font-nimbus text-[16px] leading-[24px] text-black xl:text-[20px] xl:leading-[24px]">
                                        {application.description}
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