const algaeVisualMaskStyle = {
    WebkitMaskImage:
        "radial-gradient(circle at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,0.92) 38%, rgba(0,0,0,0.45) 58%, rgba(0,0,0,0) 76%)",
    maskImage:
        "radial-gradient(circle at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,0.92) 38%, rgba(0,0,0,0.45) 58%, rgba(0,0,0,0) 76%)",
};

export default function NaturesGeniusSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            <div className="relative hidden h-279.25 w-full lg:flex lg:flex-col lg:items-center lg:justify-center">
                <div className="absolute inset-x-0 top-8.5 flex justify-center">
                    <div className="relative h-190 w-7xl" style={algaeVisualMaskStyle}>
                        <video
                            className="h-full w-full object-cover object-center scale-[1.08]"
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
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(227,240,217,0.45)_0%,rgba(255,255,255,0.85)_48%,rgba(255,255,255,1)_75%)]" />

                <div className="page-px absolute inset-x-0 top-8.5 h-190 flex flex-col items-center justify-center">
                    <div className="mx-auto flex max-w-372 flex-col items-center gap-4 text-center text-black">
                        <p className="font-nimbus text-[18px] font-bold leading-normal">
                            Nature&apos;s Genius
                        </p>
                        <h2 className="font-space-grotesk text-[56px] font-normal leading-16 text-black">
                            Algae: The Earth&apos;s Original Filter
                        </h2>
                        <div className="font-nimbus max-w-195 text-[16px] leading-6 text-[#686868]">
                            <p>
                                Long before trees, algae was the primary source of Earth&apos;s oxygen. Through photosynthesis,
                            </p>
                            <p>
                                these microscopic organisms consume CO2 up to 50 times faster than terrestrial plants.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="relative h-221 w-full overflow-hidden bg-white lg:hidden">
                <div className="absolute inset-x-0 top-21 flex justify-center">
                    <div className="relative h-130 w-130 max-w-[135vw]" style={algaeVisualMaskStyle}>
                        <video
                            className="h-full w-full object-cover object-center scale-[1.22]"
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
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(227,240,217,0.44)_0%,rgba(255,255,255,0.84)_46%,rgba(255,255,255,1)_72%)]" />

                <div className="page-px absolute inset-x-0 top-21 h-130 flex flex-col items-center justify-center">
                    <div className="mx-auto flex w-full max-w-102 flex-col items-center gap-2 text-center text-black">
                        <p className="font-nimbus text-[18px] font-bold leading-normal">Nature&apos;s Genius</p>
                        <h2 className="font-space-grotesk text-[36px] leading-10 text-black">
                            <span className="block">Algae: The Earth&apos;s</span>
                            <span className="block">Original Filter</span>
                        </h2>
                        <div className="font-nimbus text-[14px] leading-5 text-[#686868]">
                            <p>Long before trees, algae was the primary source of Earth&apos;s oxygen.</p>
                            <p>Through photosynthesis, these microscopic organisms consume CO2 up to 50 times faster than terrestrial plants.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
