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
        <div className="rounded-[16px] bg-white p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-[#F3F4F6] lg:hidden">
            <div className="flex flex-col gap-2">
                <h2 className="text-[22px] font-bold leading-[28px] text-[#1E293B]">
                    Atmospheric CO2 Concentration (2000 - 2050)
                </h2>
                <p className="text-[14px] leading-6 text-[#6B7280]">
                    Historical and projected global average CO2 levels showing the accelerating Keeling Curve trend.
                </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-[#14B8A6]" />
                    <span className="whitespace-nowrap text-[14px] font-medium text-[#4B5563] md:text-[15px]">Historical (2000-2024)</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1 w-4 border-t-2 border-[#14B8A6] opacity-70" />
                    <span className="whitespace-nowrap text-[14px] font-medium text-[#4B5563] md:text-[15px]">Projected (2025-2050)</span>
                </div>
            </div>

            <div className="mt-8 flex gap-3">
                <div className="flex flex-col justify-between pb-8 pt-2 text-[11px] font-medium text-[#6B7280]">
                    <span>500</span>
                    <span>470</span>
                    <span>440</span>
                    <span>410</span>
                    <span>380</span>
                </div>

                <div className="relative flex-1">
                    <div className="relative h-[260px] w-full">
                        <div className="absolute inset-0 flex flex-col justify-between">
                            <div className="h-px w-full bg-[#E4E6E9]" />
                            <div className="h-px w-full bg-[#E4E6E9]" />
                            <div className="h-px w-full bg-[#E4E6E9]" />
                            <div className="h-px w-full bg-[#E4E6E9]" />
                            <div className="h-px w-full bg-[#E4E6E9]" />
                            <div className="h-px w-full bg-[#E4E6E9]" />
                        </div>
                        <div className="absolute left-[4%] top-[56%] h-[47%] w-[44%]">
                            <img
                                alt="Historical CO2 trend"
                                src="/figma/chart-historical.svg"
                                className="block size-full max-w-none"
                            />
                        </div>
                        <div className="absolute left-[50%] top-[14%] h-[61%] w-[48%] opacity-70">
                            <img
                                alt="Projected CO2 trend"
                                src="/figma/chart-projected.svg"
                                className="block size-full max-w-none"
                            />
                        </div>
                    </div>
                    <div className="mt-3 flex justify-between text-[12px] text-[#6B7280]">
                        {X_YEARS.map((year) => (
                            <span key={year}>{year}</span>
                        ))}
                    </div>
                    <div className="mt-2 text-center text-[11px] font-bold uppercase tracking-[1.2px] text-[#9CA3AF] md:text-[12px]">
                        Time Period (2000 - 2050)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CO2Section() {
    return (
        <section className="page-px w-full bg-white py-[60px]">
            <div className="inline-flex w-full flex-col items-center justify-center gap-10">
                <div className="hidden lg:block">
                    <DesktopChart />
                </div>
                <MobileChart />

                <div className="flex w-full flex-col items-start justify-between gap-6 lg:w-[1488px] lg:flex-row lg:items-start lg:gap-0">
                    <div className="relative inline-flex h-auto w-full flex-col items-start justify-center gap-4 overflow-hidden rounded-[12px] bg-[#2D5A27] p-8 lg:h-[336px] lg:w-[987px]">
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
                        <div className="relative font-nimbus flex w-full flex-col justify-center text-[30px] font-normal leading-[36px] text-white md:text-[40px] md:leading-[44px] lg:text-[40px] lg:leading-[44px]">
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

                    <div className="flex w-full flex-wrap content-start items-start justify-start gap-4 lg:w-[485px]">
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
        </section>
    );
}
