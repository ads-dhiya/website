import { readFileSync } from "node:fs";
import { join } from "node:path";
import { css } from "@/lib/css";
import { list } from "@/lib/list";
import PageScript from "@/components/PageScript";
import { site } from "@/data/site";
import "./Footer.css";

const brandLockup = readFileSync(join(process.cwd(), "public/media/dhiya-lockup-ink.svg"), "utf8");

export default function Footer() {
// Use the brand's Hanken outlines and exact star: no font fallback or dot on the i.
const [wordmarkPath, starPath] = Array.from(brandLockup.matchAll(/<path d="([^"]+)"/g), ([, path]) => path);
const wordmarkTransform = "translate(-562 -66) scale(2.75)";
// Isometric rack rows and shared aisles, clipped into the exact brand lettering.
const iso = (x: number, z: number, y = 0) => `${(330+(x-z)*.866).toFixed(2)},${(210+(x+z)*.39-y).toFixed(2)}`;
const line = (a: string, b: string) => `M${a}L${b}`;
let floorGrid = "";
for(let x=-380;x<=380;x+=76) floorGrid+=line(iso(x,-180),iso(x,180));
for(let z=-180;z<=180;z+=60) floorGrid+=line(iso(-380,z),iso(380,z));
const floorRacks: string[]=[];
for(let row=0;row<3;row++) for(let col=0;col<9;col++) {
  const x=-310+col*76,z=-150+row*120,w=26,d=38,h=42;
  let rack=`M${iso(x,z)}L${iso(x+w,z)}L${iso(x+w,z+d)}L${iso(x,z+d)}Z`;
  rack+=`M${iso(x,z,h)}L${iso(x+w,z,h)}L${iso(x+w,z+d,h)}L${iso(x,z+d,h)}Z`;
  [[x,z],[x+w,z],[x+w,z+d],[x,z+d]].forEach(([a,b])=>rack+=line(iso(a,b),iso(a,b,h)));
  [12,23,34].forEach(y=>rack+=line(iso(x,z,y),iso(x+w,z,y)));
  floorRacks.push(rack);
}
const floorRoutes = [
  `M${iso(-380,-180)}L${iso(380,-180)}L${iso(380,-60)}L${iso(-380,-60)}L${iso(-380,60)}L${iso(380,60)}L${iso(380,180)}L${iso(-380,180)}`,
  `M${iso(-310,-180)}L${iso(-310,180)}L${iso(-82,180)}L${iso(-82,-180)}L${iso(146,-180)}L${iso(146,180)}L${iso(374,180)}`,
];
  return (
    <>
<footer id="company" data-s-footer=""><div className="wrap" data-s-footer="">
  <div className="footer-main" data-s-footer="">
    <div className="footer-navigation" data-s-footer="">
      <a className="footer-brand" href="/" aria-label="Dhiya home" data-s-footer=""><img src="/media/dhiya-lockup-ink.svg" alt="Dhiya" width="145" height="48" data-s-footer="" /></a>
      <div className="cols" data-s-footer="">
    <div data-s-footer=""><b data-s-footer="">Platform</b><a href="/dil" data-s-footer="">DIL</a><a href="/#platform" data-s-footer="">The record</a><a href="/#architecture" data-s-footer="">Architecture</a><a href="/#uses" data-s-footer="">Use cases</a></div>
    <div data-s-footer=""><b data-s-footer="">Products</b><a href="/ayana" data-s-footer="">Ayana</a><a href="/neev" data-s-footer="">Neev</a><a href="/vitana" data-s-footer="">Vitana</a><a href="/aire" data-s-footer="">Aire</a></div>
    <div data-s-footer=""><b data-s-footer="">Company</b><a href="/about" data-s-footer="">About</a><a href="/about#investors" data-s-footer="">Investors</a><a href="#talk" data-s-footer="">Contact</a><a href={`mailto:${site.mail}`} data-s-footer="">{site.mail}</a></div>
      </div>
    </div>
  <div className="footer-wordmark" data-footer-art="" data-motion="paused" aria-hidden="true" data-s-footer="">
    <svg viewBox="0 0 665 360" xmlns="http://www.w3.org/2000/svg" data-s-footer="">
      <defs data-s-footer="">
        <clipPath id="footer-dhiya-letters" data-s-footer=""><path d={wordmarkPath} transform={wordmarkTransform} clipRule="evenodd" data-s-footer=""></path></clipPath>
        <clipPath id="footer-dhiya-star" data-s-footer=""><path d={starPath} transform={wordmarkTransform} data-s-footer=""></path></clipPath>
        <linearGradient id="footer-letter-depth" x1="0" y1="0" x2="1" y2="1" data-s-footer=""><stop offset="0" stopColor="#92749F" data-s-footer=""></stop><stop offset=".48" stopColor="#73547F" data-s-footer=""></stop><stop offset="1" stopColor="#50375C" data-s-footer=""></stop></linearGradient>
        <linearGradient id="footer-floor-fade" x1="0" y1="0" x2="0" y2="1" data-s-footer=""><stop offset="0" stopColor="white" stopOpacity="0" data-s-footer=""></stop><stop offset=".28" stopColor="white" stopOpacity=".6" data-s-footer=""></stop><stop offset=".55" stopColor="white" data-s-footer=""></stop><stop offset="1" stopColor="white" stopOpacity=".12" data-s-footer=""></stop></linearGradient>
        <mask id="footer-floor-mask" data-s-footer=""><rect width="665" height="360" fill="url(#footer-floor-fade)" data-s-footer=""></rect></mask>
      </defs>
      <g clipPath="url(#footer-dhiya-letters)" data-s-footer="">
        <rect width="665" height="360" fill="url(#footer-letter-depth)" data-s-footer=""></rect>
        <g mask="url(#footer-floor-mask)" fill="none" strokeLinecap="round" strokeLinejoin="round" data-s-footer="">
          <path d={floorGrid} stroke="#C8B1D6" strokeWidth=".65" opacity=".24" data-s-footer=""></path>
          {list(floorRacks.map(rack=><path d={rack} stroke="#D7C4E1" strokeWidth=".9" opacity=".62" data-s-footer=""></path>))}
          {list(floorRoutes.map((route,i)=><g style={css(`--route-delay:${i ? '-12s' : '0s'}`)} data-s-footer="">
            <path d={route} stroke="#B89CC8" strokeWidth=".9" opacity=".2" data-s-footer=""></path>
            <path className="footer-iso-flow footer-iso-glow" d={route} pathLength="1000" stroke="#D4BCE3" strokeWidth="6" data-s-footer=""></path>
            <path className="footer-iso-flow" d={route} pathLength="1000" stroke="#E1CDEF" strokeWidth="1.5" data-s-footer=""></path>
          </g>))}
        </g>
      </g>
      <path className="footer-brand-star" d={starPath} transform={wordmarkTransform} fill="#E9B44C" data-s-footer=""></path>
      <g clipPath="url(#footer-dhiya-star)" data-s-footer=""><rect className="footer-star-glint" x="280" y="0" width="13" height="125" fill="#FFF1CD" data-s-footer=""></rect></g>
    </svg>
    <p data-s-footer="">One floor. One record. One Dhiya.</p>
  </div>
  </div>
  <div className="base" data-s-footer=""><span data-s-footer="">© {new Date().getFullYear()}{" "}{site.name}</span><span className="legal-links" data-s-footer=""><a href="/privacy" data-s-footer="">Privacy</a> · <a href="/terms" data-s-footer="">Terms</a> · <a href="/security" data-s-footer="">Security</a></span></div>
</div></footer>


<PageScript src="/js/inline-footer.js" />
    </>
  );
}
