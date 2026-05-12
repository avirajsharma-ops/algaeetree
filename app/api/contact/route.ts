
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

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

function buildTransport() {
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !port || !user || !pass) {
        return null;
    }

    return nodemailer.createTransport({
        host,
        port: Number(port),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user,
            pass,
        },
    });
}

export async function POST(request: Request) {
    const body = (await request.json().catch(() => null)) as ContactPayload | null;

    if (!body) {
        return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
    }

    const fullName = body.fullName?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim();
    const phone = body.phone?.trim();
    const topic = body.topic?.trim();
    const urgency = body.urgency?.trim() || "normal";
    const message = body.message?.trim();

    if (!body.consent) {
        return NextResponse.json(
            { message: "Please agree to the privacy policy and terms before submitting the form." },
            { status: 400 },
        );
    }

    if (!fullName || !email || !company || !phone || !topic || !message) {
        return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "algae.tree@mushroomworldgroup.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || receiverEmail;
    const transport = buildTransport();

    if (!transport) {
        return NextResponse.json(
            {
                message:
                    "Email delivery is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in your environment.",
            },
            { status: 500 },
        );
    }

    const topicLabel = TOPIC_LABELS[topic] || topic;
    const urgencyLabel = URGENCY_LABELS[urgency] || urgency;
    const submissionTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    // Escape HTML special characters to prevent injection
    const escapeHtml = (text: string) => {
        const map: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
        };
        return text.replace(/[&<>"']/g, (char) => map[char]);
    };

    const escapedFullName = escapeHtml(fullName);
    const escapedEmail = escapeHtml(email);
    const escapedCompany = escapeHtml(company);
    const escapedPhone = escapeHtml(phone);
    const escapedMessage = escapeHtml(message);

    const subject = `[AlgaeTree Contact] ${topicLabel} - ${escapedFullName}`;
    const text = [
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        `NEW CONTACT FORM SUBMISSION`,
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        ``,
        `Submission Time: ${submissionTime}`,
        ``,
        `VISITOR INFORMATION:`,
        `─────────────────────`,
        `Full Name: ${escapedFullName}`,
        `Email: ${escapedEmail}`,
        `Company / Organization: ${escapedCompany}`,
        `Phone: ${escapedPhone}`,
        ``,
        `INQUIRY DETAILS:`,
        `─────────────────────`,
        `Topic: ${topicLabel}`,
        `Urgency: ${urgencyLabel}`,
        ``,
        `MESSAGE:`,
        `─────────────────────`,
        escapedMessage,
        ``,
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ].join("\n");

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
                .header { background: linear-gradient(135deg, #2f7d32 0%, #1b5e20 100%); color: white; padding: 24px; border-radius: 8px 8px 0 0; text-align: center; }
                .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
                .header p { margin: 8px 0 0 0; font-size: 14px; opacity: 0.9; }
                .content { background: white; padding: 24px; border-radius: 0 0 8px 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .section { margin-bottom: 24px; }
                .section-title { font-size: 14px; font-weight: 700; color: #1b5e20; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #e8f5e9; }
                .field { margin-bottom: 12px; }
                .field-label { font-size: 12px; font-weight: 600; color: #555; text-transform: uppercase; letter-spacing: 0.4px; margin-bottom: 4px; }
                .field-value { font-size: 14px; color: #222; padding: 8px 12px; background-color: #f5f5f5; border-left: 3px solid #2f7d32; border-radius: 2px; word-break: break-word; }
                .message-box { background-color: #fafafa; border: 1px solid #e0e0e0; border-radius: 4px; padding: 12px; font-size: 14px; color: #222; white-space: pre-wrap; word-break: break-word; line-height: 1.6; }
                .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; }
                .time { color: #666; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>📧 New Contact Form Submission</h1>
                    <p class="time">${submissionTime}</p>
                </div>
                <div class="content">
                    <div class="section">
                        <div class="section-title">👤 Visitor Information</div>
                        <div class="field">
                            <div class="field-label">Full Name</div>
                            <div class="field-value">${escapedFullName}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Email Address</div>
                            <div class="field-value"><a href="mailto:${escapedEmail}" style="color: #2f7d32; text-decoration: none;">${escapedEmail}</a></div>
                        </div>
                        <div class="field">
                            <div class="field-label">Company / Organization</div>
                            <div class="field-value">${escapedCompany}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Phone Number</div>
                            <div class="field-value">${escapedPhone}</div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-title">📋 Inquiry Details</div>
                        <div class="field">
                            <div class="field-label">Topic</div>
                            <div class="field-value">${topicLabel}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Urgency Level</div>
                            <div class="field-value">${urgencyLabel}</div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-title">💬 Message</div>
                        <div class="message-box">${escapedMessage}</div>
                    </div>

                    <div class="footer">
                        <p>This is an automated email from the AlgaeTree contact form. Please reply directly to this email to contact the visitor.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    await transport.sendMail({
        from: `AlgaeTree Website <${fromEmail}>`,
        to: receiverEmail,
        replyTo: email,
        subject,
        text,
        html,
    });

    return NextResponse.json({ message: "Your message has been sent to AlgaeTree successfully." });
}