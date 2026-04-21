import Image from "next/image";

const X_YEARS = ["2000", "2010", "2020", "2030", "2040", "2050"];
const Y_LABELS = [
    { label: "500", top: "221px" },
    { label: "470", top: "282px" },
    { label: "440", top: "343px" },
    { label: "410", top: "404px" },
    { label: "380", top: "465px" },
];

function StatCard({
    value,
    suffix,
    color,
    labelTop,
    labelBottom,
    showTrend = false,
}: {
    value: string;
    suffix?: string;
    color: string;
    labelTop: string;
    labelBottom: string;
    showTrend?: boolean;
}) {
    return (
        <div className="inline-flex h-[160px] w-full flex-col items-start justify-between rounded-[12px] bg-white p-4 outline outline-1 outline-offset-[-1px] outline-[#D9D9D9] lg:w-[234px]">
            <div className="inline-flex items-center justify-start gap-2 self-stretch">
                <div className="font-nimbus flex flex-col justify-center" style={{ color }}>
                    {suffix ? (
                        <p className="leading-[56px]">
                            <span className="text-[56px] font-bold leading-[56px]">{value}</span>
                            <span className="text-[24px] font-bold leading-[56px]">{suffix}</span>
                        </p>
                    ) : (
                        <p className="text-[56px] font-bold leading-[56px]">{value}</p>
                    )}
                </div>
                {showTrend && (
                    <div className="relative size-6 shrink-0">
                        <img
                            src="/figma/arrow-drop-up.svg"
                            alt=""
                            className="block size-full max-w-none"
                        />
                    </div>
                )}
            </div>
            <div className="font-nimbus flex flex-col justify-center text-[16px] font-normal text-[#6B7280]">
                <p>{labelTop}</p>
                <p>{labelBottom}</p>
            </div>
        </div>
    );
}

function MobileStatCard({
    value,
    suffix,
    color,
    labelTop,
    labelBottom,
    showTrend = false,
}: {
    value: string;
    suffix?: string;
    color: string;
    labelTop: string;
    labelBottom: string;
    showTrend?: boolean;
}) {
    return (
        <div className="flex w-full flex-col items-start gap-3 rounded-[12px] border border-[#D9D9D9] bg-white p-[17px]">
            <div className="flex items-center gap-2">
                <div className="font-nimbus" style={{ color }}>
                    {suffix ? (
                        <p className="leading-[48px] whitespace-nowrap">
                            <span className="text-[40px] font-bold leading-[48px]">{value}</span>
                            <span className="text-[18px] font-bold leading-[48px]">{suffix}</span>
                        </p>
                    ) : (
                        <p className="text-[40px] font-bold leading-[48px]">{value}</p>
                    )}
                </div>
                {showTrend && (
                    <img src="/figma/arrow-drop-up.svg" alt="" className="size-6" />
                )}
            </div>
            <div className="font-nimbus text-[13px] leading-[18px] text-[#6B7280]">
                <p>{labelTop}</p>
                <p>{labelBottom}</p>
            </div>
        </div>
    );
}

