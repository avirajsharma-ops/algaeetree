import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Compress responses with gzip/brotli
  compress: true,

  // Power-mode image optimisation
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "p0wgezr7qnmvopap.public.blob.vercel-storage.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // HTTP caching headers for static assets
  async headers() {
    if (!isProduction) {
      return [
        {
          // Keep only security headers during development to avoid stale-cache hydration issues.
          source: "/(.*)",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "X-Frame-Options", value: "SAMEORIGIN" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            {
              key: "Permissions-Policy",
              value: "camera=(), microphone=(), geolocation=()",
            },
          ],
        },
      ];
    }

    return [
      {
        // Long-lived cache for all public media (images, fonts, videos)
        source: "/figma/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Long cache for root-level public assets (logos, fonts, videos)
        source: "/:file((?!_next|api).+\\.(?:png|jpg|jpeg|webp|avif|svg|gif|ico|woff2?|otf|ttf|mp4|webm))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Security headers for all pages
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Enable experimental features for maximum performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "motion"],
  },
};

export default nextConfig;

