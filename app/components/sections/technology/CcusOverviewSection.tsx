import Image from "next/image";

export default function CcusOverviewSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px xl:py-[79px]">
                <div className="mx-auto flex max-w-[408px] flex-col gap-4 py-10 md:hidden">
                    <div className="relative aspect-square w-full">
                        <Image
                            src="/figma/technology/ccus/overview-shape.png"
                            alt="AlgaeTree unit illuminated on a city street at night"
                            fill
                            sizes="408px"
                            className="object-contain"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-space-grotesktext-[28px] leading-[36px] text-black">
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
                            <p className="mb-3">
                                A single AlgaeTree™ unit can capture approximately ~700 kg of CO₂ per year
                                while releasing up to ~1 ton of oxygen, helping reduce pollution where
                                people live and work.
                            </p>
                            <p>
                                This approach allows cities to integrate carbon capture into roads,
                                highways, smart city infrastructure, and public spaces without requiring
                                massive industrial facilities.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto hidden w-full max-w-[1488px] gap-6 md:grid md:grid-cols-[minmax(0,1fr)_220px] md:items-start xl:grid-cols-[806px_650px] xl:gap-8">
                    <div className="md:block xl:self-center">
                        <h2 className="font-space-grotesktext-[40px] leading-[48px] text-black xl:text-[48px] xl:leading-[72px]">
                            <span className="block">Advanced Microalgae</span>
                            <span className="block">Carbon Capture for</span>
                            <span className="block">Urban Emission Sources</span>
                        </h2>

                        <div className="pt-4 xl:pt-4">
                            <div className="font-nimbus space-y-3 text-[16px] leading-[24px] text-[#686868] xl:text-[20px] xl:leading-[28px]">
                                <p>
                                    Unlike traditional CCUS systems designed only for large industrial plants,
                                    AlgaeTree™ enables distributed carbon capture networks that operate
                                    directly within cities.
                                </p>
                                <p>
                                    The system combines microalgae bioreactors, air filtration,
                                    environmental sensors, and renewable energy to capture carbon while
                                    improving urban air quality.
                                </p>
                                <p>
                                    A single AlgaeTree™ unit can capture approximately ~700 kg of CO₂ per
                                    year while releasing up to ~1 ton of oxygen, helping reduce pollution
                                    where people live and work.
                                </p>
                                <p>
                                    This approach allows cities to integrate carbon capture into roads,
                                    highways, smart city infrastructure, and public spaces without requiring
                                    massive industrial facilities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden h-[360px] w-full md:block xl:h-[650px] xl:w-[650px]">
                        <Image
                            src="/figma/technology/ccus/overview-shape.png"
                            alt="AlgaeTree unit illuminated on a city street at night"
                            fill
                            loading="eager"
                            sizes="(max-width: 1279px) 360px, 650px"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}