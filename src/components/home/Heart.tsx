import { readFileSync } from "node:fs";
import { join } from "node:path";
import cx from "clsx";
import { list } from "@/lib/list";
import PageScript from "@/components/PageScript";
import "./Heart.css";

const dhiyaMark = readFileSync(join(process.cwd(), "public/media/dhiya-mark-ink.svg"), "utf8");

export default function Heart() {
const unifiedMark = dhiyaMark.replace(/<svg[^>]*>|<\/svg>|<title>.*?<\/title>/g, "");
const products = [
  { slug: "ayana", name: "Ayana", role: "Sell · CRM + billing", description: "Accounts, contracts, metered usage and invoices, read from the floor they cover. The CRM finally knows the capacity." },
  { slug: "neev", name: "Neev", role: "Operate · DC Ops", description: "Racks, power, cooling and capacity, with the facility work that keeps them running. Every alarm lands on the asset it came from." },
  { slug: "vitana", name: "Vitana", role: "Resolve · IT Ops", description: "Monitoring, incidents, changes and runbooks, with the rack and the customer already attached. The ticket knows the floor." },
  { slug: "aire", name: "Aire", role: "Compute · Cloud", description: "Provision, monitor and bill GPU and cloud tenants on the same record as the hall they live in." },
];
// A dotted still frame uses the same implicit 3D heart as the animated scene.
const fallbackDots = Array.from({length: 540}, (_,i) => {
  const dy = 1 - 2 * (i + .5) / 540;
  const ring = Math.sqrt(1 - dy * dy), angle = i * 2.399963229728653;
  const dx = Math.cos(angle) * ring, dz = Math.sin(angle) * ring;
  const A = dx * dx + dy * dy + 2.25 * dz * dz;
  const c = dy * Math.cbrt(dx * dx + .1125 * dz * dz);
  let lo = 0, hi = 2;
  for (let j = 0; j < 24; j++) {
    const r = (lo + hi) / 2;
    if (A * r * r - 1 - c * Math.pow(r, 5 / 3) < 0) lo = r; else hi = r;
  }
  const radius = (lo + hi) / 2;
  const x = dx * radius / 1.14, y = (dy * radius - .12) / 1.14, z = dz * radius * .93;
  const ca = Math.cos(.38), sa = Math.sin(.38), cp = Math.cos(-.10), sp = Math.sin(-.10), cr = Math.cos(.10), sr = Math.sin(.10);
  const rx = x * ca + z * sa, rz = -x * sa + z * ca;
  const ry = y * cp - rz * sp, depthZ = y * sp + rz * cp;
  const screenX = rx * cr - ry * sr, screenY = -(rx * sr + ry * cr);
  const perspective = 5 / (5 - depthZ), depth = Math.max(0, Math.min(1, (depthZ + .8) / 1.6));
  return {x:100+screenX*78*perspective,y:85+screenY*78*perspective,r:.4+depth*.36,opacity:.16+depth*.55,z:depthZ};
}).sort((a,b)=>a.z-b.z);
// The floor is atmosphere for the whole section, not an object beneath the heart.
const iso = (x: number, z: number, y = 0) => `${720 + (x-z)*.85},${440 + (x+z)*.38-y}`;
const segment = (a: string, b: string) => `M${a}L${b}`;
let floorGrid = "";
for (let x=-600;x<=600;x+=80) floorGrid += segment(iso(x,-440),iso(x,440));
for (let z=-440;z<=440;z+=80) floorGrid += segment(iso(-600,z),iso(600,z));
const floorRacks: string[] = [];
for(let row=0;row<6;row++) for(let col=0;col<10;col++) {
  if(col===4 || col===5 || row===2) continue;
  const x=-540+col*114, z=-370+row*142, w=34, d=52, h=60;
  let rack=`M${iso(x,z)}L${iso(x+w,z)}L${iso(x+w,z+d)}L${iso(x,z+d)}Z`;
  rack+=`M${iso(x,z,h)}L${iso(x+w,z,h)}L${iso(x+w,z+d,h)}L${iso(x,z+d,h)}Z`;
  [[x,z],[x+w,z],[x+w,z+d],[x,z+d]].forEach(([a,b])=>rack+=segment(iso(a,b),iso(a,b,h)));
  for(let y=12;y<h;y+=12) rack+=segment(iso(x,z,y),iso(x+w,z,y));
  floorRacks.push(rack);
}
const floorRoutes = [
  `M${iso(-540,-370)}L${iso(-540,-90)}L${iso(30,-90)}L${iso(30,340)}`,
  `M${iso(486,-370)}L${iso(486,56)}L${iso(-198,56)}L${iso(-198,340)}`
];
  return (
    <>
<section className="heart" id="dil" aria-labelledby="heart-title" data-s-home-heart="">
  <svg className="heart-floor" viewBox="0 0 1440 880" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" data-s-home-heart="">
    <defs data-s-home-heart="">
      <linearGradient id="heart-floor-fade" x1="0" y1="0" x2="0" y2="1" data-s-home-heart="">
        <stop offset="0" stopColor="white" stopOpacity="0" data-s-home-heart=""></stop>
        <stop offset=".2" stopColor="white" stopOpacity=".6" data-s-home-heart=""></stop>
        <stop offset=".7" stopColor="white" data-s-home-heart=""></stop>
        <stop offset="1" stopColor="white" stopOpacity="0" data-s-home-heart=""></stop>
      </linearGradient>
      <mask id="heart-floor-mask" data-s-home-heart=""><rect width="1440" height="880" fill="url(#heart-floor-fade)" data-s-home-heart=""></rect></mask>
    </defs>
    <g mask="url(#heart-floor-mask)" fill="none" strokeLinejoin="round" data-s-home-heart="">
      <path className="floor-grid" d={floorGrid} data-s-home-heart=""></path>
      {list(floorRacks.map(d=><path className="floor-rack" d={d} data-s-home-heart=""></path>))}
      {list(floorRoutes.map((d,i)=><path className={cx(["floor-route", `floor-route-${i}`])} d={d} data-s-home-heart=""></path>))}
    </g>
  </svg>
  <div className="heart-layout wrap" data-s-home-heart="">
  <div className="heart-copy" data-s-home-heart="">
    <p className="heart-eyebrow" data-s-home-heart="">Introducing DIL</p>
    <h2 id="heart-title" data-s-home-heart="">The heart of<br data-s-home-heart="" />the data centre.</h2>
    <p data-s-home-heart="">Four products come together around one shared record. From the floor to the customer, every part of your data centre stays connected.</p>
    <a className="heart-platform" href="/dil" data-s-home-heart="">Explore the platform <span aria-hidden="true" data-s-home-heart="">↗</span></a>
    <div className="heart-detail" aria-live="polite" data-s-home-heart="">
      <p className="heart-detail-role" data-s-home-heart="">Four products. One record.</p>
      <h3 className="heart-detail-name" data-s-home-heart="">Connected at the core.</h3>
      <p className="heart-detail-description" data-s-home-heart="">Choose a product to see how it connects to DIL and your floor.</p>
      <a className="heart-detail-link" href="/dil" data-s-home-heart="">Discover DIL →</a>
    </div>
  </div>
  <div className="heart-scene" aria-label="Four product stars converge into the Dhiya logo, which transforms into a three-dimensional dotted heart. The products then orbit DIL, one shared record." data-s-home-heart="">
    <p className="heart-hint" aria-hidden="true" data-s-home-heart="">Four products. One shared heartbeat.</p>
    <svg className="heart-fallback" viewBox="0 0 200 180" aria-hidden="true" data-s-home-heart="">
      {list(fallbackDots.map(dot=><circle cx={dot.x} cy={dot.y} r={dot.r} opacity={dot.opacity} data-s-home-heart=""></circle>))}
    </svg>{" "}
    <canvas id="heartc" aria-hidden="true" data-s-home-heart=""></canvas>
    <div className="heart-unified-mark" aria-hidden="true" data-s-home-heart=""><svg viewBox="0 0 424 424" focusable="false" dangerouslySetInnerHTML={{ __html: unifiedMark }} data-s-home-heart="" /></div>
    <div className="heart-core" aria-hidden="true" data-s-home-heart=""><strong data-s-home-heart="">DIL</strong><span data-s-home-heart="">One shared record</span></div>
    <div className="heart-products" aria-label="Explore Dhiya products" data-s-home-heart="">
      {list(products.map((product, i) => (
        <button type="button" className="heart-product" data-i={i} data-name={product.name} data-role={product.role} data-description={product.description} data-href={`/${product.slug}`} aria-label={`Explore ${product.name}: ${product.role}`} aria-pressed="false" data-s-home-heart="">{" "}
          <img className="heart-mark" src={`/media/logos/${product.slug}-mark_on-chalk.svg`} width="56" height="56" alt="" data-s-home-heart="" />{" "}
          <span data-s-home-heart="">{product.name}</span>{" "}
        </button>
      )))}
    </div>
    <span className="heart-record" aria-hidden="true" data-s-home-heart="">Every connection, kept.</span>
    <div className="heart-controls" data-s-home-heart="">
      <button type="button" className="heart-replay" data-s-home-heart="">Replay formation <span aria-hidden="true" data-s-home-heart="">↻</span></button>{" "}
      <button type="button" className="heart-toggle" aria-pressed="false" data-s-home-heart="">Pause animation</button>
    </div>
    <p className="heart-caption" data-s-home-heart="">Sell. Operate. Resolve. Compute.</p>
  </div>
  </div>
</section>

<PageScript src="/js/heart-volume.js" />
<PageScript src="/js/heart.js" />
    </>
  );
}
