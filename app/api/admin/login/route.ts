import { NextResponse } from "next/server";
import crypto from "crypto";

const DB_URL = "https://algaetree-f345a-default-rtdb.asia-southeast1.firebasedatabase.app";

function hashPassword(password: string): string {
    return crypto.createHash("sha256").update(password).digest("hex");
}

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        // Fetch all users from Firebase (small dataset - only admin users)
        const res = await fetch(`${DB_URL}/users.json`);
        if (!res.ok) {
            return NextResponse.json({ error: "Database error" }, { status: 500 });
        }

        const data = await res.json();
        if (!data) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const passwordHash = hashPassword(password);

        // Find matching active user
        const userEntry = Object.entries(data).find(([, user]) => {
            const u = user as Record<string, string | boolean>;
            return (
                u.email === email.toLowerCase().trim() &&
                u.passwordHash === passwordHash &&
                u.isActive === true
            );
        });

        if (!userEntry) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const [userId, userData] = userEntry;
        const u = userData as Record<string, string | boolean>;

        return NextResponse.json({
            userId,
            name: u.name,
            email: u.email,
            role: u.role,
        });
    } catch {
        return NextResponse.json({ error: "Login failed" }, { status: 500 });
    }
}
