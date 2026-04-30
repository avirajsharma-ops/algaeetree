import Image from "next/image";
import ContactFormCard from "./ContactFormCard";

const CONTACT_QUOTE =
    "Not every space can have a forest. But every space can do something. Now the focus needs to shift toward smarter infrastructure that gives back, not just takes space. That's where ideas like Algaetree start to matter.";

export default function ContactHeroSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-4 lg:py-10 xl:py-14">
                <div className="relative mx-auto w-full max-w-372 overflow-hidden rounded-[32px] bg-[linear-gradient(112deg,#031008_4%,#08310F_42%,#0AA50F_100%)] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 xl:rounded-[40px] xl:px-12 xl:py-12">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 left-0 w-[48%] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),rgba(255,255,255,0)_58%)]"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 right-[-10%] w-[44%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),rgba(255,255,255,0)_68%)]"
                    />

                    <div className="relative grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,480px)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_576px] xl:gap-12">
                        <div className="flex w-full flex-col gap-8 lg:min-h-[560px] lg:justify-between lg:pr-2 xl:min-h-[644px]">
                            <div className="max-w-[580px]">
                                <h1 className="font-space-grotesk text-[44px] font-bold uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-[56px] xl:text-[74px]">
                                    <span className="block">Let&apos;s Work</span>
                                    <span className="block">Together</span>
                                </h1>

                                <p className="mt-5 max-w-[560px] font-nimbus text-[18px] leading-[1.45] text-white/92 sm:text-[20px] xl:mt-6 xl:text-[21px]">
                                    Looking to bring cleaner air solutions into your space? Whether
                                    it&apos;s a city project, campus, commercial area, or public
                                    infrastructure, we&apos;re here to explore how Algaetree can fit in.
                                </p>
                            </div>

                            <div className="max-w-[568px] rounded-[20px] border border-white/10 bg-[rgba(87,94,87,0.58)] px-5 py-6 backdrop-blur-[18px] sm:px-8 sm:py-8 xl:min-h-[280px] xl:rounded-[24px]">
                                <Image
                                    src="/figma/contact/quote-left.svg"
                                    alt=""
                                    aria-hidden
                                    width={60}
                                    height={60}
                                    className="size-[46px] brightness-0 invert sm:size-[56px]"
                                />

                                <p className="mt-8 max-w-[500px] font-nimbus text-[18px] font-medium leading-[1.55] text-white sm:text-[20px] xl:mt-10 xl:text-[22px] xl:leading-[1.6]">
                                    {CONTACT_QUOTE}
                                </p>
                            </div>
                        </div>

                        <div className="lg:justify-self-end">
                            <ContactFormCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}