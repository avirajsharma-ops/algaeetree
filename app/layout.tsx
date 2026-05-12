import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { AnalyticsTracker } from "./components/AnalyticsTracker";
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
  title: {
    default: "AlgaeTree - Engineering biology to restore the air we breathe",
    template: "%s | AlgaeTree",
  },
  description:
    "AlgaeTree™ is a self-sustaining urban carbon capture system that uses microalgae to absorb CO₂ and release oxygen.",
  metadataBase: new URL("https://algaetree.com"),
  keywords: [
    "AlgaeTree",
    "microalgae",
    "carbon capture",
    "CCUS",
    "air purification",
    "climate technology",
    "sustainable cities",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "AlgaeTree - Engineering biology to restore the air we breathe",
    description:
      "AlgaeTree™ is a self-sustaining urban carbon capture system that uses microalgae to absorb CO₂ and release oxygen.",
    type: "website",
    siteName: "AlgaeTree",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AlgaeTree brand image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlgaeTree - Engineering biology to restore the air we breathe",
    description:
      "AlgaeTree™ is a self-sustaining urban carbon capture system that uses microalgae to absorb CO₂ and release oxygen.",
    images: ["/og-image.png"],
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
      <body className="bg-white text-neutral-900">
        <AnalyticsTracker />
        {children}
        <Script id="dev-sw-cleanup" strategy="afterInteractive">
          {`
            (function () {
              var isLocalhost =
                window.location.hostname === "localhost" ||
                window.location.hostname === "127.0.0.1";

              if (!isLocalhost || !("serviceWorker" in navigator)) return;

              navigator.serviceWorker.getRegistrations().then(function (registrations) {
                registrations.forEach(function (registration) {
                  registration.unregister();
                });
              });

              if ("caches" in window) {
                caches.keys().then(function (keys) {
                  keys.forEach(function (key) {
                    caches.delete(key);
                  });
                });
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
