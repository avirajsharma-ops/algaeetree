import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: false, // secondary font, load on demand
});

export const metadata: Metadata = {
  title: "AlgaeTree — Engineering biology to restore the air we breathe",
  description:
    "AlgaeTree™ is a self-sustaining urban carbon capture system that uses microalgae to absorb CO₂ and release oxygen.",
  metadataBase: new URL("https://algaetree.com"),
  openGraph: {
    title: "AlgaeTree — Engineering biology to restore the air we breathe",
    description:
      "AlgaeTree™ is a self-sustaining urban carbon capture system that uses microalgae to absorb CO₂ and release oxygen.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2d5a27",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable} antialiased`}>
      <head>
        {/* Preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect to YouTube (InsideSection embed) */}
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        {/* Preload the custom Nevera font */}
        <link
          rel="preload"
          href="/Nevera-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white text-neutral-900">{children}</body>
    </html>
  );
}
