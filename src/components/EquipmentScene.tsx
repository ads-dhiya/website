import cx from "clsx";
import { list } from "@/lib/list";
import PageScript from "@/components/PageScript";
import "./EquipmentScene.css";

interface Props {
  variant?: "neev" | "aire";
  compact?: boolean;
  id?: string;
  objectOnly?: "rack" | "gpu" | "cooling" | "power";
  state?: "live" | "reserved" | "alarm" | "available";
}

export default function EquipmentScene(props: Props) {
const { variant = "neev", compact = false, id = `equipment-${variant}`, objectOnly, state = "live" } = props;
type Kind = "rack" | "gpu" | "cooling" | "power" | "generator";
type Equipment = { id: string; name: string; kind: Kind; x: number; z: number; state: string; metric: string; copy: string; context: string };
const p = (x: number, z: number, h = 0) => `${((x-z)*.866).toFixed(2)},${((x+z)*.43-h).toFixed(2)}`;
// Light-mode facets follow the brandbook's Wisteria and Blue ramps.
const poly = (points: string[], fill: string, stroke = "#654B75", opacity = .24) => `<polygon points="${points.join(" ")}" fill="${fill}" stroke="${stroke}" stroke-opacity="${opacity}" stroke-width=".65" stroke-linejoin="round"/>`;
const box = (x: number, z: number, w: number, d: number, h: number, base = 0, colors = ["#EAE0F0", "#C8B1D6", "#9D7FB0"]) =>
  poly([p(x,z,base+h),p(x+w,z,base+h),p(x+w,z+d,base+h),p(x,z+d,base+h)],colors[0])+
  poly([p(x,z+d,base+h),p(x+w,z+d,base+h),p(x+w,z+d,base),p(x,z+d,base)],colors[1])+
  poly([p(x+w,z,base+h),p(x+w,z+d,base+h),p(x+w,z+d,base),p(x+w,z,base)],colors[2]);
function equipment(kind: Kind, status = "live") {
  const light = status === "alarm" ? "#A61E4D" : status === "reserved" ? "#5662A6" : status === "available" ? "#978A90" : "#B89CC8";
  let out = "";
  if(kind === "rack" || kind === "gpu") {
    const colors = kind === "gpu" ? ["#E0E3F8","#A1ACE2","#818CCE"] : ["#EAE0F0","#C8B1D6","#9D7FB0"];
    out+=box(0,0,34,40,4,0,["#D9C8E4","#9D7FB0","#816394"]);
    out+=box(1,1,32,38,69,4,colors);
    out+=poly([p(4,39,68),p(30,39,68),p(30,39,10),p(4,39,10)],"#493454","#816394",.3);
    for(let i=0;i<8;i++) {
      const h=14+i*6.25;
      out+=poly([p(6,39.15,h+4),p(28,39.15,h+4),p(28,39.15,h),p(6,39.15,h)],kind === "gpu" ? "#818CCE" : "#B89CC8","#EAE0F0",.2);
      out+=`<path d="M${p(8,39.3,h+2)}L${p(21,39.3,h+2)}" fill="none" stroke="#493454" stroke-width="1"/>`;
      const [cx,cy]=p(25.5,39.4,h+2).split(',');
      out+=`<circle cx="${cx}" cy="${cy}" r=".95" fill="${light}" opacity="${i % 3 ? '.85' : '.45'}"/>`;
    }
    out+=`<path d="M${p(33.1,8,59)}L${p(33.1,32,59)}M${p(33.1,8,55)}L${p(33.1,32,55)}M${p(33.1,8,51)}L${p(33.1,32,51)}" stroke="#654B75" stroke-width="1" opacity=".6"/>`;
    out+=poly([p(5,5,73.4),p(28,5,73.4),p(28,34,73.4),p(5,34,73.4)],kind === "gpu" ? "#C5CBEE" : "#D9C8E4","#FFFFFF",.7);
  } else if(kind === "cooling") {
    out+=box(0,0,64,35,5,0,["#C5CBEE","#818CCE","#5662A6"]);
    out+=box(1,1,62,33,32,5,["#F2F3FC","#C5CBEE","#818CCE"]);
    for(let i=0;i<7;i++) out+=`<path d="M${p(5,34.2,11+i*3)}L${p(58,34.2,11+i*3)}" stroke="#5662A6" stroke-width="1.3"/>`;
    // Two recessed impellers on a solid top deck.
    out+=`<g transform="matrix(.866 .43 -.866 .43 0 -37.5)">`;
    [17,47].forEach(x=> {
      out+=`<circle cx="${x}" cy="17" r="12.4" fill="#5662A6" stroke="#E0E3F8" stroke-width="1.2"/><circle cx="${x}" cy="17" r="8.8" fill="#374078" stroke="#A1ACE2" stroke-width=".6"/>`;
      for(let a=0;a<4;a++) out+=`<path d="M${x},17q-2,-8 3,-9q4,5 -3,9" fill="#C5CBEE" transform="rotate(${a*90} ${x} 17)"/>`;
      out+=`<circle cx="${x}" cy="17" r="2.3" fill="#F2F3FC"/>`;
    });
    out+='</g>';
  } else if(kind === "generator") {
    out+=box(0,0,76,37,6,0,["#D9C8E4","#9D7FB0","#816394"]);
    out+=box(2,2,72,33,33,6,["#F6F1F9","#D9C8E4","#B89CC8"]);
    out+=poly([p(6,35.2,34),p(48,35.2,34),p(48,35.2,11),p(6,35.2,11)],"#654B75");
    for(let i=0;i<8;i++) out+=`<path d="M${p(9+i*5,35.4,13)}L${p(9+i*5,35.4,32)}" stroke="#C8B1D6" stroke-width="1.4"/>`;
    out+=box(52,22,13,2,14,15,["#EAE0F0","#654B75","#816394"]);
    out+=box(52,8,6,6,12,39,["#EAE0F0","#B89CC8","#9D7FB0"]);
    out+=`<path d="M${p(54,24.5,22)}L${p(60,24.5,22)}" stroke="#C5CBEE" stroke-width="1.6"/>`;
  } else {
    out+=box(0,0,32,32,55,0,["#EAE0F0","#C8B1D6","#9D7FB0"]);
    out+=poly([p(5,32.2,47),p(25,32.2,47),p(25,32.2,31),p(5,32.2,31)],"#493454");
    out+=`<path d="M${p(8,32.4,41)}L${p(21,32.4,41)}M${p(8,32.4,37)}L${p(17,32.4,37)}" stroke="#C5CBEE" stroke-width="1.4"/>`;
    for(let i=0;i<5;i++) out+=`<path d="M${p(6,32.2,8+i*3)}L${p(25,32.2,8+i*3)}" stroke="#654B75" stroke-width="1.4"/>`;
  }
  return out;
}
const items: Equipment[] = variant === "neev" ? [
  {id:"crah-c3",name:"CRAH C3",kind:"cooling",x:-195,z:-115,state:"alarm",metric:"27.4 °C return",copy:"Cooling response for row C. The set-point change and recovery reading remain attached to incident INC-20417.",context:"Cooling · CHG-5531 · row C"},
  {id:"crah-c4",name:"CRAH C4",kind:"cooling",x:-105,z:-115,state:"live",metric:"22.1 °C supply",copy:"The adjacent cooling unit is available to support row C. Supply and return readings share the same floor record.",context:"Cooling · Hall 2 · duty / standby"},
  {id:"gen-2",name:"Generator G2",kind:"generator",x:40,z:-120,state:"live",metric:"Standby ready",copy:"Backup power is linked to the same feeder and downstream racks. Readiness and maintenance belong to this equipment record.",context:"Power · Feeder 2 · backup path"},
  {id:"pdu-2b",name:"PDU 2B-07",kind:"power",x:155,z:-80,state:"live",metric:"118 kW headroom",copy:"Rack capacity is checked against Feeder 2 before it is reserved. The PDU keeps the physical power path attached.",context:"Power · Feeder 2 → PDU 2B-07"},
  ...Array.from({length:8},(_,i)=>({id:`rack-${i}`,name:i===2?"Rack 2B-14":`Rack 2${i<4?'B':'C'}-${String(12+i%4).padStart(2,'0')}`,kind:"rack" as Kind,x:-155+(i%4)*83,z:i<4?0:95,state:i===2?"alarm":i===7?"reserved":"live",metric:i===2?"41.2 °C inlet":i===7?"Capacity reserved":`${8+i} kW IT load`,copy:i===2?"An inlet alarm connects this rack to Northwind, its cooling response and INC-20417. One asset, with every dependency attached.":i===7?"This rack is reserved against verified power and cooling headroom. Sales and facilities see the same hold.":"This live rack shares its asset identity, power path and customer relationship across the platform.",context:i===2?"Northwind · NW-117 · INC-20417":"Hall 2 · shared floor record"})),
] : [
  {id:"liquid-loop",name:"Liquid cooling",kind:"cooling",x:-180,z:-115,state:"live",metric:"31 °C loop inlet",copy:"The liquid loop supports Pod 4. Cooling capacity is checked alongside electrical and network headroom before provisioning.",context:"Cooling · Hall 3 · row D"},
  {id:"feeder-3",name:"Feeder 3",kind:"power",x:75,z:-110,state:"live",metric:"156 kW headroom",copy:"The pending four-node request needs 44 kW. This feeder has enough physical headroom for the requested capacity.",context:"Power · capacity check passed"},
  {id:"network",name:"Leaf D-07",kind:"rack",x:155,z:-105,state:"live",metric:"8 ports free",copy:"The pod's network ports are attached to the tenant and rack. Available ports are included in the same provisioning check.",context:"Network · 2 × 400G · VRF 204"},
  ...Array.from({length:6},(_,i)=>({id:`gpu-pair-${i}`,name:`GPU ${String(i*2+1).padStart(2,'0')}–${String(i*2+2).padStart(2,'0')}`,kind:"gpu" as Kind,x:-150+(i%3)*110,z:i<3?0:100,state:"live",metric:`16 GPUs · ${[89,87,88,85,88,87][i]}% utilised`,copy:"Two GPU nodes on the same physical rack. Their power, utilisation and metered hours roll up to Halcyon AI's contract HA-204.",context:"Pod 4 · Halcyon AI · HA-204"})),
];
const selected = items.find(item=>item.id === "rack-2") || items.find(item=>item.kind === "gpu") || items[0];
const sorted = [...items].sort((a,b)=>(a.x+a.z)-(b.x+b.z));
const projected = (x:number,z:number,h=0)=>`${(380+(x-z)*.866).toFixed(2)},${(220+(x+z)*.43-h).toFixed(2)}`;
const board = (h=0)=>[projected(-250,-155,h),projected(250,-155,h),projected(250,155,h),projected(-250,155,h)].join(' ');
let grid="";
for(let x=-250;x<=250;x+=50) grid+=`M${projected(x,-155)}L${projected(x,155)}`;
for(let z=-155;z<=155;z+=31) grid+=`M${projected(-250,z)}L${projected(250,z)}`;
const objectTransform=objectOnly === "cooling" ? "translate(-12 0) scale(.8)" : objectOnly === "power" ? "translate(0 -7)" : undefined;
  return (
    <>
{list(objectOnly ? <svg className={`equipment-object ${state}`} viewBox="-45 -88 90 128" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" data-s-equipment-scene=""><g transform={objectTransform} dangerouslySetInnerHTML={{ __html: equipment(objectOnly,state) }} data-s-equipment-scene="" /></svg> :
<div className="equipment-shell" data-s-equipment-scene=""><figure className={cx(["equipment-scene",{compact}])} data-equipment-scene="" aria-label={variant === "neev" ? "Interactive Hall 2 equipment map" : "Interactive Halcyon AI GPU pod"} data-s-equipment-scene="">
  <div className="eq-heading" data-s-equipment-scene=""><span data-s-equipment-scene=""><i data-s-equipment-scene=""></i>{variant === "neev" ? "HALL 2 / EQUIPMENT" : "POD 4 / PHYSICAL COMPUTE"}</span><span data-s-equipment-scene="">ISOMETRIC VIEW</span></div>
  <label className="eq-mobile-picker" data-s-equipment-scene=""><span data-s-equipment-scene="">Inspect equipment</span><select defaultValue={selected.id} data-equipment-select="" aria-controls={`${id}-detail`} data-s-equipment-scene="">{list(items.map(item=><option value={item.id} data-s-equipment-scene="">{item.name} · {item.state}</option>))}</select></label>{" "}
  <svg className="eq-board" viewBox="0 0 760 450" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="Select equipment to inspect. Use arrow keys to move between items." data-s-equipment-scene="">
    <polygon points={board(-10)} fill="#D9C8E4" data-s-equipment-scene=""></polygon>
    <polygon points={board()} fill="#F6F1F9" stroke="#C8B1D6" strokeWidth="1" data-s-equipment-scene=""></polygon>
    <path d={grid} stroke="#818CCE" strokeOpacity=".16" strokeWidth=".8" fill="none" data-s-equipment-scene=""></path>
    <path d={`M${projected(-220,-58)}L${projected(220,-58)}L${projected(220,65)}L${projected(-200,65)}`} fill="none" stroke="#C5CBEE" strokeWidth="3" opacity=".65" data-s-equipment-scene=""></path>
    <path d={`M${projected(-220,-58)}L${projected(220,-58)}L${projected(220,65)}L${projected(-200,65)}`} fill="none" stroke="#5662A6" strokeWidth=".7" strokeDasharray="3 8" opacity=".45" data-s-equipment-scene=""></path>
    {list(sorted.map(item=><g className="eq-item" role="button" tabIndex={item.id===selected.id?0:-1} aria-pressed={item.id===selected.id} aria-controls={`${id}-detail`} aria-label={`${item.name}, ${item.state}, ${item.metric}`} data-equipment-item="" data-equipment-id={item.id} data-name={item.name} data-status={item.state} data-metric={item.metric} data-copy={item.copy} data-context={item.context} transform={`translate(${projected(item.x,item.z)})`} data-s-equipment-scene="">
      <polygon className="eq-halo" points={[p(-5,-5),p(item.kind==='cooling'?70:item.kind==='generator'?82:40,-5),p(item.kind==='cooling'?70:item.kind==='generator'?82:40,47),p(-5,47)].join(' ')} fill="#B89CC8" fillOpacity=".16" stroke="#5A1764" strokeWidth="1" data-s-equipment-scene=""></polygon>
      <g className="eq-machine" dangerouslySetInnerHTML={{ __html: equipment(item.kind,item.state) }} data-s-equipment-scene="" />
      <title data-s-equipment-scene="">{`${item.name} · ${item.metric}`}</title>
    </g>))}
    <text className="eq-map-label" x="380" y="434" textAnchor="middle" data-equipment-map-label="" data-s-equipment-scene="">{selected.name} · {selected.metric}</text>
  </svg>
  <div className="eq-details" id={`${id}-detail`} aria-live="polite" aria-atomic="true" data-s-equipment-scene=""><div className="eq-detail-title" data-s-equipment-scene=""><strong data-equipment-name="" data-s-equipment-scene="">{selected.name}</strong><span data-equipment-status="" data-state={selected.state} data-s-equipment-scene="">{selected.state}</span></div><b data-equipment-metric="" data-s-equipment-scene="">{selected.metric}</b><p data-equipment-copy="" data-s-equipment-scene="">{selected.copy}</p><small data-equipment-context="" data-s-equipment-scene="">{selected.context}</small></div>
  <figcaption data-s-equipment-scene=""><span data-s-equipment-scene="">Select a unit to see its shared record.</span><span data-s-equipment-scene="">Sample equipment view</span></figcaption>
</figure></div>)}{" "}
{" "}
{!objectOnly && <PageScript src="/js/equipment-scene.js" />}
    </>
  );
}
