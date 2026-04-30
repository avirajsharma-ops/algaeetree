import Image from "next/image";

const STEPS = [
    {
        number: "1",
        image: "/figma/technology/step-1.png",
        title: ["Air", "Intake"],
        description: "Urban air is drawn into the system through a controlled intake.",
    },
    {
        number: "2",
        image: "/figma/technology/step-2.png",
        title: ["Particulate", "Filtration"],
        description: "PM2.5 and PM10 pollutants are filtered before entering the biological chamber.",
    },
    {
        number: "3",
        image: "/figma/technology/step-3.png",
        title: ["Microalgae", "Carbon Capture"],
        description: "Microalgae absorb CO₂ through photosynthesis and convert it into biomass.",
    },
    {
        number: "4",
        image: "/figma/technology/step-4.png",
        title: ["Oxygen", "Release"],
        description: "Cleaned air with oxygen is released back into the surrounding environment.",
    },
    {
        number: "5",
        image: "/figma/technology/step-5.png",
        title: ["Continuous", "Monitoring"],
        description: "AI-driven sensors track air quality and optimize system performance.",
    },
];

const stepGradient =
    "linear-gradient(96.18deg, rgb(0,168,166) 5.23%, rgb(5,84,83) 95.99%)";

export default function HowItWorksSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-12 lg:py-[120px]">
                <div className="mx-auto w-full max-w-[1488px]">
                    {/* Header */}
                    <div className="flex w-full items-start gap-6 lg:gap-12">
                        <div className="self-stretch w-[5px] shrink-0 rounded-[8px] bg-black lg:w-[7px]" />
                        <div className="flex flex-col gap-3 lg:gap-4">
                            <h2 className="font-space-grotesk text-[32px] leading-[1.1] text-black text-bold lg:text-[56px] lg:leading-[64px]">
                                How AlgaeTree Works
                            </h2>
                            <p className="font-nimbus max-w-[593px] text-[15px] leading-[22px] text-[#686868] lg:text-[20px] lg:leading-[28px]">
                                AlgaeTree works by drawing polluted urban air into the system through a controlled intake, where harmful particles like PM2.5 and PM10 are first filtered out. The cleaned air then enters the bioreactor chamber, where microalgae absorb CO₂ through photosynthesis and convert it into biomass.
                            </p>
                        </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="relative mt-10 hidden lg:mt-20 lg:block">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute left-[6%] right-[6%] top-[calc(246px+60px)] h-[3px]"
                            style={{
                                background:
                                    "linear-gradient(to right, rgba(0,244,208,0) 0%, #00f4d0 50%, rgba(0,244,208,0) 100%)",
                            }}
                        />
                        <div className="grid grid-cols-5 gap-x-16 gap-y-10">
                            {STEPS.map((step) => (
                                <div
                                    key={step.number}
                                    className="flex flex-col items-center gap-4 text-center"
                                >
                                    <div className="relative aspect-square w-full max-w-[246px]">
                                        <Image
                                            src={step.image}
                                            alt={step.title.join(" ")}
                                            fill
                                            sizes="246px"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div
                                        className="relative flex size-[120px] items-center justify-center rounded-full shadow-[0px_30px_37.5px_-7.5px_rgba(0,0,0,0.1),0px_12px_15px_-9px_rgba(0,0,0,0.1)]"
                                        style={{ backgroundImage: stepGradient }}
                                    >
                                        <span className="font-bold text-white text-[45px] leading-none">
                                            {step.number}
                                        </span>
                                    </div>
                                    <h3 className="text-[24px] font-bold leading-[28px] text-black">
                                        {step.title.map((line) => (
                                            <span key={line} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </h3>
                                    <p className="text-[18px] leading-[24px] text-black">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="relative mt-8 lg:hidden">
                        {/* Vertical connecting line */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute bottom-4 left-[27px] top-4 w-[3px] rounded-full"
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(0,244,208,0) 0%, #00f4d0 20%, #00f4d0 80%, rgba(0,244,208,0) 100%)",
                            }}
                        />
                        <div className="flex flex-col gap-6">
                            {STEPS.map((step) => (
                                <div key={step.number} className="flex items-start gap-4">
                                    {/* Number circle */}
                                    <div
                                        className="relative z-10 flex size-[56px] shrink-0 items-center justify-center rounded-full shadow-[0px_12px_20px_-4px_rgba(0,0,0,0.15)]"
                                        style={{ backgroundImage: stepGradient }}
                                    >
                                        <span className="font-bold text-white text-[22px] leading-none">
                                            {step.number}
                                        </span>
                                    </div>
                                    {/* Image */}
                                    <div className="relative size-[72px] shrink-0">
                                        <Image
                                            src={step.image}
                                            alt={step.title.join(" ")}
                                            fill
                                            sizes="72px"
                                            className="object-contain"
                                        />
                                    </div>
                                    {/* Text */}
                                    <div className="flex flex-col gap-1 pt-1">
                                        <h3 className="text-[16px] font-bold leading-[20px] text-black">
                                            {step.title.join(" ")}
                                        </h3>
                                        <p className="text-[13px] leading-[18px] text-[#686868]">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
