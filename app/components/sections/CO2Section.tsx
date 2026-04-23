import Image from "next/image";

type EmissionPoint = {
    year: number;
    valueBillion: number;
};

const INDIA_CO2_EMISSION_DATA: EmissionPoint[] = [
    { year: 1960, valueBillion: 0.11132 },
    { year: 1961, valueBillion: 0.1204 },
    { year: 1962, valueBillion: 0.13258 },
    { year: 1963, valueBillion: 0.14244 },
    { year: 1964, valueBillion: 0.13948 },
    { year: 1965, valueBillion: 0.1537 },
    { year: 1966, valueBillion: 0.15937 },
    { year: 1967, valueBillion: 0.15956 },
    { year: 1968, valueBillion: 0.17407 },
    { year: 1969, valueBillion: 0.17741 },
    { year: 1970, valueBillion: 0.18172 },
    { year: 1971, valueBillion: 0.19196 },
    { year: 1972, valueBillion: 0.20304 },
    { year: 1973, valueBillion: 0.2091 },
    { year: 1974, valueBillion: 0.21585 },
    { year: 1975, valueBillion: 0.23421 },
    { year: 1976, valueBillion: 0.24475 },
    { year: 1977, valueBillion: 0.25896 },
    { year: 1978, valueBillion: 0.26315 },
    { year: 1979, valueBillion: 0.27629 },
    { year: 1980, valueBillion: 0.29171 },
    { year: 1981, valueBillion: 0.31497 },
    { year: 1982, valueBillion: 0.32538 },
    { year: 1983, valueBillion: 0.3522 },
    { year: 1984, valueBillion: 0.36157 },
    { year: 1985, valueBillion: 0.3976 },
    { year: 1986, valueBillion: 0.42632 },
    { year: 1987, valueBillion: 0.45535 },
    { year: 1988, valueBillion: 0.4917 },
    { year: 1989, valueBillion: 0.54066 },
    { year: 1990, valueBillion: 0.57799 },
    { year: 1991, valueBillion: 0.61539 },
    { year: 1992, valueBillion: 0.65542 },
    { year: 1993, valueBillion: 0.67726 },
    { year: 1994, valueBillion: 0.71404 },
    { year: 1995, valueBillion: 0.76048 },
    { year: 1996, valueBillion: 0.8236 },
    { year: 1997, valueBillion: 0.85798 },
    { year: 1998, valueBillion: 0.87578 },
    { year: 1999, valueBillion: 0.96119 },
    { year: 2000, valueBillion: 0.98707 },
    { year: 2001, valueBillion: 1.0 },
    { year: 2002, valueBillion: 1.03 },
    { year: 2003, valueBillion: 1.07 },
    { year: 2004, valueBillion: 1.13 },
    { year: 2005, valueBillion: 1.2 },
    { year: 2006, valueBillion: 1.29 },
    { year: 2007, valueBillion: 1.39 },
    { year: 2008, valueBillion: 1.49 },
    { year: 2009, valueBillion: 1.61 },
    { year: 2010, valueBillion: 1.68 },
    { year: 2011, valueBillion: 1.77 },
    { year: 2012, valueBillion: 1.93 },
    { year: 2013, valueBillion: 2.0 },
    { year: 2014, valueBillion: 2.15 },
    { year: 2015, valueBillion: 2.23 },
    { year: 2016, valueBillion: 2.35 },
    { year: 2017, valueBillion: 2.43 },
    { year: 2018, valueBillion: 2.6 },
    { year: 2019, valueBillion: 2.61 },
    { year: 2020, valueBillion: 2.42 },
    { year: 2021, valueBillion: 2.68 },
    { year: 2022, valueBillion: 2.83 },
    { year: 2023, valueBillion: 3.06 },
    { year: 2024, valueBillion: 3.19 },
];

const START_YEAR = INDIA_CO2_EMISSION_DATA[0].year;
const END_YEAR = INDIA_CO2_EMISSION_DATA[INDIA_CO2_EMISSION_DATA.length - 1].year;
const YEAR_SPAN = END_YEAR - START_YEAR;

