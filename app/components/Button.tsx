import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    href?: string;
};

const baseClassName =
    "inline-flex items-center justify-center gap-2.5 rounded-[32px] bg-[#2D5A27] px-5 py-4 text-[16px] font-medium uppercase leading-none tracking-[0.5px] text-white transition-colors hover:bg-[#234820]";

export default function Button({ children, className = "", href, ...rest }: ButtonProps) {
    const classes = `${baseClassName} ${className}`.trim();

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}
