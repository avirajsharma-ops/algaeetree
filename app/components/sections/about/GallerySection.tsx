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
    { src: "/figma/about/mobile/frame-28.png", col: "col-span-2", alt: "AlgaeTree gallery 1", crop: "cover" },
    { src: "/figma/about/mobile/frame-34.jpg", col: "col-span-1", alt: "AlgaeTree gallery 4", crop: "frame34" },
    { src: "/figma/about/mobile/frame-30.png", col: "col-span-1", alt: "AlgaeTree gallery 3", crop: "frame30" },
    { src: "/figma/about/mobile/frame-33.png", col: "col-span-1", alt: "AlgaeTree gallery 5", crop: "cover" },
    { src: "/figma/about/mobile/frame-29.jpg", col: "col-span-1", alt: "AlgaeTree gallery 2", crop: "cover" },
    { src: "/figma/about/mobile/frame-31.png", col: "col-span-2", alt: "AlgaeTree gallery 6", crop: "cover" },
    { src: "/figma/about/mobile/frame-32.jpg", col: "col-span-1", alt: "AlgaeTree gallery 8", crop: "cover" },
    { src: "/figma/about/mobile/frame-35.png", col: "col-span-1", alt: "AlgaeTree gallery 9", crop: "cover" },
    { src: "/figma/about/mobile/frame-38.jpg", col: "col-span-2", alt: "AlgaeTree gallery 7", crop: "frame38" },
];

export default function GallerySection() {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col items-center gap-6 px-4 py-4 lg:gap-20 lg:px-[120px] lg:py-[60px]">
                <h2 className="font-nevera text-[28px] leading-[40px] text-black lg:text-[56px] lg:leading-[64px]">
                    Gallery
                </h2>

                {/* Mobile / tablet grid (2 columns) */}
                <div className="grid w-full grid-cols-2 gap-4 lg:hidden">
                    {mobile.map((img, i) => (
                        <div
                            key={`m-${i}`}
                            className={`${img.col} relative h-[200px] overflow-hidden rounded-[16px] bg-[#d9d9d9]`}
                        >
                            {img.crop === "cover" ? (
                                <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover" />
                            ) : img.crop === "frame34" ? (
                                <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="absolute h-[163.02%] max-w-none top-[-63%] left-[-113.23%] w-[276.27%]"
                                    />
                                </div>
                            ) : img.crop === "frame30" ? (
                                <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="absolute h-[116.18%] max-w-none top-[-16.18%] left-[-0.1%] w-[158.77%]"
                                    />
                                </div>
                            ) : (
                                <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="absolute h-[110.79%] max-w-none top-[-10.87%] left-[-0.05%] w-[108.47%]"
                                    />
                                </div>
                            )}
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
                            {img.src.endsWith("frame-29.png") ? (
                                <div className="absolute inset-0 overflow-hidden rounded-[40px]">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="absolute h-[102%] max-w-none top-0 left-[-32.99%] w-[172.86%]"
                                    />
                                </div>
                            ) : img.src.endsWith("frame-30.png") ? (
                                <div className="absolute inset-0 overflow-hidden rounded-[40px]">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="absolute h-[121.75%] max-w-none top-[-15.25%] left-[-10.31%] w-[184.25%]"
                                    />
                                </div>
                            ) : img.src.endsWith("frame-34.png") ? (
                                <div className="absolute inset-0 overflow-hidden rounded-[40px]">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="absolute h-[163.02%] max-w-none top-[-63%] left-[-113.23%] w-[276.27%]"
                                    />
                                </div>
                            ) : img.src.endsWith("frame-37.jpg") ? (
                                <div className="absolute inset-0 overflow-hidden rounded-[40px]">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="absolute h-[110.79%] max-w-none top-[-10.87%] left-[-0.05%] w-[108.47%]"
                                    />
                                </div>
                            ) : (
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 25vw"
                                    className="object-cover"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
