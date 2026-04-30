export default function NaturesGeniusSection() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative hidden h-[1117px] w-full lg:block">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                >
                    <source
                        src="/freepik_add-subtle-motion-in-this-microscopic-algae-cell-m_minimax_768p_16-9_24fps_82556.mp4"
                        type="video/mp4"
                    />
                </video>

                <div className="page-px absolute inset-0 flex items-center justify-center">
                    <div className="flex w-full max-w-[1488px] flex-col items-center gap-6 text-center text-black lg:gap-6">
                        <p className="font-nimbus text-[18px] font-bold leading-normal lg:text-[20px]">
                            Nature&apos;s Genius
                        </p>
                        <h2 className="font-space-grotesk text-[34px] font-normal leading-[1.1] sm:text-[46px] lg:text-[64px] lg:leading-[56px]">
                            Algae: The Earth&apos;s Original Filter
                        </h2>
                        <div className="font-nimbus max-w-[994px] text-[14px] font-normal leading-normal lg:text-[16px]">
                            <p>Long before trees, algae was the primary source of Earth&apos;s oxygen. Through photosynthesis,</p>
                            <p>these microscopic organisms consume CO2 up to 50 times faster than terrestrial plants.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-[884px] w-full overflow-hidden bg-white lg:hidden">
                <div className="absolute left-1/2 top-[192px] h-[500px] w-[896px] -translate-x-1/2 overflow-hidden">
                    <video
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                    >
                        <source
                            src="/freepik_add-subtle-motion-in-this-microscopic-algae-cell-m_minimax_768p_16-9_24fps_82556.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 58%)",
                    }}
                />

                <div className="page-px absolute left-0 right-0 top-1/2 -translate-y-1/2">
                    <div className="mx-auto flex w-full max-w-[408px] flex-col items-center gap-2 text-center text-black">
                        <p className="font-nimbus text-[18px] font-bold leading-normal">Nature&apos;s Genius</p>
                        <h2 className="font-space-grotesk text-[36px] leading-[40px]">
                            <span className="block">Algae: The Earth&apos;s</span>
                            <span className="block">Original Filter</span>
                        </h2>
                        <p className="font-nimbus text-[14px] leading-normal">
                            Long before trees, algae was the primary source of Earth&apos;s oxygen. Through photosynthesis, these microscopic organisms consume CO2 up to 50 times faster than terrestrial plants.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
