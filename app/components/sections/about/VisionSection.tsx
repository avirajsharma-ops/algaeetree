import NotchedShape from "./NotchedShape";

export default function VisionSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px flex flex-col items-center gap-4 pb-8 lg:flex-row lg:justify-between lg:gap-12 lg:py-[60px]">
                <div className="order-2 flex w-full flex-col gap-4 lg:order-1 lg:w-[678px]">
                    <h2 className="font-nevera text-[40px] leading-[40px] text-black lg:text-[56px] lg:leading-[72px]">
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
                <NotchedShape
                    variant="tl-br"
                    className="order-1 block h-[408px] w-full lg:order-2 lg:h-[800px] lg:w-[736px]"
                />
            </div>
        </section>
    );
}
