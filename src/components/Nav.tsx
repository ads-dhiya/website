import { list } from "@/lib/list";
import PageScript from "@/components/PageScript";
import { site } from "@/data/site";
import "./Nav.css";

export default function Nav(props: { path: string }) {
const path = props.path.replace(/\/$/, "") || "/";
const cur = (href: string) => !href.includes("#") && href === path ? "page" : undefined;
const groups = [["Platform", site.nav.platform], ["Product", site.nav.product], ["Company", site.nav.company]] as const;
  return (
    <>
<nav className="nav site-nav" aria-label="Main" data-site-navigation="" data-nav-tone="light" data-s-nav="">
  <a className="nav-brand" href="/" aria-label="Dhiya home" data-s-nav=""><img className="nav-logo-light" src="/media/dhiya-lockup.svg" alt="" width="116" height="30" data-s-nav="" /><img className="nav-logo-dark" src="/media/dhiya-lockup-ink.svg" alt="" width="116" height="30" aria-hidden="true" data-s-nav="" /></a>
  <ul id="primary-navigation" data-s-nav="">
    {list(groups.map(([name, items]) => (
      <li data-s-nav=""><details className="dd" data-s-nav=""><summary data-s-nav="">{name}</summary><div className="menu" data-s-nav="">
        {list(items.map((it) => (<a href={it.href} aria-current={cur(it.href)} data-s-nav=""><span className="nav-menu-title" data-s-nav="">{"img" in it && it.img ? <img src={it.img} alt="" data-s-nav="" /> : null}<span data-s-nav="">{it.label}</span></span><small data-s-nav="">{it.sub}</small></a>)))}
      </div></details></li>
    )))}
    <li className="mobile-contact" data-s-nav=""><a href="#talk" data-s-nav="">Talk to us <span aria-hidden="true" data-s-nav="">→</span></a></li>
  </ul>
  <button className="burger" type="button" aria-label="Open navigation" aria-controls="primary-navigation" aria-expanded="false" data-s-nav=""><i aria-hidden="true" data-s-nav=""></i><i aria-hidden="true" data-s-nav=""></i><i aria-hidden="true" data-s-nav=""></i></button>{" "}
  <a className="btn nav-contact" href="#talk" data-s-nav="">Talk to us <span aria-hidden="true" data-s-nav="">→</span></a>
</nav>

<PageScript src="/js/inline-nav.js" />

<PageScript src="/js/nav-theme.js" defer />
    </>
  );
}
