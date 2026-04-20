import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlgaeTree — Engineering biology to restore the air we breathe",
  description:
    "AlgaeTree™ is a self-sustaining urban carbon capture system that uses microalgae to absorb CO₂ and release oxygen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-white text-neutral-900">{children}</body>
    </html>
  );
}
