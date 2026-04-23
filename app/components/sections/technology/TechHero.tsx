import Image from "next/image";

export default function TechHero() {
    return (
        <section className="w-full bg-white">
            <div className="page-px py-4 lg:py-[113px]">
                <div className="relative h-[860px] w-full overflow-hidden rounded-[16px] bg-[#d9d9d9] 
                lg:h-[918px] lg:rounded-[40px]">
                    <Image
                        src="/figma/technology/Technology%20Hero%20Image%20Mobile.png"
                        alt="AlgaeTree Technology"
                        fill
                        priority
                        sizes="(max-width: 1023px) 100vw"
                        className="object-cover object-center lg:hidden"
                    />
                    <Image
                        src="/figma/technology/Technology%20Hero%20Image%20Desktop.png"
                        alt=""
                        aria-hidden
                        fill
                        priority
                        sizes="(min-width: 1024px) 1488px, 100vw"
                        className="hidden object-cover object-center lg:block"
                    />
                    {/* Desktop-only subtle overlay to keep text legible */}
                    <div className="absolute inset-0 hidden bg-gradient-to-r from-black/55 via-black/25 to-transparent lg:block" />
                    {/* Mobile heading */}
                    <h1 className="font-nimbus absolute left-4 top-6 text-[26px] font-bold leading-[32px] text-[#2D5A27] lg:hidden">
                        <span className="block">Living hardware for</span>
                        <span className="block">real-time atmospheric repair.</span>
                    </h1>
                    {/* Desktop heading */}
                    <h1 className="font-nimbus absolute left-[106px] top-1/2 hidden max-w-[564px] -translate-y-1/2 text-[40px] font-bold leading-[56px] text-white lg:block">
                        <span className="block">A SOLUTION THIS</span>
                        <span className="block">PLANET IS LOOKING FOR!</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
