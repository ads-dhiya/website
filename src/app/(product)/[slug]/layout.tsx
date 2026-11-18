import type { ReactNode } from "react";
import "@/styles/global.css";
import Html from "@/components/Html";

export { viewport } from "@/lib/meta";

/** Product pages get their own root layout so <body data-p="…"> can carry the product's colour theme. DIL uses the default. */
export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Html dataP={slug === "dil" ? undefined : slug}>{children}</Html>;
}
