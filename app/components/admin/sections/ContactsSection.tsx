"use client";

import { useState, useEffect } from "react";
import { ref, onValue, update } from "firebase/database";
import { database } from "@/lib/firebase";

interface Contact {
    id: string;
    fullName: string;
    email: string;
    company: string;
    phone: string;
    topic: string;
    urgency: string;
    message: string;
    timestamp: number;
    status?: "done" | "not-done";
}

export function ContactsSection() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [error, setError] = useState("");
    const [statusFilter, setStatusFilter] = useState<"all" | "done" | "not-done">("all");
    const [urgencyFilter, setUrgencyFilter] = useState<"all" | "urgent" | "priority" | "normal">("all");

    useEffect(() => {
        const contactsRef = ref(database, "contacts");
        const unsubscribe = onValue(
            contactsRef,
            (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const list: Contact[] = Object.entries(data).map(([id, value]) => ({
                        id,
                        ...(value as Omit<Contact, "id">),
                        status: (value as Contact).status || "not-done",
                    }));
                    list.sort((a, b) => b.timestamp - a.timestamp);
                    setContacts(list);
                } else {
                    setContacts([]);
                }
                setIsLoading(false);
            },
            (err) => {
                setError("Failed to load contacts: " + err.message);
                setIsLoading(false);
            }
        );
        return () => unsubscribe();
    }, []);

    const handleStatusToggle = async (contact: Contact) => {
        const nextStatus = contact.status === "done" ? "not-done" : "done";

        try {
            await update(ref(database, `contacts/${contact.id}`), {
                status: nextStatus,
            });
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to update status";
            setError(`Failed to update status: ${message}`);
        }
    };

    const filteredContacts = contacts.filter((contact) => {
        const normalizedStatus = contact.status || "not-done";
        const matchesStatus = statusFilter === "all" || normalizedStatus === statusFilter;
        const matchesUrgency = urgencyFilter === "all" || contact.urgency === urgencyFilter;
        return matchesStatus && matchesUrgency;
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2d5a27]"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e0e0e0]">
                    <div className="text-3xl font-bold text-[#2d5a27]">{contacts.length}</div>
                    <p className="text-[#7f7f7f] font-nimbus text-sm mt-1">Total Contacts</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e0e0e0]">
                    <div className="text-3xl font-bold text-[#2f7d32]">
                        {contacts.filter((c) => c.urgency === "urgent").length}
                    </div>
                    <p className="text-[#7f7f7f] font-nimbus text-sm mt-1">Urgent Inquiries</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e0e0e0]">
                    <div className="text-3xl font-bold text-[#558b2f]">
                        {contacts.filter((c) => c.topic === "partnership-inquiry").length}
                    </div>
                    <p className="text-[#7f7f7f] font-nimbus text-sm mt-1">Partnership Inquiries</p>
                </div>
            </div>

            {/* Error Message or Contacts List */}
            {error && (
                <div className="bg-blue-50 border border-blue-200 text-blue-700 px-6 py-4 rounded-lg font-nimbus">
                    ℹ️ {error}
                </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                    <label className="text-sm text-[#4b5563] font-nimbus">Status</label>
                    <select
                        value={statusFilter}
                        onChange={(event) => setStatusFilter(event.target.value as "all" | "done" | "not-done")}
                        className="rounded-md border border-[#d1d5db] bg-white px-3 py-2 text-sm font-nimbus text-[#374151]"
                    >
                        <option value="all">All</option>
                        <option value="done">Done</option>
                        <option value="not-done">Not Done</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label className="text-sm text-[#4b5563] font-nimbus">Urgency</label>
                    <select
                        value={urgencyFilter}
                        onChange={(event) =>
                            setUrgencyFilter(event.target.value as "all" | "urgent" | "priority" | "normal")
                        }
                        className="rounded-md border border-[#d1d5db] bg-white px-3 py-2 text-sm font-nimbus text-[#374151]"
                    >
                        <option value="all">All</option>
                        <option value="urgent">Urgent</option>
                        <option value="priority">Priority</option>
                        <option value="normal">Normal</option>
                    </select>
                </div>
            </div>

            {filteredContacts.length === 0 ? (
                <div className="bg-white rounded-lg p-12 text-center border border-[#e0e0e0]">
                    <p className="text-[#7f7f7f] font-nimbus mb-4">
                        {contacts.length === 0
                            ? error
                                ? "Waiting for contacts..."
                                : "No contacts yet"
                            : "No contacts found for selected filters"}
                    </p>
                    <p className="text-sm text-[#9b9b9b]">
                        When users submit the contact form, their details will appear here.
                    </p>
                </div>
            ) : (
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#e0e0e0]">
                    <table className="w-full">
                        <thead className="bg-[#f5f5f5] border-b border-[#e0e0e0]">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-[#2d5a27] font-nimbus">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-[#2d5a27] font-nimbus">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-[#2d5a27] font-nimbus">
                                    Topic
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-[#2d5a27] font-nimbus">
                                    Urgency
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-[#2d5a27] font-nimbus">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-[#2d5a27] font-nimbus">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e0e0e0]">
                            {filteredContacts.map((contact) => (
                                <tr key={contact.id} className="hover:bg-[#f9f9f9]">
                                    <td className="px-6 py-4 text-sm font-nimbus">{contact.fullName}</td>
                                    <td className="px-6 py-4 text-sm text-[#7f7f7f] font-nimbus">{contact.email}</td>
                                    <td className="px-6 py-4 text-sm text-[#7f7f7f] font-nimbus">{contact.topic}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${contact.urgency === "urgent"
                                                ? "bg-red-100 text-red-700"
                                                : contact.urgency === "priority"
                                                    ? "bg-orange-100 text-orange-700"
                                                    : "bg-green-100 text-green-700"
                                                }`}
                                        >
                                            {contact.urgency}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${(contact.status || "not-done") === "done"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-slate-100 text-slate-700"
                                                }`}
                                        >
                                            {(contact.status || "not-done") === "done" ? "done" : "not done"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => setSelectedContact(contact)}
                                                className="text-[#2d5a27] hover:underline font-nimbus font-medium"
                                            >
                                                View
                                            </button>
                                            <button
                                                onClick={() => handleStatusToggle(contact)}
                                                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${(contact.status || "not-done") === "done"
                                                    ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                                    : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                                                    }`}
                                            >
                                                {(contact.status || "not-done") === "done" ? "Not Done" : "Done"}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Contact Details Modal */}
            {selectedContact && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
                        <div className="p-6 border-b border-[#e0e0e0]">
                            <h2 className="text-xl font-bold text-[#2d5a27] font-space-grotesk">
                                {selectedContact.fullName}
                            </h2>
                            <button
                                onClick={() => setSelectedContact(null)}
                                className="absolute top-4 right-4 text-[#7f7f7f] hover:text-[#2d5a27]"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <div>
                                <p className="text-xs font-semibold text-[#2d5a27] font-nimbus uppercase">Email</p>
                                <p className="text-[#171717] font-nimbus">{selectedContact.email}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs font-semibold text-[#2d5a27] font-nimbus uppercase">
                                        Company
                                    </p>
                                    <p className="text-[#171717] font-nimbus">{selectedContact.company}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-[#2d5a27] font-nimbus uppercase">Phone</p>
                                    <p className="text-[#171717] font-nimbus">{selectedContact.phone}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs font-semibold text-[#2d5a27] font-nimbus uppercase">Topic</p>
                                    <p className="text-[#171717] font-nimbus">{selectedContact.topic}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-[#2d5a27] font-nimbus uppercase">Urgency</p>
                                    <p className="text-[#171717] font-nimbus">{selectedContact.urgency}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-[#2d5a27] font-nimbus uppercase">Message</p>
                                <p className="text-[#171717] font-nimbus whitespace-pre-wrap">{selectedContact.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
