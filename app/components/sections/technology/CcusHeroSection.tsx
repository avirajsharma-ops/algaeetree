import Image from "next/image";

export default function CcusHeroSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-4 lg:py-10 xl:py-14">
                <div className="relative mx-auto aspect-[816/1704] w-full max-w-[1488px] overflow-hidden rounded-[16px] bg-[#0f1514] sm:aspect-[2976/1616] md:rounded-[24px] xl:rounded-[40px]">
                    <Image
                        src="/figma/technology/ccus/Hero Image - Mobile (1).png"
                        alt="Urban CCUS Infrastructure with AlgaeTree"
                        fill
                        priority
                        unoptimized
                        sizes="(max-width: 767px) calc(100vw - 32px), 0px"
                        className="object-cover object-bottom sm:hidden"
                    />

                    <Image
                        src="/figma/technology/ccus/Hero Image - Desktop.png"
                        alt="Urban CCUS Infrastructure with AlgaeTree"
                        fill
                        priority
                        unoptimized
                        sizes="(min-width: 1728px) 1488px, (min-width: 1280px) calc(100vw - 240px), (min-width: 768px) calc(100vw - 48px), 0px"
                        className="hidden object-cover object-[72%_bottom] sm:block"
                    />

                    <div aria-hidden className="pointer-events-none absolute inset-0">
                        <div
                            className="absolute inset-0 md:hidden"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(5, 9, 9, 0.02) 0%, rgba(5, 9, 9, 0.08) 42%, rgba(5, 9, 9, 0.46) 64%, rgba(5, 9, 9, 0.84) 82%, rgba(4, 7, 7, 0.96) 100%), linear-gradient(90deg, rgba(4, 8, 7, 0.5) 0%, rgba(4, 8, 7, 0.22) 36%, rgba(4, 8, 7, 0) 72%), radial-gradient(120% 78% at 18% 100%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 46%, rgba(0, 0, 0, 0) 74%)",
                            }}
                        />

                        <div
                            className="absolute inset-0 hidden md:block"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(4, 7, 7, 0.94) 0%, rgba(6, 11, 10, 0.82) 24%, rgba(8, 15, 14, 0.48) 44%, rgba(8, 15, 14, 0.16) 62%, rgba(8, 15, 14, 0) 78%), linear-gradient(180deg, rgba(4, 7, 7, 0.22) 0%, rgba(4, 7, 7, 0.08) 38%, rgba(4, 7, 7, 0.42) 100%)",
                            }}
                        />

                        <div
                            className="absolute inset-y-0 left-0 hidden w-[58%] md:block"
                            style={{
                                background:
                                    "radial-gradient(circle at 18% 52%, rgba(14, 21, 20, 0.34) 0%, rgba(14, 21, 20, 0.22) 44%, rgba(14, 21, 20, 0) 2%)",
                            }}
                        />
                    </div>

                    <div className="absolute inset-x-4 bottom-6 flex max-w-[372px] items-start gap-4 md:hidden">
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

                    <div className="absolute left-[clamp(24px,5vw,106px)] right-4 bottom-6 hidden items-start gap-4 md:top-1/2 md:flex md:max-w-[741px] md:-translate-y-1/2 md:gap-6 xl:gap-8">
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