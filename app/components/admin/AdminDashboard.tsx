"use client";

import { useState } from "react";
import { AdminHeader } from "./AdminHeader";
import { ContactsSection, NewsEventsSection, AnalyticsSection, UsersSection } from "./sections";

interface AdminUser {
    userId: string;
    name: string;
    email: string;
    role: string;
}

interface AdminDashboardProps {
    user: AdminUser;
    onLogout: () => void;
}

type Tab = "contacts" | "news-events" | "analytics" | "users";

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
    const [activeTab, setActiveTab] = useState<Tab>("contacts");

    const tabs: { id: Tab; label: string; superadminOnly?: boolean }[] = [
        { id: "contacts", label: "Contacts" },
        { id: "news-events", label: "News & Events" },
        { id: "analytics", label: "Analytics" },
        { id: "users", label: "Users", superadminOnly: true },
    ];

    const visibleTabs = tabs.filter((t) => !t.superadminOnly || user.role === "superadmin");

    return (
        <div className="min-h-screen bg-[#f5f5f5]">
            <AdminHeader user={user} onLogout={onLogout} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Tab Navigation */}
                <div className="flex gap-2 mb-8 border-b border-[#e0e0e0]">
                    {visibleTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 font-medium font-nimbus text-sm transition-colors relative ${activeTab === tab.id
                                ? "text-[#2d5a27]"
                                : "text-[#7f7f7f] hover:text-[#2d5a27]"
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2d5a27]"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="animate-fadeIn">
                    {activeTab === "contacts" && <ContactsSection />}
                    {activeTab === "news-events" && <NewsEventsSection />}
                    {activeTab === "analytics" && <AnalyticsSection />}
                    {activeTab === "users" && user.role === "superadmin" && (
                        <UsersSection currentUserId={user.userId} />
                    )}
                </div>
            </div>
        </div>
    );
}
