"use client";

import Image from "next/image";

export default function TeamInspirationSection() {
    return (
        <section
            aria-labelledby="team-inspiration-heading "
            className="page-px w-full pb-4 sm:pb-8 xl:pb-[60px] "
        >
            <div className="mx-auto flex w-full max-w-[408px] flex-col gap-4 md:max-w-none xl:max-w-[1488px] xl:gap-0 xl:mt-2">
                <div className="flex flex-col gap-2 px-4 xl:flex-row xl:items-center xl:justify-between xl:gap-6 xl:px-4 ">
                    <h2
                        id="team-inspiration-heading"
                        className="font-space-grotesk text-[28px] font-medium leading-[40px] uppercase text-black md:text-[36px] md:leading-[44px] xl:text-[48px] xl:leading-[64px]"
                    >
                        <span className="block xl:hidden">Team Inspiration</span>
                        <span className="hidden xl:block">Team</span>
                        <span className="hidden xl:block">Inspiration</span>
                    </h2>

                    <p className="max-w-[840px] font-nimbus text-[14px] leading-[normal] text-[#686868] md:text-[16px] md:leading-[24px] xl:text-[18px] xl:leading-[28px]">
                        Guided by the philosophy of <strong className="font-bold">“Vasudhaiva Kutumbakam”—the world is one family</strong>,
                        our work reflects a shared responsibility toward people, our country, and the
                        planet we all depend on.
                    </p>
                </div>

                <div className="relative h-[160px] w-full  xl:h-auto xl:aspect-[1488/400]">
                    <img
                        src="/figma/team/mobile/inspiration-subtract.webp"
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-fill xl:hidden"
                    />
                    <Image
                        src="/quote-desktop.svg"
                        alt="Nature's smallest organisms can restore the planet's greatest need. clean air."
                        fill
                        priority
                        className="absolute inset-0 hidden h-full w-full object-cover xl:block"
                    />

                    <div className="absolute inset-x-[9.5px] top-1/2 flex -translate-y-1/2 items-center gap-[4.661px] xl:hidden">
                        <Image
                            src="/figma/team/mobile/quote-left.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="shrink-0 self-start"
                        />

                        <p className="flex-1 font-space-grotesk text-center text-[16px] uppercase leading-[20px] text-white">
                            Nature’s smallest organisms can restore the planet’s greatest need. clean air.
                        </p>

                        <Image
                            src="/figma/team/mobile/quote-right.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="shrink-0 self-end"
                        />
                    </div>

                    <div className="absolute bottom-0 -right-1 size-[35.645px] xl:hidden">
                        <img
                            src="/figma/team/mobile/inspiration-circle.webp"
                            alt=""
                            aria-hidden="true"
                            className="h-full w-full object-contain xl:hidden"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}