import Image from "next/image";

export default function TeamHeroSection() {
    return (
        <section
            aria-labelledby="team-makers-heading"
            className="w-full px-4 py-4 sm:px-6 sm:py-8 xl:px-[120px] xl:py-[113px]"
        >
            <div className="mx-auto flex w-full max-w-[408px] flex-col gap-6 overflow-hidden rounded-[24px] border-[0.5px] border-[#6c6c6c] bg-white pt-6 md:max-w-none md:gap-8 md:pt-8 xl:max-w-[1488px] xl:gap-10 xl:pt-10">
                <div className="px-4 md:px-6 xl:px-16">
                    <div className="flex items-center gap-4 xl:hidden">
                        <div className="h-[128px] w-[6px] shrink-0 rounded-[8px] bg-[#2d5a27]" />
                        <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-4">
                            <h1
                                id="team-makers-heading"
                                className="font-nevera text-[28px] leading-[32px] whitespace-nowrap text-[#2d5a27] md:text-[36px] md:leading-[40px]"
                            >
                                Team &amp; Makers
                            </h1>

                            <p className="w-full font-nimbus text-[14px] leading-[normal] text-[#686868] md:text-[16px] md:leading-[24px]">
                                Behind AlgaeTree™ is a multidisciplinary group of founders,
                                researchers, engineers, and environmental thinkers working toward a
                                shared vision. Together, they combine science, technology, and
                                design to develop solutions that help improve urban air quality.
                            </p>
                        </div>
                    </div>

                    <div className="hidden xl:flex xl:items-center xl:justify-between xl:gap-8">
                        <div className="flex items-center gap-12">
                            <div className="h-[128px] w-[7px] shrink-0 rounded-[8px] bg-[#2d5a27]" />
                            <h1
                                id="team-makers-heading-desktop"
                                className="font-nevera text-[56px] leading-[56px] text-[#2d5a27]"
                            >
                                <span className="block">Team</span>
                                <span className="block">&amp; Makers</span>
                            </h1>
                        </div>

                        <p className="max-w-[775px] font-nimbus text-[20px] leading-[28px] text-[#686868]">
                            Behind AlgaeTree™ is a multidisciplinary group of founders, researchers,
                            engineers, and environmental thinkers working toward a shared vision.
                            Together, they combine science, technology, and design to develop
                            solutions that help improve urban air quality.
                        </p>
                    </div>
                </div>

                <div className="relative h-[671px] w-full overflow-hidden bg-[#e0e0e0] md:h-[520px] xl:h-[600px]">
                    <img
                        src="/figma/team/mobile/hero.png"
                        alt="The AlgaeTree team standing with the product prototype outdoors"
                        className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
                    />
                    <Image
                        src="/figma/team/hero.png"
                        alt=""
                        aria-hidden
                        fill
                        priority
                        sizes="(max-width: 639px) 100vw, (max-width: 1279px) calc(100vw - 48px), 1488px"
                        className="hidden object-cover object-center md:block"
                    />
                </div>
            </div>
        </section>
    );
}