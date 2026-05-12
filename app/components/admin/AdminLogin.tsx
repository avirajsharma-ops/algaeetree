"use client";

import { useState } from "react";

interface AdminLoginProps {
    onLogin: (user: { userId: string; name: string; email: string; role: string }) => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Invalid credentials");
                return;
            }

            localStorage.setItem("adminUser", JSON.stringify(data));
            onLogin(data);
        } catch {
            setError("Login failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-[#f5f5f5] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                    {/* Logo */}
                    <div className="flex justify-center mb-2">
                        <div className="text-5xl">🌿</div>
                    </div>

                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#2d5a27] font-space-grotesk">AlgaeTree</h1>
                        <p className="text-[#7f7f7f] mt-1 font-nimbus text-sm">Admin Panel — Sign In</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[#2d5a27] mb-1.5 font-nimbus">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@algaetree.com"
                                required
                                autoComplete="email"
                                className="w-full px-4 py-2.5 rounded-lg border border-[#cfcfcf] focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent font-nimbus text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#2d5a27] mb-1.5 font-nimbus">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                autoComplete="current-password"
                                className="w-full px-4 py-2.5 rounded-lg border border-[#cfcfcf] focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent font-nimbus text-sm"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-nimbus">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading || !email || !password}
                            className="w-full bg-[#2d5a27] text-white py-2.5 rounded-lg font-medium hover:bg-[#1b5e20] transition-colors disabled:opacity-70 font-space-grotesk tracking-wide"
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
