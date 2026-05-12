import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AlgaeTree Admin Panel",
    description: "Admin panel for managing contacts, blogs, and analytics",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
