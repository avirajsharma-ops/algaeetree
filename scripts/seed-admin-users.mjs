/**
 * Seed Script — Creates initial admin users in Firebase Realtime Database
 *
 * Usage:
 *   node scripts/seed-admin-users.mjs
 *
 * This creates two default users:
 *   superadmin@algaetree.com / SuperAdmin@2025   (role: superadmin)
 *   admin@algaetree.com      / Admin@2025        (role: admin)
 *
 * Change the passwords before running in production!
 */

import crypto from "crypto";

const DB_URL = "https://algaetree-f345a-default-rtdb.asia-southeast1.firebasedatabase.app";

function hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
}

const users = [
    {
        name: "Super Admin",
        email: "superadmin@algaetree.com",
        password: "SuperAdmin@2025",
        role: "superadmin",
    },
    {
        name: "Admin",
        email: "admin@algaetree.com",
        password: "Admin@2025",
        role: "admin",
    },
];

async function seedUsers() {
    console.log("🌿 AlgaeTree — Seeding admin users...\n");

    for (const user of users) {
        const payload = {
            name: user.name,
            email: user.email.toLowerCase(),
            passwordHash: hashPassword(user.password),
            role: user.role,
            isActive: true,
            createdAt: Date.now(),
        };

        const res = await fetch(`${DB_URL}/users.json`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            const { name: userId } = await res.json();
            console.log(`✅ Created: ${user.email} (${user.role}) — ID: ${userId}`);
        } else {
            console.error(`❌ Failed to create ${user.email}: ${res.status}`);
        }
    }

    console.log("\n✅ Done! Login credentials:");
    console.log("─────────────────────────────────────────");
    for (const u of users) {
        console.log(`  ${u.role === "superadmin" ? "Super Admin" : "Admin      "} | ${u.email} | ${u.password}`);
    }
    console.log("─────────────────────────────────────────");
    console.log("⚠️  Change these passwords after first login!\n");
}

seedUsers().catch(console.error);
