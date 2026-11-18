interface Props { name: string; slug?: string | null; soon?: boolean }

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Integration logo chip. Rendered as raw HTML so the icon can remove itself if the CDN has no logo for it. */
export default function Logo({ name, slug, soon }: Props) {
  const img = slug ? `<img src="https://cdn.simpleicons.org/${esc(slug)}/374078" alt="" loading="lazy" onerror="this.remove()">` : "";
  return <span className="lg" dangerouslySetInnerHTML={{ __html: img + esc(name) + (soon ? '<span class="soon">soon</span>' : "") }} />;
}
