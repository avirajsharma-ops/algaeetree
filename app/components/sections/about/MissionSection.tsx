const mobileMissionMask = {
    WebkitMaskImage: "url('/figma/about/mobile/subtract-mission.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskImage: "url('/figma/about/mobile/subtract-mission.svg')",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "100% 100%",
};

const desktopMissionMask = {
    WebkitMaskImage: "url('/figma/about/subtract-mission.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskImage: "url('/figma/about/subtract-mission.svg')",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "100% 100%",
};

export default function MissionSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px pb-12 xl:pb-12">
                <div className="mx-auto flex w-full max-w-[1488px] flex-col items-center gap-4 md:gap-6 xl:flex-row xl:justify-between xl:gap-12">
                    <div className="w-full xl:w-[736px]">
                        <div className="relative aspect-square w-full overflow-hidden bg-[#d9d9d9] xl:hidden" style={mobileMissionMask}>
                            <img
                                src="/figma/about/About%20Us%20Image%203%20(2).png"
                                alt="Mission"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="relative hidden h-[800px] w-full overflow-hidden bg-[#d9d9d9] xl:block" style={desktopMissionMask}>
                            <img
                                src="/figma/about/About%20Us%20Image%203%20(2).png"
                                alt="Mission"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-0 xl:w-[678px]">
                        <h2 className="font-nimbus text-[40px] font-medium uppercase leading-[40px] text-black md:text-[48px] md:leading-[52px] xl:font-space-groteskxl:text-[56px] xl:leading-[72px]">
                            Mission
                        </h2>
                        <div className="font-nimbus space-y-3 text-[14px] leading-[normal] text-[#686868] md:text-[16px] md:leading-[24px] xl:text-[20px] xl:mt-[24px] xl:leading-[28px]">
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
            </div>
        </section>
    );
}
