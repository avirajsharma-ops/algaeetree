import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const QUICK_LINKS = [
    { label: "Technology", href: "/technology" },
    { label: "About Us", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Reads", href: "/news-events" },
];
const CONTACTS = ["hello@algaetree.tech", "Bhopal, IN", "+91 xx xxxx xxxx"];
const LEGAL = ["Privacy Policy", "Disclaimer", "Terms of use", "Raise a Grievance"];
const SOCIALS = [
    { src: "/figma/linkedin.svg", alt: "LinkedIn", href: "https://in.linkedin.com/company/algaetree" },
    { src: "/figma/instagram.svg", alt: "Instagram", href: "https://www.instagram.com/algae.tree_official/" },
    { src: "/figma/youtube.svg", alt: "YouTube", href: "https://youtube.com/@algaetree" },
];

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="xl:hidden">
                <div className="bg-gradient-to-r from-white to-[#5e9357] px-4 py-6">
                    <div className="mx-auto flex w-full max-w-[440px] items-center justify-between md:max-w-[720px]">
                        <div className="relative h-10 w-[221.333px] overflow-hidden">
                            <Image src="/Logo_Main 1.png" alt="AlgaeTree" width={186} height={40} className="absolute bottom-0 left-0 h-10 w-auto" />
                        </div>
                        <Link href="/contact" className="rounded-[32px] bg-[#2d5a27] px-4 py-3 text-[12px] font-medium uppercase tracking-[0.5px] text-white transition-colors hover:bg-[#234820]">
                            Get Involved
                        </Link>
                    </div>
                </div>

                <div className="bg-[#0d1f00] px-4 py-8">
                    <div className="mx-auto flex w-full max-w-[440px] flex-col gap-8 md:max-w-[720px]">
                        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8">
                            <div className="col-span-2 row-start-1 flex flex-col gap-6">
                                <div className="w-full max-w-[384px] font-nimbus text-[16px] leading-[26px] text-[#94a3b8]">
                                    <p>Engineering biology to restore the air we breathe.</p>
                                    <p className="font-bold">Together, we can restore the air we share.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {SOCIALS.map((social) => (
                                        <a key={social.alt} href={social.href} target="_blank" rel="noreferrer" aria-label={social.alt} className="flex size-8 items-center justify-center rounded-[19.2px] border-[0.32px] border-[#94a3b8]">
                                            <img src={social.src} alt="" className="size-[26.88px]" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="col-start-1 row-start-2 flex flex-col gap-4 self-start">
                                <h4 className="font-nimbus text-[16px] leading-[26px] text-white">Quick Links</h4>
                                <div className="flex flex-col items-start">
                                    {QUICK_LINKS.map((link) => (
                                        <a key={link.label} href={link.href} className="py-[6px] text-[16px] leading-[25.6px] text-[#94a3b8]">{link.label}</a>
                                    ))}
                                </div>
                            </div>

                            <div className="col-start-2 row-start-2 flex flex-col gap-4 self-start">
                                <h4 className="font-nimbus text-[16px] leading-[26px] text-white">Contact</h4>
                                <div className="flex flex-col gap-2">
                                    {CONTACTS.map((contact) => (
                                        <p key={contact} className="font-nimbus text-[16px] leading-[26px] text-[#94a3b8]">{contact}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-[#5e5e5e]" />

                        <div className="flex flex-col items-center gap-3">
                            <div className="flex w-full flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[12px] leading-[18px] text-[#94a3b8]">
                                {LEGAL.map((item) => (
                                    <a key={item} href="#" className="whitespace-nowrap py-1">{item}</a>
                                ))}
                            </div>
                            <p className="w-full text-[14px] leading-[20px] text-[#94a3b8]">© 2026 Algae Tree Technologies. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden xl:block w-full">
                <div className="w-full bg-gradient-to-r from-white to-[#5e9357]">
                    <div className="mx-auto flex w-full max-w-[1728px] items-center justify-between px-[120px] py-[24px]">
                        <div className="relative h-[45px] w-[249px] overflow-clip">
                            <Image src="/Logo_Main 1.png" alt="AlgaeTree" width={209} height={45} className="absolute bottom-0 left-0 h-[45px] w-auto" />
                        </div>
                        <Button href="/contact">Get Involved</Button>
                    </div>
                </div>

                <div className="w-full bg-[#0d1f00]">
                    <div className="mx-auto flex w-full max-w-[1728px] flex-col items-center justify-center gap-[32px] px-[120px] py-[64px]">
                        <div className="grid w-full grid-cols-4 gap-x-[48px] gap-y-[48px] [grid-template-rows:170px]">
                            <div className="col-[1/span_2] row-1 flex flex-col items-start gap-[24px] self-start pb-[10px]">
                                <div className="w-[384px] max-w-[384px]">
                                    <div className="font-nimbus text-[16px] leading-[26px] text-[#94a3b8]">
                                        <p>Engineering biology to restore the air we breathe.</p>
                                        <p className="font-bold">Together, we can restore the air we share.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    {SOCIALS.map((social) => (
                                        <a key={social.alt} href={social.href} target="_blank" rel="noreferrer" aria-label={social.alt} className="flex size-[32px] items-center justify-center rounded-[19.2px] border-[0.32px] border-[#94a3b8]">
                                            <img src={social.src} alt="" className="size-[26.88px]" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="col-3 row-1 flex flex-col items-start gap-[16px] self-start">
                                <div className="font-nimbus w-full text-[16px] leading-[26px] text-white">Quick Links</div>
                                <div className="flex w-full flex-col items-start">
                                    {QUICK_LINKS.map((link) => (
                                        <div key={link.label} className="relative overflow-clip py-[6px]">
                                            <a href={link.href} className="text-[16px] leading-[25.6px] text-[#94a3b8]">{link.label}</a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-4 row-1 flex flex-col items-start gap-[16px] self-start pb-[34px]">
                                <div className="font-nimbus w-full text-[16px] leading-[26px] text-white">Contact</div>
                                <div className="flex w-full flex-col items-start gap-[8px]">
                                    {CONTACTS.map((contact) => (
                                        <p key={contact} className="font-nimbus w-full text-[16px] leading-[26px] text-[#94a3b8]">{contact}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-[#1e1e1e]" />

                        <div className="flex w-full items-center justify-center gap-[48px]">
                            <div className="relative h-[20px] min-w-px flex-[1_0_0]">
                                <p className="absolute inset-y-0 left-0 text-[16px] leading-[25.6px] text-[#94a3b8]">© 2026 Algae Tree Technologies. All rights reserved.</p>
                            </div>
                            <div className="flex h-[48px] items-center justify-end">
                                <div className="flex items-center gap-[16px]">
                                    {LEGAL.map((item) => (
                                        <a key={item} href="#" className="flex h-[48px] items-center justify-center rounded-[40px] px-[8px] py-[16px] text-[14px] leading-[21px] text-[#94a3b8]">
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
