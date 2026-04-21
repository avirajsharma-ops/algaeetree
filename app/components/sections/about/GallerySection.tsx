import Image from "next/image";

const desktop = [
    { src: "/figma/about/frame-28.png", col: "col-span-2", alt: "AlgaeTree gallery 1" },
    { src: "/figma/about/frame-29.png", col: "col-span-1", alt: "AlgaeTree gallery 2" },
    { src: "/figma/about/frame-30.png", col: "col-span-1", alt: "AlgaeTree gallery 3" },
    { src: "/figma/about/frame-34.png", col: "col-span-1", alt: "AlgaeTree gallery 4" },
    { src: "/figma/about/frame-33.png", col: "col-span-1", alt: "AlgaeTree gallery 5" },
    { src: "/figma/about/frame-31.png", col: "col-span-2", alt: "AlgaeTree gallery 6" },
    { src: "/figma/about/frame-37.jpg", col: "col-span-2", alt: "AlgaeTree gallery 7" },
    { src: "/figma/about/frame-32.png", col: "col-span-1", alt: "AlgaeTree gallery 8" },
    { src: "/figma/about/frame-35.png", col: "col-span-1", alt: "AlgaeTree gallery 9" },
];

const mobile = [
    { src: "/figma/about/frame-28.png", col: "col-span-2", alt: "AlgaeTree gallery 1" },
    { src: "/figma/about/frame-34.png", col: "col-span-1", alt: "AlgaeTree gallery 4" },
    { src: "/figma/about/frame-30.png", col: "col-span-1", alt: "AlgaeTree gallery 3" },
    { src: "/figma/about/frame-33.png", col: "col-span-1", alt: "AlgaeTree gallery 5" },
    { src: "/figma/about/frame-29.png", col: "col-span-1", alt: "AlgaeTree gallery 2" },
    { src: "/figma/about/frame-31.png", col: "col-span-2", alt: "AlgaeTree gallery 6" },
    { src: "/figma/about/frame-32.png", col: "col-span-1", alt: "AlgaeTree gallery 8" },
    { src: "/figma/about/frame-35.png", col: "col-span-1", alt: "AlgaeTree gallery 9" },
    { src: "/figma/about/frame-37.jpg", col: "col-span-2", alt: "AlgaeTree gallery 7" },
];

export default function GallerySection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px flex flex-col gap-6 py-4 lg:items-center lg:gap-20 lg:py-[60px]">
                <h2 className="font-nevera self-start text-[28px] leading-[40px] text-black lg:self-auto lg:text-[56px] lg:leading-[64px]">
                    Gallery
                </h2>

                {/* Mobile / tablet grid (2 columns) */}
                <div className="grid w-full grid-cols-2 gap-4 lg:hidden">
                    {mobile.map((img, i) => (
                        <div
                            key={`m-${i}`}
                            className={`${img.col} relative h-[200px] overflow-hidden rounded-[16px] bg-[#d9d9d9]`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="50vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop grid (4 columns) */}
                <div className="hidden w-full grid-cols-4 gap-6 lg:grid">
                    {desktop.map((img, i) => (
                        <div
                            key={`d-${i}`}
                            className={`${img.col} relative h-[400px] overflow-hidden rounded-[40px] bg-[#d9d9d9]`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 25vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
