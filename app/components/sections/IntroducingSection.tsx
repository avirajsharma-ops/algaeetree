import Image from "next/image";

export default function IntroducingSection() {
    return (
        <section className="w-full overflow-hidden bg-white lg:h-[1117px]">
            <div className="page-px flex h-full w-full flex-col items-center justify-center py-16 lg:py-[80px]">
                <div className="flex w-full max-w-[1488px] flex-col items-start gap-10 lg:gap-[56px]">
                    <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] bg-[#f3f4f6] sm:h-[420px] md:h-[560px] lg:h-[700px] lg:rounded-[24px]">
                        <Image
                            src="/figma/introducing-bg.png"
                            alt="AlgaeTree product"
                            fill
                            sizes="(min-width: 1024px) 1488px, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="font-nimbus flex w-full max-w-[1488px] flex-col items-start justify-center gap-4 lg:gap-4">
                        <h2 className="text-[34px] font-normal leading-[1.1] text-[#2d5a27] sm:text-[46px] lg:text-[56px] lg:leading-[64px]">
                            Introducing the Algae Tree
                        </h2>
                        <div className="flex min-w-full flex-col justify-center gap-3 text-[16px] font-normal leading-7 text-[#686868] lg:text-[20px] lg:leading-[28px]">
                            <p>
                                AlgaeTree™ is a self-sustaining urban carbon capture system designed to improve air quality in cities. The unit uses microalgae inside a transparent bioreactor to naturally absorb carbon dioxide and release oxygen through photosynthesis.
                            </p>
                            <p>
                                Air entering the system first passes through a filtration layer that helps reduce harmful particles such as PM2.5 and PM10. The filtered air then interacts with the microalgae culture, where carbon dioxide is captured and converted into biomass while oxygen is released back into the environment.
                            </p>
                            <p>
                                Powered by renewable energy and smart monitoring systems, AlgaeTree™ operates continuously to support cleaner, healthier urban spaces.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