const RAW_MIN = Math.min(...INDIA_CO2_EMISSION_DATA.map((d) => d.valueBillion));
const RAW_MAX = Math.max(...INDIA_CO2_EMISSION_DATA.map((d) => d.valueBillion));
const Y_PADDING = (RAW_MAX - RAW_MIN) * 0.08;
const Y_MIN = Math.max(0, RAW_MIN - Y_PADDING);
const Y_MAX = RAW_MAX + Y_PADDING;

const Y_TICK_COUNT = 6;
const Y_TICKS = Array.from({ length: Y_TICK_COUNT }, (_, i) => {
    const ratio = i / (Y_TICK_COUNT - 1);
    return Y_MAX - ratio * (Y_MAX - Y_MIN);
});

const X_TICKS = INDIA_CO2_EMISSION_DATA
    .filter((d) => d.year === START_YEAR || d.year === END_YEAR || d.year % 5 === 0)
    .map((d) => d.year);

const X_TICKS_MOBILE = (() => {
    const MOBILE_TICK_STEP = 15;
    const MOBILE_MIN_GAP_YEARS = 12;

    const candidates = INDIA_CO2_EMISSION_DATA
        .filter((d) => d.year === START_YEAR || d.year === END_YEAR || d.year % MOBILE_TICK_STEP === 0)
        .map((d) => d.year)
        .sort((a, b) => a - b);

    const ticks: number[] = [];

    for (const year of candidates) {
        if (!ticks.length || year - ticks[ticks.length - 1] >= MOBILE_MIN_GAP_YEARS) {
            ticks.push(year);
        }
    }

    if (ticks[0] !== START_YEAR) {
        ticks.unshift(START_YEAR);
    }

    if (ticks[ticks.length - 1] !== END_YEAR) {
        if (END_YEAR - ticks[ticks.length - 1] < MOBILE_MIN_GAP_YEARS) {
            ticks[ticks.length - 1] = END_YEAR;
        } else {
            ticks.push(END_YEAR);
        }
    }

    return ticks;
})();

function xForYear(year: number, width: number) {
    return ((year - START_YEAR) / YEAR_SPAN) * width;
}

function yForValue(valueBillion: number, height: number) {
    return ((Y_MAX - valueBillion) / (Y_MAX - Y_MIN)) * height;
}

function linePoints(width: number, height: number) {
    return INDIA_CO2_EMISSION_DATA
        .map((point) => `${xForYear(point.year, width)},${yForValue(point.valueBillion, height)}`)
        .join(" ");
}

function formatBillion(value: number) {
    return `${value.toFixed(value < 1 ? 2 : 1)}B`;
}

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
    const chartWidth = 1315;
    const chartHeight = 300;

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

            <div className="absolute left-[117px] top-[227px] h-[300px] w-[1315px]">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="h-full w-full" aria-label="India CO2 emission chart">
                    {Y_TICKS.map((tick) => {
                        const y = yForValue(tick, chartHeight);
                        return (
                            <line
                                key={tick}
                                x1={0}
                                y1={y}
                                x2={chartWidth}
                                y2={y}
                                stroke="#E4E6E9"
                                strokeWidth="1"
                            />
                        );
                    })}

                    <polyline
                        points={linePoints(chartWidth, chartHeight)}
                        fill="none"
                        stroke="#14B8A6"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="absolute left-[117px] top-[539px] h-5 w-[1315px]">
                {X_TICKS.map((year) => (
                    <div
                        key={year}
                        className="absolute -translate-x-1/2 text-[15px] font-medium text-[#6B7280] lg:text-[16px]"
                        style={{ left: `${((year - START_YEAR) / YEAR_SPAN) * 100}%` }}
                    >
                        {year}
                    </div>
                ))}
            </div>

            {Y_TICKS.map((tick) => (
                <div
                    key={tick}
                    className="absolute left-[58px] -translate-y-1/2 text-[12px] font-medium text-[#6B7280] lg:text-[13px]"
                    style={{ top: `${227 + (yForValue(tick, chartHeight) / chartHeight) * 300}px` }}
                >
                    {formatBillion(tick)}
                </div>
            ))}

            <div className="absolute left-[18px] top-1/2 -translate-y-1/2">
                <div className="origin-left -rotate-90 whitespace-nowrap text-[12px] font-bold uppercase leading-[1] tracking-[1.2px] text-[#9CA3AF] lg:text-[13px]">
                    CO2 Emission (Billion Tonnes)
                </div>
            </div>

            <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2">
                <div className="whitespace-nowrap text-center text-[12px] font-bold uppercase leading-[1] tracking-[1.2px] text-[#9CA3AF] lg:text-[13px]">
                    Time Period ({START_YEAR} - {END_YEAR})
                </div>
            </div>
        </div>
    );
}

