"use client";

import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase";

interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "superadmin";
    isActive: boolean;
    createdAt: number;
}

interface UsersSectionProps {
    currentUserId: string;
}

const emptyForm = { name: "", email: "", password: "", role: "admin" as "admin" | "superadmin" };

export function UsersSection({ currentUserId }: UsersSectionProps) {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [form, setForm] = useState(emptyForm);
    const [showForm, setShowForm] = useState(false);
    const [formError, setFormError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const usersRef = ref(database, "users");
        const unsubscribe = onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list: User[] = Object.entries(data).map(([id, val]) => ({
                    id,
                    ...(val as Omit<User, "id">),
                }));
                list.sort((a, b) => (a.role === "superadmin" ? -1 : 1) || a.name.localeCompare(b.name));
                setUsers(list);
            } else {
                setUsers([]);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError("");
        setFormSuccess("");
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/admin/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) {
                setFormError(data.error || "Failed to create user");
            } else {
                setFormSuccess(`User "${data.name}" created successfully`);
                setForm(emptyForm);
                setShowForm(false);
            }
        } catch {
            setFormError("Failed to create user");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleToggleActive = async (userId: string, currentActive: boolean) => {
        await fetch("/api/admin/users", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, updates: { isActive: !currentActive } }),
        });
    };

    const handleDelete = async (userId: string, userName: string) => {
        if (userId === currentUserId) {
            alert("You cannot delete your own account.");
            return;
        }
        if (!confirm(`Delete user "${userName}"? This cannot be undone.`)) return;

        await fetch(`/api/admin/users?userId=${userId}`, { method: "DELETE" });
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2d5a27]"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-[#2d5a27] font-space-grotesk">User Management</h2>
                    <p className="text-sm text-[#7f7f7f] font-nimbus mt-0.5">Manage admin and superadmin accounts</p>
                </div>
                <button
                    onClick={() => { setShowForm(!showForm); setFormError(""); setFormSuccess(""); }}
                    className="px-4 py-2 bg-[#2d5a27] text-white rounded-lg text-sm font-nimbus hover:bg-[#1b5e20] transition-colors"
                >
                    {showForm ? "Cancel" : "+ Add User"}
                </button>
            </div>

            {/* Feedback */}
            {formSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm font-nimbus">
                    ✓ {formSuccess}
                </div>
            )}

            {/* Create User Form */}
            {showForm && (
                <div className="bg-white rounded-xl border border-[#e0e0e0] p-6 shadow-sm">
                    <h3 className="text-base font-semibold text-[#2d5a27] font-space-grotesk mb-4">Create New User</h3>
                    <form onSubmit={handleCreate} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-[#2d5a27] mb-1 font-nimbus">Full Name *</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                                placeholder="John Doe"
                                className="w-full px-3 py-2 rounded-lg border border-[#cfcfcf] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5a27] font-nimbus"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-[#2d5a27] mb-1 font-nimbus">Email *</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                                placeholder="user@algaetree.com"
                                className="w-full px-3 py-2 rounded-lg border border-[#cfcfcf] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5a27] font-nimbus"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-[#2d5a27] mb-1 font-nimbus">Password *</label>
                            <input
                                type="password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                required
                                minLength={8}
                                placeholder="Min. 8 characters"
                                className="w-full px-3 py-2 rounded-lg border border-[#cfcfcf] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5a27] font-nimbus"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-[#2d5a27] mb-1 font-nimbus">Role *</label>
                            <select
                                value={form.role}
                                onChange={(e) => setForm({ ...form, role: e.target.value as "admin" | "superadmin" })}
                                className="w-full px-3 py-2 rounded-lg border border-[#cfcfcf] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5a27] font-nimbus bg-white"
                            >
                                <option value="admin">Admin</option>
                                <option value="superadmin">Super Admin</option>
                            </select>
                        </div>

                        {formError && (
                            <div className="col-span-full bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm font-nimbus">
                                {formError}
                            </div>
                        )}

                        <div className="col-span-full flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-2 bg-[#2d5a27] text-white rounded-lg text-sm font-nimbus hover:bg-[#1b5e20] transition-colors disabled:opacity-70"
                            >
                                {isSubmitting ? "Creating..." : "Create User"}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Users Table */}
            <div className="bg-white rounded-xl border border-[#e0e0e0] shadow-sm overflow-hidden">
                {users.length === 0 ? (
                    <div className="p-12 text-center">
                        <p className="text-[#7f7f7f] font-nimbus">No users found. Create the first user above.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-[#f5f5f5] border-b border-[#e0e0e0]">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#7f7f7f] uppercase tracking-wide font-nimbus">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#7f7f7f] uppercase tracking-wide font-nimbus">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#7f7f7f] uppercase tracking-wide font-nimbus">Role</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#7f7f7f] uppercase tracking-wide font-nimbus">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#7f7f7f] uppercase tracking-wide font-nimbus">Created</th>
                                    <th className="px-6 py-3 text-right text-xs font-semibold text-[#7f7f7f] uppercase tracking-wide font-nimbus">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e0e0e0]">
                                {users.map((u) => (
                                    <tr key={u.id} className="hover:bg-[#fafafa] transition-colors">
                                        <td className="px-6 py-4 font-medium text-[#171717] font-nimbus">
                                            {u.name}
                                            {u.id === currentUserId && (
                                                <span className="ml-2 text-xs text-[#7f7f7f]">(you)</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-[#7f7f7f] font-nimbus">{u.email}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${u.role === "superadmin"
                                                        ? "bg-[#2d5a27] text-white"
                                                        : "bg-[#e8f5e9] text-[#2d5a27]"
                                                    }`}
                                            >
                                                {u.role === "superadmin" ? "Super Admin" : "Admin"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${u.isActive
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {u.isActive ? "Active" : "Inactive"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-[#7f7f7f] font-nimbus text-xs">
                                            {new Date(u.createdAt).toLocaleDateString("en-IN")}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-end gap-2">
                                                {u.id !== currentUserId && (
                                                    <>
                                                        <button
                                                            onClick={() => handleToggleActive(u.id, u.isActive)}
                                                            className="px-3 py-1 text-xs rounded-lg border border-[#cfcfcf] text-[#7f7f7f] hover:border-[#2d5a27] hover:text-[#2d5a27] transition-colors font-nimbus"
                                                        >
                                                            {u.isActive ? "Deactivate" : "Activate"}
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(u.id, u.name)}
                                                            className="px-3 py-1 text-xs rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors font-nimbus"
                                                        >
                                                            Delete
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
