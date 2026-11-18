import { css } from "@/lib/css";
import { list } from "@/lib/list";
import "./LaunchCeremony.css";

export default function LaunchCeremony() {
/** Launch curtain for the homepage. A field of plum, lilac and blue bands with one card: the Mandala, folded.
    Clicking it (or Enter) unfolds the eight rays in turn, lifts the curtain and shows the welcome. Logic in /js/launch-ceremony.js. */
const previewAllowed = (process.env.NODE_ENV !== "production");

// A fixed arrangement keeps the light field consistent across renders.
const palette = ['#250B1E', '#342136', '#49324F', '#62476F', '#80628E', '#B89CC8', '#555E9C', '#3C426E', '#2F1C35'];
let seed = 406;
const next = () => {
  seed = (seed * 16807) % 2147483647;
  return seed / 2147483647;
};
const bands = Array.from({ length: 184 }, (_, index) => ({
  width: .3 + next() * 1.8,
  color: palette[Math.floor(next() * palette.length)],
  delay: (2820 + next() * 320).toFixed(0),
  origin: index % 3 === 0 ? 'bottom' : 'top',
}));
const eight = Array.from({ length: 8 }, (_, i) => i);
  return (
    <>
<dialog suppressHydrationWarning className="launch-ceremony" data-launch-ceremony="" data-preview-allowed={previewAllowed ? 'true' : 'false'} aria-labelledby="launch-title" aria-describedby="launch-description" data-s-launch-ceremony="">
  <div className="launch-field" aria-hidden="true" data-s-launch-ceremony="">
    {list(bands.map((band) => <span className="launch-band" style={css(`--band-width:${band.width};--band-color:${band.color};--band-delay:${band.delay}ms;--band-origin:${band.origin}`)} data-s-launch-ceremony=""></span>))}
    <div className="launch-field-light" data-s-launch-ceremony=""></div>
  </div>

  <div className="launch-card" data-s-launch-ceremony="">
    <div className="launch-card-heading" data-s-launch-ceremony="">
      <span className="launch-wordmark" aria-label="Dhiya" data-s-launch-ceremony="">Dhıya<svg viewBox="0 0 24 24" aria-hidden="true" data-s-launch-ceremony=""><path d="m12 0 2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4Z" data-s-launch-ceremony=""></path></svg></span>
    </div>

    <button className="launch-open" type="button" data-launch-go="" autoFocus aria-label="Open Dhiya" data-s-launch-ceremony="">{" "}
      <span className="launch-thread" aria-hidden="true" data-s-launch-ceremony=""></span>{" "}
      <svg className="launch-mark" viewBox="0 0 400 400" aria-hidden="true" focusable="false" data-s-launch-ceremony="">
        <defs data-s-launch-ceremony=""><radialGradient id="launch-lamp" data-s-launch-ceremony=""><stop offset="0" stopColor="#E9B44C" stopOpacity=".95" data-s-launch-ceremony=""></stop><stop offset=".35" stopColor="#EFC86E" stopOpacity=".5" data-s-launch-ceremony=""></stop><stop offset=".72" stopColor="#EFC86E" stopOpacity=".16" data-s-launch-ceremony=""></stop><stop offset="1" stopColor="#EFC86E" stopOpacity="0" data-s-launch-ceremony=""></stop></radialGradient></defs>
        <g transform="translate(200 200)" data-s-launch-ceremony="">
          {list(eight.map((i) => <g transform={`rotate(${i * 45})`} data-s-launch-ceremony=""><g className="launch-ray" style={css(`--i:${i}`)} data-s-launch-ceremony=""><path d="M0,-188 L-26,-124 L0,-96 Z" fill="#A1ACE2" data-s-launch-ceremony=""></path><path d="M0,-188 L26,-124 L0,-96 Z" fill="#5662A6" data-s-launch-ceremony=""></path></g></g>))}
          {list(eight.map((i) => <g transform={`rotate(${22.5 + i * 45})`} data-s-launch-ceremony=""><g className="launch-petal" style={css(`--i:${i}`)} data-s-launch-ceremony=""><path d="M0,-118 L-30,-72 L0,-44 Z" fill="#EAE0F0" data-s-launch-ceremony=""></path><path d="M0,-118 L30,-72 L0,-44 Z" fill="#B89CC8" data-s-launch-ceremony=""></path></g></g>))}
          <path d="M0,-90.5 L90.5,0 L0,0 Z" fill="#B89CC8" data-s-launch-ceremony=""></path><path d="M90.5,0 L0,90.5 L0,0 Z" fill="#654B75" data-s-launch-ceremony=""></path><path d="M0,90.5 L-90.5,0 L0,0 Z" fill="#654B75" data-s-launch-ceremony=""></path><path d="M-90.5,0 L0,-90.5 L0,0 Z" fill="#B89CC8" data-s-launch-ceremony=""></path>
          <path d="M-20,-48 L20,-48 L48,-20 L48,20 L20,48 L-20,48 L-48,20 L-48,-20 Z" fill="#221A21" data-s-launch-ceremony=""></path>
          <circle className="launch-glow" r="33" fill="url(#launch-lamp)" data-s-launch-ceremony=""></circle>
          <circle className="launch-flame" r="9.5" fill="#E9B44C" data-s-launch-ceremony=""></circle>
        </g>
      </svg>{" "}
    </button>

    <div className="launch-card-caption" data-s-launch-ceremony="">
      <h1 id="launch-title" data-s-launch-ceremony="">Data centre operations that work as one.</h1>
      <p id="launch-description" data-s-launch-ceremony="">Click the mark or press Enter.</p>
    </div>
  </div>

  <div className="launch-welcome" aria-hidden="true" data-s-launch-ceremony="">
    <svg className="launch-welcome-star" viewBox="0 0 24 24" data-s-launch-ceremony=""><path d="m12 0 2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4Z" data-s-launch-ceremony=""></path></svg>
    <p className="launch-welcome-title" data-s-launch-ceremony="">Welcome to Dhiya</p>
    <p className="launch-welcome-note" data-s-launch-ceremony="">People, systems, shared light.</p>
  </div>

  <div className="launch-bottom" data-s-launch-ceremony="">
    <span className="launch-enter" aria-hidden="true" data-s-launch-ceremony="">Enter <span data-s-launch-ceremony="">↵</span></span>{" "}
    <button type="button" className="launch-skip" data-launch-skip="" data-s-launch-ceremony="">Skip intro <span aria-hidden="true" data-s-launch-ceremony="">↗</span></button>
  </div>
  <span className="launch-sr" role="status" aria-live="polite" data-launch-status="" data-s-launch-ceremony=""></span>
</dialog>
<script src="/js/launch-ceremony.js"></script>
    </>
  );
}
