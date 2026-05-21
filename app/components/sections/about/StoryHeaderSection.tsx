const mobileStoryMask = {
    WebkitMaskImage: "url('/figma/about/mobile/story-shape-mask.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskImage: "url('/figma/about/mobile/story-shape-mask.svg')",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "100% 100%",
};

const desktopStoryMask = {
    WebkitMaskImage: "url('/figma/about/story-shape-mask.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskImage: "url('/figma/about/story-shape-mask.svg')",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "100% 100%",
};

export default function StoryHeaderSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px flex flex-col gap-4 pt-8 pb-4 sm:pt-10 sm:pb-6 xl:gap-0 xl:pt-[60px] xl:pb-8">
                <div className="mx-auto w-full max-w-[1488px]">
                    {/* Heading row */}
                    <div className="flex flex-col items-start gap-4 xl:flex-row xl:items-start xl:justify-between xl:gap-8">
                        <h2 className="font-nimbus whitespace-nowrap text-[40px] font-medium uppercase leading-[40px] text-black md:text-[48px] md:leading-[52px] xl:font-space-groteskxl:text-[56px] xl:leading-[72px]">
                            {/* Mobile: "Our Story," / "Vision, and Value" */}
                            <span className="block xl:hidden">Our Story,</span>
                            <span className="block xl:hidden">Vision, and Value</span>
                            {/* Desktop: "Our Story, Vision," / "and Value" */}
                            <span className="hidden xl:block">Our Story, Vision,</span>
                            <span className="hidden xl:block">and Value</span>
                        </h2>
                        <p className="font-nimbus text-[14px] leading-[normal] text-[#686868] md:text-[16px] md:leading-[24px] xl:w-[651px] xl:text-[20px] xl:leading-[28px]">
                            There is always a thought behind actions, but we have a revolution mindset
                            behind everything we do.
                        </p>
                    </div>

                    {/* Story banner — top-left notch tucks under the heading on desktop. */}
                    <div className="relative w-full xl:-mt-14">
                        <div className="relative h-[160px] w-full overflow-hidden bg-transparent sm:h-[220px] xl:hidden" style={mobileStoryMask}>
                            <img
                                src="/About%20Us%20Image%201%20(1).webp"
                                alt="Our story visual"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="relative hidden h-[400px] w-full overflow-hidden bg-transparent xl:block" style={desktopStoryMask}>
                            <img
                                src="/About%20Us%20Image%201%20(1).webp"
                                alt="Our story visual"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
