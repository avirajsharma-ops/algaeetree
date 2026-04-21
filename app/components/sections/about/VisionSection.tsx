export default function VisionSection() {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col items-center gap-4 px-4 pb-12 lg:flex-row lg:justify-between lg:gap-12 lg:px-[120px] lg:pb-12">
                <div className="order-2 flex w-full flex-col gap-0 lg:order-1 lg:w-[678px]">
                    <h2 className="font-nimbus text-[40px] font-normal leading-[40px] text-black lg:font-nevera lg:text-[56px] lg:leading-[72px]">
                        Vision
                    </h2>
                    <div className="font-nimbus space-y-3 text-[14px] leading-[normal] text-[#686868] lg:text-[20px] lg:leading-[28px]">
                        <p>
                            Take a moment and look around. Every city street, every highway, every
                            industrial corridor all quietly releasing carbon into the atmosphere. In
                            a country of over 140 crore people, the air we breathe affects every
                            life, every day.
                        </p>
                        <p>
                            With AlgaeTree™, we envision a future where clean, breathable air becomes
                            a basic reality for every city and every community. We aim to build
                            self-sustaining systems that capture carbon, improve air quality, and
                            help create healthier urban environments.
                        </p>
                        <p>
                            Because the cities of tomorrow should not only rise, they should rise
                            with air worth breathing.
                        </p>
                    </div>
                </div>
                <div className="order-1 w-full lg:order-2 lg:w-[736px]">
                    <img src="/figma/about/mobile/subtract-vision.svg" alt="" aria-hidden="true" className="block h-auto w-full lg:hidden" />
                    <img src="/figma/about/subtract-vision.svg" alt="" aria-hidden="true" className="hidden h-[800px] w-full lg:block" />
                </div>
            </div>
        </section>
    );
}
