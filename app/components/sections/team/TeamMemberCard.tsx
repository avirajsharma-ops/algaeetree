"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";

type TeamMemberCardProps = {
    alt: string;
    src: string;
    name: string;
    designation: string;
    bio: string;
    isActive?: boolean;
    onToggle?: () => void;
};

export default function TeamMemberCard({ alt, src, name, designation, bio, isActive = false, onToggle }: TeamMemberCardProps) {
    const reduceMotion = useReducedMotion();
    const transitionMs = reduceMotion ? "1ms" : "650ms";

    return (
        <article
            aria-label={alt}
            onClick={onToggle}
            className="group relative flex aspect-300/379 w-full items-center justify-center overflow-hidden rounded-[10px]
             bg-black shadow-[0_70px_63px_-60px_#000]"
        >
            <div className="absolute inset-0">
                <Image
                    src={src}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className={`origin-top-left object-cover transition-transform ease-[cubic-bezier(0.23,1,0.32,1)]
                    will-change-transform
                    group-hover:scale-[2] group-focus-within:scale-[1.92] ${isActive ? "scale-[2]" : ""}`}
                    style={{ transitionDuration: transitionMs }}
                />
            </div>

            <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(90deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.48)_34%,rgba(0,0,0,0.1)_58%,rgba(0,0,0,0)_78%),linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_38%,rgba(0,0,0,0.74)_100%)] transition-opacity ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100 group-focus-within:opacity-100 ${isActive ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDuration: transitionMs }}
            />

            <div className="pointer-events-none absolute left-4 top-4 z-10">
                <h2
                    className={`m-0 max-w-[84%] font-nimbus text-[12px] leading-[1.15] tracking-[0.3px] sm:text-[14px] lg:text-[clamp(20px,2.4vw,42px)] lg:leading-[1.1] lg:tracking-[0.5px]
                     text-white transition-opacity duration-600 ease-out group-hover:opacity-100
                      group-focus-within:opacity-100 ${isActive ? "opacity-100" : "opacity-0"}`}
                    style={{ transitionDuration: reduceMotion ? "1ms" : "600ms" }}
                >
                    {name.toUpperCase()}
                </h2>
            </div>

            <div
                className={`pointer-events-none absolute bottom-4 left-4 right-4 z-10 translate-y-0 text-white
                transition-[opacity,transform] duration-600 ease-out group-hover:translate-y-0 group-hover:opacity-100
                group-focus-within:translate-y-0 group-focus-within:opacity-100 ${isActive ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDuration: reduceMotion ? "1ms" : "600ms" }}
            >
                <p className="font-nimbus text-[9px] leading-[1.2] font-medium tracking-[0.04em] uppercase sm:text-[10px] lg:text-[clamp(10px,1vw,14px)]">
                    {designation}
                </p>
                <p className="mt-2 hidden max-w-[95%] font-nimbus text-[clamp(9px,0.85vw,12px)] leading-tight text-white/90 lg:block">
                    {bio}
                </p>
            </div>
        </article>
    );
}