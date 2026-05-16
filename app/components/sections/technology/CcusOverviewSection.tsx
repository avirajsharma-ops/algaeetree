import Image from "next/image";

export default function CcusOverviewSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-10 md:py-14 xl:py-[120px]">
                {/* Mobile */}
                <div className="mx-auto flex max-w-[408px] flex-col gap-[56px] md:hidden">
                    <div className="relative h-[408px] w-full">
                        <Image
                            src="/figma/technology/ccus/overview-shape.webp"
                            alt="AlgaeTree unit illuminated on a city street at night"
                            fill
                            sizes="(max-width: 767px) 100vw, 408px"
                            className="object-contain"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-space-grotesk text-[28px] font-medium leading-[32px] uppercase text-black">
                            <span className="block">Advanced Microalgae</span>
                            <span className="block">Carbon Capture for</span>
                            <span className="block">Urban Emission Sources</span>
                        </h2>

                        <div className="font-nimbus text-[14px] leading-[20px] text-[#686868]">
                            <p className="mb-3">
                                Unlike traditional CCUS systems designed only for large industrial plants,
                                AlgaeTree™ enables distributed carbon capture networks that operate directly
                                within cities.
                            </p>
                            <p className="mb-3">
                                The system combines microalgae bioreactors, air filtration,
                                environmental sensors, and renewable energy to capture carbon while
                                improving urban air quality.
                            </p>
                            <p>
                                A single AlgaeTree™ unit can capture approximately ~700 kg of CO₂ per year
                                while releasing up to ~1 ton of oxygen, helping reduce pollution where
                                people live and work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop / Tablet */}
                <div className="mx-auto hidden max-w-[1488px] md:flex flex-col gap-12">
                    <div className="flex items-center gap-12">
                        <div className="flex min-w-0 flex-1 flex-col gap-4">
                            <h2 className="font-space-grotesk text-[40px] font-medium leading-[44px] uppercase text-black xl:text-[56px] xl:leading-[64px]">
                                <span className="block">Advanced Microalgae</span>
                                <span className="block">Carbon Capture for</span>
                                <span className="block">Urban Emission Sources</span>
                            </h2>

                            <div className="font-nimbus text-[20px] leading-[28px] text-[#686868]">
                                <p className="mb-3">
                                    Unlike traditional CCUS systems designed only for large industrial
                                    plants, AlgaeTree™ enables distributed carbon capture networks that
                                    operate directly within cities.
                                </p>
                                <p className="mb-3">
                                    The system combines microalgae bioreactors, air filtration,
                                    environmental sensors, and renewable energy to capture carbon while
                                    improving urban air quality.
                                </p>
                                <p>
                                    A single AlgaeTree™ unit can capture approximately ~700 kg of CO₂ per
                                    year while releasing up to ~1 ton of oxygen, helping reduce pollution
                                    where people live and work.
                                </p>
                            </div>
                        </div>

                        <div className="shrink-0">
                            <div className="h-[650px] w-[650px] relative">
                                <Image
                                    src="/figma/technology/ccus/overview-shape.webp"
                                    alt="AlgaeTree unit illuminated on a city street at night"
                                    fill
                                    loading="eager"
                                    sizes="650px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
