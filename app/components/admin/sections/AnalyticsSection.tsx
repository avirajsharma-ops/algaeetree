"use client";

import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase";

interface PageViewEntry {
    page: string;
    views: number;
}

interface ReferrerEntry {
    source: string;
    count: number;
}

export function AnalyticsSection() {
    const [totalVisits, setTotalVisits] = useState(0);
    const [uniqueVisitors, setUniqueVisitors] = useState(0);
    const [pageViews, setPageViews] = useState<PageViewEntry[]>([]);
    const [referrers, setReferrers] = useState<ReferrerEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const analyticsRef = ref(database, "analytics");
        const unsubscribe = onValue(analyticsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Page views: stored as { pageviews: { "/": 12, "/about": 5, ... } }
                const pvRaw: Record<string, number> = data.pageviews || {};
                const pvList = Object.entries(pvRaw)
                    .map(([page, views]) => ({ page, views }))
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 10);
                setPageViews(pvList);
                setTotalVisits(pvList.reduce((sum, p) => sum + p.views, 0));

                // Unique visitors count
                const visitors: Record<string, number> = data.visitors || {};
                setUniqueVisitors(Object.keys(visitors).length);

                // Referrers: { referrers: { "direct": 8, "google.com": 4, ... } }
                const refRaw: Record<string, number> = data.referrers || {};
                const refList = Object.entries(refRaw)
                    .map(([source, count]) => ({ source, count }))
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 8);
                setReferrers(refList);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const maxViews = pageViews.length > 0 ? pageViews[0].views : 1;
    const maxRefs = referrers.length > 0 ? referrers[0].count : 1;

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2d5a27]"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-[#2d5a27] font-space-grotesk">Website Analytics</h2>
                <p className="text-[#7f7f7f] font-nimbus text-sm mt-1">Real-time data from Firebase</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e0e0e0]">
                    <p className="text-[#7f7f7f] font-nimbus text-sm">Total Page Views</p>
                    <p className="text-4xl font-bold text-[#2d5a27] mt-2">{totalVisits.toLocaleString()}</p>
                    <p className="text-xs text-[#9b9b9b] font-nimbus mt-2">All time</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e0e0e0]">
                    <p className="text-[#7f7f7f] font-nimbus text-sm">Unique Visitors</p>
                    <p className="text-4xl font-bold text-[#2f7d32] mt-2">{uniqueVisitors.toLocaleString()}</p>
                    <p className="text-xs text-[#9b9b9b] font-nimbus mt-2">All time</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e0e0e0]">
                    <p className="text-[#7f7f7f] font-nimbus text-sm">Pages Tracked</p>
                    <p className="text-4xl font-bold text-[#558b2f] mt-2">{pageViews.length}</p>
                    <p className="text-xs text-[#9b9b9b] font-nimbus mt-2">Unique pages</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Pages */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e0e0e0]">
                    <h3 className="text-lg font-bold text-[#2d5a27] font-space-grotesk mb-4">Top Pages</h3>
                    {pageViews.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-[#7f7f7f] font-nimbus text-sm">No page views recorded yet.</p>
                            <p className="text-xs text-[#9b9b9b] font-nimbus mt-1">Data appears automatically as users visit the site.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {pageViews.map((page) => (
                                <div key={page.page}>
                                    <div className="flex justify-between mb-1.5">
                                        <p className="text-sm font-nimbus text-[#171717] truncate max-w-[200px]">{page.page}</p>
                                        <p className="text-sm font-bold text-[#2d5a27] ml-2">{page.views.toLocaleString()}</p>
                                    </div>
                                    <div className="w-full bg-[#e8f5e9] rounded-full h-2">
                                        <div
                                            className="bg-[#2d5a27] h-2 rounded-full transition-all"
                                            style={{ width: `${Math.max(4, (page.views / maxViews) * 100)}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Traffic Sources */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e0e0e0]">
                    <h3 className="text-lg font-bold text-[#2d5a27] font-space-grotesk mb-4">Traffic Sources</h3>
                    {referrers.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-[#7f7f7f] font-nimbus text-sm">No referrer data yet.</p>
                            <p className="text-xs text-[#9b9b9b] font-nimbus mt-1">Sources appear as visitors arrive.</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {referrers.map((r) => (
                                <div key={r.source}>
                                    <div className="flex justify-between mb-1.5">
                                        <p className="text-sm font-nimbus text-[#171717]">{r.source}</p>
                                        <p className="text-sm font-bold text-[#2d5a27]">{r.count.toLocaleString()}</p>
                                    </div>
                                    <div className="w-full bg-[#e8f5e9] rounded-full h-2">
                                        <div
                                            className="bg-[#558b2f] h-2 rounded-full transition-all"
                                            style={{ width: `${Math.max(4, (r.count / maxRefs) * 100)}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

