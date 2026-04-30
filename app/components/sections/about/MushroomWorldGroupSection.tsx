type Venture = {
    title: string[];
    company: string[];
    icon: VentureIconName;
    variant?: "default" | "signature";
};

type VentureIconName =
    | "building"
    | "clipboard"
    | "factory"
    | "film"
    | "heart"
    | "leaf"
    | "monitor"
    | "pill"
    | "search"
    | "shirt"
    | "soup"
    | "wine";

function VentureIconMark({
    icon,
    className,
    strokeWidth = 2,
}: {
    icon: VentureIconName;
    className?: string;
    strokeWidth?: number;
}) {
    const props = {
        className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        "aria-hidden": true,
    };

    switch (icon) {
        case "factory":
            return (
                <svg {...props}>
                    <path d="M3 21h18" />
                    <path d="M5 21V10l5 3V8l5 3V6l4 2v13" />
                    <path d="M9 21v-4" />
                    <path d="M13 21v-4" />
                    <path d="M17 21v-4" />
                </svg>
            );
        case "heart":
            return (
                <svg {...props}>
                    <path d="m12 7-.9-.9a2.5 2.5 0 0 0-3.5 3.5L12 14l4.4-4.4a2.5 2.5 0 1 0-3.5-3.5Z" />
                    <path d="M4 15h4l2 2 2-1h5a2 2 0 0 0 0-4h-3" />
                </svg>
            );
        case "monitor":
            return (
                <svg {...props}>
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M9 20h6" />
                    <path d="M12 16v4" />
                    <path d="M8 9h3" />
                    <path d="M9.5 7.5v3" />
                    <circle cx="17" cy="10" r="2" />
                </svg>
            );
        case "clipboard":
            return (
                <svg {...props}>
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <path d="M9 4.5h6" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            );
        case "film":
            return (
                <svg {...props}>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M7 5v14" />
                    <path d="M17 5v14" />
                    <path d="M3 9h4" />
                    <path d="M17 9h4" />
                    <path d="M3 15h4" />
                    <path d="M17 15h4" />
                </svg>
            );
        case "pill":
            return (
                <svg {...props}>
                    <path d="M10 6a4 4 0 0 1 5.7 0l2.3 2.3a4 4 0 0 1 0 5.7l-4 4a4 4 0 0 1-5.7 0L6 15.7a4 4 0 0 1 0-5.7l4-4Z" />
                    <path d="m9 15 6-6" />
                </svg>
            );
        case "search":
            return (
                <svg {...props}>
                    <circle cx="10.5" cy="10.5" r="4.5" />
                    <path d="m14 14 6 6" />
                    <path d="m8.5 10.5 1.5 1.5 3-3" />
                </svg>
            );
        case "shirt":
            return (
                <svg {...props}>
                    <path d="m8 6 4-2 4 2 3 3-2 2-2-1v10H9V10l-2 1-2-2 3-3Z" />
                </svg>
            );
        case "wine":
            return (
                <svg {...props}>
                    <path d="M8 3h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V3Z" />
                    <path d="M12 10v8" />
                    <path d="M9 21h6" />
                </svg>
            );
        case "building":
            return (
                <svg {...props}>
                    <path d="M4 21V7l8-4 8 4v14" />
                    <path d="M9 21v-4h6v4" />
                    <path d="M8 10h.01" />
                    <path d="M12 10h.01" />
                    <path d="M16 10h.01" />
                    <path d="M8 14h.01" />
                    <path d="M16 14h.01" />
                </svg>
            );
        case "soup":
            return (
                <svg {...props}>
                    <path d="M5 12h12a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z" />
                    <path d="M17 12h1a2 2 0 1 1 0 4h-1" />
                    <path d="M9 6v2" />
                    <path d="M12 5v3" />
                    <path d="M15 6v2" />
                </svg>
            );
        case "leaf":
            return (
                <svg {...props}>
                    <path d="M18 4C11 4 6 8.5 6 14a4 4 0 0 0 4 4c5.5 0 10-4.5 10-14Z" />
                    <path d="M8 16c2-2 5-4 9-5" />
                </svg>
            );
    }
}

