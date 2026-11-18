import type { ReactNode } from "react";
import cx from "clsx";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Announcement from "@/components/Announcement";
import LaunchCeremony from "@/components/LaunchCeremony";
import PageScript from "@/components/PageScript";
import { site } from "@/data/site";
import "./Base.css";

interface Props { title: string; description: string; path: string; kind?: "WebSite" | "SoftwareApplication" | "AboutPage" | "WebPage"; product?: string; noNav?: boolean; noAnnounce?: boolean; children?: ReactNode }

/** Page frame: launch curtain (home only), announcement bar, nav, the page, footer, structured data and shared scripts.
    The <html>/<head> tags live in the root layouts; head tags come from pageMeta() in src/lib/meta.ts. */
export default function Base({ title, description, path, kind = "WebSite", product, noNav = false, noAnnounce = false, children }: Props) {
  const url = site.url + (path === "/" ? "/" : path);
  const ld: object[] = [];
  if (path === "/") {
    ld.push({ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url + "/", logo: site.url + "/media/dhiya-mark-ink.svg", description, contactPoint: { "@type": "ContactPoint", contactType: "sales", email: site.mail } });
    ld.push({ "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url + "/" });
  } else if (kind === "SoftwareApplication") {
    ld.push({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: product, applicationCategory: "BusinessApplication", operatingSystem: "Web", url, description, publisher: { "@type": "Organization", name: site.name, url: site.url + "/" }, offers: { "@type": "Offer", availability: "https://schema.org/PreOrder", description: "Design partner programme" } });
  } else {
    ld.push({ "@context": "https://schema.org", "@type": kind === "WebPage" ? "WebPage" : "AboutPage", name: title, url, description, about: { "@type": "Organization", name: site.name, url: site.url + "/" } });
  }
  ld.push({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" }, ...(path !== "/" ? [{ "@type": "ListItem", position: 2, name: title.split(" · ")[0].split(" |")[0], item: url }] : [])] });

  return (
    <>
      {path === "/" && <LaunchCeremony />}
      {!noAnnounce && <Announcement announcement={site.announcement} />}
      {!noNav && <header className={cx("site-header", { "site-header-home": path === "/" })} data-s-base=""><Nav path={path} /></header>}
      {children}
      <div className="footer-ground" data-s-base=""><Footer /></div>
      {ld.map((x, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(x).replace(/</g, "\u003c") }} />)}
      <PageScript src="/forms.js" />
      <PageScript src="/js/motion-lifecycle.js" />
    </>
  );
}
