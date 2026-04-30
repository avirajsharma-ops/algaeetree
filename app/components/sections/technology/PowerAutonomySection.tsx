import Image from "next/image";

type Stat = {
    display: string;
    label: string[];
};

const STATS: Stat[] = [
    { display: "12", label: ["Hours Backup", "(Battery)"] },
    { display: "24/7", label: ["Telemetry &", "System Uptime"] },
    { display: "2.5", label: ["KWh/day", "Typical Draw*"] },
    { display: "1", label: ["Sources", "(Solar)"] },
];

function StatCircle({ stat }: { stat: Stat }) {
    return (
        <div className="flex flex-col items-center gap-4 lg:gap-10">
            <div className="relative size-[128px] sm:size-[148px] lg:size-[260px]">
                <span
                    className="absolute inset-0 rounded-full border-[2px] border-white/85"
                    aria-hidden
                />
                <span
                    className="absolute inset-[8px] rounded-full border border-white/55 sm:inset-[10px] lg:inset-[18px]"
                    aria-hidden
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-nimbus text-[34px] leading-none text-white sm:text-[40px] lg:text-[64px]">
                        {stat.display}
                    </span>
                </div>
            </div>
            <p className="font-nimbus text-center text-[14px] font-bold leading-tight tracking-[0.6px] text-white sm:text-[16px] lg:text-[26px] lg:leading-[32px] lg:tracking-[1px]">
                {stat.label.map((line) => (
                    <span key={line} className="block">
                        {line}
                    </span>
                ))}
            </p>
        </div>
    );
}

export default function PowerAutonomySection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-4 lg:py-[60px]">
                <div className="relative mx-auto w-full max-w-[1488px] overflow-hidden rounded-[16px] lg:h-[831px] lg:rounded-[40px]">
                    <Image
                        src="/figma/technology/power-bg.png"
                        alt=""
                        fill
                        sizes="(max-width: 1024px) calc(100vw - 32px), (max-width: 1279px) calc(100vw - 48px), 1488px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />

                    <div className="relative flex flex-col items-center px-4 py-12 lg:items-center lg:px-[125px] lg:py-[92px]">
                        <h2 className="font-space-grotesktext-center text-[28px] leading-tight text-white lg:text-[56px] lg:leading-[64px]">
                            Power & Autonomy
                        </h2>

                        <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 lg:mt-[124px] lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-[66px]">
                            {STATS.map((stat) => (
                                <StatCircle key={stat.label.join(" ")} stat={stat} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
