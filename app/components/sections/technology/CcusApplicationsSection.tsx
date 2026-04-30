"use client";

import Image from "next/image";
import { motion } from "motion/react";

const APPLICATIONS = [
    {
        title: "Roads & Traffic Corridors",
        description: "Capture carbon emissions from vehicles across busy city roads and intersections.",
        image: "/figma/technology/ccus/application-roads-v2.png",
        desktopSpan: "xl:col-span-2",
    },
    {
        title: "Highways & Transport Networks",
        description: "Reduce pollution along high-traffic highways and logistics corridors.",
        image: "/figma/technology/ccus/application-highways-v2.png",
        desktopSpan: "xl:col-span-2",
    },
    {
        title: "Industrial Zones",
        description: "Support carbon reduction near manufacturing plants, refineries, and industrial parks.",
        image: "/figma/technology/ccus/application-industrial-v2.png",
        desktopSpan: "xl:col-span-2",
    },
    {
        title: "Smart City Infrastructure",
        description: "Integrate AlgaeTree™ systems into smart city climate and sustainability initiatives.",
        image: "/figma/technology/ccus/application-smart-city-v2.png",
        desktopSpan: "xl:col-span-3",
    },
    {
        title: "Public Spaces & Campuses",
        description: "Deploy in parks, public plazas, and university campuses to improve urban air quality.",
        image: "/figma/technology/ccus/application-public-spaces-v2.png",
        desktopSpan: "xl:col-span-3",
    },
];

const MOBILE_STATS = [
    { value: "12", label: ["Hours Backup", "(Battery)"] },
    { value: "24/7", label: ["Telemetry &", "System Uptime"] },
    { value: "2.5", label: ["KWh/day", "Typical Draw*"] },
    { value: "1", label: ["Sources", "(Solar)"] },
];

function MobileStatCircle({ value, label }: { value: string; label: string[] }) {
    return (
        <div className="flex flex-col items-center gap-[26px]">
            <div className="relative size-[166px]">
                <span className="absolute inset-0 rounded-full border border-white/85" aria-hidden />
                <span className="absolute inset-[11px] rounded-full border border-white/50" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-nimbus text-[42px] leading-none text-white">{value}</span>
                </div>
            </div>

            <p className="font-nimbus text-center text-[16px] font-bold leading-[20px] tracking-[0.6416px] text-white">
                {label.map((line) => (
                    <span key={line} className="block">
                        {line}
                    </span>
                ))}
            </p>
        </div>
    );
}

export default function CcusApplicationsSection() {
    return (
        <section className="w-full bg-[#0f2200]">
            <div className="page-px mx-auto flex w-full max-w-[440px] flex-col gap-20 py-12 md:hidden">
                <h2 className="font-space-grotesk text-[28px] leading-[36px] text-white">
                    <span className="block">Urban Carbon</span>
                    <span className="block">Capture Applications</span>
                </h2>

                <div className="grid w-full max-w-[372px] grid-cols-2 gap-x-10 gap-y-10 self-center">
                    {MOBILE_STATS.map((stat) => (
                        <MobileStatCircle key={stat.value} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>

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