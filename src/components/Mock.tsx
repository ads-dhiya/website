import { css } from "@/lib/css";
import { list } from "@/lib/list";
import EquipmentScene from "@/components/EquipmentScene";
import "./Mock.css";

export default function Mock(props: any) {
/** Product mock-up windows. Mirrors the spec shapes in src/data/products.ts. */

const { spec, product } = props as { spec: any; product?: string };
const t = spec.type;
const equipmentVariant = spec.equipment || (product === "neev" && t === "grid" ? "neev" : product === "aire" && t === "cards" && spec.title === "Tenant · Halcyon AI" ? "aire" : undefined);
const semanticColor = (color: string) => color === "#E9B44C" ? "#83296A" : color === "#C8463B" ? "#A61E4D" : color;
  return (
    <>
<div className="mock" data-s-mock="">
  <div className="bar" data-s-mock=""><i data-s-mock=""></i><i data-s-mock=""></i><i data-s-mock=""></i><b data-s-mock="">{spec.title}</b>{spec.status && <span className="st2" data-s-mock="">{spec.status}</span>}</div>
  <div className="in" data-s-mock="">
    {equipmentVariant && <div className="mock-equipment" data-s-mock=""><EquipmentScene variant={equipmentVariant} id={`mock-equipment-${equipmentVariant}`} /></div>}{" "}
    {list(t === "table" && <table data-s-mock=""><thead data-s-mock=""><tr data-s-mock="">{list(spec.cols.map((c: string) => <th data-s-mock="">{c}</th>))}</tr></thead><tbody data-s-mock="">{list(spec.rows.map((row: string[], ri: number) => <tr className={ri === spec.hi ? "hi" : undefined} data-s-mock="">{list(row.map((c: string) => <td dangerouslySetInnerHTML={{ __html: c }} data-s-mock="" />))}</tr>))}</tbody></table>)}{" "}
    {list(t === "kpis" && <div className="kpis" data-s-mock="">{list(spec.items.map(([l, v, d]: string[]) => <div className="kpi" data-s-mock=""><span data-s-mock="">{l}</span><b data-s-mock="">{v}</b>{d && <em data-s-mock="">{d}</em>}</div>))}</div>)}{" "}
    {list(t === "bars" && <div className="bars" data-s-mock="">{list(spec.items.map(([l, p, v, c]: any[]) => <div className="brow" data-s-mock=""><span data-s-mock="">{l}</span><div className="tr" data-s-mock=""><i style={css(`width:${p}%${c ? ";background:" + semanticColor(c) : ""}`)} data-s-mock=""></i></div><em data-s-mock="">{v}</em></div>))}</div>)}{" "}
    {list(t === "timeline" && <div className="tl" data-s-mock="">{list(spec.items.map(([tm, k, a, b]: string[]) => <div className="ev" data-s-mock=""><time data-s-mock="">{tm}</time><i className={k} data-s-mock=""></i><span data-s-mock="">{a}{b && <small data-s-mock="">{b}</small>}</span></div>))}</div>)}{" "}
    {list(t === "form" && <div className="form" data-s-mock="">{list(spec.fields.map(([l, v, live]: any[]) => <div className="fld" data-s-mock=""><span data-s-mock="">{l}</span><b className={live ? "live" : undefined} data-s-mock="">{v}</b></div>))}{spec.btn && <div className="fbtn" data-s-mock="">{spec.btn}</div>}</div>)}{" "}
    {list(t === "cards" && <div className="cards" data-s-mock="">{list(spec.items.map(([n, l, b, k]: string[]) => <div className="card" data-s-mock=""><b data-s-mock="">{n}</b><span data-s-mock="">{l}</span>{b && <span className={`tag ${k}`} data-s-mock="">{b}</span>}</div>))}</div>)}{" "}
    {list(t === "chain" && <><div className="chain" data-s-mock="">{list(spec.items.map(([lbl, hi]: any[], i: number) => <>{i > 0 && <i data-s-mock="">→</i>}<span className={hi ? "hi" : undefined} data-s-mock="">{lbl}</span></>))}</div>{spec.note && <p style={{ marginTop: "12px", fontSize: "11px", color: "#816394" }} data-s-mock="">{spec.note}</p>}</>)}{" "}
    {list(t === "grid" && !equipmentVariant && <><div className="grid" data-s-mock="">{list(spec.cells.map((c: string) => <i className={c || undefined} data-s-mock=""></i>))}</div><div className="gl" data-s-mock="">{list(spec.legend.map(([l, col]: string[]) => <span data-s-mock=""><i style={css(`background:${semanticColor(col)}`)} data-s-mock=""></i>{l}</span>))}</div></>)}
  </div>
</div>
    </>
  );
}
