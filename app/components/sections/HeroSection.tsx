import Image from "next/image";
import Button from "../Button";

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative hidden h-[1034px] w-full lg:block">
                <Image
                    src="/figma/hero-bg.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0">
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

            <div className="relative h-[852px] w-full overflow-hidden bg-[#004c0f] lg:hidden">
                <div className="absolute inset-0 bg-[#004c0f]" />
                <Image
                    src="/figma/bloom-micro-algae.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[70%_55%] opacity-55 mix-blend-screen scale-[2.15]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_60%,rgba(255,255,255,0.16),transparent_20%),linear-gradient(180deg,rgba(0,76,15,0.18),rgba(0,76,15,0.18))]" />

                <div className="absolute left-4 right-4 top-1/2 max-w-[350px] -translate-y-1/2">
                    <div className="font-nimbus text-[26.82px] font-bold leading-[37.548px] text-white">
                        <p>What if your infrastructure quietly captured CO₂ while powering itself?</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
