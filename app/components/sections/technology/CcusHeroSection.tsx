import Image from "next/image";

export default function CcusHeroSection() {
    return (
        <section className="w-full bg-white">
            <div className="px-4 py-4 md:px-6 md:py-8 xl:px-[120px] xl:py-[113px]">
                <div className="relative mx-auto h-[852px] w-full max-w-[408px] overflow-hidden rounded-[16px] bg-[#0f1514] md:h-[680px] md:max-w-[1488px] md:rounded-[24px] xl:h-[808px] xl:rounded-[40px]">
                    <img
                        src="/figma/technology/ccus/Hero Image - Mobile (1).png"
                        alt="Urban CCUS Infrastructure with AlgaeTree"
                        className="absolute left-[-736px] top-0 h-[900px] w-[1276px] max-w-none md:hidden"
                    />

                    <Image
                        src="/figma/technology/ccus/Hero Image - Desktop.png"
                        alt="Urban CCUS Infrastructure with AlgaeTree"
                        fill
                        priority
                        unoptimized
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) calc(100vw - 48px), 1488px"
                        className="hidden object-cover object-[72%_center] md:block xl:object-center"
                    />

                    <div className="absolute inset-0 hidden md:block bg-gradient-to-r md:from-black/90 md:via-black/55 md:to-black/15" />

                    <div className="absolute bottom-6 left-[18px] flex w-[calc(100%-36px)] max-w-[372px] items-start gap-4 md:hidden">
                        <div className="w-[7px] shrink-0 self-stretch rounded-[8px] bg-white" />

                        <div className="flex flex-1 flex-col gap-4">
                            <h1 className="font-nimbus text-[26px] font-bold leading-[32px] text-white">
                                Urban CCUS Infrastructure with AlgaeTree™
                            </h1>

                            <div className="font-nimbus text-[14px] leading-[21px] text-[#d0d0d0]">
                                <p className="mb-[6px]">
                                    AlgaeTree™ delivers a next-generation biological CCUS (Carbon Capture,
                                    Utilization &amp; Storage) system designed for urban and industrial
                                    environments.
                                </p>
                                <p className="mb-[6px]">
                                    Using advanced microalgae photobioreactor technology, AlgaeTree captures
                                    atmospheric CO₂ directly from polluted environments such as roads,
                                    highways, industrial zones, and dense urban areas.
                                </p>
                                <p>
                                    Each AlgaeTree unit continuously absorbs carbon dioxide through
                                    photosynthesis while releasing oxygen back into the surrounding
                                    atmosphere — creating living carbon sinks within city infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-x-4 bottom-6 hidden items-start gap-4 md:left-10 md:right-auto md:top-1/2 md:flex md:max-w-[741px] md:-translate-y-1/2 md:gap-6 xl:left-[106px] xl:gap-8">
                        <div className="min-h-[300px] w-[6px] shrink-0 self-stretch rounded-[8px] bg-white xl:min-h-[352px] xl:w-[7px]" />

                        <div className="flex max-w-[702px] flex-col gap-4 xl:gap-6">
                            <h1 className="font-nimbus text-[34px] font-bold leading-[44px] text-white xl:w-[564px] xl:text-[40px] xl:leading-[56px]">
                                Urban CCUS Infrastructure with AlgaeTree™
                            </h1>

                            <div className="font-nimbus space-y-3 text-[16px] leading-[24px] text-[#d0d0d0] xl:text-[20px] xl:leading-[28px]">
                                <p>
                                    AlgaeTree™ delivers a next-generation biological CCUS (Carbon Capture,
                                    Utilization &amp; Storage) system designed for urban and industrial
                                    environments.
                                </p>
                                <p>
                                    Using advanced microalgae photobioreactor technology, AlgaeTree captures
                                    atmospheric CO₂ directly from polluted environments such as roads,
                                    highways, industrial zones, and dense urban areas.
                                </p>
                                <p>
                                    Each AlgaeTree unit continuously absorbs carbon dioxide through
                                    photosynthesis while releasing oxygen back into the surrounding
                                    atmosphere — creating living carbon sinks within city infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}