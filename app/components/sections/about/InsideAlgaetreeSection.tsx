import Image from "next/image";

export default function InsideAlgaetreeSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px flex flex-col items-center gap-6 py-4 sm:py-8 xl:gap-[54px] xl:py-[152px]">
                <div className="mx-auto w-full max-w-[1488px]">
                    <h2 className="font-space-grotesktext-center text-[28px] leading-[38px] text-black md:text-[42px] md:leading-[48px] xl:text-[56px] xl:leading-[64px]">
                        <span className="block xl:inline">Inside</span>{" "}
                        <span className="block xl:inline">the Algaetree</span>
                    </h2>
                    <div className="relative mt-6 aspect-[408/272] w-full overflow-hidden rounded-[16px] bg-[#d9d9d9] md:mt-8 md:rounded-[24px] xl:aspect-[1488/831] xl:rounded-[40px]">
                        <Image
                            src="/figma/about/mobile/photo-inside.webp"
                            alt="Inside the AlgaeTree"
                            fill
                            sizes="(max-width: 1279px) 100vw, 1488px"
                            className="object-cover"
                        />
                        <Image
                            src="/figma/about/photo-inside.webp"
                            alt=""
                            aria-hidden
                            fill
                            sizes="1488px"
                            className="hidden object-cover xl:block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
