import Image from "next/image";

type Venture = {
    title: string[];
    company: string[];
    image: string;
    variant?: "default" | "signature";
};

const ICON_BASE = "/figma/about/mushroom-world";

const ventures: Venture[] = [
    {
        title: ["Green", "Energy"],
        company: ["Mushroom World", "Umbrella Public Ltd."],
        image: `${ICON_BASE}/green-energy.svg`,
    },
    {
        title: ["Health &", "Wellness"],
        company: ["Mushroom World Ayurved", "& Food Pvt. Ltd."],
        image: `${ICON_BASE}/health-wellness.svg`,
    },
    {
        title: ["Information", "Technology"],
        company: ["Mushroom World", "FutureTech Pvt. Ltd."],
        image: `${ICON_BASE}/information-technology.svg`,
    },
    {
        title: ["Fitness &", "Nutrition"],
        company: ["Dt. Poonam Sagar Health", "& Nutrition Pvt. Ltd."],
        image: `${ICON_BASE}/fitness-nutrition.svg`,
    },
    {
        title: ["Films &", "Entertainment"],
        company: ["Mushroom World", "Films Pvt. Ltd."],
        image: `${ICON_BASE}/films-entertainment.svg`,
    },
    {
        title: ["Homeopathy", "Medicine"],
        company: ["Meethic Golee Homeo-Care", "Pvt. Ltd."],
        image: `/figma/about/Frame 427318480.svg`,
    },
    {
        title: ["Treasure", "Hunt"],
        company: ["Mushroom World", "Khojee"],
        image: `${ICON_BASE}/treasure-hunt.svg`,
    },
    {
        title: ["Fashion", "Industry"],
        company: ["Mobbs & Walter, Mushroom", "World Fashion Pvt. Ltd"],
        image: `${ICON_BASE}/fashion-industry.svg`,
    },
    {
        title: ["Winery &", "Vineyard"],
        company: ["SAVI, Mushroom World", "Wines Pvt. Ltd."],
        image: `/figma/about/Frame 427318496.svg`,
    },
    {
        title: ["Welfare", "Foundation"],
        company: ["Kartavyam Nasha", "Mukti Kendra"],
        image: `${ICON_BASE}/welfare-foundation.svg`,
    },
    {
        title: ["Food &", "Beverages"],
        company: ["Blackila Food", "& Beverages LLP"],
        image: `${ICON_BASE}/food-beverages.svg`,
    },
    {
        title: ["Mushroom World", "Group"],
        company: ["...And these are the", "decisions that make us"],
        image: `${ICON_BASE}/mushroom-world-group.svg`,
        variant: "signature",
    },
];

const overviewParagraphs = [
    "Mushroom World Group is a dynamic conglomerate with a powerful presence across diverse sectors ranging from Ayurveda, Healthcare & Fitness, and Homeopathy to Apparel & Fashion, IT, Film, Winery and Green Energy. The Group began its journey in 2008 with mushroom cultivation and has since grown to become India's largest manufacturer of mushroom-based Ayurvedic products, trusted by over 2 crore+ customers nationwide. Under the visionary leadership of Director Mr. Vijay Sagar, Mr. Sameer Sagar & Mr. Shakti Sagar, Mushroom World Group continues to set new benchmarks in innovation, sustainability, and impact.",
    "A key milestone is Madhya Pradesh's first Napier-based Bio-CNG Plant, with plans to expand to 10+ more units, creating clean fuel and large-scale rural employment. This reflects the Group's commitment to energy independence and climate-conscious growth.",
    "Furthering its green vision, the AlgaeTree Project pioneers urban carbon capture and air purification, combining futuristic design with sustainability to build healthier, greener, and self-reliant communities.",
];

function getTileClasses(index: number) {
    // Right divider (vertical line with inset top/bottom so it doesn't span full cell height)
    const mobileRight =
        index % 2 === 0
            ? "after:absolute after:right-0 after:top-6 after:bottom-6 after:w-px after:bg-[#d7d7d7]"
            : "";
    const desktopRight =
        index % 4 !== 3
            ? "lg:after:absolute lg:after:right-0 lg:after:top-8 lg:after:bottom-8 lg:after:w-px lg:after:bg-[#d7d7d7]"
            : "lg:after:hidden";

    // Bottom divider (horizontal line with inset left/right) - mobile only, hidden on last row
    const mobileBottom =
        index < ventures.length - 2
            ? "before:absolute before:bottom-0 before:left-6 before:right-6 before:h-px before:bg-[#d7d7d7]"
            : "";
    const desktopBottom = "lg:before:hidden";

    return `relative ${mobileRight} ${desktopRight} ${mobileBottom} ${desktopBottom}`;
}

