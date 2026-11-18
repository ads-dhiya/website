import type { ReactNode } from "react";
import "@/styles/global.css";
import Html from "@/components/Html";

export { viewport } from "@/lib/meta";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Html>{children}</Html>;
}
