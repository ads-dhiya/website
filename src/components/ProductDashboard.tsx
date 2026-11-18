import cx from "clsx";
import { list } from "@/lib/list";
import PageScript from "@/components/PageScript";
import EquipmentScene from "@/components/EquipmentScene";
import "./ProductDashboard.css";

interface Props { slug: string }

export default function ProductDashboard(props: Props) {
const { slug } = props;
const views: Record<string, { name: string; area: string; title: string; sub: string; kpis: string[][]; note: string; object: string }> = {
  ayana: { name: "Ayana", area: "Accounts / Northwind", title: "Revenue, tied to the floor.", sub: "Northwind Cloud · Contract NW-117", kpis: [["Live racks", "24", "Hall 2"], ["Committed", "192 kW", "On the record"], ["Invoice", "$23.1k", "November"]], note: "Capacity checked with Neev", object: "NW-117" },
  neev: { name: "Neev", area: "Sites / Site A / Hall 2", title: "Every rack. In context.", sub: "Hall 2 · Power, cooling and capacity", kpis: [["IT load", "1.42 MW", "of 1.8 MW"], ["Headroom", "118 kW", "Feeder 2"], ["PUE", "1.38", "24-hour view"]], note: "Readings linked to the rack", object: "rk_2b14" },
  vitana: { name: "Vitana", area: "Operations / Incidents", title: "One incident. Every link.", sub: "INC-20417 · Rack 2B-14 · Northwind", kpis: [["Priority", "P1", "Inlet high"], ["Breach", "38 min", "SLA evidence"], ["Credit", "$1,120", "Linked to Ayana"]], note: "Change and credit attached", object: "INC-20417" },
  aire: { name: "Aire", area: "Tenants / Halcyon AI", title: "Compute, on the floor.", sub: "Pod 4 · Hall 3 · Contract HA-204", kpis: [["GPUs", "96", "12 nodes"], ["Utilisation", "87%", "Pod 4"], ["Power", "404 kW", "of 420 kW"]], note: "Usage metered into Ayana", object: "HA-204" },
  dil: { name: "DIL", area: "Record / Hall 2 / Rack 2B-14", title: "One object. All its links.", sub: "rk_2b14 · A single, persistent identity", kpis: [["Objects", "48,212", "Shared record"], ["Mismatches", "16", "To reconcile"], ["Last export", "02:00", "Your data"]], note: "Four products. One record.", object: "rk_2b14" },
};
const view = views[slug] || views.dil;
const mark = slug === "dil" ? "/media/dhiya-mark-ink.svg" : `/media/${slug}-mark.svg`;
const racks = ["a","a","a","a","a","","","a","a","a","a","w","a","a","a","a","a","a","","","","a","a","a","a","a","a","a","b","a","a","a","a","a","a","a","","","","","","","","","a","a","a","a","a","a","a","a","a","w","w","a","a","a","a","a"];
const invoiceRows = [
  { title: "Rack space · 24 racks", amount: "$5,280", copy: "24 racks on contract NW-117 at $220 per rack per month. The invoice points to the same rack objects as Neev.", meta: "Source: Ayana contract NW-117" },
  { title: "Committed power · 192 kW", amount: "$15,210", copy: "Committed capacity is billed against Northwind’s contract. The power commitment stays linked to Hall 2.", meta: "Source: contract · committed power" },
  { title: "Overage + cross-connects", amount: "$3,758", copy: "$258 of metered overage plus $3,500 for 14 cross-connects. Metered and fixed charges share one invoice.", meta: "Sources: Neev meter + Ayana contract" },
  { title: "SLA credit · INC-20417", amount: "− $1,120", copy: "The resolved incident carries a $1,120 SLA credit onto this invoice. Toggle the credit to compare the sample total.", meta: "Source: Vitana incident INC-20417" },
];
const timeline = [
  { time: "09:02", title: "Inlet alarm → incident opened", sub: "Rack 2B-14 · Northwind attached", state: "critical", copy: "EcoStruxure reported 41.2 °C at rack 2B-14. Vitana attached Northwind, contract NW-117 and the SLA to INC-20417.", meta: "Evidence: sensor reading · 41.2 °C" },
  { time: "09:14", title: "CHG-5531 approved", sub: "Facilities · reason and window kept", state: "", copy: "Facilities approved the CRAH C3 set-point change. M. Keller’s approval and the 09:30–10:30 change window remain attached.", meta: "Evidence: approval · M. Keller · CHG-5531" },
  { time: "09:48", title: "Inlet clearing · 27.4 °C", sub: "Same rack. Same customer.", state: "steady", copy: "The inlet reading fell to 27.4 °C. The recovery reading stays on the same incident, rack and customer record.", meta: "Evidence: recovery reading · 27.4 °C" },
  { time: "10:40", title: "Resolved and signed off", sub: "38-minute breach · credit queued", state: "steady", copy: "The team signed off the incident with a 38-minute SLA breach. Ayana reads the attached $1,120 credit for Northwind’s invoice.", meta: "Evidence: resolution + credit · NW-2026-11" },
];
const objectRows = [
  { label: "Location", value: "Hall 2 · Site A", product: "neev", copy: "Rack 2B-14 belongs to Hall 2, Site A. Neev’s floor view and every other product read this same location.", meta: "Owner: Neev · object rk_2b14" },
  { label: "Power path", value: "Feeder 2 → PDU 2B-07", product: "neev", copy: "The rack’s power path joins its feeder and PDU to the asset. Alarms and capacity checks follow these relationships.", meta: "Owner: Neev · feeder and PDU relationships" },
  { label: "Customer", value: "Northwind · NW-117", product: "ayana", copy: "Northwind’s account and contract NW-117 are attached to this rack, so billing and incidents share the customer context.", meta: "Owner: Ayana · contract NW-117" },
  { label: "Incident", value: "INC-20417 · inlet high", product: "vitana", copy: "The inlet-temperature incident points directly to rk_2b14, its power path and its affected customer.", meta: "Owner: Vitana · incident INC-20417" },
  { label: "Change", value: "CHG-5531 · approved", product: "vitana", copy: "The approved change stays attached to the incident and rack, including the approver and change window.", meta: "Owner: Vitana · approved change CHG-5531" },
];
const nodeUtilisation = [91,88,84,89,85,90,86,83,88,87,85,88];
const nodePower = [35,34,32,35,33,35,33,32,34,34,33,34];
const rackStates: Record<string,string> = { a: "Live", w: "Reserved", b: "Alarm", "": "Available" };
const rackVisualStates = { a: "live", w: "reserved", b: "alarm", "": "available" } as const;
const initialDetails: Record<string,{title:string;copy:string;meta:string}> = {
  ayana: { title: invoiceRows[0].title, copy: invoiceRows[0].copy, meta: invoiceRows[0].meta },
  neev: { title: "Rack 2B-14 · Alarm", copy: "Inlet temperature is 41.2 °C. Incident INC-20417 connects this rack to Northwind and the cooling response.", meta: "Hall 2 · Neev → Vitana" },
  vitana: { title: "09:02 · " + timeline[0].title, copy: timeline[0].copy, meta: timeline[0].meta },
  aire: { title: "GPU-01 · 8 GPUs", copy: "This sample node belongs to Halcyon AI’s Pod 4 in Hall 3. Usage rolls up to contract HA-204 through the shared record.", meta: "Utilisation 91% · power 35 kW · tenant Halcyon AI" },
  dil: { title: "Location · Hall 2 · Site A", copy: objectRows[0].copy, meta: objectRows[0].meta },
};
const detail = initialDetails[slug] || initialDetails.dil;
const detailId = `product-preview-detail-${slug}`;
  return (
    <>
<figure className="product-dashboard" data-product={slug} data-product-demo="" aria-label={`${view.name} product interface preview`} data-s-product-dashboard="">
  <div className="pd-window" data-s-product-dashboard="">
    <div className="pd-topbar" data-s-product-dashboard=""><span className="pd-brand" data-s-product-dashboard=""><img src={mark} alt="" width="23" height="23" data-s-product-dashboard="" />{view.name}</span><span className="pd-top-location" data-s-product-dashboard="">{view.area}</span><span className="pd-avatar" data-s-product-dashboard="">D</span></div>
    <div className="pd-workspace" data-s-product-dashboard="">
      <div className="pd-rail" aria-hidden="true" data-s-product-dashboard=""><span className="pd-rail-brand" data-s-product-dashboard="">DIL</span><i data-s-product-dashboard=""></i><i data-s-product-dashboard=""></i><i data-s-product-dashboard=""></i><span className="pd-rail-foot" data-s-product-dashboard="">ONE RECORD</span></div>
      <div className="pd-main" data-s-product-dashboard="">
        <div className="pd-main-header" data-s-product-dashboard="">
        <div className="pd-page-heading" data-s-product-dashboard=""><div data-s-product-dashboard=""><h2 data-s-product-dashboard="">{view.title}</h2><p data-s-product-dashboard="">{view.sub}</p></div><span className="pd-date" data-s-product-dashboard="">NOV 2026</span></div>
        <div className="pd-kpis" data-s-product-dashboard="">{list(view.kpis.map(([label,value,note], index) => <div data-s-product-dashboard=""><span data-s-product-dashboard="">{label}</span><b data-kpi={index} data-s-product-dashboard="">{value}</b><small data-s-product-dashboard="">{note}</small></div>))}</div>
        </div>
        <div className="pd-content" data-s-product-dashboard="">
        <div className="pd-primary" data-s-product-dashboard="">
        {list(slug === "ayana" && <>
          <div className="pd-panel" data-s-product-dashboard="">
            <div className="pd-panel-heading" data-s-product-dashboard=""><b data-s-product-dashboard="">Invoice breakdown</b><span className="pd-status steady" data-invoice-status="" data-s-product-dashboard="">Credit included</span></div>
            {list(invoiceRows.map((row, i) => <button type="button" className={cx(["pd-invoice-row", "pd-select", { "pd-credit": i === 3 }])} data-detail-title={row.title} data-detail-copy={row.copy} data-detail-meta={row.meta} data-credit-row={i === 3 ? "true" : undefined} aria-pressed={i === 0} aria-controls={detailId} data-s-product-dashboard=""><span data-s-product-dashboard="">{row.title}</span><b data-s-product-dashboard="">{row.amount}</b></button>))}
            <div className="pd-invoice-total" data-s-product-dashboard=""><button type="button" className="pd-mini-control" data-credit-toggle="" aria-pressed="true" data-s-product-dashboard="">Include SLA credit</button><b data-s-product-dashboard=""><span data-invoice-total="" data-s-product-dashboard="">$23,128</span>{" "}<small data-s-product-dashboard="">USD</small></b></div>
          </div>
          <div className="pd-note" data-s-product-dashboard=""><span className="pd-check" data-s-product-dashboard="">✓</span><span data-s-product-dashboard=""><b data-s-product-dashboard="">118 kW of headroom</b> · checked against Feeder 2</span><span data-s-product-dashboard="">↗</span></div>
        </>)}{" "}
        {list(slug === "neev" && <>
          <div className="pd-panel pd-floor-panel" data-s-product-dashboard="">
            <div className="pd-panel-heading" data-s-product-dashboard=""><b data-s-product-dashboard="">Hall 2 / rack map</b><span className="pd-status" data-s-product-dashboard="">52U racks</span></div>
            <div className="pd-filter-controls" role="group" aria-label="Filter rack positions" data-s-product-dashboard=""><button type="button" data-rack-filter="all" aria-pressed="true" data-s-product-dashboard="">All</button><button type="button" data-rack-filter="b" aria-pressed="false" data-s-product-dashboard="">Alarm</button><button type="button" data-rack-filter="w" aria-pressed="false" data-s-product-dashboard="">Reserved</button><span data-rack-count="" data-s-product-dashboard="">60 positions</span></div>
            <div className="pd-board-viewport" data-board-viewport="" data-s-product-dashboard="">
            <div className="pd-floor-map pd-equipment-board" data-preview-grid="" role="group" aria-label="Choose a rack to inspect. Scroll the floor or use the arrow keys to move between racks." data-s-product-dashboard="">{list(racks.map((state, index) => {
              const name = index === 28 ? "Rack 2B-14" : `Position ${String(index + 1).padStart(2, "0")}`;
              const copy = state === "b" ? initialDetails.neev.copy : state === "w" ? "This position is reserved. The hold stays visible to sales and facilities on the same floor record." : state === "a" ? "This rack position is live. Its asset, power path and customer links are shared with the rest of the platform." : "This position is available. A quote still needs power and cooling headroom checked before capacity is reserved.";
              return <button type="button" className={`pd-rack pd-select ${state}`} data-rack-state={state} data-detail-title={`${name} · ${rackStates[state]}`} data-detail-copy={copy} data-detail-meta={`Hall 2 · ${rackStates[state]} · shared floor record`} aria-label={`${name}: ${rackStates[state]}`} aria-pressed={index === 28} aria-controls={detailId} tabIndex={index === 28 ? 0 : -1} data-s-product-dashboard=""><span className="pd-equipment-object" data-s-product-dashboard=""><EquipmentScene objectOnly="rack" state={rackVisualStates[state as keyof typeof rackVisualStates]} /></span><span className="pd-rack-label" data-s-product-dashboard="">{index === 28 ? "2B-14" : String(index + 1).padStart(2,"0")}</span>{index === 28 && <b aria-hidden="true" data-s-product-dashboard="">!</b>}</button>;
            }))}</div>
            </div>
            <p className="pd-board-hint" data-s-product-dashboard="">Scroll the floor · select a rack to inspect</p>
            <div className="pd-legend" data-s-product-dashboard=""><span data-s-product-dashboard=""><i data-s-product-dashboard=""></i>Live</span><span data-s-product-dashboard=""><i className="reserved" data-s-product-dashboard=""></i>Reserved</span><span data-s-product-dashboard=""><i className="alarm" data-s-product-dashboard=""></i>Alarm</span><span data-s-product-dashboard=""><i className="free" data-s-product-dashboard=""></i>Available</span></div>
          </div>
          <div className="pd-note attention" data-s-product-dashboard=""><span className="pd-check" data-s-product-dashboard="">!</span><span data-s-product-dashboard=""><b data-s-product-dashboard="">Rack 2B-14</b> · inlet 41.2 °C · incident attached</span><span data-s-product-dashboard="">↗</span></div>
        </>)}{" "}
        {list(slug === "vitana" && <>
          <div className="pd-panel" data-s-product-dashboard="">
            <div className="pd-panel-heading" data-s-product-dashboard=""><b data-s-product-dashboard="">Incident timeline</b><span className="pd-status steady" data-s-product-dashboard="">Resolved</span></div>
            {list(timeline.map((event, i) => <button type="button" className="pd-event pd-select" data-detail-title={`${event.time} · ${event.title}`} data-detail-copy={event.copy} data-detail-meta={event.meta} aria-pressed={i === 0} aria-controls={detailId} data-s-product-dashboard=""><time data-s-product-dashboard="">{event.time}</time><i className={event.state} data-s-product-dashboard=""></i><span data-s-product-dashboard=""><b data-s-product-dashboard="">{event.title}</b><small data-s-product-dashboard="">{event.sub}</small></span></button>))}
          </div>
          <div className="pd-note" data-s-product-dashboard=""><span className="pd-check" data-s-product-dashboard="">↗</span><span data-s-product-dashboard=""><b data-s-product-dashboard="">Sensor → ticket → credit</b> · one chain of record</span><span data-s-product-dashboard="">✓</span></div>
        </>)}{" "}
        {list(slug === "aire" && <>
          <div className="pd-panel" data-s-product-dashboard="">
            <div className="pd-panel-heading" data-s-product-dashboard=""><b data-s-product-dashboard="">Pod 4 / GPU nodes</b><span className="pd-status steady" data-s-product-dashboard="">12 nodes live</span></div>
            <div className="pd-board-viewport pd-gpu-viewport" data-board-viewport="" data-s-product-dashboard="">
            <div className="pd-nodes pd-equipment-board" data-preview-grid="" role="group" aria-label="Choose a GPU node to inspect. Scroll the pod or use the arrow keys to move between nodes." data-s-product-dashboard="">{list(Array.from({ length: 12 }, (_, i) => <button type="button" className="pd-select" data-detail-title={`GPU-${String(i + 1).padStart(2,"0")} · 8 GPUs`} data-detail-copy={initialDetails.aire.copy} data-detail-meta={`Utilisation ${nodeUtilisation[i]}% · power ${nodePower[i]} kW · tenant Halcyon AI`} aria-pressed={i === 0} aria-controls={detailId} tabIndex={i === 0 ? 0 : -1} data-s-product-dashboard=""><span data-s-product-dashboard="">GPU-{String(i + 1).padStart(2,"0")}</span><span className="pd-equipment-object" data-s-product-dashboard=""><EquipmentScene objectOnly="gpu" state="live" /></span><small data-s-product-dashboard="">{nodeUtilisation[i]}% utilised</small></button>))}</div>
            </div>
            <div className="pd-filter-controls" role="group" aria-label="Choose pod meter" data-s-product-dashboard=""><button type="button" data-meter="power" aria-pressed="true" data-s-product-dashboard="">Power</button><button type="button" data-meter="utilisation" aria-pressed="false" data-s-product-dashboard="">GPU utilisation</button></div>
            <div className="pd-usage" aria-live="polite" aria-atomic="true" data-s-product-dashboard=""><span data-meter-label="" data-s-product-dashboard="">Committed power</span><b data-meter-value="" data-s-product-dashboard="">404 / 420 kW</b><div role="meter" aria-label="Committed power used" aria-valuemin={0} aria-valuemax={420} aria-valuenow={404} data-meter-bar="" data-s-product-dashboard=""><i data-s-product-dashboard=""></i></div></div>
          </div>
          <div className="pd-note" data-s-product-dashboard=""><span className="pd-check" data-s-product-dashboard="">✓</span><span data-s-product-dashboard=""><b data-s-product-dashboard="">61,440 GPU hours</b> · on the tenant’s invoice</span><span data-s-product-dashboard="">↗</span></div>
        </>)}{" "}
        {list(slug === "dil" && <>
          <div className="pd-panel" data-s-product-dashboard="">
            <div className="pd-panel-heading" data-s-product-dashboard=""><b data-s-product-dashboard="">Rack 2B-14</b><span className="pd-status steady" data-s-product-dashboard="">One ID</span></div>
            {list(objectRows.map((row, i) => <button type="button" className="pd-object-row pd-select" data-detail-title={`${row.label} · ${row.value}`} data-detail-copy={row.copy} data-detail-meta={row.meta} aria-pressed={i === 0} aria-controls={detailId} data-s-product-dashboard=""><span data-s-product-dashboard="">{row.label}</span><b data-s-product-dashboard="">{row.value}</b><i className={row.product} data-s-product-dashboard=""></i></button>))}
          </div>
          <div className="pd-note" data-s-product-dashboard=""><span className="pd-check" data-s-product-dashboard="">↔</span><span data-s-product-dashboard=""><b data-s-product-dashboard="">2B-14 · R2B14 · Rack 2B/14</b> → one object</span></div>
        </>)}
        </div>
        <aside className="pd-selection" id={detailId} aria-live="polite" aria-atomic="true" aria-label="Selected record details" data-s-product-dashboard="">
          <span className="pd-selection-eyebrow" data-s-product-dashboard="">Selected record</span>
          <h3 data-preview-title="" data-s-product-dashboard="">{detail.title}</h3>
          <p data-preview-copy="" data-s-product-dashboard="">{detail.copy}</p>
          <span className="pd-selection-meta" data-preview-meta="" data-s-product-dashboard="">{detail.meta}</span>
        </aside>
        </div>
      </div>
    </div>
    <div className="pd-statusbar" data-s-product-dashboard=""><span data-s-product-dashboard=""><i data-s-product-dashboard=""></i>{view.note}</span><span data-s-product-dashboard="">{view.object}</span></div>
  </div>
  <figcaption data-s-product-dashboard=""><span data-s-product-dashboard="">Interactive preview · sample data</span><span data-s-product-dashboard="">Select a record to explore</span></figcaption>
</figure>

<PageScript src="/js/product-dashboard.js" />
    </>
  );
}
