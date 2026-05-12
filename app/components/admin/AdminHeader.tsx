"use client";

interface AdminUser {
    userId: string;
    name: string;
    email: string;
    role: string;
}

interface AdminHeaderProps {
    user: AdminUser;
    onLogout: () => void;
}

export function AdminHeader({ user, onLogout }: AdminHeaderProps) {
    return (
        <header className="bg-white shadow-sm border-b border-[#e0e0e0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-[#2d5a27] font-space-grotesk">
                        🌿 AlgaeTree Admin
                    </h1>
                    <p className="text-sm text-[#7f7f7f] font-nimbus mt-1">Management Dashboard</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-[#171717] font-nimbus">{user.name}</p>
                        <div className="flex items-center justify-end gap-1.5 mt-0.5">
                            <span
                                className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${user.role === "superadmin"
                                        ? "bg-[#2d5a27] text-white"
                                        : "bg-[#e8f5e9] text-[#2d5a27]"
                                    }`}
                            >
                                {user.role === "superadmin" ? "Super Admin" : "Admin"}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onLogout}
                        className="px-4 py-2 bg-[#f5f5f5] text-[#2d5a27] rounded-lg font-nimbus text-sm hover:bg-[#e0e0e0] transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
}
