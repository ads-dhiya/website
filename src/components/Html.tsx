import type { ReactNode } from "react";

/** The document shell shared by both root layouts. `dataP` themes product pages (see global.css).
    The launch curtain script sets attributes on <html> before React loads, hence suppressHydrationWarning. */
export default function Html({ children, dataP }: { children: ReactNode; dataP?: string }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body data-p={dataP}>{children}</body>
    </html>
  );
}
