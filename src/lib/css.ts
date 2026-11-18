import type { CSSProperties } from "react";

/** Turn an inline CSS string ("--a:1;color:red") into a React style object. Custom properties keep their names. */
export function css(input: string | CSSProperties | undefined | null): CSSProperties | undefined {
  if (!input) return undefined;
  if (typeof input !== "string") return input;
  const out: Record<string, string> = {};
  let depth = 0, quote = "", cur = "";
  const push = () => {
    const i = cur.indexOf(":");
    if (i > 0) {
      let key = cur.slice(0, i).trim();
      const value = cur.slice(i + 1).trim();
      if (key && value) {
        if (!key.startsWith("--")) key = key.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
        out[key] = value;
      }
    }
    cur = "";
  };
  for (const ch of input) {
    if (quote) { cur += ch; if (ch === quote) quote = ""; continue; }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && depth === 0) { push(); continue; }
    cur += ch;
  }
  push();
  return out as CSSProperties;
}