const ventures: Venture[] = [
    {
        title: ["Green", "Energy"],
        company: ["Mushroom World", "Umbrella Public Ltd."],
        icon: "factory",
    },
    {
        title: ["Health &", "Wellness"],
        company: ["Mushroom World Ayurved", "& Food Pvt. Ltd."],
        icon: "heart",
    },
    {
        title: ["Information", "Technology"],
        company: ["Mushroom World", "FutureTech Pvt. Ltd."],
        icon: "monitor",
    },
    {
        title: ["Fitness &", "Nutrition"],
        company: ["Dt. Poonam Sagar Health", "& Nutrition Pvt. Ltd."],
        icon: "clipboard",
    },
    {
        title: ["Films &", "Entertainment"],
        company: ["Mushroom World", "Films Pvt. Ltd."],
        icon: "film",
    },
    {
        title: ["Homeopathy", "Medicine"],
        company: ["Meethic Golee Homeo-Care", "Pvt. Ltd."],
        icon: "pill",
    },
    {
        title: ["Treasure", "Hunt"],
        company: ["Mushroom World", "Khojee"],
        icon: "search",
    },
    {
        title: ["Fashion", "Industry"],
        company: ["Mobbs & Walter, Mushroom", "World Fashion Pvt. Ltd"],
        icon: "shirt",
    },
    {
        title: ["Winery &", "Vineyard"],
        company: ["SAVI, Mushroom World", "Wines Pvt. Ltd."],
        icon: "wine",
    },
    {
        title: ["Welfare", "Foundation"],
        company: ["Kartavyam Nasha", "Mukti Kendra"],
        icon: "building",
    },
    {
        title: ["Food &", "Beverages"],
        company: ["Blackila Food", "& Beverages LLP"],
        icon: "soup",
    },
    {
        title: ["Mushroom World", "Group"],
        company: ["...And these are the", "decisions that make us"],
        icon: "leaf",
        variant: "signature",
    },
];

const overviewParagraphs = [
    "Mushroom World Group is a dynamic conglomerate with a powerful presence across diverse sectors ranging from Ayurveda, Healthcare & Fitness, and Homeopathy to Apparel & Fashion, IT, Film, Winery and Green Energy. The Group began its journey in 2008 with mushroom cultivation and has since grown to become India's largest manufacturer of mushroom-based Ayurvedic products, trusted by over 2 crore+ customers nationwide. Under the visionary leadership of Director Mr. Vijay Sagar, Mr. Sameer Sagar & Mr. Shakti Sagar, Mushroom World Group continues to set new benchmarks in innovation, sustainability, and impact.",
    "A key milestone is Madhya Pradesh's first Napier-based Bio-CNG Plant, with plans to expand to 10+ more units, creating clean fuel and large-scale rural employment. This reflects the Group's commitment to energy independence and climate-conscious growth.",
    "Furthering its green vision, the AlgaeTree Project pioneers urban carbon capture and air purification, combining futuristic design with sustainability to build healthier, greener, and self-reliant communities.",
];

function getTileClasses(index: number) {
    const mobileRightBorder = index % 2 === 0 ? "border-r border-[#d7d7d7]" : "";
    const mobileBottomBorder = index < ventures.length - 2 ? "border-b border-[#d7d7d7]" : "";
    const desktopRightBorder = index % 4 !== 3 ? "lg:border-r lg:border-[#d7d7d7]" : "";
    const desktopBottomBorder = index < ventures.length - 4 ? "lg:border-b lg:border-[#d7d7d7]" : "";

    return `${mobileRightBorder} ${mobileBottomBorder} lg:border-r-0 lg:border-b-0 ${desktopRightBorder} ${desktopBottomBorder}`;
}

