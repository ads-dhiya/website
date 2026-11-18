import { css } from "@/lib/css";
import "./Architecture.css";

export default function Architecture() {
  return (
    <>
<section className="architecture-reference" id="architecture" aria-label="How the platform is put together" data-s-home-architecture="">
  <div className="wrap" data-s-home-architecture="">
    <div className="head" data-s-home-architecture="">
      <h2 data-s-home-architecture="">Architecture</h2>
      <p className="sub" data-s-home-architecture="">One record underneath. Four products on top. Your existing systems plugged in at the edges, not ripped out.</p>
    </div>
    <div className="agrid" data-s-home-architecture="">

      <div className="panel prod" data-s-home-architecture="">
        <p className="pt" data-s-home-architecture="">Four products, one record</p>
        <p className="ps" data-s-home-architecture="">Each product reads and writes the same objects. Nothing is copied between them.</p>
        <div className="pgrid" data-s-home-architecture="">
          <div className="box pr" style={css("--bc:var(--ayana-a)")} data-s-home-architecture=""><div className="hd" data-s-home-architecture=""><img src="/media/logos/ayana-mark_on-chalk.svg" alt="" data-s-home-architecture="" /><b data-s-home-architecture="">Ayana</b></div><p data-s-home-architecture="">Accounts, contracts, metered usage, invoices and revenue.</p><p className="for" data-s-home-architecture="">Sell · sales, finance</p></div>
          <div className="box pr" style={css("--bc:var(--neev-a)")} data-s-home-architecture=""><div className="hd" data-s-home-architecture=""><img src="/media/logos/neev-mark_on-chalk.svg" alt="" data-s-home-architecture="" /><b data-s-home-architecture="">Neev</b></div><p data-s-home-architecture="">Racks, power, cooling, capacity and the work on the floor.</p><p className="for" data-s-home-architecture="">Operate · facilities, DC ops</p></div>
          <div className="box pr" style={css("--bc:var(--vitana-a)")} data-s-home-architecture=""><div className="hd" data-s-home-architecture=""><img src="/media/logos/vitana-mark_on-chalk.svg" alt="" data-s-home-architecture="" /><b data-s-home-architecture="">Vitana</b></div><p data-s-home-architecture="">Monitoring, incidents, changes and runbooks.</p><p className="for" data-s-home-architecture="">Resolve · NOC, IT ops</p></div>
          <div className="box pr" style={css("--bc:var(--aire-a)")} data-s-home-architecture=""><div className="hd" data-s-home-architecture=""><img src="/media/logos/aire-mark_on-chalk.svg" alt="" data-s-home-architecture="" /><b data-s-home-architecture="">Aire</b></div><p data-s-home-architecture="">Cloud and GPU tenants: provision, meter, bill.</p><p className="for" data-s-home-architecture="">Compute · cloud teams, tenants</p></div>
        </div>
      </div>

      <div className="arr" aria-hidden="true" data-s-home-architecture="">
        <svg viewBox="0 0 14 44" preserveAspectRatio="none" data-s-home-architecture=""><line x1="7" y1="0" x2="7" y2="38" data-s-home-architecture=""></line><path d="M3 34 L7 40 L11 34" data-s-home-architecture=""></path></svg>{" "}
        <svg viewBox="0 0 14 44" preserveAspectRatio="none" data-s-home-architecture=""><line x1="7" y1="0" x2="7" y2="38" data-s-home-architecture=""></line><path d="M3 34 L7 40 L11 34" data-s-home-architecture=""></path></svg>{" "}
        <svg viewBox="0 0 14 44" preserveAspectRatio="none" data-s-home-architecture=""><line x1="7" y1="0" x2="7" y2="38" data-s-home-architecture=""></line><path d="M3 34 L7 40 L11 34" data-s-home-architecture=""></path></svg>{" "}
        <svg viewBox="0 0 14 44" preserveAspectRatio="none" data-s-home-architecture=""><line x1="7" y1="0" x2="7" y2="38" data-s-home-architecture=""></line><path d="M3 34 L7 40 L11 34" data-s-home-architecture=""></path></svg>
      </div>

      <div className="panel shared" data-s-home-architecture="">
        <p className="pt" data-s-home-architecture="">Shared by all four</p>
        <p className="ps" data-s-home-architecture="">What every product needs and none should own alone.</p>
        <div className="list" data-s-home-architecture="">
          <div className="it" data-s-home-architecture=""><b data-s-home-architecture="">{"Incidents & changes"}</b><p data-s-home-architecture="">One queue. Raised from an alarm, a customer or a planned job; closed with the credit it caused.</p></div>
          <div className="it" data-s-home-architecture=""><b data-s-home-architecture="">{"Approvals & audit"}</b><p data-s-home-architecture="">Every approval, override and edit kept, with who and when.</p></div>
          <div className="it" data-s-home-architecture=""><b data-s-home-architecture="">{"Roles & access"}</b><p data-s-home-architecture="">Single sign-on, per-tenant isolation, customer views that show only their floor.</p></div>
          <div className="it" data-s-home-architecture=""><b data-s-home-architecture="">{"Reports & API"}</b><p data-s-home-architecture="">Dashboards, scheduled reports and a documented API over the same record.</p></div>
        </div>
      </div>

      <div className="panel core" data-s-home-architecture="">
        <img className="heartmark" src="/media/dhiya-mark-ink.svg" alt="" data-s-home-architecture="" />
        <p className="pt" data-s-home-architecture="">DIL · the record</p>
        <p className="ps" data-s-home-architecture="">The system of record for the data centre. One ID per object, kept for life.</p>
        <div className="rec" data-s-home-architecture="">
          <span data-s-home-architecture="">Site</span><span data-s-home-architecture="">Hall</span><span data-s-home-architecture="">Rack</span><span data-s-home-architecture="">Power path</span><span data-s-home-architecture="">Asset</span><span data-s-home-architecture="">Reading</span><span data-s-home-architecture="">Alarm</span><span data-s-home-architecture="">Customer</span><span data-s-home-architecture="">Contract</span><span data-s-home-architecture="">Ticket</span><span data-s-home-architecture="">Change</span><span data-s-home-architecture="">Credit</span><span className="id" data-s-home-architecture="">One ID each</span>
        </div>
        <div className="chain" data-s-home-architecture=""><span data-s-home-architecture="">Chain of record</span><i data-s-home-architecture="">→</i><span data-s-home-architecture="">Reading</span><i data-s-home-architecture="">→</i><span data-s-home-architecture="">Alarm</span><i data-s-home-architecture="">→</i><span data-s-home-architecture="">Incident</span><i data-s-home-architecture="">→</i><span data-s-home-architecture="">Change</span><i data-s-home-architecture="">→</i><span data-s-home-architecture="">Credit</span><em data-s-home-architecture="">Linked from the sensor to the bill</em></div>
        <div className="g3" data-s-home-architecture=""><div data-s-home-architecture="">Multi-tenant<br data-s-home-architecture="" />by design</div><div data-s-home-architecture="">Strongly<br data-s-home-architecture="" />consistent</div><div data-s-home-architecture="">Every write<br data-s-home-architecture="" />attributed</div></div>
        <div className="obj" data-s-home-architecture="">
          <div className="oh" data-s-home-architecture=""><span className="eb" data-s-home-architecture="">One object · all its links</span><b data-s-home-architecture="">Rack 2B-14</b><span className="oid" data-s-home-architecture="">ID kept for life</span></div>
          <div className="orow" data-s-home-architecture=""><span data-s-home-architecture="">Hall</span><em data-s-home-architecture="">Hall 2 · Site A · row B</em><i style={css("--c:var(--neev-a)")} data-s-home-architecture=""></i></div>
          <div className="orow" data-s-home-architecture=""><span data-s-home-architecture="">Power path</span><em data-s-home-architecture="">PDU 2B-07 → UPS B → Feeder 2</em><i style={css("--c:var(--neev-a)")} data-s-home-architecture=""></i></div>
          <div className="orow" data-s-home-architecture=""><span data-s-home-architecture="">Customer</span><em data-s-home-architecture="">Northwind Cloud</em><i style={css("--c:var(--ayana-a)")} data-s-home-architecture=""></i></div>
          <div className="orow" data-s-home-architecture=""><span data-s-home-architecture="">Contract</span><em data-s-home-architecture="">NW-117 · 8 kW committed · metered</em><i style={css("--c:var(--ayana-a)")} data-s-home-architecture=""></i></div>
          <div className="orow" data-s-home-architecture=""><span data-s-home-architecture="">Open ticket</span><em data-s-home-architecture="">INC-20417 · inlet temperature high</em><i style={css("--c:var(--vitana-a)")} data-s-home-architecture=""></i></div>
          <div className="orow" data-s-home-architecture=""><span data-s-home-architecture="">Last change</span><em data-s-home-architecture="">CHG-5531 · approved · 09:14</em><i style={css("--c:var(--vitana-a)")} data-s-home-architecture=""></i></div>
          <div className="orow" data-s-home-architecture=""><span data-s-home-architecture="">Tenant</span><em data-s-home-architecture="">GPU pod 4 · 12 nodes · metered</em><i style={css("--c:var(--aire-a)")} data-s-home-architecture=""></i></div>
          <div className="olg" data-s-home-architecture=""><span data-s-home-architecture=""><i style={{ background: "var(--neev-a)" }} data-s-home-architecture=""></i>Neev</span><span data-s-home-architecture=""><i style={{ background: "var(--ayana-a)" }} data-s-home-architecture=""></i>Ayana</span><span data-s-home-architecture=""><i style={{ background: "var(--vitana-a)" }} data-s-home-architecture=""></i>Vitana</span><span data-s-home-architecture=""><i style={{ background: "var(--aire-a)" }} data-s-home-architecture=""></i>Aire</span><span data-s-home-architecture="">· who writes the field</span></div>
        </div>
      </div>

      <div className="panel conn" data-s-home-architecture="">
        <p className="pt" data-s-home-architecture="">Connectors</p>
        <p className="ps" data-s-home-architecture="">Reads from what you already run. Each has an owner, a mapping and a mismatch report.</p>
        <div className="list" data-s-home-architecture="">
          <div className="it" data-s-home-architecture=""><span className="eb" data-s-home-architecture="">Building</span><b data-s-home-architecture="">BMS</b><p data-s-home-architecture="">Cooling, environment, alarms.</p></div>
          <div className="it" data-s-home-architecture=""><span className="eb" data-s-home-architecture="">Power</span><b data-s-home-architecture="">EPMS</b><p data-s-home-architecture="">Meters, breakers, UPS, gensets.</p></div>
          <div className="it" data-s-home-architecture=""><span className="eb" data-s-home-architecture="">Inventory</span><b data-s-home-architecture="">DCIM</b><p data-s-home-architecture="">Assets, racks, cabling.</p></div>
          <div className="it" data-s-home-architecture=""><span className="eb" data-s-home-architecture="">Tickets</span><b data-s-home-architecture="">ITSM</b><p data-s-home-architecture="">ServiceNow, Jira and the like.</p></div>
          <div className="it" data-s-home-architecture=""><span className="eb" data-s-home-architecture="">Money</span><b data-s-home-architecture="">ERP / finance</b><p data-s-home-architecture="">Invoices out, payments back.</p></div>
          <div className="it" data-s-home-architecture=""><span className="eb" data-s-home-architecture="">People</span><b data-s-home-architecture="">Identity</b><p data-s-home-architecture="">SSO, directories, roles.</p></div>
        </div>
      </div>

      <div className="arr2" aria-hidden="true" data-s-home-architecture=""><svg viewBox="0 0 14 44" preserveAspectRatio="none" data-s-home-architecture=""><line x1="7" y1="0" x2="7" y2="38" data-s-home-architecture=""></line><path d="M3 34 L7 40 L11 34" data-s-home-architecture=""></path></svg></div>

      <div className="panel run" data-s-home-architecture="">
        <p className="pt" data-s-home-architecture="">Runs where you need it</p>
        <p className="ps" data-s-home-architecture="">Deployed to suit the site, not the other way round.</p>
        <div className="pgrid c3" data-s-home-architecture="">
          <div className="box" data-s-home-architecture=""><b data-s-home-architecture="">Your cloud or ours</b><p data-s-home-architecture="">Hosted by us, in your cloud account, or on the floor for air-gapped sites.</p></div>
          <div className="box" data-s-home-architecture=""><b data-s-home-architecture="">Encrypted end to end</b><p data-s-home-architecture="">At rest and in transit, with keys you can hold.</p></div>
          <div className="box" data-s-home-architecture=""><b data-s-home-architecture="">Yours to take</b><p data-s-home-architecture="">Full exports on demand. No lock-in on the record.</p></div>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
}
