"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import { useEffect, useRef } from "react";

type RichTextEditorProps = {
    value: string;
    onChange: (html: string) => void;
    minHeight?: number;
    compact?: boolean;
};

function ToolbarButton({
    active = false,
    title,
    onClick,
    children,
}: {
    active?: boolean;
    title: string;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <div className="group relative inline-flex">
            <button
                type="button"
                title={title}
                aria-label={title}
                onMouseDown={(event) => {
                    event.preventDefault();
                    onClick();
                }}
                className={`rounded border px-2 py-1 text-xs font-medium transition-colors ${active ? "border-[#2d5a27] bg-[#2d5a27] text-white" : "border-[#d8d8d8] bg-white text-[#2d5a27] hover:bg-[#f3f7f2]"}`}
            >
                {children}
            </button>

            <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 hidden -translate-x-1/2 whitespace-nowrap rounded bg-[#081320] px-2 py-1 text-[11px] text-white shadow-md group-hover:block">
                {title}
            </span>
        </div>
    );
}

export default function RichTextEditor({ value, onChange, minHeight = 120, compact = false }: RichTextEditorProps) {
    const colorInputRef = useRef<HTMLInputElement>(null);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({ heading: { levels: [1, 2, 3, 4, 5, 6] } }),
            Underline,
            TextStyle,
            Color,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
        ],
        content: value || "",
        onUpdate({ editor: currentEditor }) {
            onChange(currentEditor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "outline-none",
                style: `min-height:${minHeight}px`,
            },
        },
        immediatelyRender: false,
    });

    useEffect(() => {
        if (!editor) return;
        if (editor.getHTML() !== (value || "")) {
            editor.commands.setContent(value || "", false);
        }
    }, [editor, value]);

    if (!editor) return null;

    const currentColor = (editor.getAttributes("textStyle").color as string | undefined) ?? "#2d5a27";

    return (
        <div className="overflow-hidden rounded-lg border border-[#cfcfcf] bg-white">
            <div className="flex flex-wrap items-center gap-2 border-b border-[#e6e6e6] bg-[#fafafa] px-3 py-2">
                <ToolbarButton active={editor.isActive("bold")} title="Bold" onClick={() => editor.chain().focus().toggleBold().run()}>
                    B
                </ToolbarButton>
                <ToolbarButton active={editor.isActive("italic")} title="Italic" onClick={() => editor.chain().focus().toggleItalic().run()}>
                    I
                </ToolbarButton>
                <ToolbarButton active={editor.isActive("underline")} title="Underline" onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    U
                </ToolbarButton>
                <ToolbarButton active={editor.isActive("heading", { level: 1 })} title="H1" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                    H1
                </ToolbarButton>
                <ToolbarButton active={editor.isActive("heading", { level: 2 })} title="H2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                    H2
                </ToolbarButton>
                <ToolbarButton active={editor.isActive("heading", { level: 3 })} title="H3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
                    H3
                </ToolbarButton>
                <ToolbarButton active={editor.isActive("heading", { level: 4 })} title="H4" onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}>
                    H4
                </ToolbarButton>
                <ToolbarButton active={editor.isActive("heading", { level: 5 })} title="H5" onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}>
                    H5
                </ToolbarButton>
                <ToolbarButton active={editor.isActive("heading", { level: 6 })} title="H6" onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}>
                    H6
                </ToolbarButton>
                <ToolbarButton active={editor.isActive({ textAlign: "left" })} title="Align left" onClick={() => editor.chain().focus().setTextAlign("left").run()}>
                    L
                </ToolbarButton>
                <ToolbarButton active={editor.isActive({ textAlign: "center" })} title="Align center" onClick={() => editor.chain().focus().setTextAlign("center").run()}>
                    C
                </ToolbarButton>
                <ToolbarButton active={editor.isActive({ textAlign: "right" })} title="Align right" onClick={() => editor.chain().focus().setTextAlign("right").run()}>
                    R
                </ToolbarButton>
                <ToolbarButton active={editor.isActive("bulletList")} title="Bullet list" onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    List
                </ToolbarButton>
                <ToolbarButton active={editor.isActive("orderedList")} title="Numbered list" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    1. List
                </ToolbarButton>
                <label title="Text color" className="flex cursor-pointer items-center gap-2 rounded border border-[#d8d8d8] bg-white px-2 py-1 text-xs text-[#2d5a27]">
                    <span style={{ color: currentColor }}>A</span>
                    <span className="h-3 w-3 rounded-full border border-[#d8d8d8]" style={{ backgroundColor: currentColor }} />
                    <input
                        ref={colorInputRef}
                        type="color"
                        value={currentColor}
                        className="sr-only"
                        onChange={(event) => editor.chain().focus().setColor(event.target.value).run()}
                    />
                </label>
                <ToolbarButton title="Clear formatting" onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
                    Clear
                </ToolbarButton>
            </div>

            <div
                className={`px-4 py-3 ${compact ? "text-sm" : "text-base"} [&_.ProseMirror_h1]:font-space-grotesk [&_.ProseMirror_h1]:text-2xl [&_.ProseMirror_h1]:font-bold [&_.ProseMirror_h1]:text-[#121212] [&_.ProseMirror_h1]:mb-2 [&_.ProseMirror_h2]:font-space-grotesk [&_.ProseMirror_h2]:text-xl [&_.ProseMirror_h2]:font-bold [&_.ProseMirror_h2]:text-[#121212] [&_.ProseMirror_h2]:mb-2 [&_.ProseMirror_h3]:font-space-grotesk [&_.ProseMirror_h3]:text-lg [&_.ProseMirror_h3]:font-semibold [&_.ProseMirror_h3]:text-[#121212] [&_.ProseMirror_h3]:mb-2 [&_.ProseMirror_h4]:font-space-grotesk [&_.ProseMirror_h4]:text-base [&_.ProseMirror_h4]:font-semibold [&_.ProseMirror_h4]:text-[#121212] [&_.ProseMirror_h4]:mb-2 [&_.ProseMirror_h5]:font-space-grotesk [&_.ProseMirror_h5]:text-sm [&_.ProseMirror_h5]:font-semibold [&_.ProseMirror_h5]:text-[#121212] [&_.ProseMirror_h5]:mb-2 [&_.ProseMirror_h6]:font-space-grotesk [&_.ProseMirror_h6]:text-xs [&_.ProseMirror_h6]:font-semibold [&_.ProseMirror_h6]:uppercase [&_.ProseMirror_h6]:tracking-[0.08em] [&_.ProseMirror_h6]:text-[#121212] [&_.ProseMirror_h6]:mb-2 [&_.ProseMirror_p]:font-nimbus [&_.ProseMirror_p]:leading-6 [&_.ProseMirror_p]:text-[#333] [&_.ProseMirror_p]:mb-2 [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:pl-5 [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-5 [&_.ProseMirror]:outline-none`}
            >
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}