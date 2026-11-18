import { list } from "@/lib/list";
import Base from "@/components/Base";
import Cta from "@/components/Cta";
import { site } from "@/data/site";
import type { LegalDoc } from "@/data/legal";
import "./LegalPage.css";

interface Props { doc: LegalDoc }

export default function LegalPage(props: Props) {
/** Shared layout for /privacy, /terms and /security. Copy lives in src/data/legal.ts. */





const { doc } = props;
  return (
    <>
<Base title={doc.title} description={doc.description} path={doc.path} kind="WebPage">
<header className="phero wrap legal-hero" data-s-legal-page="">
  <div className="copy" data-s-legal-page="">
    <p className="eb" style={{ color: "var(--pd)" }} data-s-legal-page="">{doc.eyebrow}</p>
    <h1 data-s-legal-page="">{doc.heading}</h1>
    <p className="lede" data-s-legal-page="">{doc.lede}</p>
    <p className="legal-updated" data-s-legal-page="">Last updated {site.legal.updated}</p>
  </div>
</header>
<section className="legal-body" data-s-legal-page=""><div className="wrap legal-grid" data-s-legal-page="">
  <nav className="legal-toc" aria-label="On this page" data-s-legal-page="">
    <p className="eb" data-s-legal-page="">On this page</p>
    {list(doc.sections.map((s) => <a href={`#${s.id}`} data-s-legal-page="">{s.h}</a>))}
  </nav>
  <div className="legal-doc" data-s-legal-page="">
    {list(doc.sections.map((s) => (
      <section id={s.id} data-s-legal-page="">
        <h2 data-s-legal-page="">{s.h}</h2>
        {list(s.body.map((block) => Array.isArray(block)
          ? <ul data-s-legal-page="">{list(block.map((item) => <li dangerouslySetInnerHTML={{ __html: item }} data-s-legal-page="" />))}</ul>
          : <p dangerouslySetInnerHTML={{ __html: block }} data-s-legal-page="" />))}
      </section>
    )))}
  </div>
</div></section>
<Cta heading="Questions? <span>Talk to us.</span>" sub="Tell us what you need to know, or bring one hall and we'll show you the record on your own floor." />{" "}
</Base>
    </>
  );
}