export default function MushroomWorldGroupSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px pb-8 lg:pb-10 xl:pb-[60px]">
                <div className="mx-auto w-full max-w-[1488px] overflow-hidden rounded-[24px] border border-[#d7d7d7] bg-white px-4 py-8 sm:px-6 sm:py-10 lg:rounded-[32px] lg:px-12 lg:py-12 xl:px-16">
                    <h2 className="font-nevera mx-auto max-w-[980px] text-center text-[34px] leading-[36px] tracking-[-0.03em] text-[#0d646a] uppercase sm:text-[46px] sm:leading-[46px] lg:text-[72px] lg:leading-[72px]">
                        Mushroom World Group
                    </h2>

                    <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-[20px]  bg-white lg:mt-10 lg:grid-cols-4 lg:rounded-[28px]">
                        {ventures.map(({ title, company, icon, variant = "default" }, index) => (
                            <div
                                key={title.join(" ")}
                                className={`flex min-h-[176px] flex-col items-center justify-center px-4 py-6 text-center sm:min-h-[190px] sm:px-5 lg:min-h-[196px] lg:px-6 ${getTileClasses(index)}`}
                            >
                                {variant === "signature" ? (
                                    <>
                                        <div className="flex size-[62px] items-center justify-center rounded-full border-[3px] border-[#0d646a] text-[#0d646a] sm:size-[72px]">
                                            <VentureIconMark icon={icon} className="size-8 sm:size-9" strokeWidth={2.1} />
                                        </div>
                                        <p className="font-nimbus mt-3 text-[12px] leading-[15px] text-[#343434] sm:text-[13px] sm:leading-[16px]">
                                            {company.map((line) => (
                                                <span key={line} className="block">
                                                    {line}
                                                </span>
                                            ))}
                                        </p>
                                        <h3 className="font-nevera mt-2 text-[24px] leading-[24px] text-[#0d646a] sm:text-[28px] sm:leading-[28px]">
                                            {title.map((line) => (
                                                <span key={line} className="block">
                                                    {line}
                                                </span>
                                            ))}
                                        </h3>
                                    </>
                                ) : (
                                    <>
                                        <VentureIconMark icon={icon} className="size-8 text-[#0d646a] sm:size-9" strokeWidth={1.9} />
                                        <h3 className="font-nevera mt-3 text-[24px] leading-[24px] text-[#2a2a2a] sm:text-[28px] sm:leading-[28px]">
                                            {title.map((line) => (
                                                <span key={line} className="block">
                                                    {line}
                                                </span>
                                            ))}
                                        </h3>
                                        <p className="font-nimbus mt-3 text-[12px] leading-[15px] text-[#3f3f3f] sm:text-[13px] sm:leading-[16px]">
                                            {company.map((line) => (
                                                <span key={line} className="block">
                                                    {line}
                                                </span>
                                            ))}
                                        </p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 border-t border-[#d7d7d7] pt-8 sm:mt-10 sm:pt-10 lg:mt-12 lg:pt-12">
                        <div className="flex items-start gap-4 sm:gap-5 lg:gap-7">
                            <div className="mt-1 h-auto min-h-[220px] w-[4px] shrink-0 rounded-full bg-[#346633] sm:min-h-[188px] lg:min-h-[176px]" />
                            <div className="flex-1">
                                <h3 className="font-nevera text-[28px] leading-[32px] text-[#346633] uppercase sm:text-[40px] sm:leading-[42px] lg:max-w-[860px] lg:text-[56px] lg:leading-[58px]">
                                    <span className="block">AlgaeTree - A Green Vision</span>
                                    <span className="block">by Mushroom World Group</span>
                                </h3>
                                <div className="font-nimbus mt-4 space-y-4 text-[14px] leading-[22px] text-[#686868] sm:text-[15px] sm:leading-[24px] lg:mt-5 lg:max-w-[1180px] lg:text-[20px] lg:leading-[30px]">
                                    {overviewParagraphs.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}