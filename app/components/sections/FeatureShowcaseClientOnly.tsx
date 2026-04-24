"use client";

import { useEffect, useState } from "react";
import FeatureShowcaseSection from "./FeatureShowcaseSection";

export default function FeatureShowcaseClientOnly() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return <FeatureShowcaseSection />;
}
