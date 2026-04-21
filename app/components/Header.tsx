"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const DESKTOP_NAV_ITEMS = [
    { label: "Technology", hasDropdown: false },
    { label: "Solutions", hasDropdown: true },
    { label: "About Us", hasDropdown: false },
    { label: "News & Events", hasDropdown: false },
    { label: "Team", hasDropdown: false },
];

const MOBILE_NAV_ITEMS = [
    { label: "Technology", hasDropdown: true },
    { label: "About Us", hasDropdown: true },
    { label: "News & Events", hasDropdown: true },
    { label: "Team", hasDropdown: true },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="relative z-50 w-full border-b border-[#2d5a27]/50 bg-white">
            <div className="mx-auto flex h-[72px] w-full items-center justify-between px-6 lg:h-[83px] lg:px-8 xl:px-[120px]">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Logo_Main 1.png"
                        alt="AlgaeTree"
                        width={209}
                        height={45}
                        priority
                        className="h-[45px] w-auto"
                    />
                </Link>

                <nav className="hidden items-center gap-10 lg:flex">
                    {DESKTOP_NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.label === "Technology" ? "/technology" : "#"}
                            className="inline-flex items-center gap-1 text-[14px] font-normal uppercase leading-[21px] text-[#212121] hover:text-[#2D5A27]"
                        >
                            {item.label}
                            {item.hasDropdown && (
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    aria-hidden
                                    className="ml-0.5"
                                >
                                    <path
                                        d="M3.5 5.5L7 9L10.5 5.5"
                                        stroke="#212121"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <Button>Contact Us</Button>
                </div>

                <button
                    onClick={() => setOpen((value) => !value)}
                    aria-label="Toggle navigation"
                    className="relative size-12 rounded-[8px] lg:hidden"
                >
                    <span className="absolute left-2 top-[11.5px] h-[3px] w-8 rounded-[2px] bg-[#2d5a27]" />
                    <span className="absolute left-2 top-[22px] h-[3px] w-8 rounded-[2px] bg-[#2d5a27]" />
                    <span className="absolute left-2 top-[32.5px] h-[3px] w-8 rounded-[2px] bg-[#2d5a27]" />
                </button>
            </div>

            {open && (
                <div className="absolute left-0 right-0 top-full z-50 flex flex-col gap-2 border-b border-[#2d5a27]/50 bg-white p-4 lg:hidden">
                    {MOBILE_NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.label === "Technology" ? "/technology" : "#"}
                            className="flex items-center justify-between rounded-[8px] border border-[#2d5a27]/50 bg-white px-3 py-2.5"
                        >
                            <span className="text-[14px] font-medium uppercase leading-[21px] text-[#212121]">
                                {item.label}
                            </span>
                            {item.hasDropdown && (
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                                    <path
                                        d="M3.5 5.5L7 9L10.5 5.5"
                                        stroke="#212121"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </a>
                    ))}

                    <div className="pt-4">
                        <Button className="w-full justify-center">Contact Us</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
