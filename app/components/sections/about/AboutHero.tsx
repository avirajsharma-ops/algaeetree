export default function AboutHero() {
    return (
        <section className="w-full bg-white">
            <div className="px-4 py-4 sm:px-6 sm:py-6 xl:px-[120px] xl:py-[113px]">
                <div className="flex w-full flex-col items-center gap-6 overflow-hidden rounded-[24px] border-[0.5px] border-[#6c6c6c] bg-white pb-6 sm:pb-8 xl:gap-10 xl:pb-10">
                    {/* Video placeholder */}
                    <div className="relative aspect-[408/501] w-full overflow-hidden bg-[#e0e0e0] md:aspect-[720/460] xl:h-[600px] xl:aspect-auto">
                        <div className="font-nimbus absolute inset-0 flex items-center justify-center text-[18px] leading-[28px] text-[#9ca3af]">
                            Journey Video Placeholder
                        </div>
                    </div>

                    {/* Title + body */}
                    <div className="flex min-h-[303px] w-full items-center gap-4 px-4 sm:px-6 xl:min-h-0 xl:gap-12 xl:px-16">
                        <div className="h-full min-h-[303px] w-[6px] shrink-0 rounded-[8px] bg-[#2d5a27] xl:min-h-0 xl:w-[7px]" />
                        <div className="flex flex-1 flex-col gap-4 py-1">
                            <h1 className="font-nevera text-[28px] leading-[32px] text-[#2d5a27] md:text-[40px] md:leading-[44px] xl:text-[56px] xl:leading-[64px]">
                                About Us
                            </h1>
                            <div className="font-nimbus text-[14px] leading-[normal] text-[#686868] md:text-[16px] md:leading-[24px] xl:text-[20px] xl:leading-[28px]">
                                <p>
                                    Urban air pollution and rising carbon emissions have become one of the
                                    defining environmental challenges of our time. With global emissions
                                    surpassing 37.8 billion tonnes in 2024, cities urgently need scalable
                                    solutions capable of addressing air quality at the source.
                                </p>
                                <p>
                                    AlgaeTree™ is a self-sustaining microalgae-based carbon capture system
                                    designed for urban environments. Using high-efficiency photobioreactor
                                    technology, each unit captures up to ~2 kg of CO₂ per day, filters
                                    airborne pollutants, and releases oxygen back into the surrounding
                                    atmosphere.
                                </p>
                                <p>
                                    Powered by integrated renewable energy systems and intelligent
                                    monitoring, AlgaeTree™ operates as an independent, living carbon sink
                                    helping cities move toward cleaner and more resilient urban environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
