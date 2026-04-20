import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export default function Button({ children, className = "", ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={`inline-flex items-center justify-center gap-2.5 rounded-[32px] bg-[#2D5A27] px-5 py-4 text-[16px] font-medium uppercase leading-none tracking-[0.5px] text-white transition-colors hover:bg-[#234820] ${className}`}
        >
            {children}
        </button>
    );
}
