import type { Metadata } from "next";

const OG_IMAGE_PATH = "/og-image.png";

const BASE_KEYWORDS = [
  "AlgaeTree",
  "carbon capture",
  "CCUS",
  "microalgae technology",
  "air purification",
  "clean air solutions",
  "climate tech India",
  "urban sustainability",
];

type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSeoOptions): Metadata {
  const mergedKeywords = Array.from(new Set([...BASE_KEYWORDS, ...keywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "AlgaeTree",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: "AlgaeTree brand image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}