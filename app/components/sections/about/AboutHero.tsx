export default function AboutHero() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-4 lg:py-10 xl:py-14">
                <div className="mx-auto flex w-full max-w-[1488px] flex-col items-center gap-6 overflow-hidden rounded-[24px] border-[0.5px] border-[#6c6c6c] bg-white pb-6 sm:pb-8 xl:gap-10 xl:pb-10">
                    {/* Video */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#e0e0e0]">
                        <video
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/figma/about/Hero Section Video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

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
