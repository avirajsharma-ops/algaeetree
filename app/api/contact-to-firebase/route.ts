import { NextResponse } from "next/server";
import { ref, push } from "firebase/database";
import { database } from "@/lib/firebase";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.fullName || !body.email || !body.message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const phone = String(body.phone || "").trim();
        const phoneEndsWithTenDigits = /\d{10}$/.test(phone);

        if (!phoneEndsWithTenDigits) {
            return NextResponse.json(
                { error: "Phone number must be exactly 10 digits" },
                { status: 400 }
            );
        }

        // Save contact to Firebase Realtime Database
        const contactsRef = ref(database, "contacts");
        const newContactRef = await push(contactsRef, {
            fullName: body.fullName,
            email: body.email,
            company: body.company || "",
            phone: body.phone || "",
            topic: body.topic || "",
            urgency: body.urgency || "normal",
            message: body.message,
            consent: body.consent || false,
            timestamp: Date.now(),
        });

        return NextResponse.json({
            success: true,
            message: "Contact saved successfully",
            id: newContactRef.key,
        });
    } catch (error) {
        console.error("Error saving contact:", error);
        return NextResponse.json(
            { error: "Failed to save contact" },
            { status: 500 }
        );
    }
}
