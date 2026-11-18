import { css } from "@/lib/css";
import { list } from "@/lib/list";
import PageScript from "@/components/PageScript";
import Base from "@/components/Base";
import Mock from "@/components/Mock";
import ProductDashboard from "@/components/ProductDashboard";
import "@/styles/products.css";
import Logo from "@/components/Logo";
import Cta from "@/components/Cta";

export default function ProductPage(props: any) {
const { p } = props as { p: any };
const slug = p.slug as string;
const mark = slug === "dil" ? "/media/dhiya-mark-ink.svg" : `/media/${slug}-mark.svg`;
// Front edge of each original slab in iso.js's unchanged 800 × 1000 viewBox.
const floorY = ({ dil: 791, ayana: 760, neev: 786, vitana: 805, aire: 830 } as Record<string, number>)[slug] || 830;
  return (
    <>
<Base title={p.title} description={p.lede} path={slug === "dil" ? "/dil" : `/${slug}`} kind="SoftwareApplication" product={p.eyebrow.split(" · ").pop()}>
  <main className="product-page">
  <header className="phero wrap">
    <div className="copy">
      <h1 dangerouslySetInnerHTML={{ __html: p.h1 }} />
      <p className="lede">{p.lede}</p>
      <div className="ctas"><a className="btn" href="#talk">Talk to us →</a></div>
    </div>
    <figure className="pimg product-hero-art" style={css(`--iso-floor-y:${floorY};--iso-svg-height:${100000 / floorY}%`)}>
      <div className="product-iso-frame"><svg className="iso" data-scene={slug} aria-hidden="true"></svg></div>
      <figcaption className="product-hero-caption"><img src={mark} alt="" width="26" height="26" /><span>{p.cap}</span></figcaption>
    </figure>
  </header>

  <section className="sec" id="how"><div className="wrap">
    <div className="product-overview">
      <div className="sh product-overview-copy"><h2 className="st" dangerouslySetInnerHTML={{ __html: p.how_h }} /><p>{p.how_p}</p></div>
      <ProductDashboard slug={slug} />
    </div>
    <div className="steps">
      {list(p.steps.map((s: any, i: number) => (
        <div className="step"><div className="txt"><p className="n">{String(i + 1).padStart(2, "0")}</p><h3>{s.h}</h3><p>{s.p}</p>{list(s.tags && <ul>{list(s.tags.map((t: string) => <li>{t}</li>))}</ul>)}</div><Mock spec={s.mock} product={slug} /></div>
      )))}
    </div>
  </div></section>

  <section className="sec alt"><div className="wrap">
    <div className="sh"><h2 className="st" dangerouslySetInnerHTML={{ __html: p.hood_h }} /><p>{p.hood_p}</p></div>
    <div className="hood">
      {list(p.hood.map((h: any, i: number) => (
        <div className="hb"><p className="n">{String(i + 1).padStart(2, "0")}</p><h3>{h.h}</h3><p>{h.p}</p><ul>{list(h.sub.map(([a, b]: string[]) => <li><b>{a}</b><span>{b}</span></li>))}</ul></div>
      )))}
    </div>
    <div className="midcta"><p>{p.mid}</p><a className="btn" href="#talk">Speak to our experts →</a></div>
  </div></section>

  <section className="sec"><div className="wrap">
    <div className="sh"><h2 className="st">Works with the stack <em>you already run.</em></h2><p>{p.integ_p}</p></div>
    <div className="ig">
      {list(p.integ.map((g: any) => (
        <div className="igc"><h3>{g.h}</h3><p>{g.p}</p><div className="lgs">{list(g.items.map((it: any[]) => <Logo name={it[0]} slug={it[1]} soon={!!it[2]} />))}</div></div>
      )))}
    </div>
    {list(p.protos && <div className="protos">{list(p.protos.map((x: string) => <span>{x}</span>))}</div>)}
  </div></section>

  <Cta heading={p.cta_h} sub={p.cta_p} button="Get in touch →" />
  <PageScript src="/iso.js" />
  </main>
</Base>
    </>
  );
}
