export default function StoryHeaderSection() {
    return (
        <section className="w-full bg-white">
            <div className="page-px flex flex-col gap-8 py-8 lg:gap-12 lg:py-[60px]">
                {/* Heading row */}
                <div className="flex flex-col items-start gap-4 px-0 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:px-4">
                    <h2 className="font-nevera text-[40px] leading-[40px] text-black lg:text-[56px] lg:leading-[72px]">
                        <span className="block">Our Story,</span>
                        <span className="block lg:inline"> Vision, and Value</span>
                    </h2>
                    <p className="font-nimbus text-[14px] leading-[normal] text-[#686868] lg:w-[651px] lg:text-[20px] lg:leading-[28px]">
                        There is always a thought behind actions, but we have a revolution mindset
                        behind everything we do.
                    </p>
                </div>

                {/* Story banner — notched grey shape (Figma placeholder for forthcoming hero photo) */}
                <div className="relative w-full">
                    <svg
                        viewBox="0 0 1488 400"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block h-[160px] w-full lg:h-[400px]"
                        aria-hidden="true"
                    >
                        <path
                            opacity="0.8"
                            d="M1488 232C1488 245.255 1477.25 256 1464 256H1416C1376.24 256 1344 288.235 1344 328V376C1344 389.255 1333.25 400 1320 400H24C10.7452 400 0 389.255 0 376V103C0 89.7452 10.7452 79 24 79H364C377.255 79 388 68.2548 388 55V24C388 10.7452 398.745 0 412 0H1464C1477.25 0 1488 10.7452 1488 24V232Z"
                            fill="#d9d9d9"
                        />
                        <circle cx="1423" cy="335" r="65" fill="#d9d9d9" />
                        <path
                            d="M1420.83 317.667V344.046L1408.7 331.912L1405.67 335L1423 352.333L1440.33 335L1437.3 331.912L1425.17 344.046V317.667H1420.83Z"
                            fill="#1C1B1F"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
