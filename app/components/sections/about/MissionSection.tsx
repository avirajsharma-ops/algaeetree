export default function MissionSection() {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col items-center gap-4 px-4 pb-12 lg:flex-row lg:justify-between lg:gap-12 lg:px-[120px] lg:pb-12">
                <div className="w-full lg:w-[736px]">
                    <img src="/figma/about/mobile/subtract-mission.svg" alt="" aria-hidden="true" className="block h-auto w-full lg:hidden" />
                    <img src="/figma/about/subtract-mission.svg" alt="" aria-hidden="true" className="hidden h-[800px] w-full lg:block" />
                </div>
                <div className="flex w-full flex-col gap-0 lg:w-[678px]">
                    <h2 className="font-nimbus text-[40px] font-normal leading-[40px] text-black lg:font-nevera lg:text-[56px] lg:leading-[72px]">
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
