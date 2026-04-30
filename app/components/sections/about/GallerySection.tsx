import Image from "next/image";
type GalleryTile = {
    src: string;
    alt: string;
    objectPosition?: string;
};

type GalleryRow = {
    template: string;
    height: string;
    sizes: string;
    tiles: GalleryTile[];
};

const galleryRows: GalleryRow[] = [
    {
        template: "grid-cols-[1.65fr_1fr_0.92fr] md:grid-cols-[1.8fr_1.04fr_0.98fr]",
        height: "h-[136px] sm:h-[176px] md:h-[220px] lg:h-[248px] xl:h-[284px]",
        sizes: "(min-width: 1280px) 360px, (min-width: 768px) 31vw, 33vw",
        tiles: [
            {
                src: "/figma/about/frame-28.png",
                alt: "AlgaeTree team members standing together outdoors",
                objectPosition: "object-[center_36%]",
            },
            {
                src: "/figma/about/frame-29.png",
                alt: "Team members presenting an AlgaeTree unit",
                objectPosition: "object-[70%_center]",
            },
            {
                src: "/figma/about/frame-30.png",
                alt: "A visitor posing beside an AlgaeTree prototype",
                objectPosition: "object-[74%_center]",
            },
        ],
    },
    {
        template: "grid-cols-[0.94fr_1fr_1.68fr] md:grid-cols-[0.98fr_1fr_1.82fr]",
        height: "h-[106px] sm:h-[144px] md:h-[184px] lg:h-[208px] xl:h-[236px]",
        sizes: "(min-width: 1280px) 370px, (min-width: 768px) 30vw, 32vw",
        tiles: [
            {
                src: "/figma/about/frame-34.png",
                alt: "AlgaeTree system installed for a public demonstration",
                objectPosition: "object-[58%_center]",
            },
            {
                src: "/figma/about/About Us Image 2.png",
                alt: "Concept rendering of an AlgaeTree unit in a future-ready city",
            },
            {
                src: "/figma/about/frame-31.png",
                alt: "AlgaeTree team with partners during an indoor presentation",
                objectPosition: "object-[center_28%]",
            },
        ],
    },
    {
        template: "grid-cols-[1.68fr_1fr_0.94fr] md:grid-cols-[1.84fr_1fr_0.98fr]",
        height: "h-[108px] sm:h-[146px] md:h-[188px] lg:h-[212px] xl:h-[240px]",
        sizes: "(min-width: 1280px) 360px, (min-width: 768px) 30vw, 32vw",
        tiles: [
            {
                src: "/figma/about/frame-37.jpg",
                alt: "AlgaeTree team members standing together indoors",
                objectPosition: "object-[center_42%]",
            },
            {
                src: "/figma/about/frame-32.png",
                alt: "Close view of an operating AlgaeTree device indoors",
                objectPosition: "object-[center_44%]",
            },
            {
                src: "/figma/about/About Us Image 3.png",
                alt: "AlgaeTree concept installed along an urban roadway",
                objectPosition: "object-[60%_center]",
            },
        ],
    },
    {
        template: "grid-cols-[1.08fr_1fr]",
        height: "h-[104px] sm:h-[142px] md:h-[182px] lg:h-[208px] xl:h-[236px]",
        sizes: "(min-width: 1280px) 540px, (min-width: 768px) 44vw, 46vw",
        tiles: [
            {
                src: "/figma/about/frame-33.png",
                alt: "AlgaeTree team gathered around a working prototype",
                objectPosition: "object-[center_42%]",
            },
            {
                src: "/figma/about/frame-35.png",
                alt: "Visitors looking closely at the AlgaeTree technology",
                objectPosition: "object-[center_42%]",
            },
        ],
    },
    {
        template: "grid-cols-[1.08fr_1fr]",
        height: "h-[104px] sm:h-[142px] md:h-[182px] lg:h-[208px] xl:h-[236px]",
        sizes: "(min-width: 1280px) 540px, (min-width: 768px) 44vw, 46vw",
        tiles: [
            {
                src: "/figma/about/frame-28.png",
                alt: "Team members standing beside an outdoor AlgaeTree installation",
                objectPosition: "object-[center_48%]",
            },
            {
                src: "/figma/about/frame-34.png",
                alt: "AlgaeTree device being showcased during an outdoor visit",
                objectPosition: "object-[60%_center]",
            },
        ],
    },
];

export default function GallerySection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-10 sm:py-14 xl:py-18">
                <div className="mx-auto flex w-full max-w-[1488px] flex-col items-center">
                    <h2 className="font-space-grotesktext-center text-[24px] leading-none font-normal uppercase tracking-[0.12em] text-black sm:text-[30px] md:text-[38px] xl:text-[48px]">
                        Gallery
                    </h2>

                    <div className="mt-7 flex w-full flex-col gap-2.5 sm:mt-10 sm:gap-4 md:gap-5 xl:mt-12 xl:gap-6">
                        {galleryRows.map((row, rowIndex) => (
                            <div key={`row-${rowIndex}`} className={`grid ${row.template} ${row.height} gap-2.5 sm:gap-4 md:gap-5 xl:gap-6`}>
                                {row.tiles.map((tile, tileIndex) => (
                                    <div
                                        key={`tile-${rowIndex}-${tileIndex}`}
                                        className="relative h-full overflow-hidden rounded-xl bg-[#d9d9d9] sm:rounded-[18px] md:rounded-[22px] xl:rounded-[28px]"
                                    >
                                        <Image
                                            src={tile.src}
                                            alt={tile.alt}
                                            fill
                                            sizes={row.sizes}
                                            className={`object-cover ${tile.objectPosition ?? "object-center"}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
