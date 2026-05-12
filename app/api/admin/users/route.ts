import { NextResponse } from "next/server";
import crypto from "crypto";

const DB_URL = "https://algaetree-f345a-default-rtdb.asia-southeast1.firebasedatabase.app";

function hashPassword(password: string): string {
    return crypto.createHash("sha256").update(password).digest("hex");
}

// POST /api/admin/users — create a new user (superadmin only)
export async function POST(request: Request) {
    try {
        const { name, email, password, role } = await request.json();

        if (!name || !email || !password || !role) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        if (!["admin", "superadmin"].includes(role)) {
            return NextResponse.json({ error: "Role must be admin or superadmin" }, { status: 400 });
        }

        // Check if email already exists
        const res = await fetch(`${DB_URL}/users.json`);
        const existing = await res.json();
        if (existing) {
            const duplicate = Object.values(existing).find(
                (u) => (u as Record<string, string>).email === email.toLowerCase().trim()
            );
            if (duplicate) {
                return NextResponse.json({ error: "Email already exists" }, { status: 409 });
            }
        }

        const newUser = {
            name: name.trim(),
            email: email.toLowerCase().trim(),
            passwordHash: hashPassword(password),
            role,
            isActive: true,
            createdAt: Date.now(),
        };

        // Push new user to Firebase
        const pushRes = await fetch(`${DB_URL}/users.json`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });

        if (!pushRes.ok) {
            return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
        }

        const { name: userId } = await pushRes.json();

        return NextResponse.json({ success: true, userId, name: newUser.name, email: newUser.email, role: newUser.role });
    } catch {
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}

// PATCH /api/admin/users — update user (toggle active, change role)
export async function PATCH(request: Request) {
    try {
        const { userId, updates } = await request.json();
        if (!userId || !updates) {
            return NextResponse.json({ error: "userId and updates are required" }, { status: 400 });
        }

        // If password is being updated, hash it
        if (updates.password) {
            updates.passwordHash = hashPassword(updates.password);
            delete updates.password;
        }

        const patchRes = await fetch(`${DB_URL}/users/${userId}.json`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updates),
        });

        if (!patchRes.ok) {
            return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
}

// DELETE /api/admin/users?userId=xxx — delete a user (superadmin only)
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return NextResponse.json({ error: "userId is required" }, { status: 400 });
        }

        const deleteRes = await fetch(`${DB_URL}/users/${userId}.json`, {
            method: "DELETE",
        });

        if (!deleteRes.ok) {
            return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
    }
}
