import NotchedShape from "./NotchedShape";

export default function MissionSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px flex flex-col items-center gap-4 pb-8 lg:flex-row lg:justify-between lg:gap-12 lg:py-[60px]">
                <NotchedShape
                    variant="tr-bl"
                    className="block h-[408px] w-full lg:h-[800px] lg:w-[736px]"
                />
                <div className="flex w-full flex-col gap-4 lg:w-[678px]">
                    <h2 className="font-nevera text-[40px] leading-[40px] text-black lg:text-[56px] lg:leading-[72px]">
                        Mission
                    </h2>
                    <div className="font-nimbus space-y-3 text-[14px] leading-[normal] text-[#686868] lg:text-[20px] lg:leading-[28px]">
                        <p>
                            Our mission is to bring the power of microalgae into the heart of our
                            cities: building self-sustaining systems that capture carbon, restore
                            oxygen, and help improve the air millions breathe every day.
                        </p>
                        <p>
                            With each AlgaeTree™ capable of capturing up to ~2 kg of CO₂ per day, we
                            aim to scale this living technology across urban landscapes helping
                            reduce carbon emissions while creating healthier environments for the
                            140+ crore people of India.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
