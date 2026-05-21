import Image from "next/image";

type GalleryTile = {
    src: string;
    alt: string;
    /** column span on the 4-col desktop grid (defaults to 1) */
    desktopSpan?: 1 | 2;
    /** column span on the 2-col mobile grid (defaults to 1; 2 = full width) */
    mobileSpan?: 1 | 2;
    objectPosition?: string;
    fitMode?: "cover" | "contain";
};

const tiles: GalleryTile[] = [
    // Row 1
    {
        src: "/figma/about/Frame 28.webp",
        alt: "AlgaeTree team gathered together outdoors",
        desktopSpan: 2,
        mobileSpan: 2,
        fitMode: "contain",
    },
    {
        src: "/figma/about/Frame 29.webp",
        alt: "Team members presenting an AlgaeTree unit outdoors",
        objectPosition: "object-bottom",
    },
    {
        src: "/figma/about/Frame 30.webp",
        alt: "Visitor posing beside an AlgaeTree prototype indoors",
        fitMode: "contain",
    },
    // Row 2
    {
        src: "/figma/about/Frame 34.webp",
        alt: "AlgaeTree installation showcased outdoors",
        objectPosition: "object-center",
    },
    {
        src: "/figma/about/Frame 33.webp",
        alt: "AlgaeTree unit at sunset",
        fitMode: "contain",
    },
    {
        src: "/figma/about/Frame 31.webp",
        alt: "AlgaeTree team during an indoor presentation with partners",
        desktopSpan: 2,
        mobileSpan: 2,
        objectPosition: "object-bottom",
    },
    // Row 3
    {
        src: "/figma/about/Frame 37.webp",
        alt: "AlgaeTree team standing together indoors",
        desktopSpan: 2,
        mobileSpan: 2,
        objectPosition: "object-[center_30%]",
    },
    {
        src: "/figma/about/Frame 32.webp",
        alt: "Close view of an operating AlgaeTree device on display",
        fitMode: "contain",
    },
    {
        src: "/figma/about/Frame 35.webp",
        alt: "AlgaeTree concept installed along an urban roadway",
        objectPosition: "object-center",
    },
    // Row 4
    {
        src: "/figma/about/Frame 39.webp",
        alt: "Team gathered around a working AlgaeTree prototype indoors",
        desktopSpan: 2,
        mobileSpan: 2,
        objectPosition: "object-[center_60%]",
    },
    {
        src: "/figma/about/Frame 40.webp",
        alt: "Visitors looking closely at the AlgaeTree technology",
        desktopSpan: 2,
        mobileSpan: 2,
        objectPosition: "object-center",
    },
    // Row 5
    {
        src: "/figma/about/Frame 41.webp",
        alt: "AlgaeTree team photographed at night with the unit",
        desktopSpan: 2,
        mobileSpan: 2,
        objectPosition: "object-bottom",
    },
    {
        src: "/figma/about/Frame 42.webp",
        alt: "Team members presenting an AlgaeTree unit at a public park",
        desktopSpan: 2,
        mobileSpan: 2,
        objectPosition: "object-[40%_35%]",
    },
];

const desktopSpanClasses: Record<1 | 2, string> = {
    1: "md:col-span-1",
    2: "md:col-span-2",
};

const mobileSpanClasses: Record<1 | 2, string> = {
    1: "col-span-1",
    2: "col-span-2",
};

export default function GallerySection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-10 sm:py-14 xl:py-18">
                <div className="mx-auto flex w-full max-w-[1488px] flex-col items-center">
                    <h2 className="font-space-grotesk text-center text-[40px] leading-none font-medium uppercase text-black sm:text-[30px] md:text-[38px] xl:text-[48px]">
                        Gallery
                    </h2>

                    <div className="mt-7 grid w-full grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4 md:gap-5 xl:mt-12 xl:gap-6">
                        {tiles.map((tile, index) => {
                            const desktopSpan = tile.desktopSpan ?? 1;
                            const mobileSpan = tile.mobileSpan ?? 1;
                            const sizes =
                                desktopSpan === 2
                                    ? "(min-width: 1280px) 732px, (min-width: 768px) 50vw, 100vw"
                                    : "(min-width: 1280px) 354px, (min-width: 768px) 25vw, 50vw";

                            return (
                                <div
                                    key={`gallery-tile-${index}`}
                                    className={`relative h-[180px] overflow-hidden rounded-2xl ${tile.fitMode === "contain" ? "bg-white" : "bg-[#d9d9d9]"} sm:h-[240px] sm:rounded-3xl md:h-[300px] md:rounded-[32px] lg:h-[360px] xl:h-[400px] xl:rounded-[40px] ${mobileSpanClasses[mobileSpan]} ${desktopSpanClasses[desktopSpan]}`}
                                >
                                    <Image
                                        src={tile.src}
                                        alt={tile.alt}
                                        fill
                                        sizes={sizes}
                                        className={tile.fitMode === "contain" ? "object-contain object-center" : `object-cover ${tile.objectPosition ?? "object-center"}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
