"use client";
import { useEffect } from "react";

type Entry = { src: string; defer?: boolean };
type State = { seen: Set<string>; queue: Entry[]; scheduled: boolean };

/**
 * Loads one of the site's plain scripts from /public once React has hydrated the page.
 * The scripts animate and rearrange the DOM directly, so they must not run before hydration.
 * They execute in document order; `defer` ones go last, as they did as deferred <script> tags.
 */
export default function PageScript({ src, defer }: Entry) {
  useEffect(() => {
    const g = window as unknown as { __pageScripts?: State };
    const state = (g.__pageScripts ??= { seen: new Set(), queue: [], scheduled: false });
    if (state.seen.has(src)) return;
    state.seen.add(src);
    state.queue.push({ src, defer });
    if (state.scheduled) return;
    state.scheduled = true;
    queueMicrotask(() => {
      state.scheduled = false;
      const batch = state.queue.splice(0);
      for (const entry of [...batch.filter((e) => !e.defer), ...batch.filter((e) => e.defer)]) {
        const el = document.createElement("script");
        el.src = entry.src;
        el.async = false; // keep execution order
        document.body.appendChild(el);
      }
    });
  }, [src, defer]);
  return null;
}
