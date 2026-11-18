import { css } from "@/lib/css";
import { list } from "@/lib/list";
import "./OperationalScene.css";

interface Props { mode: number }

export default function OperationalScene(props: Props) {
const { mode } = props;
const accents = ['#B03729', '#198AA2', '#198AA2', '#315ADE', '#41657A'];
const accent = accents[mode];
const racks = Array.from({ length: 18 }, (_, i) => ({ x: 70 + (i % 6) * 60, y: 80 + Math.floor(i / 6) * 56, i }));
  return (
    <>
<svg className="operational-scene" viewBox="0 0 500 320" aria-hidden="true" style={css(`--scene-accent:${accent}`)} data-s-home-operational-scene="">
  <defs data-s-home-operational-scene="">
    <pattern id={`floor-${mode}`} width="20" height="20" patternUnits="userSpaceOnUse" data-s-home-operational-scene=""><path d="M20 0H0V20" fill="none" stroke="#B89CC8" strokeOpacity=".16" data-s-home-operational-scene=""></path></pattern>
  </defs>
  <rect width="500" height="320" fill="#F7F0ED" data-s-home-operational-scene=""></rect>
  <rect x="20" y="20" width="460" height="280" rx="20" fill={`url(#floor-${mode})`} data-s-home-operational-scene=""></rect>
  {list(mode < 3 && <>
    <path d="M45 58H455V266H45Z M45 132H455 M45 190H455" fill="none" stroke="#B89CC8" strokeWidth="1.5" data-s-home-operational-scene=""></path>
    {list(racks.map(({x,y,i}) => <g data-s-home-operational-scene="">
      <rect x={x} y={y} width="36" height="30" rx="5" fill={mode === 0 && i > 11 ? '#F6E7E5' : '#E9DFEF'} stroke={mode === 0 && i > 11 ? accent : '#B89CC8'} strokeDasharray={mode === 1 && i > 11 ? '3 3' : undefined} data-s-home-operational-scene=""></rect>
      <path d={`M${x+7} ${y+10}h22m-22 5h22m-22 5h14`} stroke={accent} strokeOpacity={mode === 1 && i > 11 ? '.2' : '.5'} fill="none" data-s-home-operational-scene=""></path>
    </g>))}
    <text x="45" y="43" data-s-home-operational-scene="">{mode === 1 ? 'PHASE B · COMMISSIONING' : 'HALL 2 · FLOOR PLAN'}</text>
    <text x="25" y="101" data-s-home-operational-scene="">A</text><text x="25" y="157" data-s-home-operational-scene="">B</text><text x="25" y="213" data-s-home-operational-scene="">C</text>
  </>)}
  {mode === 0 && <>
    <path className="scene-flow" d="M86 238H405" stroke={accent} strokeWidth="3" strokeDasharray="6 6" data-s-home-operational-scene=""></path>
    <rect x="282" y="278" width="164" height="24" rx="12" fill="#F6E7E5" data-s-home-operational-scene=""></rect>
    <text x="298" y="294" fill={accent} data-s-home-operational-scene="">400 kW AVAILABLE</text>
    <text x="54" y="294" data-s-home-operational-scene="">POWER + SPACE + COOLING</text>
  </>}
  {list(mode === 1 && <>
    <path d="M86 246H405" stroke="#C8B1D6" strokeWidth="2" data-s-home-operational-scene=""></path>
    {list([86,192,298,405].map((x,i) => <g data-s-home-operational-scene=""><circle cx={x} cy="246" r="7" fill={i<3?accent:'#F7F0ED'} stroke={accent} data-s-home-operational-scene=""></circle><text x={x} y="285" textAnchor="middle" data-s-home-operational-scene="">{['BUILD','TEST','SIGN OFF','GO LIVE'][i]}</text></g>))}
  </>)}
  {mode === 2 && <>
    <rect x="374" y="191" width="36" height="33" rx="5" fill="#F6E7E5" stroke="#B03729" strokeWidth="2" data-s-home-operational-scene=""></rect>
    <path className="scene-flow" d="M70 236H390V218" fill="none" stroke="#198AA2" strokeWidth="3" strokeDasharray="6 6" data-s-home-operational-scene=""></path>
    <text x="54" y="289" data-s-home-operational-scene="">ROW C · COOLING LOOP</text><text x="291" y="289" fill="#B03729" data-s-home-operational-scene="">CRAH-07 · +1.8°C</text>
  </>}
  {list(mode === 3 && <>
    <text x="40" y="43" data-s-home-operational-scene="">CORRELATE · ONE CAUSE, ONE INCIDENT</text>
    {list(Array.from({length:8},(_,i)=><g data-s-home-operational-scene=""><circle cx={60+(i%2)*55} cy={80+Math.floor(i/2)*48} r="13" fill="#F6E7E5" stroke="#B03729" data-s-home-operational-scene=""></circle><path d={`M${73+(i%2)*55} ${80+Math.floor(i/2)*48}L260 155`} stroke="#B89CC8" fill="none" data-s-home-operational-scene=""></path></g>))}
    <rect x="240" y="118" width="200" height="76" rx="18" fill="#E6EBFB" stroke={accent} data-s-home-operational-scene=""></rect>
    <text x="340" y="145" textAnchor="middle" fill={accent} data-s-home-operational-scene="">INC-2041</text>
    <text x="340" y="174" textAnchor="middle" className="scene-number" data-s-home-operational-scene="">40 → 1</text>
    <path className="scene-flow" d="M340 194V246H425" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="5 5" data-s-home-operational-scene=""></path>
    <text x="40" y="286" data-s-home-operational-scene="">ALARMS LINKED TO THEIR RACK + POWER PATH</text>
  </>)}
  {list(mode === 4 && <>
    <text x="40" y="43" data-s-home-operational-scene="">RACK 2B-14 · GPU TELEMETRY</text>
    <rect x="50" y="68" width="134" height="211" rx="14" fill="#E9DFEF" stroke="#B89CC8" data-s-home-operational-scene=""></rect>
    {list(Array.from({length:8},(_,i)=><g data-s-home-operational-scene=""><rect x="64" y={82+i*23} width="106" height="16" rx="4" fill="#F7F0ED" stroke="#B89CC8" data-s-home-operational-scene=""></rect><circle cx="153" cy={90+i*23} r="2.5" fill={i>4?'#B03729':accent} data-s-home-operational-scene=""></circle></g>))}
    <text x="220" y="93" data-s-home-operational-scene="">GPU INLET TEMPERATURE</text>
    <path d="M220 162H447M220 122H447" stroke="#DCCDE3" data-s-home-operational-scene=""></path>
    <path d="M220 157L247 153L269 160L291 140L315 144L340 121L363 126L391 100L419 96L447 79" fill="none" stroke="#B03729" strokeWidth="3" strokeLinejoin="round" data-s-home-operational-scene=""></path>
    <text x="220" y="212" className="scene-number" data-s-home-operational-scene="">38 kW</text><text x="220" y="238" data-s-home-operational-scene="">RACK POWER DRAW</text>
    <text x="220" y="276" fill="#B03729" data-s-home-operational-scene="">THERMAL DRIFT DETECTED</text>
  </>)}
</svg>
    </>
  );
}
