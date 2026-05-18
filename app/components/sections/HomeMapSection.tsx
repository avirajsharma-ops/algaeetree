"use client";

import dynamic from "next/dynamic";

const HomeMapWidget = dynamic(() => import("@/app/components/sections/HomeMapWidget"), {
    ssr: false,
    loading: () => (
        <div className="h-105 w-full animate-pulse bg-[#dfe6df] md:h-130" />
    ),
});

export default function HomeMapSection() {
    return (
        <section className="w-full bg-white py-8 md:py-10 xl:py-12">
            <div className="page-px">
                <div className="mx-auto flex w-full max-w-372 flex-col">
                    <div className="mb-6 md:mb-8">
                        <h2 className="font-space-grotesk text-[28px] font-semibold leading-tight text-[#0f1d10] md:text-[40px]">
                            Watch Clean Air Being Created - Live
                        </h2>
                        <p className="font-nimbus mt-3 max-w-220 text-[16px] leading-7 text-[#2f3b30] md:text-[18px]">
                            Each active AlgaeTree is continuously capturing carbon dioxide and producing oxygen, building healthier urban spaces in real time.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-[#d6ded6] shadow-[0_20px_60px_rgba(15,29,16,0.10)]">
                        <HomeMapWidget />
                    </div>
                </div>
            </div>
        </section>
    );
}
