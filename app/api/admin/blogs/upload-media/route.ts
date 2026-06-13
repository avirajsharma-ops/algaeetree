import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;

function getExtension(fileName: string, mimeType: string): string {
    const fromName = path.extname(fileName).replace(".", "").toLowerCase();
    if (fromName) return fromName;

    const subtype = mimeType.split("/")[1]?.toLowerCase();
    if (!subtype) return "bin";

    const normalized = subtype.split("+")[0];
    const aliasMap: Record<string, string> = {
        jpeg: "jpg",
        quicktime: "mov",
        "x-matroska": "mkv",
        "x-msvideo": "avi",
        "x-ms-wmv": "wmv",
        "svg+xml": "svg",
    };

    return aliasMap[normalized] ?? normalized;
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const mediaType = formData.get("mediaType");
        const mediaRole = formData.get("mediaRole");
        const file = formData.get("file");

        if ((mediaType !== "image" && mediaType !== "video") || !(file instanceof File)) {
            return NextResponse.json({ error: "Invalid upload payload" }, { status: 400 });
        }

        if (mediaRole !== "hero" && mediaRole !== "page" && mediaRole !== "section") {
            return NextResponse.json({ error: "Invalid media role" }, { status: 400 });
        }

        if (!file.type.startsWith(`${mediaType}/`)) {
            return NextResponse.json({ error: `Please upload a valid ${mediaType} file` }, { status: 400 });
        }

        if (file.size > MAX_UPLOAD_BYTES) {
            return NextResponse.json(
                { error: "File is too large. Maximum allowed size is 25MB." },
                { status: 400 }
            );
        }

        const extension = getExtension(file.name, file.type);
        const fileName = `${Date.now()}-${randomUUID()}.${extension}`;
        const now = new Date();
        const relativeDir = path.join(
            "uploads",
            "blogs",
            mediaRole === "hero"
                ? mediaType === "image" ? "hero-images" : "hero-videos"
                : mediaRole === "page"
                    ? mediaType === "image" ? "page-images" : "page-videos"
                    : mediaType === "image" ? "section-images" : "section-videos",
            String(now.getFullYear()),
            String(now.getMonth() + 1).padStart(2, "0")
        );

        const absoluteDir = path.join(process.cwd(), "public", relativeDir);
        await mkdir(absoluteDir, { recursive: true });

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const mediaPath = path.join(relativeDir, fileName).replaceAll(path.sep, "/");
        await writeFile(path.join(process.cwd(), "public", mediaPath), buffer);

        return NextResponse.json({
            url: `/${mediaPath}`,
            mediaPath,
        });
    } catch {
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
