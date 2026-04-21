export default function AlignmentSection() {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col items-center gap-4 px-4 pb-8 sm:px-6 md:gap-6 xl:flex-row xl:justify-between xl:gap-12 xl:px-[120px] xl:pb-[60px]">
                <div className="order-2 flex w-full flex-col gap-0 xl:order-1 xl:w-[678px]">
                    <h2 className="font-nimbus text-[40px] font-normal leading-[40px] text-black md:text-[48px] md:leading-[52px] xl:font-nevera xl:text-[56px] xl:leading-[72px]">
                        <span className="block">Alignment with</span>
                        <span className="block">Government Goals</span>
                    </h2>
                    <div className="font-nimbus space-y-3 text-[14px] leading-[normal] text-[#686868] md:text-[16px] md:leading-[24px] xl:text-[20px] xl:leading-[28px]">
                        <p>
                            India has committed to ambitious climate and air-quality targets,
                            including achieving Net Zero emissions by 2070, reducing urban air
                            pollution under the National Clean Air Programme (NCAP), and advancing
                            research in Carbon Capture, Utilization and Storage (CCUS) technologies.
                        </p>
                        <p>
                            AlgaeTree™ has been developed with these national priorities in mind. By
                            utilizing microalgae-based carbon capture and renewable energy systems,
                            the technology contributes to ongoing efforts aimed at reducing
                            atmospheric carbon, improving urban air quality, and strengthening
                            climate-resilient infrastructure.
                        </p>
                        <p>
                            Its modular design allows deployment in public spaces, transport
                            corridors, and industrial zones, supporting broader initiatives under
                            the Smart Cities Mission and contributing to India&rsquo;s commitments
                            under the{" "}
                            <span className="xl:font-bold">
                                Paris Climate Agreement and the United Nations Sustainable
                                Development Goals (SDGs).
                            </span>
                        </p>
                    </div>
                </div>
                <div className="order-1 w-full xl:order-2 xl:w-[736px]">
                    <img src="/figma/about/mobile/subtract-alignment.svg" alt="" aria-hidden="true" className="block h-auto w-full xl:hidden" />
                    <img src="/figma/about/subtract-vision.svg" alt="" aria-hidden="true" className="hidden h-[800px] w-full xl:block" />
                </div>
            </div>
        </section>
    );
}
