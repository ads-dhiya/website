import type { NextConfig } from "next";

const config: NextConfig = {
  trailingSlash: false,
  async redirects() {
    // The Astro build published its sitemap here; keep old links and crawlers working.
    return [{ source: "/sitemap-index.xml", destination: "/sitemap.xml", permanent: true }];
  },
};

export default config;
