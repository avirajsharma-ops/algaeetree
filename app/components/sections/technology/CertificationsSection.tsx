import Image from "next/image";

const CERTS = [
    { src: "/figma/technology/cert-1.png", alt: "Patent eFiling — NPA filing receipt" },
    { src: "/figma/technology/cert-2.png", alt: "Mushroom World Umbrella Ltd. 14064" },
    { src: "/figma/technology/cert-3.png", alt: "Mushroom World Umbrella Ltd. 14001" },
    { src: "/figma/technology/cert-4.png", alt: "Mushroom World Umbrella Ltd. 10993" },
];

export default function CertificationsSection() {
    return (
        <section className="w-full bg-[#0d1f00]">
            <div className="page-px py-10 md:py-12 lg:py-[120px]">
                <h2 className="font-nevera text-[28px] leading-[1.1] text-white sm:text-[32px] lg:text-[56px] lg:leading-[72px]">
                    Our Certifications
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-10">
                    {CERTS.map((cert) => (
                        <div
                            key={cert.alt}
                            className="flex aspect-[2479/3508] w-full items-center justify-center bg-white p-3"
                        >
                            <div className="relative size-full">
                                <Image
                                    src={cert.src}
                                    alt={cert.alt}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 342px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
