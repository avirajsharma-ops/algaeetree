const mobileVisionMask = {
    WebkitMaskImage: "url('/figma/about/mobile/subtract-vision.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskImage: "url('/figma/about/mobile/subtract-vision.svg')",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "100% 100%",
};

const desktopVisionMask = {
    WebkitMaskImage: "url('/figma/about/subtract-vision.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskImage: "url('/figma/about/subtract-vision.svg')",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "100% 100%",
};

export default function VisionSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px pb-12 xl:pb-12">
                <div className="mx-auto flex w-full max-w-[1488px] flex-col items-center gap-4 md:gap-6 xl:flex-row xl:justify-between xl:gap-12">
                    <div className="order-2 flex w-full flex-col gap-0 xl:order-1 xl:w-[678px]">
                        <h2 className="font-nimbus text-[40px] font-normal leading-[40px] text-black md:text-[48px] md:leading-[52px] xl:font-space-groteskxl:text-[56px] xl:leading-[72px]">
                            Vision
                        </h2>
                        <div className="font-nimbus space-y-3 text-[14px] leading-[normal] text-[#686868] md:text-[16px] md:leading-[24px] xl:text-[20px] xl:leading-[28px]">
                            <p>
                                Take a moment and look around. Every city street, every highway, every
                                industrial corridor all quietly releasing carbon into the atmosphere. In
                                a country of over 140 crore people, the air we breathe affects every
                                life, every day.
                            </p>
                            <p>
                                With AlgaeTree™, we envision a future where clean, breathable air becomes
                                a basic reality for every city and every community. We aim to build
                                self-sustaining systems that capture carbon, improve air quality, and
                                help create healthier urban environments.
                            </p>
                            <p>
                                Because the cities of tomorrow should not only rise, they should rise
                                with air worth breathing.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 w-full xl:order-2 xl:w-[736px]">
                        <div className="relative aspect-square w-full overflow-hidden bg-[#d9d9d9] xl:hidden" style={mobileVisionMask}>
                            <img
                                src="/figma/about/About Us Image 2.webp"
                                alt="Vision"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="relative hidden h-[800px] w-full overflow-hidden bg-[#d9d9d9] xl:block" style={desktopVisionMask}>
                            <img
                                src="/figma/about/About Us Image 2.webp"
                                alt="Vision"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
