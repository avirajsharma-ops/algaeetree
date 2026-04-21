"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type TeamMemberCardProps = {
    alt: string;
    src: string;
};

export default function TeamMemberCard({ alt, src }: TeamMemberCardProps) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.article
            whileHover={reduceMotion ? undefined : { y: -6 }}
            className="group relative aspect-[485/560] overflow-hidden rounded-[24px] bg-[#d9d9d9]"
        >
            <motion.div
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                transition={reduceMotion ? undefined : { duration: 0.45 }}
                className="absolute inset-0"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 639px) 196px, (max-width: 1279px) calc((100vw - 64px) / 2), 485px"
                    className="object-cover"
                />
            </motion.div>

            <div className="pointer-events-none absolute left-0 top-0 h-[229px] w-full bg-[linear-gradient(173.29deg,#000_9.3358%,rgba(0,0,0,0)_66.574%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[229px] w-full bg-[linear-gradient(189.7708deg,rgba(0,0,0,0)_46.403%,#000_100.93%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
        </motion.article>
    );
}