"use client";

import { motion } from "motion/react";

const imageFrameMask = {
    WebkitMaskImage: "url('/figma/solutions/b2c/subtract.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskImage: "url('/figma/solutions/b2c/subtract.svg')",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "100% 100%",
};

function OverviewImage({
    src,
    alt,
    wrapperClassName,
    imageClassName,
}: {
    src: string;
    alt: string;
    wrapperClassName: string;
    imageClassName?: string;
}) {
    return (
        <div className={wrapperClassName}>
            <div className="relative h-full w-full overflow-hidden bg-[#d9d9d9]" style={imageFrameMask}>
                <img
                    src={src}
                    alt={alt}
                    aria-hidden="true"
                    className={`absolute inset-0 h-full w-full object-cover ${imageClassName ?? "object-center"}`}
                />
            </div>
        </div>
    );
}

const contentBlocks = [
    {
        title: ["Microalgae", "Powered Clean Air", "for Everyday Spaces"],
        mobileHeight: "649px",
        mobileTextHeight: "225px",
        bodyWrapperClassName: "min-w-full w-[min-content] whitespace-pre-wrap",
        image: "/figma/solutions/b2c/Image 1.png",
        body: [
            "AlgaeTree combines microalgae carbon capture, air purification, and intelligent monitoring to create healthier environments.",
            "Instead of simply filtering air, the system actively regenerates it by absorbing carbon dioxide and releasing oxygen.",
            "Cleaner air. Measurable carbon reduction. Visible climate action.",
        ],
    },
    {
        title: ["Living Climate Technology for People and Places"],
        mobileHeight: "666px",
        mobileTextHeight: "242px",
        bodyWrapperClassName: "w-full",
        image: "/figma/solutions/b2c/Image 2.png",
        body: [
            "AlgaeTree transforms ordinary environments into living climate infrastructure.",
            "Microalgae capture carbon, release oxygen, and help reduce particulate pollution while smart sensors monitor air quality continuously.",
            "The result is healthier spaces and visible environmental impact.",
        ],
    },
];

export default function B2cOverviewSection() {
    return (
        <section className="w-full bg-white">
            <div className="px-4 py-10 md:px-6 md:py-14 xl:px-[120px] xl:py-[120px]">
                <div className="mx-auto flex max-w-[408px] flex-col gap-[56px] md:hidden">
                    {contentBlocks.map((block) => (
                        <motion.div key={block.title[0]} className="flex flex-col gap-4" style={{ height: block.mobileHeight }}>
                            <OverviewImage
                                src={block.image}
                                alt={block.title.join(" ")}
                                wrapperClassName="h-[408px] w-full"
                            />

                            <div className="flex flex-col gap-2" style={{ height: block.mobileTextHeight }}>
                                <h2 className="font-nevera text-[28px] leading-[normal] text-black">
                                    {block.title.map((line) => (
                                        <span key={line} className="block">
                                            {line}
                                        </span>
                                    ))}
                                </h2>

                                <div className={`font-nimbus text-[14px] leading-[normal] text-[#686868] ${block.bodyWrapperClassName}`}>
                                    {block.body.map((paragraph) => (
                                        <p key={paragraph} className="mb-3 last:mb-0">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mx-auto hidden max-w-[1488px] flex-col gap-12 md:flex">
                    <motion.div className="flex items-center gap-12">
                        <div className="flex min-w-0 flex-1 flex-col gap-4">
                            <h2 className="font-nevera text-[48px] leading-[72px] text-black">
                                <span className="block">Microalgae</span>
                                <span className="block">Powered Clean Air</span>
                                <span className="block">for Everyday Spaces</span>
                            </h2>

                            <div className="font-nimbus text-[20px] leading-[28px] text-[#686868]">
                                <p className="mb-3">
                                    AlgaeTree combines microalgae carbon capture, air purification,
                                    and intelligent monitoring to create healthier environments.
                                </p>
                                <p className="mb-3">
                                    Instead of simply filtering air, the system actively regenerates
                                    it by absorbing carbon dioxide and releasing oxygen.
                                </p>
                                <p>
                                    Cleaner air. Measurable carbon reduction. Visible climate action.
                                </p>
                            </div>
                        </div>

                        <OverviewImage
                            src="/figma/solutions/b2c/Image 1.png"
                            alt="Microalgae Powered Clean Air for Everyday Spaces"
                            wrapperClassName="h-[650px] w-[650px] shrink-0"
                        />
                    </motion.div>

                    <motion.div className="flex items-center gap-12">
                        <OverviewImage
                            src="/figma/solutions/b2c/Image 2.png"
                            alt="Living Climate Technology for People and Places"
                            wrapperClassName="h-[650px] w-[650px] shrink-0"
                            imageClassName="object-center"
                        />

                        <div className="flex min-w-0 flex-1 flex-col gap-4">
                            <h2 className="font-nevera text-[48px] leading-[72px] text-black">
                                Living Climate Technology for People and Places
                            </h2>

                            <div className="font-nimbus text-[20px] leading-[28px] text-[#686868]">
                                <p className="mb-3">
                                    AlgaeTree transforms ordinary environments into living climate
                                    infrastructure.
                                </p>
                                <p className="mb-3">
                                    Microalgae capture carbon, release oxygen, and help reduce
                                    particulate pollution while smart sensors monitor air quality
                                    continuously.
                                </p>
                                <p>
                                    The result is healthier spaces and visible environmental impact.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}