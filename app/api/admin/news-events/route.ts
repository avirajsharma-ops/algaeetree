import { unlink } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;
const MEDIA_ROOT = path.join(process.cwd(), "public", "uploads", "news-events");

type MediaType = "image" | "video";

interface NewsEventPayload {
    category?: string;
    title?: string;
    excerpt?: string;
    mediaType?: MediaType;
    mediaUrl?: string;
    mediaPath?: string;
    link?: string;
    createdAt?: number;
}

function isValidPayload(payload: NewsEventPayload) {
    return Boolean(
        payload.category &&
        payload.title &&
        payload.excerpt &&
        payload.mediaType &&
        payload.mediaUrl
    );
}

function deriveMediaPath(mediaPath?: string, mediaUrl?: string) {
    if (mediaPath) return mediaPath;
    if (!mediaUrl?.startsWith("/uploads/news-events/")) return null;
    return mediaUrl.replace(/^\//, "");
}

async function deleteMediaFile(mediaPath?: string | null, mediaUrl?: string) {
    const resolvedPath = deriveMediaPath(mediaPath ?? undefined, mediaUrl);
    if (!resolvedPath) return;

    const absolutePath = path.join(process.cwd(), "public", resolvedPath);
    const normalizedRoot = path.normalize(MEDIA_ROOT + path.sep);
    const normalizedTarget = path.normalize(absolutePath);

    if (!normalizedTarget.startsWith(normalizedRoot)) {
        return;
    }

    try {
        await unlink(normalizedTarget);
    } catch (error) {
        const nodeError = error as NodeJS.ErrnoException;
        if (nodeError.code !== "ENOENT") {
            throw error;
        }
    }
}

async function getNewsEvent(newsEventId: string) {
    if (!DB_URL) {
        throw new Error("Missing NEXT_PUBLIC_FIREBASE_DATABASE_URL");
    }

    const response = await fetch(`${DB_URL}/newsEvents/${newsEventId}.json`);
    if (!response.ok) {
        throw new Error("Failed to load news item");
    }

    return (await response.json()) as NewsEventPayload | null;
}

export async function POST(request: Request) {
    try {
        const payload = (await request.json()) as NewsEventPayload;

        if (!isValidPayload(payload)) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        if (!DB_URL) {
            return NextResponse.json({ error: "Firebase database is not configured" }, { status: 500 });
        }

        const response = await fetch(`${DB_URL}/newsEvents.json`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to create news item" }, { status: 500 });
        }

        const result = await response.json();
        return NextResponse.json({ success: true, newsEventId: result.name });
    } catch {
        return NextResponse.json({ error: "Failed to create news item" }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const { newsEventId, payload } = (await request.json()) as {
            newsEventId?: string;
            payload?: NewsEventPayload;
        };

        if (!newsEventId || !payload || !isValidPayload(payload)) {
            return NextResponse.json({ error: "newsEventId and valid payload are required" }, { status: 400 });
        }

        if (!DB_URL) {
            return NextResponse.json({ error: "Firebase database is not configured" }, { status: 500 });
        }

        const existing = await getNewsEvent(newsEventId);

        const response = await fetch(`${DB_URL}/newsEvents/${newsEventId}.json`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to update news item" }, { status: 500 });
        }

        const previousPath = deriveMediaPath(existing?.mediaPath, existing?.mediaUrl);
        const nextPath = deriveMediaPath(payload.mediaPath, payload.mediaUrl);

        if (previousPath && previousPath !== nextPath) {
            await deleteMediaFile(previousPath, existing?.mediaUrl);
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: "Failed to update news item" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const newsEventId = searchParams.get("newsEventId");

        if (!newsEventId) {
            return NextResponse.json({ error: "newsEventId is required" }, { status: 400 });
        }

        if (!DB_URL) {
            return NextResponse.json({ error: "Firebase database is not configured" }, { status: 500 });
        }

        const existing = await getNewsEvent(newsEventId);

        const response = await fetch(`${DB_URL}/newsEvents/${newsEventId}.json`, {
            method: "DELETE",
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to delete news item" }, { status: 500 });
        }

        await deleteMediaFile(existing?.mediaPath, existing?.mediaUrl);

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: "Failed to delete news item" }, { status: 500 });
    }
}