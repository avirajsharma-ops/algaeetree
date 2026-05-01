import type { CSSProperties } from "react";

function MobileMosaicCard({
    style,
    title,
    description,
    baseSrc,
    baseWrapperStyle,
    baseWrapperClassName,
    baseImageClassName,
    overlaySrc,
    overlayWrapperStyle,
    overlayWrapperClassName,
    overlayImageClassName,
    textWidth,
    gradientStyle,
}: {
    style: CSSProperties;
    title: string;
    description: string;
    baseSrc: string;
    baseWrapperStyle?: CSSProperties;
    baseWrapperClassName?: string;
    baseImageClassName?: string;
    overlaySrc?: string;
    overlayWrapperStyle?: CSSProperties;
    overlayWrapperClassName?: string;
    overlayImageClassName?: string;
    textWidth: string;
    gradientStyle?: CSSProperties;
}) {
    return (
        <article className="absolute overflow-hidden rounded-[10.968px] bg-[#f3f4f6] shadow-[0px_1.097px_1.097px_rgba(0,0,0,0.25)]" style={style}>
            <div className={baseWrapperClassName ?? "absolute inset-0"} style={baseWrapperStyle}>
                <img src={baseSrc} alt="" className={baseImageClassName ?? "absolute inset-0 size-full object-cover"} />
            </div>
            {overlaySrc && (
                <div className={overlayWrapperClassName ?? "absolute inset-0"} style={overlayWrapperStyle}>
                    <img src={overlaySrc} alt="" className={overlayImageClassName ?? "absolute inset-0 size-full object-cover"} />
                </div>
            )}
            {gradientStyle && (
                <div
                    className="absolute inset-x-0 top-0"
                    style={{
                        background: "linear-gradient(174.227deg, rgb(217, 218, 221) 57.445%, rgba(217, 218, 221, 0) 69.155%)",
                        ...gradientStyle,
                    }}
                />
            )}
            <div
                className="absolute left-[10px] top-[10px] flex flex-col gap-[2px] font-nimbus text-[#3c3c3c] md:left-[14px] md:top-[14px] md:gap-[4px] lg:left-[18px] lg:top-[18px] lg:gap-[6px]"
                style={{ width: textWidth }}
            >
                <p className="text-[10px] leading-[10px] tracking-[0.274px] md:text-[13px] md:leading-[14px] lg:text-[18px] lg:leading-[20px]">
                    {title}
                </p>
                <p className="text-[6px] leading-[8px] text-[#686868] md:text-[9px] md:leading-[11px] lg:text-[13px] lg:leading-[16px]">
                    {description}
                </p>
            </div>
        </article>
    );
}

