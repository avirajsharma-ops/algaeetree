"use client";

import { useReducedMotion } from "motion/react";

type TeamMemberCardProps = {
    alt: string;
    src: string;
    name: string;
    designation: string;
    bio: string;
};

export default function TeamMemberCard({ alt, src, name, designation, bio }: TeamMemberCardProps) {
    const reduceMotion = useReducedMotion();
    const transitionMs = reduceMotion ? "1ms" : "650ms";

    return (
        <article
            aria-label={alt}
            className="group relative flex aspect-300/379 w-full items-center justify-center overflow-hidden rounded-[10px] bg-black shadow-[0_70px_63px_-60px_#000]"
        >
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-[background-size,background-position] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:bg-top-left group-hover:bg-size-[192%]"
                style={{ backgroundImage: `url(${src})`, transitionDuration: transitionMs }}
            />

            <div className="pointer-events-none absolute left-4 top-4 z-10">
                <h2
                    className="m-0 max-w-[84%] font-nimbus text-[clamp(20px,2.4vw,42px)] leading-[1.1] tracking-[0.5px] text-white opacity-0 transition-opacity duration-600 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
                    style={{ transitionDuration: reduceMotion ? "1ms" : "600ms" }}
                >
                    {name.toUpperCase()}
                </h2>
            </div>

            <div
                className="pointer-events-none absolute bottom-4 left-4 right-4 z-10 translate-y-2 text-white opacity-0 transition-[opacity,transform] duration-600 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                style={{ transitionDuration: reduceMotion ? "1ms" : "600ms" }}
            >
                <p className="font-nimbus text-[clamp(10px,1vw,14px)] leading-[1.2] font-medium tracking-[0.04em] uppercase">
                    {designation}
                </p>
                <p className="mt-2 max-w-[95%] font-nimbus text-[clamp(9px,0.85vw,12px)] leading-tight text-white/90">
                    {bio}
                </p>
            </div>
        </article>
    );
}