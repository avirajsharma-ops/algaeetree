import ContactFormCard from "./ContactFormCard";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function ContactHeroSection() {
    return (
        <section className="w-full px-4 py-4 sm:px-6 sm:py-8 xl:px-[120px] xl:py-[113px]">
            <div className="mx-auto flex w-full max-w-[1488px] flex-col gap-8 rounded-[24px] bg-[#d9d9d9] px-4 py-6 sm:px-8 sm:py-8 lg:px-10 xl:rounded-[40px] xl:px-[120px] xl:py-[56px]">
                <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-[48px]">
                    <div className="flex w-full flex-col gap-8 xl:min-h-[646px] xl:w-[596px] xl:justify-between">
                        <div className="flex flex-col gap-4">
                            <h1 className="font-space-grotesktext-[40px] leading-[40px] text-black sm:text-[48px] sm:leading-[48px] xl:text-[56px] xl:leading-[56px]">
                                <span className="block">Let’s Work</span>
                                <span className="block">Together</span>
                            </h1>

                            <p className="max-w-[537px] text-[16px] leading-[24px] text-black sm:text-[18px] sm:leading-[28.8px]">
                                Explore our client reviews and discover how we&apos;ve earned trust by
                                delivering innovative solutions to complex challenges.
                            </p>
                        </div>

                        <TestimonialsCarousel />
                    </div>

                    <ContactFormCard />
                </div>
            </div>
        </section>
    );
}