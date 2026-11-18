import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#FFFFFF" };

/** Head tags shared by every page: title, description, canonical, Open Graph, Twitter, icons. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = site.url + (path === "/" ? "/" : path);
  const image = site.url + "/media/og-image.png";
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" }, apple: "/media/apple-touch-icon.png" },
    openGraph: { type: "website", siteName: site.name, locale: "en_GB", title, description, url, images: [{ url: image, width: 1200, height: 630, alt: "Dhiya Labs" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
