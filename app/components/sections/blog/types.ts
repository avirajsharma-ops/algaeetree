export type MediaType = "image" | "video";
export type BlogStatus = "draft" | "published";

export interface BlogContentSection {
    heading: string;
    subHeading: string;
    paragraph: string;
    highlightHeading: string;
    highlightSubHeading: string;
    highlightParagraph: string;
    mediaType: MediaType;
    mediaUrl: string;
    mediaPath?: string;
}

export interface BlogRecord {
    title: string;
    readMinutes: number;
    status: BlogStatus;
    content?: string;
    contentSections?: BlogContentSection[];
    heroMediaType: MediaType;
    heroMediaUrl: string;
    heroMediaPath?: string;
    pageMediaType?: MediaType;
    pageMediaUrl?: string;
    pageMediaPath?: string;
    mediaType?: MediaType;
    mediaUrl?: string;
    mediaPath?: string;
    createdAt: number;
    updatedAt?: number;
}

export interface BlogItem extends BlogRecord {
    id: number;
}
