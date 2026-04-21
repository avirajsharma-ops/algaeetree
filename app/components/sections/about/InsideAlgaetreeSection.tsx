import Image from "next/image";

export default function InsideAlgaetreeSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px flex flex-col items-center gap-6 py-4 lg:gap-[54px] lg:py-[152px]">
                <h2 className="font-nevera text-center text-[28px] leading-[38px] text-black lg:text-[56px] lg:leading-[64px]">
                    <span className="block lg:inline">Inside</span>{" "}
                    <span className="block lg:inline">the Algaetree</span>
                </h2>
                <div className="relative aspect-[408/272] w-full overflow-hidden rounded-[16px] bg-[#d9d9d9] lg:aspect-[1488/831] lg:rounded-[40px]">
                    <Image
                        src="/figma/about/photo-inside.png"
                        alt="Inside the AlgaeTree"
                        fill
                        sizes="(max-width: 1024px) 100vw, 1488px"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
