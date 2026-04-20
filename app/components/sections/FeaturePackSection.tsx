type MobileCard = {
    title: string;
    description: string;
    baseSrc: string;
    overlaySrc?: string;
};

const MOBILE_CARDS: MobileCard[] = [
    {
        title: "Solar Power System",
        description: "High-efficiency solar panels power the system, enabling sustainable and low-energy operation in urban environments.",
        baseSrc: "/figma/feature-solar-base.png",
        overlaySrc: "/figma/feature-solar-overlay.png",
    },
    {
        title: "Core Bio-Reactor",
        description: "The central chamber where microalgae grow and naturally capture carbon dioxide while releasing oxygen.",
        baseSrc: "/figma/feature-core-bioreactor-base.png",
    },
    {
        title: "Automatic Nutrient Dosing System",
        description: "Smart nutrient delivery system that automatically supplies essential nutrients to the algae culture, maintaining optimal growth and system stability.",
        baseSrc: "/figma/feature-nutrient.png",
        overlaySrc: "/figma/feature-nutrient-overlay.png",
    },
    {
        title: "LED Grow Light System",
        description: "Specialized grow lights provide specific wavelengths of light to support healthy microalgae growth and efficient photosynthesis.",
        baseSrc: "/figma/feature-led.png",
        overlaySrc: "/figma/feature-led-overlay.png",
    },
    {
        title: "NeuroControl AI Engine",
        description: "Intelligent control system that continuously adjusts system parameters to maintain healthy algae growth and efficient carbon capture.",
        baseSrc: "/figma/feature-neuro.png",
        overlaySrc: "/figma/feature-neuro-overlay.png",
    },
    {
        title: "EnviroSense Environmental Grid",
        description: "Monitors air quality, temperature, humidity, and system conditions in real time.",
        baseSrc: "/figma/feature-envirosense.png",
        overlaySrc: "/figma/feature-envirosense-overlay.png",
    },
    {
        title: "Atmospheric Intake & Air Filtration",
        description: "Draws in surrounding air and filters particulate pollutants before it enters the biological chamber.",
        baseSrc: "/figma/feature-intake.png",
    },
    {
        title: "IoT Connectivity Hub",
        description: "Enables remote monitoring, performance tracking, and data analytics through connected platforms.",
        baseSrc: "/figma/feature-iot.png",
    },
];

function MobileCard({ card }: { card: MobileCard }) {
    return (
        <article className="relative min-h-[360px] overflow-hidden rounded-[32px] bg-[#f3f4f6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <img src={card.baseSrc} alt="" className="absolute inset-0 size-full object-cover" />
            {card.overlaySrc && <img src={card.overlaySrc} alt="" className="absolute inset-0 size-full object-cover" />}
            <div
                className="absolute inset-x-0 top-0 h-[42%]"
                style={{ background: "linear-gradient(180deg, rgba(217,218,221,0.92) 52%, rgba(217,218,221,0) 100%)" }}
            />
            <div className="absolute left-6 top-6 right-6 flex flex-col gap-1">
                <h3 className="font-nimbus text-[28px] leading-[1.1] tracking-[1px] text-[#3c3c3c]">{card.title}</h3>
                <p className="font-nimbus max-w-[415px] text-[16px] leading-6 text-[#686868]">{card.description}</p>
            </div>
        </article>
    );
}