function DesktopChart() {
    return (
        <div className="relative h-[640px] w-[1488px] rounded-[16px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-[#F3F4F6]">
            <div className="absolute left-[56px] top-[40px] inline-flex w-[926px] flex-col items-start justify-start gap-2">
                <div className="flex w-full flex-col items-start justify-start">
                    <h2 className="flex w-full flex-col justify-center text-[30px] font-bold leading-[36px] text-[#1E293B]">
                        Atmospheric CO2 Concentration (2000 - 2050)
                    </h2>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                    <p className="flex w-full flex-col justify-center text-[16px] leading-[24px] text-[#6B7280]">
                        Historical and projected global average CO2 levels showing the accelerating Keeling Curve trend.
                    </p>
                </div>
            </div>

            <div className="absolute left-[56px] top-[136px] inline-flex w-[926px] items-start justify-start gap-6">
                <div className="flex items-center justify-start gap-2 self-stretch">
                    <div className="size-3 rounded-[9999px] bg-[#14B8A6]" />
                    <div className="inline-flex flex-col items-start justify-start">
                        <div className="flex flex-col justify-center whitespace-nowrap text-[15px] font-medium leading-[22px] text-[#4B5563]">
                            Historical (2000-2024)
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-2 self-stretch">
                    <div className="h-1 w-4 border-t-2 border-[#14B8A6] opacity-70" />
                    <div className="inline-flex flex-col items-start justify-start">
                        <div className="flex flex-col justify-center whitespace-nowrap text-[15px] font-medium leading-[22px] text-[#4B5563]">
                            Projected (2025-2050)
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute left-[97px] top-[539px] inline-flex h-5 w-[1358px] items-center justify-between">
                {X_YEARS.map((year) => (
                    <div key={year} className="flex flex-col justify-center text-[15px] font-medium text-[#6B7280] lg:text-[16px]">
                        {year}
                    </div>
                ))}
            </div>

            <div className="absolute left-[755px] top-[235px] h-[159px] w-[677px] opacity-70 z-50">
                <div className="absolute inset-[-1.1%_-0.21%]">
                    <img
                        alt="Historical CO2 trend"
                        src="/figma/chart-historical.svg"
                        className="block size-full max-w-none"
                    />
                </div>
            </div>
            <div className="absolute left-[119px] top-[396px] h-[123px] w-[632px] z-50">
                <div className="absolute inset-[-0.85%_-0.2%]">
                    <img
                        alt="Projected CO2 trend"
                        src="/figma/chart-projected.svg"
                        className="block size-full max-w-none"
                    />
                </div>
            </div>


            {Y_LABELS.map((y) => (
                <div key={y.label}>
                    <div
                        className="absolute left-[84px] flex flex-col justify-center text-[12px] font-medium text-[#6B7280] lg:text-[13px]"
                        style={{ top: y.top }}
                    >
                        {y.label}
                    </div>
                </div>
            ))}

            <div className="absolute left-[117px] top-[227px] h-px w-[1315px] bg-[#E4E6E9]" />
            <div className="absolute left-[117px] top-[288px] h-px w-[1315px] bg-[#E4E6E9]" />
            <div className="absolute left-[117px] top-[349px] h-px w-[1315px] bg-[#E4E6E9]" />
            <div className="absolute left-[117px] top-[410px] h-px w-[1315px] bg-[#E4E6E9]" />
            <div className="absolute left-[117px] top-[471px] h-px w-[1315px] bg-[#E4E6E9]" />
            <div className="absolute left-[117px] top-[526px] h-px w-[1315px] bg-[#E4E6E9]" />

            <div className="absolute left-[18px] top-1/2 -translate-y-1/2">
                <div className="origin-left -rotate-90 whitespace-nowrap text-[12px] font-bold uppercase leading-[1] tracking-[1.2px] text-[#9CA3AF] lg:text-[13px]">
                    CO2 Concentration (ppm)
                </div>
            </div>

            <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2">
                <div className="whitespace-nowrap text-center text-[12px] font-bold uppercase leading-[1] tracking-[1.2px] text-[#9CA3AF] lg:text-[13px]">
                    Time Period (2000 - 2050)
                </div>
            </div>
        </div>
    );
}

