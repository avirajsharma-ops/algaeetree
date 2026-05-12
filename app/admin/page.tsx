"use client";

import { useState, useEffect } from "react";
import { AdminDashboard } from "@/app/components/admin/AdminDashboard";
import { AdminLogin } from "@/app/components/admin/AdminLogin";

interface AdminUser {
    userId: string;
    name: string;
    email: string;
    role: string;
}

export default function AdminPage() {
    const [user, setUser] = useState<AdminUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem("adminUser");
        if (stored) {
            try {
                setUser(JSON.parse(stored));
            } catch {
                localStorage.removeItem("adminUser");
            }
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2d5a27]"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <AdminLogin
                onLogin={(userData) => {
                    setUser(userData);
                }}
            />
        );
    }

    return <AdminDashboard user={user} onLogout={() => { localStorage.removeItem("adminUser"); setUser(null); }} />;
}