export default function FeaturePackSection() {
    return (
        <section className="w-full bg-white py-[60px]">
            <div className="page-px lg:hidden">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <div className="h-[88px] w-[7px] rounded-[8px] bg-black" />
                            <h2 className="font-nevera text-[38px] leading-[1.1] text-black">
                                Feature Pack
                                <br />
                                AlgaeTree System
                            </h2>
                        </div>
                        <p className="font-nimbus max-w-[651px] text-[16px] leading-7 text-[#686868]">
                            AlgaeTree™ is built as an integrated biological carbon capture system combining renewable energy, intelligent controls, and advanced microalgae cultivation. Each component works together to maintain optimal algae growth while enabling continuous carbon capture and clean air generation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {MOBILE_CARDS.map((card) => (
                            <MobileCard key={card.title} card={card} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex w-full flex-col items-center justify-center">
                <div className="flex w-[1488px] flex-col items-center justify-center gap-[80px]">
                    <div className="flex w-full items-start justify-between">
                        <div className="flex items-center gap-[48px]">
                            <div className="h-[128px] w-[7px] rounded-[8px] bg-black" />
                            <div className="flex flex-col items-start justify-center">
                                <h2 className="font-nevera text-[56px] leading-[72px] text-black">
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
                            <img src="/figma/feature-solar-base.png" alt="" className="absolute bottom-[-324px] right-[-244px] size-[1145px] object-cover" />
                            <div className="absolute left-0 top-0 flex h-[743px] w-[1003px] items-center justify-center">
                                <div className="-scale-y-100 rotate-180">
                                    <img src="/figma/feature-solar-overlay.png" alt="" className="h-[743px] w-[1003px] object-cover" />
                                </div>
                            </div>
                            <div className="absolute left-[40px] top-[40px] flex w-[651px] flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                <p className="text-[36px] leading-[42px] tracking-[1px]">Solar Power System</p>
                                <div className="text-[18px] leading-[24px] text-[#686868]">
                                    <p>High-efficiency solar panels power the system, enabling</p>
                                    <p>sustainable and low-energy operation in urban environments.</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-[915px] top-0 h-[435px] w-[573px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                            <div className="absolute left-0 top-0 h-[435px] w-[573px] rounded-[40px] bg-[#f3f4f6]" />
                            <img src="/figma/feature-core-bioreactor-base.png" alt="" className="absolute bottom-[-299px] left-0 h-[734px] w-[690px] object-cover" />
                            <div className="absolute left-[40px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                <p className="text-[36px] leading-[42px] tracking-[1px]">Core Bio-Reactor</p>
                                <div className="w-[454px] text-[18px] leading-[24px] text-[#686868]">
                                    <p>The central chamber where microalgae grow and naturally capture carbon dioxide while releasing oxygen.</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-[915px] top-[459px] h-[689px] w-[573px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                            <div className="absolute left-0 top-0 h-[689px] w-[573px] rounded-[40px] bg-[#f3f4f6]" />
                            <img src="/figma/feature-nutrient.png" alt="" className="absolute bottom-[-49px] left-0 h-[738px] w-[611px] object-cover" />
                            <img src="/figma/feature-nutrient-overlay.png" alt="" className="absolute left-[-1px] top-[-3px] h-[692px] w-[576px] object-cover" />
                            <div className="absolute left-0 top-0 h-[209px] w-[573px]" style={{ backgroundImage: "linear-gradient(174.227deg, rgb(217, 218, 221) 57.445%, rgba(217, 218, 221, 0) 69.155%)" }} />
                            <div className="absolute left-[40px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                <p className="max-w-[415px] text-[36px] leading-[42px] tracking-[1px]">Automatic Nutrient Dosing System</p>
                                <div className="w-[415px] text-[18px] leading-[24px] text-[#686868]">
                                    <p>Smart nutrient delivery system that automatically supplies essential nutrients to the algae culture, maintaining optimal growth and system stability.</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-0 top-[698px] h-[448px] w-[891px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                            <div className="absolute left-0 top-0 h-[448px] w-[891px] rounded-[40px] bg-[#f3f4f6]" />
                            <img src="/figma/feature-led.png" alt="" className="absolute bottom-[-46px] left-0 h-[514px] w-[891px] object-cover" />
                            <img src="/figma/feature-led-overlay.png" alt="" className="absolute left-0 top-0 h-[448px] w-[910px] object-cover" />
                            <div className="absolute left-[48px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                <p className="text-[36px] leading-[42px] tracking-[1px]">LED Grow Light System</p>
                                <div className="w-[415px] text-[18px] leading-[24px] text-[#686868]">
                                    <p>Specialized grow lights provide specific wavelengths of light to support healthy microalgae growth and efficient photosynthesis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-0 top-[1170px] flex w-[1488px] items-center justify-between">
                            <div className="relative h-[560px] w-[573px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                <div className="absolute left-0 top-0 h-[560px] w-[573px] rounded-[40px] bg-[#f3f4f6]" />
                                <img src="/figma/feature-neuro.png" alt="" className="absolute left-[-13px] top-0 size-[748px] object-cover" />
                                <img src="/figma/feature-neuro-overlay.png" alt="" className="absolute left-0 top-0 h-[560px] w-[593px] object-cover" />
                                <div className="absolute left-[48px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                    <p className="text-[36px] leading-[42px] tracking-[1px]">NeuroControl AI Engine</p>
                                    <div className="w-[415px] text-[18px] leading-[24px] text-[#686868]">
                                        <p>Intelligent control system that continuously adjusts system parameters to maintain healthy algae growth and efficient carbon capture.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[560px] w-[891px] overflow-hidden rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                <div className="absolute left-0 top-0 h-[560px] w-[891px] rounded-[40px] bg-[#f3f4f6]" />
                                <img src="/figma/feature-envirosense.png" alt="" className="absolute left-0 top-[-65px] h-[720px] w-[964px] object-cover" />
                                <img src="/figma/feature-envirosense-overlay.png" alt="" className="absolute left-0 top-0 h-[560px] w-[891px] object-cover" />
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
                                <img src="/figma/feature-intake.png" alt="" className="absolute left-0 top-[-14px] h-[629px] w-[964px] object-cover" />
                                <div className="absolute left-[48px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                    <div className="text-[36px] leading-[42px] tracking-[1px]">
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
                                <img src="/figma/feature-iot.png" alt="" className="absolute left-0 top-0 size-[621px] object-cover" />
                                <div className="absolute left-[48px] top-[40px] flex flex-col gap-1 font-nimbus text-[#3c3c3c]">
                                    <p className="text-[36px] leading-[42px] tracking-[1px]">IoT Connectivity Hub</p>
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
