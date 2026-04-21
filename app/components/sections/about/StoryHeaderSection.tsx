export default function StoryHeaderSection() {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col gap-4 px-4 pt-8 pb-12 lg:px-[120px] lg:gap-0 lg:pt-[60px] lg:pb-12">
                {/* Heading row */}
                <div className="flex flex-col items-start gap-4 px-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:px-4">
                    <h2 className="font-nimbus whitespace-nowrap text-[40px] font-normal leading-[40px] text-black lg:font-nevera lg:text-[56px] lg:leading-[72px]">
                        {/* Mobile: "Our Story," / "Vision, and Value" */}
                        <span className="block lg:hidden">Our Story,</span>
                        <span className="block lg:hidden">Vision, and Value</span>
                        {/* Desktop: "Our Story, Vision," / "and Value" */}
                        <span className="hidden lg:block">Our Story, Vision,</span>
                        <span className="hidden lg:block">and Value</span>
                    </h2>
                    <p className="font-nimbus text-[14px] leading-[normal] text-[#686868] lg:w-[651px] lg:text-[20px] lg:leading-[28px]">
                        There is always a thought behind actions, but we have a revolution mindset
                        behind everything we do.
                    </p>
                </div>

                {/* Story banner — top-left notch tucks under the heading on desktop. */}
                <div className="relative w-full lg:-mt-14">
                    <div className="relative lg:hidden">
                        <img src="/figma/about/mobile/story-shape.svg" alt="" aria-hidden="true" className="block h-auto w-full" />
                        <img src="/figma/about/mobile/story-arrow.svg" alt="" aria-hidden="true" className="absolute right-0 bottom-0 size-9" />
                    </div>
                    <img
                        src="/figma/about/frame-36-story.svg"
                        alt=""
                        aria-hidden="true"
                        className="hidden h-[400px] w-full lg:block"
                    />
                </div>
            </div>
        </section>
    );
}
