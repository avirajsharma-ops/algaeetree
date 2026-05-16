import { NextResponse } from "next/server";
import { ref, push } from "firebase/database";
import { database } from "@/lib/firebase";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
    company?: string;
    consent?: boolean;
    email?: string;
    fullName?: string;
    message?: string;
    phone?: string;
    topic?: string;
    urgency?: string;
};

const TOPIC_LABELS: Record<string, string> = {
    "pilot-project": "Pilot Project",
    "partnership-inquiry": "Partnership Inquiry",
    "press-request": "Press Request",
    "general-inquiry": "General Inquiry",
};

const URGENCY_LABELS: Record<string, string> = {
    normal: "Normal",
    priority: "Priority",
    urgent: "Urgent",
};

function escapeHtml(text: string) {
    const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
}

function createTransporter() {
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const normalizeSecret = (value: string) => value.trim().replace(/^['\"]|['\"]$/g, "");
    const normalizeGmailAppPassword = (value: string) => normalizeSecret(value).replace(/\s+/g, "");

    if (host && port && smtpUser && smtpPass) {
        const isGmailHost = host.toLowerCase().includes("gmail");
        const normalizedUser = normalizeSecret(smtpUser);
        const normalizedPass = isGmailHost
            ? normalizeGmailAppPassword(smtpPass)
            : normalizeSecret(smtpPass);

        return {
            transporter: nodemailer.createTransport({
                host,
                port: Number(port),
                secure: process.env.SMTP_SECURE === "true",
                auth: { user: normalizedUser, pass: normalizedPass },
            }),
            fromEmail: process.env.CONTACT_FROM_EMAIL || normalizedUser,
            gmailFallback:
                isGmailHost && normalizedUser && normalizedPass
                    ? nodemailer.createTransport({
                        service: "gmail",
                        auth: { user: normalizedUser, pass: normalizedPass },
                    })
                    : null,
        };
    }

    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS || process.env.EMAIL_PASS;

    if (gmailUser && gmailPass) {
        const normalizedUser = normalizeSecret(gmailUser);
        const normalizedPass = normalizeGmailAppPassword(gmailPass);

        return {
            transporter: nodemailer.createTransport({
                service: "gmail",
                auth: { user: normalizedUser, pass: normalizedPass },
            }),
            fromEmail: process.env.CONTACT_FROM_EMAIL || normalizedUser,
            gmailFallback: null,
        };
    }

    return { transporter: null, fromEmail: null, gmailFallback: null };
}

async function sendContactMail(payload: Required<Pick<ContactPayload, "fullName" | "email" | "company" | "phone" | "topic" | "urgency" | "message">>) {
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.GMAIL_RECEIVER_EMAIL || "algae.tree@mushroomworldgroup.com";
    const { transporter, fromEmail, gmailFallback } = createTransporter();

    if (!transporter || !fromEmail) {
        throw new Error("Email delivery is not configured. Set SMTP_* vars or GMAIL_USER and GMAIL_APP_PASSWORD.");
    }

    const topicLabel = TOPIC_LABELS[payload.topic] || payload.topic;
    const urgencyLabel = URGENCY_LABELS[payload.urgency] || payload.urgency;
    const submissionTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const fullName = escapeHtml(payload.fullName);
    const email = escapeHtml(payload.email);
    const company = escapeHtml(payload.company);
    const phone = escapeHtml(payload.phone);
    const message = escapeHtml(payload.message);

    const subject = `AlgaeTree Contact ${topicLabel} - ${fullName}`;
    const text = [
        "NEW CONTACT FORM SUBMISSION",
        "",
        `Submission Time: ${submissionTime}`,
        "",
        `Full Name: ${fullName}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Phone: ${phone}`,
        `Topic: ${topicLabel}`,
        `Urgency: ${urgencyLabel}`,
        "",
        "Message:",
        message,
    ].join("\n");

    const html = `
        <div style="font-family:Segoe UI,Arial,sans-serif;max-width:640px;margin:auto;background:#f8faf8;padding:20px;border-radius:10px;">
            <h2 style="margin:0 0 8px;color:#1b5e20;">New Contact Form Submission</h2>
            <p style="margin:0 0 16px;color:#4b5563;font-size:13px;">${submissionTime}</p>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Topic:</strong> ${topicLabel}</p>
            <p><strong>Urgency:</strong> ${urgencyLabel}</p>
            <p><strong>Message:</strong></p>
            <div style="white-space:pre-wrap;background:#ffffff;padding:12px;border:1px solid #e5e7eb;border-radius:6px;">${message}</div>
        </div>
    `;

    const messageOptions = {
        from: `AlgaeTree Website <${fromEmail}>`,
        to: receiverEmail,
        replyTo: payload.email,
        subject,
        text,
        html,
    };

    try {
        await transporter.sendMail(messageOptions);
    } catch (error) {
        const authError = error as { code?: string };
        if (authError?.code === "EAUTH" && gmailFallback) {
            await gmailFallback.sendMail(messageOptions);
            return;
        }
        throw error;
    }
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactPayload;

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

        try {
            await sendContactMail({
                fullName: String(body.fullName),
                email: String(body.email),
                company: String(body.company || ""),
                phone: String(body.phone || ""),
                topic: String(body.topic || "general-inquiry"),
                urgency: String(body.urgency || "normal"),
                message: String(body.message),
            });
        } catch (mailError) {
            console.error("Contact saved but email sending failed:", mailError);
            const isAuthError =
                typeof mailError === "object" &&
                mailError !== null &&
                "code" in mailError &&
                (mailError as { code?: string }).code === "EAUTH";

            return NextResponse.json(
                {
                    error: isAuthError
                        ? "Contact saved, but Gmail authentication failed. Use a valid 16-character Google App Password (no spaces) and restart the server."
                        : "Contact saved, but email delivery failed. Please verify your Gmail/SMTP env configuration.",
                    saved: true,
                    id: newContactRef.key,
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Contact saved and email sent successfully",
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
