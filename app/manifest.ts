import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AlgaeTree",
    short_name: "AlgaeTree",
    description:
      "AlgaeTree is a microalgae-powered carbon capture and air purification platform for healthier cities.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2d5a27",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