function MobileChart() {
    return (
        <div className="w-full overflow-hidden rounded-[16px] border border-[#F3F4F6] bg-white px-4 py-6 shadow-[0px_1px_2px_rgba(0,0,0,0.25)] lg:hidden">
            <div className="flex flex-col gap-2">
                <h2 className="text-[22px] font-bold leading-[28px] tracking-[-0.5px] text-[#1E293B]">
                    Atmospheric CO2 Concentration (2000 - 2050)
                </h2>
                <p className="text-[13px] leading-[18px] text-[#6B7280]">
                    Historical and projected global average CO2 levels showing the accelerating Keeling Curve trend.
                </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-[#14B8A6]" />
                    <span className="text-[13px] font-medium leading-5 text-[#4B5563]">Historical (2000-2024)</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1 w-4 border-t-2 border-dashed border-[#14B8A6] opacity-70" />
                    <span className="text-[13px] font-medium leading-5 text-[#4B5563]">Projected (2025-2050)</span>
                </div>
            </div>

            <div className="relative mt-4 h-[360px] w-full">
                {/* Y-axis title (rotated) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[1px] text-[#9CA3AF]">
                    CO2 Concentration (ppm)
                </div>

                {/* Y labels */}
                <div className="absolute left-[18px] top-0 text-[11px] font-medium text-[#6B7280]">500</div>
                <div className="absolute left-[18px] top-[60px] text-[11px] font-medium text-[#6B7280]">470</div>
                <div className="absolute left-[18px] top-[120px] text-[11px] font-medium text-[#6B7280]">440</div>
                <div className="absolute left-[18px] top-[180px] text-[11px] font-medium text-[#6B7280]">410</div>
                <div className="absolute left-[18px] top-[240px] text-[11px] font-medium text-[#6B7280]">380</div>

                {/* Chart canvas (fluid) */}
                <div className="absolute left-[44px] right-0 top-0 h-[300px]">
                    {/* Grid lines */}
                    <div className="absolute left-0 right-0 top-[6px] h-px bg-[#E4E6E9]" />
                    <div className="absolute left-0 right-0 top-[66px] h-px bg-[#E4E6E9]" />
                    <div className="absolute left-0 right-0 top-[126px] h-px bg-[#E4E6E9]" />
                    <div className="absolute left-0 right-0 top-[186px] h-px bg-[#E4E6E9]" />
                    <div className="absolute left-0 right-0 top-[246px] h-px bg-[#E4E6E9]" />
                    <div className="absolute left-0 right-0 bottom-0 h-px bg-[#E4E6E9]" />

                    {/* Trend SVGs positioned relative to canvas */}
                    <div className="absolute left-0 top-[176px] h-[118px] w-[45.84%]">
                        <img src="/figma/chart-historical.svg" alt="Historical CO2 trend" className="block size-full max-w-none" />
                    </div>
                    <div className="absolute left-[46.10%] top-[15px] h-[153px] w-[49.15%] opacity-70">
                        <img src="/figma/chart-projected.svg" alt="Projected CO2 trend" className="block size-full max-w-none" />
                    </div>

                    {/* X labels */}
                    <div className="absolute left-0 right-0 top-[306px] flex items-center justify-between text-[12px] text-[#6B7280]">
                        {X_YEARS.map((year) => (
                            <span key={year}>{year}</span>
                        ))}
                    </div>

                    {/* X-axis title */}
                    <div className="absolute left-1/2 top-[340px] -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[1px] text-[#9CA3AF]">
                        Time Period (2000 - 2050)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CO2Section() {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col gap-6 px-4 py-4 lg:hidden">
                <MobileChart />

                <div className="grid grid-cols-2 gap-4">
                    <MobileStatCard
                        value="75%"
                        color="#CA0000"
                        labelTop="CO2 Percentage"
                        labelBottom="Increases Since Year 2000"
                        showTrend
                    />
                    <MobileStatCard
                        value="75%"
                        color="#CA0000"
                        labelTop="CO2 Percentage"
                        labelBottom="Increases Since Year 2000"
                        showTrend
                    />
                    <MobileStatCard
                        value="369"
                        suffix="ppm"
                        color="#2D5A27"
                        labelTop="CO2 Concentartion"
                        labelBottom="Year 2000"
                    />
                    <MobileStatCard
                        value="495"
                        suffix="ppm"
                        color="#CA0000"
                        labelTop="CO2 Concentartion"
                        labelBottom="Year 2050 (Projected)"
                    />
                </div>

                <div className="relative w-full overflow-hidden rounded-[12px] bg-[#2D5A27] px-5 py-8">
                    <Image
                        src="/figma/co2-card-bg.png"
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 987px"
                        className="object-cover"
                    />
                    <div className="relative font-nimbus text-[18px] text-white">Why This Matters</div>
                    <div className="relative mt-3 font-nimbus text-[22px] leading-[1.25] text-white">
                        Rising greenhouse gases such as CO₂ are driving climate change and warming the planet.
                    </div>
                    <div className="relative mt-4 space-y-3 font-nimbus text-[14px] leading-[1.5] text-white">
                        <p>
                            Global temperatures have already increased by about 1.2°C since the late 1800s, and emissions continue to rise.
                        </p>
                        <p>
                            According to the World Health Organization (WHO), air pollution contributes to nearly 7 million premature deaths every year worldwide. It is strongly linked to respiratory illnesses, cardiovascular diseases, stroke, and lung cancer, particularly in densely populated urban areas. Reducing carbon emissions and improving air quality is therefore essential to protect public health, environmental stability, and the air that billions of people depend on every day.
                        </p>
                    </div>
                </div>
            </div>

            <div className="page-px hidden py-[60px] lg:block">
                <div className="inline-flex w-full flex-col items-center justify-center gap-10">
                    <DesktopChart />

                    <div className="flex w-[1488px] items-start justify-between gap-0">
                        <div className="relative inline-flex h-[336px] w-[987px] flex-col items-start justify-center gap-4 overflow-hidden rounded-[12px] bg-[#2D5A27] p-8">
                            <Image
                                src="/figma/co2-card-bg.png"
                                alt=""
                                width={1302}
                                height={869}
                                sizes="987px"
                                className="absolute left-[-65px] top-[-266px] h-[869px] w-[1302px] max-w-none"
                            />
                            <div className="relative font-nimbus flex flex-col justify-center text-[20px] font-normal text-white">
                                Why This Matters
                            </div>
                            <div className="relative font-nimbus flex w-full flex-col justify-center text-[40px] font-normal leading-[44px] text-white">
                                <p>Rising greenhouse gases such as CO₂ are</p>
                                <p>driving climate change and warming the planet.</p>
                            </div>
                            <div className="relative font-nimbus flex w-full flex-col justify-center text-[16px] font-normal text-white">
                                <p>
                                    Global temperatures have already increased by about 1.2°C since the late 1800s, and emissions continue to rise.
                                    <br />
                                    According to the World Health Organization (WHO), air pollution contributes to nearly 7 million premature deaths every year worldwide. It is strongly linked to respiratory illnesses, cardiovascular diseases, stroke, and lung cancer, particularly in densely populated urban areas. Reducing carbon emissions and improving air quality is therefore essential to protect public health, environmental stability, and the air that billions of people depend on every day.
                                </p>
                            </div>
                        </div>

                        <div className="flex w-[485px] flex-wrap content-start items-start justify-start gap-4">
                            <StatCard
                                value="75%"
                                color="#CA0000"
                                labelTop="CO2 Percentage"
                                labelBottom="Increases Since Year 2000"
                                showTrend
                            />
                            <StatCard
                                value="75%"
                                color="#CA0000"
                                labelTop="CO2 Percentage"
                                labelBottom="Increases Since Year 2000"
                                showTrend
                            />
                            <StatCard
                                value="369"
                                suffix="ppm"
                                color="#2D5A27"
                                labelTop="CO2 Concentartion"
                                labelBottom="Year 2000"
                            />
                            <StatCard
                                value="495"
                                suffix="ppm"
                                color="#CA0000"
                                labelTop="CO2 Concentartion"
                                labelBottom="Year 2050 (Projected)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
