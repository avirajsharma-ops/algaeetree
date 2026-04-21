import NotchedShape from "./NotchedShape";

export default function AlignmentSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px flex flex-col items-center gap-4 pb-8 lg:flex-row lg:justify-between lg:gap-12 lg:py-[60px]">
                <div className="order-2 flex w-full flex-col gap-4 lg:order-1 lg:w-[678px]">
                    <h2 className="font-nimbus text-[40px] font-normal leading-[40px] text-black lg:font-nevera lg:text-[56px] lg:leading-[72px]">
                        <span className="block">Alignment with</span>
                        <span className="block">Government Goals</span>
                    </h2>
                    <div className="font-nimbus space-y-3 text-[14px] leading-[normal] text-[#686868] lg:text-[20px] lg:leading-[28px]">
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
                            <span className="font-bold">
                                Paris Climate Agreement and the United Nations Sustainable
                                Development Goals (SDGs).
                            </span>
                        </p>
                    </div>
                </div>
                <NotchedShape
                    variant="tl-br"
                    className="order-1 block h-[408px] w-full lg:order-2 lg:h-[800px] lg:w-[736px]"
                />
            </div>
        </section>
    );
}
