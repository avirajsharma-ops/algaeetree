"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const NAV_ITEMS = [
    { label: "Technology", hasDropdown: false },
    { label: "Solutions", hasDropdown: true },
    { label: "About Us", hasDropdown: false },
    { label: "News & Events", hasDropdown: false },
    { label: "Team", hasDropdown: false },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="top-0 z-50 flex w-full items-center justify-between border-b border-[#055453]/50 bg-white px-8 py-4">
            {/* Logo */}
            <a href="/" className="flex items-center">
                <Image
                    src="/Logo_Main 1.png"
                    alt="AlgaeTree"
                    width={209}
                    height={45}
                    priority
                    className="h-[45px] w-auto"
                />
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-10 lg:flex">
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.label}
                        href="#"
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

            {/* Desktop CTA */}
            <div className="hidden lg:block">
                <Button>Contact Us</Button>
            </div>

            {/* Mobile toggle */}
            <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle navigation"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 lg:hidden"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    {open ? (
                        <path d="M5 5L15 15M15 5L5 15" stroke="#212121" strokeWidth="1.6" strokeLinecap="round" />
                    ) : (
                        <path d="M3 6h14M3 10h14M3 14h14" stroke="#212121" strokeWidth="1.6" strokeLinecap="round" />
                    )}
                </svg>
            </button>

            {/* Mobile menu */}
            {open && (
                <div className="absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-[#055453]/50 bg-white px-8 py-6 lg:hidden">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className="text-[14px] font-normal uppercase leading-[21px] text-[#212121]"
                        >
                            {item.label}
                        </a>
                    ))}
                    <Button className="self-start">Contact Us</Button>
                </div>
            )}
        </header>
    );
}
