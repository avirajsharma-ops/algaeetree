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
        "jpeg": "jpg",
        "quicktime": "mov",
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
        const file = formData.get("file");

        if ((mediaType !== "image" && mediaType !== "video") || !(file instanceof File)) {
            return NextResponse.json({ error: "Invalid upload payload" }, { status: 400 });
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
            "news-events",
            mediaType === "image" ? "images" : "videos",
            String(now.getFullYear()),
            String(now.getMonth() + 1).padStart(2, "0")
        );
        const absoluteDir = path.join(process.cwd(), "public", relativeDir);
        await mkdir(absoluteDir, { recursive: true });

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const absolutePath = path.join(absoluteDir, fileName);
        await writeFile(absolutePath, buffer);

        return NextResponse.json({
            url: `/${path.join(relativeDir, fileName).replaceAll(path.sep, "/")}`,
            mediaPath: path.join(relativeDir, fileName).replaceAll(path.sep, "/"),
        });
    } catch {
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}