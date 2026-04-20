import Image from "next/image";

export default function InsideSection() {
    return (
        <section className="w-full overflow-hidden bg-white">
            <div className="page-px lg:hidden py-16">
                <div className="flex flex-col items-center gap-10">
                    <h2 className="font-nevera text-center text-[38px] leading-[1.1] text-black">Inside the Algaetree</h2>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[32px] bg-[#d9d9d9]">
                        <Image
                            src="/figma/inside-photo.png"
                            alt="Inside the Algaetree"
                            fill
                            sizes="(min-width: 1024px) 0px, 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="relative hidden h-[1136px] w-full overflow-hidden lg:block">
                <div className="absolute left-1/2 top-1/2 flex w-[calc(100%-40px)] max-w-[1488px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[54px]">
                    <div className="font-nevera flex w-full flex-col justify-center text-center text-[56px] leading-[64px] text-black">
                        <p>Inside the Algaetree</p>
                    </div>
                    <div className="relative h-[831px] w-full overflow-hidden rounded-[40px] bg-[#d9d9d9]">
                        <img src="/figma/inside-photo.png" alt="Inside the Algaetree" className="absolute left-1/2 top-0 h-[992px] w-[1488px] -translate-x-1/2 object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
