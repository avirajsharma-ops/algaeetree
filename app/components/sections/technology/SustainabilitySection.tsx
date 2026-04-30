const STATS = [
    {
        title: ["CO₂ Captured", "Per Year"],
        big: "~1.5",
        unit: "Ton",
    },
    {
        title: ["Oxygen Released", "Per Year"],
        big: "~1.0",
        unit: "Ton",
    },
    {
        title: ["Particulate", "Matter Reduction"],
        big: "45-70",
        unit: "Percent",
    },
    {
        title: ["Local AQI", "Improvement"],
        big: "10-15",
        unit: "Point",
    },
];

function RealLifeDataCard() {
    return (
        <div className="mx-auto flex w-full max-w-[1520px] flex-col items-center rounded-3xl bg-white px-5 py-6 text-center sm:px-8 lg:rounded-[32px] lg:px-20 lg:py-8">
            <h2 className="font-space-grotesk text-[28px] font-bold uppercase leading-none text-black lg:text-[56px]">
                Real Life Data
            </h2>
            <p className="font-nimbus mt-3 max-w-[980px] text-[13px] leading-5 text-[#686868] sm:text-[14px] sm:leading-5.5 lg:mt-4 lg:text-[15px] lg:leading-6">
                Field simulations and laboratory studies show that microalgae-based
                systems can capture carbon significantly faster than terrestrial plants.
                A single AlgaeTree™ unit is designed to capture up to ~1.8&ndash;2 kg of
                CO₂ per day, equivalent to approximately 650&ndash;700 kg annually, while
                also helping reduce particulate pollution in the surrounding air.
            </p>
        </div>
    );
}

function StatGrid() {
    return (
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {STATS.map((stat) => (
                <div
                    key={stat.title.join(" ")}
                    className="flex min-h-[180px] flex-col rounded-[24px] bg-white px-4 py-5 text-left sm:min-h-[210px] lg:min-h-[248px] lg:rounded-[32px] lg:px-6 lg:py-6"
                >
                    <h3 className="font-nimbus text-[14px] font-bold leading-[20px] text-[#3c3c3c] lg:text-[18px] lg:leading-[24px]">
                        {stat.title.map((line) => (
                            <span key={line} className="block">
                                {line}
                            </span>
                        ))}
                    </h3>
                    <div className="mt-auto pt-6 text-black">
                        <span className="font-space-grotesk block text-[42px] font-medium leading-none lg:text-[56px]">
                            {stat.big}
                        </span>
                        <span className="font-space-grotesk mt-1 block text-[18px] leading-none lg:text-[20px]">
                            {stat.unit}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function SustainabilitySection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#0d1f00]">
            <div
                aria-hidden
                className="pointer-events-none absolute -left-[40%] top-[-15%] size-269 rounded-full opacity-50"
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(0,168,166,0.35) 0%, rgba(13,31,0,0) 70%)",
                }}
            />
            <div className="page-px relative py-6 lg:py-12">
                <div className="mx-auto flex w-full max-w-372 flex-col gap-6 lg:gap-8">
                    <RealLifeDataCard />
                    <StatGrid />
                </div>
            </div>
        </section>
    );
}
