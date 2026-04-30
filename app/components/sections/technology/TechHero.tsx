import Image from "next/image";

export default function TechHero() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-4 lg:py-10 xl:py-14">
                <div className="relative mx-auto aspect-[816/1704] w-full max-w-[1488px] overflow-hidden rounded-[16px] bg-[#d9d9d9] sm:aspect-[4/3] lg:aspect-[2976/1616] lg:rounded-[40px]">
                    <Image
                        src="/figma/technology/Technology%20Hero%20Image%20Mobile.png"
                        alt="AlgaeTree Technology"
                        fill
                        priority
                        sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), 0px"
                        className="object-cover object-center lg:hidden"
                    />
                    <Image
                        src="/figma/technology/Technology%20Hero%20Image%20Desktop.png"
                        alt=""
                        aria-hidden
                        fill
                        priority
                        sizes="(min-width: 1728px) 1488px, (min-width: 1280px) calc(100vw - 240px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                        className="hidden object-cover object-center lg:block"
                    />
                    {/* Desktop-only subtle overlay to keep text legible */}
                    <div className="absolute inset-0 hidden to-transparent lg:block" />
                    {/* Mobile heading */}
                    <h1 className="font-nimbus absolute left-4 top-6 text-[26px] font-bold leading-[32px] text-[#2D5A27] lg:hidden">
                        <span className="block">Living hardware for</span>
                        <span className="block">real-time atmospheric repair.</span>
                    </h1>
                    {/* Desktop heading */}
                    <h1 className="font-nimbus absolute left-[clamp(24px,5vw,106px)] top-1/2 hidden max-w-[min(68vw,564px)] -translate-y-1/2 text-[clamp(30px,2.8vw,40px)] font-bold leading-[1.25] text-white lg:block">
                        <span className="block font-space-grotesk bold  text-[#055453] ">A SOLUTION THIS</span>
                        <span className="block font-space-grotesk bold text-[#055453]  ">PLANET IS LOOKING FOR!</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