export default function MushroomWorldGroupSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px pb-8 lg:pb-10 xl:pb-15">
                <div className="mx-auto w-full max-w-372 overflow-hidden rounded-3xl border border-[#d7d7d7] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:rounded-4xl lg:px-12 lg:py-12 xl:px-16">
                    <h2 className="sr-only">Mushroom World Group</h2>
                    <div className="mx-auto w-full max-w-[1222px]">
                        <Image
                            src="/figma/about/Vector.webp"
                            alt="Mushroom World Group"
                            width={2444}
                            height={153}
                            sizes="(min-width: 1280px) 1222px, (min-width: 640px) 90vw, calc(100vw - 48px)"
                            className="h-auto w-full"
                        />
                    </div>

                    <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl bg-white lg:mt-10 lg:grid-cols-4 lg:rounded-[28px]">
                        {ventures.map(({ title, company, image, variant = "default" }, index) => (
                            <div
                                key={title.join(" ")}
                                className={`flex min-h-36 flex-col items-center justify-center px-3 py-4 text-center sm:min-h-40 sm:px-4 sm:py-5 lg:min-h-44 lg:px-6 ${getTileClasses(index)}`}
                            >
                                {variant === "signature" ? (
                                    <>
                                        <div className="relative size-12 sm:size-13 lg:size-14">
                                            <Image
                                                src={image}
                                                alt={title.join(" ")}
                                                fill
                                                sizes="(min-width: 1024px) 56px, 52px"
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="mt-2 font-nimbus text-[11px] leading-4 text-[#343434] sm:text-[12px] sm:leading-3.75 lg:text-[13px] lg:leading-4">
                                            {company.map((line) => (
                                                <span key={line} className="block">
                                                    {line}
                                                </span>
                                            ))}
                                        </p>
                                        <h3 className="mt-1.5 font-space-grotesk text-[18px] leading-5 text-[#0d646a] sm:text-[22px] sm:leading-6 lg:text-[26px] lg:leading-7">
                                            {title.map((line) => (
                                                <span key={line} className="block wrap-break-word">
                                                    {line}
                                                </span>
                                            ))}
                                        </h3>
                                    </>
                                ) : (
                                    <>
                                        <div className="relative size-12 sm:size-13 lg:size-14">
                                            <Image
                                                src={image}
                                                alt={title.join(" ")}
                                                fill
                                                sizes="(min-width: 1024px) 56px, 52px"
                                                className="object-contain"
                                            />
                                        </div>
                                        <h3 className="mt-2 font-space-grotesk text-[18px] font-semibold leading-5 text-[#2a2a2a] sm:text-[22px] sm:leading-6 lg:text-[26px] lg:leading-7">
                                            {title.map((line) => (
                                                <span key={line} className="block wrap-break-word">
                                                    {line}
                                                </span>
                                            ))}
                                        </h3>
                                        <p className="mt-2 font-nimbus text-[11px] font-medium leading-4 text-[#3f3f3f] sm:text-[12px] sm:leading-3.75 lg:text-[13px] lg:leading-4">
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

                    <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 lg:mt-10 lg:pt-10">
                        <div className="flex items-start gap-4 sm:gap-5 lg:gap-7">
                            <div className="mt-1 w-1 shrink-0 self-stretch rounded-full bg-[#346633]" />
                            <div className="flex-1">
                                <h3 className="font-space-grotesk text-[28px] leading-8 text-[#346633] uppercase tracking-[-0.03em] sm:text-[40px] sm:leading-[42px] lg:max-w-[860px] lg:text-[56px] lg:leading-[58px]">
                                    <span className="block font-medium ">AlgaeTree - A Green Vision</span>
                                    <span className="block font-medium ">by Mushroom World Group</span>
                                </h3>
                                <div className="mt-4 space-y-4 font-nimbus text-[14px] leading-[22px] text-[#686868] sm:text-[15px] sm:leading-6 lg:mt-5 lg:max-w-[1180px] lg:text-[20px] lg:leading-[30px]">
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
