import Image from "next/image";

export default function IntroducingSection() {
    return (
        <section className="w-full overflow-hidden bg-white lg:h-[1117px]">
            <div className="flex flex-col items-center px-4 py-6 lg:hidden">
                <div className="flex w-full flex-col gap-6">
                    <div className="relative h-[539px] w-full overflow-hidden rounded-[24px] bg-[#f3f4f6]">
                        <img
                            src="/figma/introducing-bg.png"
                            alt="AlgaeTree product"
                            className="absolute left-1/2 top-0 h-[539px] w-[1146px] max-w-none -translate-x-1/2 object-cover"
                        />
                    </div>

                    <div className="font-nimbus flex w-full flex-col items-start gap-4">
                        <h2 className="text-[40px] leading-[1] text-[#2d5a27]">
                            <span className="block">Introducing</span>
                            <span className="block">the Algae Tree</span>
                        </h2>
                        <div className="text-[14px] leading-normal text-[#686868]">
                            <p className="mb-3">AlgaeTree™ is a self-sustaining urban carbon capture system designed to improve air quality in cities. The unit uses microalgae inside a transparent bioreactor to naturally absorb carbon dioxide and release oxygen through photosynthesis.</p>
                            <p className="mb-3">Air entering the system first passes through a filtration layer that helps reduce harmful particles such as PM2.5 and PM10. The filtered air then interacts with the microalgae culture, where carbon dioxide is captured and converted into biomass while oxygen is released back into the environment.</p>
                            <p>Powered by renewable energy and smart monitoring systems, AlgaeTree™ operates continuously to support cleaner, healthier urban spaces.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-px hidden h-full w-full flex-col items-center justify-center py-[80px] lg:flex">
                <div className="flex w-full max-w-[1488px] flex-col items-start gap-[56px]">
                    <div className="relative h-[700px] w-full overflow-hidden rounded-[24px] bg-[#f3f4f6]">
                        <Image
                            src="/figma/introducing-bg.png"
                            alt="AlgaeTree product"
                            fill
                            sizes="1488px"
                            className="object-cover"
                        />
                    </div>

                    <div className="font-nimbus flex w-full max-w-[1488px] flex-col items-start justify-center gap-4">
                        <h2 className="text-[56px] font-normal leading-[64px] text-[#2d5a27]">
                            Introducing the Algae Tree
                        </h2>
                        <div className="flex min-w-full flex-col justify-center gap-3 text-[20px] font-normal leading-[28px] text-[#686868]">
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
