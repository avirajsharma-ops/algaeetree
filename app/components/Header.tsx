"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

type NavChild = {
    label: string;
    href: string;
};

type NavItem = {
    label: string;
    href?: string;
    children?: NavChild[];
};

const DESKTOP_NAV_ITEMS = [
    { label: "Technology", href: "/technology" },
    {
        label: "Solutions",
        href: "/solutions/b2c",
        children: [
            { label: "B2C", href: "/solutions/b2c" },
            { label: "CCUS", href: "/solutions/ccus" },
        ],
    },
    { label: "About Us", href: "/about" },
    { label: "News & Events", href: "#" },
    { label: "Team", href: "/team" },
] satisfies NavItem[];

const MOBILE_NAV_ITEMS = [
    { label: "Technology", href: "/technology" },
    {
        label: "Solutions",
        href: "/solutions/b2c",
        children: [
            { label: "B2C", href: "/solutions/b2c" },
            { label: "CCUS", href: "/solutions/ccus" },
        ],
    },
    { label: "About Us", href: "/about" },
    { label: "News & Events", href: "#" },
    { label: "Team", href: "/team" },
] satisfies NavItem[];

function ChevronIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="ml-0.5">
            <path
                d="M3.5 5.5L7 9L10.5 5.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function DesktopNavLink({ item }: { item: NavItem }) {
    const linkClassName =
        "inline-flex items-center gap-1 text-[14px] font-normal uppercase leading-[21px] text-[#212121] transition-colors hover:text-[#2D5A27]";

    if (!item.children?.length) {
        if (!item.href || item.href === "#") {
            return (
                <a href="#" className={linkClassName}>
                    {item.label}
                </a>
            );
        }

        return (
            <Link href={item.href} className={linkClassName}>
                {item.label}
            </Link>
        );
    }

    return (
        <div className="group relative">
            <Link href={item.href ?? item.children[0].href} className={linkClassName}>
                {item.label}
                <ChevronIcon />
            </Link>

            <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="min-w-45 rounded-[14px] border border-[#055453]/15 bg-white p-2 shadow-[0_18px_40px_rgba(1,45,29,0.12)]">
                    {item.children.map((child) => (
                        <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-[10px] px-3 py-2 text-[13px] font-medium uppercase leading-5 text-[#212121] transition-colors hover:bg-[#f4f7f6] hover:text-[#2D5A27]"
                        >
                            {child.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MobileNavLink({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
    const itemClassName =
        "flex items-center justify-between rounded-lg border border-[#2d5a27]/50 bg-white px-3 py-2.5";

    if (!item.children?.length) {
        if (!item.href || item.href === "#") {
            return (
                <a href="#" className={itemClassName} onClick={onNavigate}>
                    <span className="text-[14px] font-medium uppercase leading-5.25 text-[#212121]">
                        {item.label}
                    </span>
                </a>
            );
        }

        return (
            <Link href={item.href} className={itemClassName} onClick={onNavigate}>
                <span className="text-[14px] font-medium uppercase leading-5.25 text-[#212121]">
                    {item.label}
                </span>
            </Link>
        );
    }

    return (
        <div className="rounded-lg border border-[#2d5a27]/50 bg-white">
            <Link
                href={item.href ?? item.children[0].href}
                className="flex items-center justify-between px-3 py-2.5"
                onClick={onNavigate}
            >
                <span className="text-[14px] font-medium uppercase leading-5.25 text-[#212121]">
                    {item.label}
                </span>
                <ChevronIcon />
            </Link>

            <div className="border-t border-[#2d5a27]/20 px-3 pb-3 pt-2">
                {item.children.map((child) => (
                    <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-2 py-2 text-[13px] font-medium uppercase leading-5 text-[#212121] transition-colors hover:bg-[#f4f7f6] hover:text-[#2D5A27]"
                        onClick={onNavigate}
                    >
                        {child.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="relative z-50 w-full border-b border-[#055453]/15 bg-white shadow-[0_2px_10px_rgba(5,84,83,0.08)]">
            <div className="mx-auto flex h-18 w-full items-center justify-between px-4 sm:px-6 xl:h-20.75 xl:px-8">
                <Link
                    href="/"
                    className="group ml-1 inline-flex items-center justify-center rounded-xl bg-white px-1 py-1.5 transition-colors duration-300 hover:border-[#055453]/30 focus-visible:border-[#055453]/40 focus-visible:outline-none sm:ml-2"
                >
                    <span className="relative inline-flex  gap-0 items-center">
                        <span className="absolute -left-12 top-1/2 inline-flex 
                        -translate-x-2 -translate-y-1/2 items-center justify-center opacity-0 
                        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
                        group-hover:translate-x-4 group-hover:opacity-100 
                        group-focus-visible:translate-x-4 group-focus-visible:opacity-100">
                            <span className="inline-flex w-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
                            group-hover:w-10 group-focus-visible:w-10 sm:group-hover:w-11 sm:group-focus-visible:w-11">
                                <Image
                                    src="/Logo_Main_header.png"
                                    alt="AlgaeTree logo"
                                    width={50}
                                    height={50}
                                    className="h-12 w-12 object-contain drop-shadow-[0_2px_8px_rgba(0,90,90,0.24)] sm:h-11 sm:w-11"
                                />
                            </span>
                        </span>

                        <Image
                            src="/Logo_Main 1.png"
                            alt="AlgaeTree"
                            width={209}
                            height={45}
                            priority
                            className="h-9 w-auto transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-focus-visible:translate-x-2 sm:h-10 sm:group-hover:translate-x-3 sm:group-focus-visible:translate-x-3 xl:h-11 xl:group-hover:translate-x-4 xl:group-focus-visible:translate-x-4"
                        />
                    </span>
                </Link>

                <nav className="hidden items-center gap-10 xl:flex">
                    {DESKTOP_NAV_ITEMS.map((item) => (
                        <DesktopNavLink key={item.label} item={item} />
                    ))}
                </nav>

                <div className="hidden xl:block">
                    <Button href="/contact">Contact Us</Button>
                </div>

                <button
                    onClick={() => setOpen((value) => !value)}
                    aria-label="Toggle navigation"
                    className="relative size-12 rounded-lg xl:hidden"
                >
                    <span className="absolute left-2 top-[11.5px] h-0.75 w-8 rounded-xs bg-[#2d5a27]" />
                    <span className="absolute left-2 top-5.5 h-0.75 w-8 rounded-xs bg-[#2d5a27]" />
                    <span className="absolute left-2 top-[32.5px] h-0.75 w-8 rounded-xs bg-[#2d5a27]" />
                </button>
            </div>

            {open && (
                <div className="absolute left-0 right-0 top-full z-50 flex flex-col gap-2 border-b border-[#2d5a27]/50 bg-white p-4 xl:hidden">
                    {MOBILE_NAV_ITEMS.map((item) => (
                        <MobileNavLink
                            key={item.label}
                            item={item}
                            onNavigate={() => setOpen(false)}
                        />
                    ))}

                    <div className="pt-4">
                        <Button href="/contact" className="w-full justify-center">Contact Us</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