export default function FeaturePackSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-6 lg:py-10 min-[1728px]:hidden">
                <div className="mx-auto flex w-full max-w-[1488px] flex-col items-center gap-6 lg:gap-10">
                    <div className="w-full rounded-[16px] py-2 lg:py-4">
                        <div className="flex w-full items-start gap-4 lg:gap-8">
                            <div className="h-[120px] w-[6px] shrink-0 rounded-[8px] bg-black lg:h-[128px] lg:w-[7px]" />
                            <div className="flex flex-1 flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                                <h2 className="font-space-grotesk text-[28px] uppercase leading-[38px] text-black sm:text-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[56px]">
                                    <span className="block">Feature Pack</span>
                                    <span className="block lg:hidden">Power Deck</span>
                                    <span className="hidden lg:block">AlgaeTree System</span>
                                </h2>
                                <p className="font-nimbus text-[14px] leading-normal text-[#686868] sm:text-[16px] sm:leading-[24px] lg:max-w-[651px] lg:text-[18px] lg:leading-[28px]">
                                    AlgaeTree™ is built as an integrated biological carbon capture system combining renewable energy, intelligent controls, and advanced microalgae cultivation. Each component works together to maintain optimal algae growth while enabling continuous carbon capture and clean air generation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-[408/633.9355] w-full max-w-[408px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[980px] xl:max-w-[1180px]">
                        <MobileMosaicCard
                            style={{ left: "0%", top: "0%", width: "59.88%", height: "29.15%" }}
                            title="Solar Power System"
                            description="High-efficiency solar panels power the system, enabling sustainable and low-energy operation in urban environments."
                            baseSrc="/figma/feature-solar-base.webp"
                            baseWrapperStyle={{ right: "-27.39%", bottom: "-48.07%", width: "128.51%", height: "169.88%" }}
                            baseWrapperClassName="absolute flex items-center justify-center"
                            baseImageClassName="size-full object-cover"
                            overlaySrc="/figma/feature-solar-overlay.webp"
                            overlayWrapperStyle={{ left: "0%", top: "0%", width: "112.57%", height: "110.24%" }}
                            overlayWrapperClassName="absolute flex items-center justify-center"
                            overlayImageClassName="size-full object-cover -scale-y-100 rotate-180"
                            textWidth="73%"
                        />
                        <MobileMosaicCard
                            style={{ left: "61.49%", top: "0%", width: "38.51%", height: "18.81%" }}
                            title="Core Bio-Reactor"
                            description="The central chamber where microalgae grow and naturally capture carbon dioxide while releasing oxygen."
                            baseSrc="/figma/feature-core-bioreactor-base.webp"
                            baseWrapperStyle={{ left: "0%", bottom: "-68.73%", width: "120.42%", height: "168.74%" }}
                            textWidth="79.2%"
                        />
                        <MobileMosaicCard
                            style={{ left: "61.49%", top: "19.85%", width: "38.51%", height: "29.8%" }}
                            title="Automatic Nutrient Dosing System"
                            description="Smart nutrient delivery system that automatically supplies essential nutrients to the algae culture, maintaining optimal growth and system stability."
                            baseSrc="/figma/feature-nutrient.webp"
                            baseWrapperStyle={{ left: "0%", bottom: "-7.12%", width: "106.63%", height: "107.11%" }}
                            overlaySrc="/figma/feature-nutrient-overlay.webp"
                            overlayWrapperStyle={{ left: "-0.17%", top: "-0.43%", width: "100.48%", height: "100.48%" }}
                            textWidth="87.8%"
                            gradientStyle={{ left: "0.07%", top: "0.11%", width: "99.93%", height: "32.29%" }}
                        />
                        <MobileMosaicCard
                            style={{ left: "0%", top: "30.19%", width: "59.88%", height: "19.38%" }}
                            title="LED Grow Light System"
                            description="Specialized grow lights provide specific wavelengths of light to support healthy microalgae growth and efficient photosynthesis."
                            baseSrc="/figma/feature-led.webp"
                            baseWrapperStyle={{ left: "0%", bottom: "-10.27%", width: "100%", height: "114.73%" }}
                            overlaySrc="/figma/feature-led-overlay.webp"
                            overlayWrapperStyle={{ left: "0%", top: "0%", width: "102.13%", height: "100%" }}
                            textWidth="46.6%"
                        />
                        <MobileMosaicCard
                            style={{ left: "0%", top: "50.61%", width: "38.51%", height: "24.22%" }}
                            title="NeuroControl AI Engine"
                            description="Intelligent control system that continuously adjusts system parameters to maintain healthy algae growth and efficient carbon capture."
                            baseSrc="/figma/feature-neuro.webp"
                            baseWrapperStyle={{ left: "-2.27%", top: "0%", width: "130.54%", height: "133.57%" }}
                            overlaySrc="/figma/feature-neuro-overlay.webp"
                            overlayWrapperStyle={{ left: "0%", top: "0%", width: "103.49%", height: "100%" }}
                            textWidth="72.4%"
                        />
                        <MobileMosaicCard
                            style={{ left: "40.12%", top: "50.61%", width: "59.88%", height: "24.22%" }}
                            title="EnviroSense Environmental Grid"
                            description="Monitors air quality, temperature, humidity, and system conditions in real time."
                            baseSrc="/figma/feature-envirosense.webp"
                            baseWrapperStyle={{ left: "0%", top: "-11.61%", width: "108.19%", height: "128.57%" }}
                            overlaySrc="/figma/feature-envirosense-overlay.webp"
                            textWidth="46.6%"
                        />
                        <MobileMosaicCard
                            style={{ left: "0%", top: "75.86%", width: "59.88%", height: "24.22%" }}
                            title="Atmospheric Intake & Air Filtration"
                            description="Draws in surrounding air and filters particulate pollutants before it enters the biological chamber."
                            baseSrc="/figma/feature-intake.webp"
                            baseWrapperStyle={{ left: "0%", top: "-2.5%", width: "108.23%", height: "112.28%" }}
                            textWidth="46.6%"
                        />
                        <MobileMosaicCard
                            style={{ left: "61.49%", top: "75.86%", width: "38.51%", height: "24.22%" }}
                            title="IoT Connectivity Hub"
                            description="Enables remote monitoring, performance tracking, and data analytics through connected platforms."
                            baseSrc="/figma/feature-iot.webp"
                            baseWrapperStyle={{ left: "0%", top: "0%", width: "108.38%", height: "110.89%" }}
                            textWidth="72.4%"
                        />
                    </div>
                </div>
            </div>

            <div className="page-px hidden py-[60px] min-[1728px]:block">
                <div className="mx-auto flex w-full max-w-[1488px] flex-col items-center justify-center gap-[80px]">
                    <div className="flex w-full items-start justify-between">
                        <div className="flex items-center gap-[48px]">
                            <div className="h-[128px] w-[7px] rounded-[8px] bg-black" />
                            <div className="flex flex-col items-start justify-center">
                                <h2 className="font-space-grotesk text-[56px] leading-[72px] text-black">
                                    <span className="block">Feature Pack</span>
                                    <span className="block">AlgaeTree System</span>
                                </h2>
                            </div>
                        </div>
                        <div className="font-nimbus flex w-[651px] flex-col justify-center text-[18px] leading-[28px] text-[#686868]">
                            <p>AlgaeTree™ is built as an integrated biological carbon capture system combining renewable energy, intelligent controls, and advanced microalgae cultivation. Each component works together to maintain optimal algae growth while enabling continuous carbon capture and clean air generation.</p>
                        </div>
                    </div>

                    <div className="relative h-[2312px] w-full">
                        <div className="absolute left-0 top-0 h-[674px] w-[891px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                            <div className="absolute left-0 top-0 h-[674px] w-[891px] rounded-[40px] bg-[#f3f4f6]" />
                            <img src="/figma/feature-solar-base.webp" alt="" className="absolute bottom-[-324px] right-[-244px] size-[1145px] object-cover" />
                            <div className="absolute left-0 top-0 flex h-[743px] w-[1003px] items-center justify-center">
                                <div className="-scale-y-100 rotate-180">
                                    <img src="/figma/feature-solar-overlay.webp" alt="" className="h-[743px] w-[1003px] object-cover" />
                                </div>
                            </div>
                            <div className="absolute left-[40px] top-[40px] flex w-[651px] flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                <p className=" font-space-grotesk text-[36px] leading-[42px] tracking-[1px]">Solar Power System</p>
                                <div className="text-[18px] leading-[24px] text-[#686868]">
                                    <p>High-efficiency solar panels power the system, enabling</p>
                                    <p>sustainable and low-energy operation in urban environments.</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-[915px] top-0 h-[435px] w-[573px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                            <div className="absolute left-0 top-0 h-[435px] w-[573px] rounded-[40px] bg-[#f3f4f6]" />
                            <img src="/figma/feature-core-bioreactor-base.webp" alt="" className="absolute bottom-[-299px] left-0 h-[734px] w-[690px] object-cover" />
                            <div className="absolute left-[40px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                <p className=" font-space-grotesk text-[36px] leading-[42px] tracking-[1px]">Core Bio-Reactor</p>
                                <div className="w-[454px] text-[18px] leading-[24px] text-[#686868]">
                                    <p>The central chamber where microalgae grow and naturally capture carbon dioxide while releasing oxygen.</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-[915px] top-[459px] h-[689px] w-[573px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                            <div className="absolute left-0 top-0 h-[689px] w-[573px] rounded-[40px] bg-[#f3f4f6]" />
                            <img src="/figma/feature-nutrient.webp" alt="" className="absolute bottom-[-49px] left-0 h-[738px] w-[611px] object-cover" />
                            <img src="/figma/feature-nutrient-overlay.webp" alt="" className="absolute left-[-1px] top-[-3px] h-[692px] w-[576px] object-cover" />
                            <div className="absolute left-0 top-0 h-[209px] w-[573px]" style={{ backgroundImage: "linear-gradient(174.227deg, rgb(217, 218, 221) 57.445%, rgba(217, 218, 221, 0) 69.155%)" }} />
                            <div className="absolute left-[40px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                <p className="max-w-[415px] text-[36px] leading-[42px] tracking-[1px] font-space-grotesk">Automatic Nutrient Dosing System</p>
                                <div className="w-[415px] text-[18px] leading-[24px] text-[#686868]">
                                    <p>Smart nutrient delivery system that automatically supplies essential nutrients to the algae culture, maintaining optimal growth and system stability.</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-0 top-[698px] h-[448px] w-[891px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                            <div className="absolute left-0 top-0 h-[448px] w-[891px] rounded-[40px] bg-[#f3f4f6]" />
                            <img src="/figma/feature-led.webp" alt="" className="absolute bottom-[-46px] left-0 h-[514px] w-[891px] object-cover" />
                            <img src="/figma/feature-led-overlay.webp" alt="" className="absolute left-0 top-0 h-[448px] w-[910px] object-cover" />
                            <div className="absolute left-[48px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                <p className="text-[36px] leading-[42px] tracking-[1px] font-space-grotesk ">LED Grow Light System</p>
                                <div className="w-[415px] text-[18px] leading-[24px] text-[#686868]">
                                    <p>Specialized grow lights provide specific wavelengths of light to support healthy microalgae growth and efficient photosynthesis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-0 top-[1170px] flex w-[1488px] items-center justify-between">
                            <div className="relative h-[560px] w-[573px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                <div className="absolute left-0 top-0 h-[560px] w-[573px] rounded-[40px] bg-[#f3f4f6]" />
                                <img src="/figma/feature-neuro.webp" alt="" className="absolute left-[-13px] top-0 size-[748px] object-cover" />
                                <img src="/figma/feature-neuro-overlay.webp" alt="" className="absolute left-0 top-0 h-[560px] w-[593px] object-cover" />
                                <div className="absolute left-[48px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                    <p className="text-[36px] leading-[42px] tracking-[1px]  font-space-grotesk ">NeuroControl AI Engine</p>
                                    <div className="w-[415px] text-[18px] leading-[24px] text-[#686868]">
                                        <p>Intelligent control system that continuously adjusts system parameters to maintain healthy algae growth and efficient carbon capture.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[560px] w-[891px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                <div className="absolute left-0 top-0 h-[560px] w-[891px] rounded-[40px] bg-[#f3f4f6]" />
                                <img src="/figma/feature-envirosense.webp" alt="" className="absolute left-0 top-[-65px] h-[720px] w-[964px] object-cover" />
                                <img src="/figma/feature-envirosense-overlay.webp" alt="" className="absolute left-0 top-0 h-[560px] w-[891px] object-cover" />
                                <div className="absolute left-[48px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                    <p className="text-[36px] leading-[42px] tracking-[1px]">EnviroSense Environmental Grid</p>
                                    <div className="w-[415px] text-[18px] leading-[24px] text-[#686868]">
                                        <p>Monitors air quality, temperature, humidity, and system conditions in real time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-0 top-[1754px] flex w-[1488px] items-center justify-between">
                            <div className="relative h-[560px] w-[891px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                <div className="absolute left-0 top-0 h-[560px] w-[891px] rounded-[40px] bg-[#f3f4f6]" />
                                <img src="/figma/feature-intake.webp" alt="" className="absolute left-0 top-[-14px] h-[629px] w-[964px] object-cover" />
                                <div className="absolute left-[48px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                    <div className="text-[36px] leading-[42px] tracking-[1px] font-space-grotesk">
                                        <p>Atmospheric Intake</p>
                                        <p>&amp; Air Filtration</p>
                                    </div>
                                    <div className="w-[415px] text-[18px] leading-[24px] text-[#686868]">
                                        <p>Draws in surrounding air and filters particulate pollutants before it enters the biological chamber.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[560px] w-[573px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                <div className="absolute left-0 top-0 h-[560px] w-[573px] rounded-[40px] bg-[#f3f4f6]" />
                                <img src="/figma/feature-iot.webp" alt="" className="absolute left-0 top-0 size-[621px] object-cover" />
                                <div className="absolute left-[48px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                    <p className="text-[36px] leading-[42px] tracking-[1px] font-space-grotesk ">IoT Connectivity Hub</p>
                                    <div className="w-[415px] text-[18px] leading-[24px] text-[#686868]">
                                        <p>Enables remote monitoring, performance tracking, and data analytics through connected platforms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
