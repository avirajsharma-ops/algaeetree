import Image from "next/image";
import Button from "../Button";

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative h-[640px] w-full sm:h-[760px] md:h-[860px] lg:h-[1034px]">
                <Image
                    src="/figma/hero-bg.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[68%_center] lg:object-center"
                />

                <div className="absolute inset-0 lg:hidden">
                    <div className="page-px flex h-full flex-col items-start justify-end gap-6 pb-24 sm:justify-center sm:pb-0">
                        <div className="flex max-w-[522px] flex-col items-start gap-6">
                            <h1 className="font-nimbus text-[32px] font-bold leading-[1.15] text-[#2d5a27] sm:text-[36px] sm:leading-[1.2] md:text-[40px] md:leading-[56px]">
                                On the Edge of Experiencing Something Truly Extraordinary
                            </h1>
                            <Button className="self-start">Glimpse Now</Button>
                        </div>

                        <div className="inline-flex items-center justify-start gap-[10px]">
                            <div className="h-2 w-[120px] rounded bg-[#2D5A27]" />
                            <div className="h-2 w-[180px] rounded bg-[#108900] sm:w-[250px]" />
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 hidden lg:block">
                    <div className="absolute left-[120px] top-[433px] inline-flex w-[522px] flex-col items-start justify-start gap-6">
                        <div className="relative h-[168px] w-[522px] overflow-hidden">
                            <div className="absolute left-0 top-0 inline-flex flex-col items-start justify-center gap-[60px]">
                                <div className="inline-flex items-center justify-center gap-2">
                                    <h1 className="font-nimbus flex w-[522px] flex-col justify-center text-[#2D5A27] text-[40px] font-bold leading-[56px]">
                                        On the Edge of Experiencing Something Truly Extraordinary
                                    </h1>
                                </div>
                                <div className="inline-flex items-center justify-center gap-2 opacity-0">
                                    <div className="font-nimbus flex w-[459px] flex-col justify-center text-[40px] font-bold leading-[56px] text-white">
                                        What if your footpath could photosynthesize?
                                    </div>
                                </div>
                                <div className="inline-flex items-center justify-center gap-2 opacity-0">
                                    <div className="font-nimbus flex w-[417px] flex-col justify-center text-[40px] font-bold leading-[56px] text-white">
                                        What if your dividers cleaned the air faster than forests?
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button className="self-start">Glimpse Now</Button>
                    </div>

                    <div className="absolute left-[120px] top-[948px] inline-flex items-center justify-start gap-[10px]">
                        <div className="h-2 w-[120px] rounded bg-[#2D5A27]" />
                        <div className="h-2 w-[250px] rounded bg-[#108900]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
