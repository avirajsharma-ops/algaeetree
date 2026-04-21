"use client";

import { motion } from "motion/react";

const STATS = [
    {
        title: ["CO₂ Captured", "Per Year"],
        big: "~700",
        unit: "kg",
    },
    {
        title: ["Oxygen Released", "Per Year"],
        big: "~1.0",
        unit: "Ton",
    },
    {
        title: ["Particulate", "Matter Reduction"],
        big: "45-70",
        unit: "Percent",
    },
    {
        title: ["Local AQI", "Improvement"],
        big: "10-15",
        unit: "Point",
    },
];

function HeaderBlock() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
        >
            <div className="flex items-start gap-4 lg:gap-12">
                <div className="w-[6px] shrink-0 self-stretch rounded-[8px] bg-white lg:w-[7px]" />
                <h2 className="font-nevera text-[28px] leading-[32px] text-white lg:font-medium lg:uppercase lg:text-[56px] lg:leading-[64px]">
                    Sustainability Data
                </h2>
            </div>
            <p className="font-nimbus max-w-[690px] text-[14px] leading-[22px] text-[#ededed] lg:text-[20px] lg:leading-[28px]">
                AlgaeTree™ uses microalgae, one of nature&rsquo;s most efficient
                carbon-capturing organisms to reduce atmospheric carbon and improve urban
                air quality. Through continuous photosynthesis, the system converts carbon
                dioxide into oxygen and biomass while operating on renewable energy and a
                closed-loop nutrient system. This enables long-term carbon capture with
                minimal environmental footprint.
            </p>
        </motion.div>
    );
}

function RealLifeDataCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full flex-col items-start justify-center rounded-[16px] bg-white px-4 py-8 lg:h-[400px] lg:items-center lg:rounded-[40px] lg:p-10 lg:text-center"
        >
            <h3 className="font-nimbus text-[40px] leading-tight text-black lg:text-[56px] lg:leading-[64px]">
                Real Life Data
            </h3>
            <p className="font-nimbus mt-2 max-w-[1100px] text-[14px] leading-[22px] text-[#2d2d2d] lg:mt-4 lg:text-[20px] lg:leading-[28px] lg:text-[#686868]">
                Field simulations and laboratory studies show that microalgae-based
                systems can capture carbon significantly faster than terrestrial plants.
                A single AlgaeTree™ unit is designed to capture up to ~1.8&ndash;2 kg of
                CO₂ per day, equivalent to approximately 650&ndash;700 kg annually, while
                also helping reduce particulate pollution in the surrounding air.
            </p>
        </motion.div>
    );
}

function StatGrid() {
    return (
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {STATS.map((stat, i) => (
                <motion.div
                    key={stat.title.join(" ")}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                        duration: 0.5,
                        delay: i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6 }}
                    className="flex h-[200px] flex-col gap-2 rounded-[24px] bg-white p-4 lg:h-[400px] lg:rounded-[40px] lg:p-10"
                >
                    <h4 className="font-nimbus text-[16px] font-bold leading-[24px] text-[#3c3c3c] lg:text-[24px] lg:leading-[34px]">
                        {stat.title.map((line) => (
                            <span key={line} className="block">
                                {line}
                            </span>
                        ))}
                    </h4>
                    <div className="mt-auto flex items-end leading-none text-black">
                        <span className="font-['Poppins',_sans-serif] text-[48px] lg:text-[88px]">
                            {stat.big}
                        </span>
                        <span className="ml-1.5 mb-1 font-['Poppins',_sans-serif] text-[20px] lg:text-[48px]">
                            {stat.unit}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default function SustainabilitySection() {
    return (
        <>
            {/* Mobile: dark inner card with all content nested */}
            <section className="w-full bg-white px-4 py-4 lg:hidden">
                <div className="relative flex w-full flex-col items-center gap-10 overflow-hidden rounded-[16px] bg-[#0d1f00] px-4 py-8">
                    {/* decorative ellipse */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -left-32 -top-32 size-[420px] rounded-full"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(0,168,166,0.28) 0%, rgba(13,31,0,0) 70%)",
                        }}
                    />
                    <div className="relative w-full">
                        <HeaderBlock />
                    </div>
                    <div className="relative w-full">
                        <RealLifeDataCard />
                    </div>
                    <div className="relative w-full">
                        <StatGrid />
                    </div>
                </div>
            </section>

            {/* Desktop: full-bleed dark section */}
            <section className="relative hidden w-full overflow-hidden bg-[#0d1f00] lg:block">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -left-[40%] top-[-15%] size-[1076px] rounded-full opacity-50"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 30%, rgba(0,168,166,0.35) 0%, rgba(13,31,0,0) 70%)",
                    }}
                />
                <div className="page-px relative flex flex-col gap-20 py-[60px]">
                    <HeaderBlock />
                    <RealLifeDataCard />
                    <StatGrid />
                </div>
            </section>
        </>
    );
}
