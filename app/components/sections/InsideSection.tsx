const HOMEPAGE_VIDEO_EMBED_URL = "https://www.youtube.com/embed/Uar9PYreEOQ?si=yuj0YpS2xKIlqHoN";

export default function InsideSection() {
    return (
        <section className="w-full overflow-hidden bg-white">
            <div className="px-4 py-6 lg:hidden">
                <div className="flex flex-col items-center gap-6">
                    <h2 className="font-nevera text-center text-[28px] uppercase leading-[38px] text-black">
                        <span className="block">Inside the</span>
                        <span className="block">Algaetree</span>
                    </h2>
                    <div className="relative h-[272px] w-full overflow-hidden rounded-[24px] bg-black">
                        <iframe
                            src={HOMEPAGE_VIDEO_EMBED_URL}
                            title="AlgaeTree homepage video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="block size-full border-0"
                        />
                    </div>
                </div>
            </div>

            <div className="relative hidden h-[1136px] w-full overflow-hidden lg:block">
                <div className="absolute left-1/2 top-1/2 flex w-[calc(100%-40px)] max-w-[1488px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[54px]">
                    <div className="font-nevera flex w-full flex-col justify-center text-center text-[56px] leading-[64px] text-black">
                        <p>Inside the Algaetree</p>
                    </div>
                    <div className="relative h-[831px] w-full overflow-hidden rounded-[40px] bg-black">
                        <iframe
                            src={HOMEPAGE_VIDEO_EMBED_URL}
                            title="AlgaeTree homepage video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="block size-full border-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
