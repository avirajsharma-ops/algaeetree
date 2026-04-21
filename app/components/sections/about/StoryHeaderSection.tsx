export default function StoryHeaderSection() {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col gap-4 px-4 pt-8 pb-12 sm:px-6 sm:pt-10 xl:px-[120px] xl:gap-0 xl:pt-[60px] xl:pb-12">
                {/* Heading row */}
                <div className="flex flex-col items-start gap-4 px-4 sm:px-2 xl:flex-row xl:items-start xl:justify-between xl:gap-8 xl:px-4">
                    <h2 className="font-nimbus whitespace-nowrap text-[40px] font-normal leading-[40px] text-black md:text-[48px] md:leading-[52px] xl:font-nevera xl:text-[56px] xl:leading-[72px]">
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
                    <div className="relative xl:hidden">
                        <img src="/figma/about/mobile/story-shape.svg" alt="" aria-hidden="true" className="block h-auto w-full" />
                        <img src="/figma/about/mobile/story-arrow.svg" alt="" aria-hidden="true" className="absolute right-0 bottom-0 size-9" />
                    </div>
                    <img
                        src="/figma/about/frame-36-story.svg"
                        alt=""
                        aria-hidden="true"
                        className="hidden h-[400px] w-full xl:block"
                    />
                </div>
            </div>
        </section>
    );
}
