const HOMEPAGE_VIDEO_EMBED_URL = "https://www.youtube-nocookie.com/embed/Uar9PYreEOQ?si=yuj0YpS2xKIlqHoN&rel=0";

export default function InsideSection() {
    return (
        <section className="w-full overflow-hidden bg-white">
            <div className="page-px py-6 lg:hidden">
                <div className="flex flex-col items-center gap-6">
                    <h2 className="font-space-grotesk text-center text-[28px] font-medium uppercase leading-9.5 text-black">
                        <span className="block">Inside the</span>
                        <span className="block">Algaetree</span>
                    </h2>
                    <div className="relative aspect-[408/272] w-full overflow-hidden rounded-[24px] bg-black">
                        <iframe
                            src={HOMEPAGE_VIDEO_EMBED_URL}
                            title="AlgaeTree homepage video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                            className="block size-full border-0"
                        />
                    </div>
                </div>
            </div>

            <div className="page-px hidden py-10 lg:block lg:py-[60px]">
                <div className="mx-auto flex w-full max-w-[1488px] flex-col items-center gap-10 lg:gap-[54px]">
                    <h2 className="font-space-grotesk flex w-full flex-col justify-center text-center text-[56px] font-medium uppercase leading-16 text-black">
                        Inside the Algaetree
                    </h2>
                    <div className="relative aspect-[1488/831] w-full overflow-hidden rounded-[40px] bg-black">
                        <iframe
                            src={HOMEPAGE_VIDEO_EMBED_URL}
                            title="AlgaeTree homepage video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                            className="block size-full border-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