function MobileChart() {
    const chartWidth = 100;
    const chartHeight = 300;

    return (
        <div className="w-full overflow-hidden rounded-[16px] border border-[#F3F4F6] bg-white px-4 py-6 shadow-[0px_1px_2px_rgba(0,0,0,0.25)] lg:hidden">
            <div className="flex flex-col gap-2">
                <h2 className="text-[22px] font-bold leading-[28px] tracking-[-0.5px] text-[#1E293B]">
                  Atmospheric CO2 <br /> Concentration (2000 - 2050)
                </h2>
                <p className="text-[13px] leading-[18px] text-[#6B7280]">
Historical and projected global average CO2 levels showing the accelerating Keeling Curve trend.
                </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-[#14B8A6]" />
                    <span className="text-[13px] font-medium leading-5 text-[#4B5563]">India CO2 Emissions </span>
                </div>
            </div>

            <div className="relative mt-4 h-[360px] w-full">
                {/* Y-axis title (rotated) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[1px] text-[#9CA3AF]">
                    CO2 Emission (Billion Tonnes)
                </div>

                {/* Y labels */}
                {Y_TICKS.map((tick) => (
                    <div
                        key={tick}
                        className="absolute left-[8px] -translate-y-1/2 text-[11px] font-medium text-[#6B7280]"
                        style={{ top: `${(yForValue(tick, chartHeight) / chartHeight) * 300}px` }}
                    >
                        {formatBillion(tick)}
                    </div>
                ))}

                {/* Chart canvas (fluid) */}
                <div className="absolute left-[44px] right-0 top-0 h-[300px]">
                    <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="h-full w-full" preserveAspectRatio="none" aria-label="India CO2 emission chart mobile">
                        {Y_TICKS.map((tick) => {
                            const y = yForValue(tick, chartHeight);
                            return <line key={tick} x1={0} y1={y} x2={chartWidth} y2={y} stroke="#E4E6E9" strokeWidth="1" />;
                        })}

                        <polyline
                            points={linePoints(chartWidth, chartHeight)}
                            fill="none"
                            stroke="#14B8A6"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* X labels */}
                    <div className="absolute left-0 right-0 top-[306px] text-[11px] text-[#6B7280]">
                        {X_TICKS_MOBILE.map((year, index) => (
                            <span
                                key={year}
                                className={`absolute ${index === 0
                                        ? "translate-x-0 text-left"
                                        : index === X_TICKS_MOBILE.length - 1
                                            ? "-translate-x-full text-right"
                                            : "-translate-x-1/2 text-center"
                                    } text-[10px] sm:text-[11px]`}
                                style={{ left: `${((year - START_YEAR) / YEAR_SPAN) * 100}%` }}
                            >
                                {year}
                            </span>
                        ))}
                    </div>

                    {/* X-axis title */}
                    <div className="absolute left-1/2 top-[340px] -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[1px] text-[#9CA3AF]">
                        Time Period ({START_YEAR} - {END_YEAR})
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
