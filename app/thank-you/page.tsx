"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (countdown <= 0) {
            router.push("/");
            return;
        }
        const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
        return () => clearTimeout(timer);
    }, [countdown, router]);

    return (
        <div
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-16"
            style={{
                background:
                    "radial-gradient(ellipse at 50% 0%, #3a9c2e 0%, #1a5c11 55%, #0d3309 100%)",
            }}
        >
            {/* grid texture */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 28px)," +
                        "repeating-linear-gradient(90deg,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 28px)",
                }}
            />

            <div className="relative flex flex-col items-center gap-6 text-center">
                {/* checkmark */}
                <div className="flex size-15 items-center justify-center rounded-full bg-[#ABD600]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                            d="M5 13l4 4L19 7"
                            stroke="#1a5c11"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* heading */}
                <div className="flex flex-col gap-1">
                    <p className="font-space-grotesk text-[36px] font-bold leading-tight text-white sm:text-[48px]">
                        Thank You
                    </p>
                    <p
                        className="font-space-grotesk text-[36px] font-bold leading-tight sm:text-[48px]"
                        style={{ color: "#ABD600" }}
                    >
                        for Connecting with AlgaeTree™.
                    </p>
                </div>

                {/* sub-text */}
                <p className="max-w-90 font-nimbus text-[16px] leading-6 text-white/80">
                    We look forward to speaking with you and will reach out within 24–48 business hours.
                </p>

                {/* countdown + redirect button */}
                <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="mt-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-nimbus text-[14px] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                    {countdown > 0
                        ? `Returning to the homepage in ${countdown} second${countdown !== 1 ? "s" : ""}…`
                        : "Go to Home Page"}
                </button>
            </div>
        </div>
    );
}
