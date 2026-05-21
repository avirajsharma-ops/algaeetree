export default function CcusImpactSection() {
    const stats = [
        {
            label: "Carbon Capture",
            value: "~1.5 Ton",
            description: ["CO₂ Captured Per Year per active", "unit."],
        },
        {
            label: "Oxygen Output",
            value: "~1 Ton",
            description: ["Oxygen Released Per Year back", "into city air."],
        },
        {
            label: "Filtration",
            value: "45-70%",
            description: ["Reduction of PM2.5 and PM10", "pollutants."],
        },
        {
            label: "Air Quality",
            value: "AQI+",
            description: ["Measurable local improvement in", "dense zones."],
        },
    ];

    return (
        <section className="w-full bg-white">
            <div className="page-px py-4 md:py-10 xl:py-[120px]">
                <div
                    className="relative mx-auto flex w-full max-w-[408px] flex-col gap-12 overflow-hidden rounded-[24px] p-12 md:max-w-[1488px] md:gap-8 xl:gap-12 xl:p-[48px]"
                    style={{ backgroundImage: "linear-gradient(114.874deg, #172129 0%, #121a22 100%)" }}
                >
                    <div className="absolute -right-20 -top-20 size-[384px] rounded-full bg-[rgba(171,214,0,0.05)] blur-[50px]" />

                    <h2 className="font-space-groteskrelative text-[28px] font-medium leading-[32px] uppercase text-white md:text-[42px] md:leading-[50px] xl:text-[56px] xl:leading-[72px]">
                        <span className="block md:inline">Environmental</span>
                        <span className="block md:ml-2 md:inline">Impact</span>
                    </h2>

                    <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 xl:grid-cols-4 xl:gap-12">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex min-h-[132px] flex-col">
                                <p className="pb-2 text-[14px] uppercase leading-[20px] tracking-[1.4px] text-[#abd600]">
                                    {stat.label}
                                </p>
                                <p className="font-space-grotesk pb-4 text-[48px] leading-[48px] text-[#e8fff0]">
                                    {stat.value}
                                </p>
                                <div className="font-manrope text-[14px] leading-[20px] text-[#a0acb9]">
                                    {stat.description.map((line) => (
                                        <span key={line} className="block">
                                            {line}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}