import Image from "next/image";

const CERTS = [
    { src: "/figma/technology/Mushroomwordlcetrificate.png", alt: "Mushroom World Certificate" },
    { src: "/figma/technology/PATENT eFiling_mushroom world_NPA_filing receipt (1).webp", alt: "Patent eFiling — NPA filing receipt" },
    { src: "/figma/technology/Mushroom-World-Umbrella-Ltd-14064.webp", alt: "Mushroom World Umbrella Ltd. 14064" },
    { src: "/figma/technology/Mushroom-World-Umbrella-Ltd-14001.webp", alt: "Mushroom World Umbrella Ltd. 14001" },
    { src: "/figma/technology/Mushroom-World-Umbrella-Ltd-10993.webp", alt: "Mushroom World Umbrella Ltd. 10993" },
];

export default function CertificationsSection() {
    return (
        <section className="w-full bg-[#0d1f00]">
            <div className="page-px pt-8 pb-10 md:pt-10 md:pb-12 lg:pt-12 lg:pb-30">
                <div className="mx-auto w-full max-w-372">
                    <h2 className="font-space-grotesk text-[28px] uppercase leading-[1.1] text-white sm:text-[32px] lg:text-[56px] lg:leading-18">
                        Our Certifications
                    </h2>

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:mt-12 lg:grid-cols-5 lg:gap-6">
                        {CERTS.map((cert) => (
                            <div
                                key={cert.alt}
                                className="flex aspect-2479/3508 w-full items-center justify-center bg-white p-3"
                            >
                                <div className="relative size-full">
                                    <Image
                                        src={cert.src}
                                        alt={cert.alt}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 20vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
