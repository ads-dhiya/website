import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about", ...Object.keys(products).map((slug) => `/${slug}`), "/privacy", "/security", "/terms"];
  return paths.map((path) => ({ url: site.url + path }));
}
