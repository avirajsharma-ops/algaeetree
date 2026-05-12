"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ref, runTransaction, set, get } from "firebase/database";
import { database } from "@/lib/firebase";

function getVisitorId(): string {
    const key = "algaetree_vid";
    let id = sessionStorage.getItem(key);
    if (!id) {
        id = Math.random().toString(36).slice(2) + Date.now().toString(36);
        sessionStorage.setItem(key, id);
    }
    return id;
}

function getReferrerSource(): string {
    const ref = document.referrer;
    if (!ref) return "direct";
    try {
        const host = new URL(ref).hostname.replace(/^www\./, "");
        return host || "direct";
    } catch {
        return "direct";
    }
}

// Encode Firebase key-safe path (replace / with | for storage)
function encodePath(path: string): string {
    return path === "/" ? "home" : path.replace(/\//g, "|").replace(/^[|]/, "");
}

export function AnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Skip admin pages
        if (pathname.startsWith("/admin")) return;

        const visitorId = getVisitorId();
        const encodedPage = encodePath(pathname);

        // Increment page view count
        runTransaction(ref(database, `analytics/pageviews/${encodedPage}`), (current) => {
            return (current || 0) + 1;
        });

        // Record visitor (keyed by session ID — deduplicates per session)
        set(ref(database, `analytics/visitors/${visitorId}`), {
            lastSeen: Date.now(),
            path: pathname,
        });

        // Record referrer only on first page of session
        const refKey = "algaetree_ref_recorded";
        if (!sessionStorage.getItem(refKey)) {
            sessionStorage.setItem(refKey, "1");
            const source = getReferrerSource();
            runTransaction(ref(database, `analytics/referrers/${source}`), (current) => {
                return (current || 0) + 1;
            });
        }
    }, [pathname]);

    return null;
}
