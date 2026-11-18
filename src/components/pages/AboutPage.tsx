import PageScript from "@/components/PageScript";
import Base from "@/components/Base";
import ContactForm from "@/components/ContactForm";
import Cta from "@/components/Cta";
import "./AboutPage.css";

export default function AboutPage(props: { title: string; description: string; path: string }) {
  return (
    <>
<Base title={props.title} description={props.description} path={props.path} kind="AboutPage">
<header className="phero wrap" data-s-pages-about-page="">
  <div className="copy" data-s-pages-about-page="">
    <p className="eb" style={{ color: "var(--pd)" }} data-s-pages-about-page="">About Dhiya Labs</p>
    <h1 data-s-pages-about-page="">Twenty years on the floor. <span data-s-pages-about-page="">Now we're building what we always needed.</span></h1>
    <p className="lede" data-s-pages-about-page="">We have sold the halls, run the halls, taken the 2 a.m. calls and sat through the audit. We are building the system of record we kept wishing someone would.</p>
    <div className="ctas" data-s-pages-about-page=""><a className="btn" href="#talk" data-s-pages-about-page="">Get in touch →</a><a className="lnk" href="#investors" data-s-pages-about-page="">For investors ↓</a></div>
  </div>
  <div className="pimg" data-s-pages-about-page=""><svg className="iso" data-scene="about" aria-hidden="true" data-s-pages-about-page=""></svg><span className="cap" data-s-pages-about-page="">Dhiya · the campus</span></div>
</header>

<section className="sec" data-s-pages-about-page=""><div className="wrap" data-s-pages-about-page="">
  <div className="prose" data-s-pages-about-page="">
    <p data-s-pages-about-page=""><strong data-s-pages-about-page="">Dhiya Labs is an operator-founded software company for data centres.</strong> Between us we have spent two decades in colocation, hyperscale builds, managed services and cloud: selling capacity, commissioning halls, running NOCs, closing SLA disputes and signing off audits.</p>
    <p data-s-pages-about-page="">The industry we grew up in now runs some of the most valuable infrastructure on the planet on a stack that was never designed as one. A BMS that does not know the customer. A CRM that does not know the capacity. A ticketing tool that does not know the rack. A spreadsheet, somewhere, that knows all three and is wrong.</p>
  </div>
  <div className="callouts" data-s-pages-about-page="">
    <div className="co" data-s-pages-about-page=""><b data-s-pages-about-page="">Five tools. One rack. Five spellings.</b><span data-s-pages-about-page="">Every operator we have worked with re-keys the same object into a CRM, a DCIM, a BMS, a ticketing tool and a billing sheet.</span></div>
    <div className="co" data-s-pages-about-page=""><b data-s-pages-about-page="">Go-live is where the data dies.</b><span data-s-pages-about-page="">The contract, the drawing and the power path are handed over by email. Months later nobody can say what was promised.</span></div>
    <div className="co" data-s-pages-about-page=""><b data-s-pages-about-page="">Audit week is a hunt.</b><span data-s-pages-about-page="">Exports, inboxes and screenshots, stitched together to prove who approved what, long after the fact.</span></div>
  </div>
</div></section>

<section className="sec alt" data-s-pages-about-page=""><div className="wrap" data-s-pages-about-page="">
  <div className="sh" data-s-pages-about-page=""><h2 className="st" data-s-pages-about-page="">The problem is not the tools. <em data-s-pages-about-page="">It is the record.</em></h2><p data-s-pages-about-page="">Each tool is good at its job. None of them is the system of record for the data centre, so each becomes one by accident.</p></div>
  <div className="pain" data-s-pages-about-page="">
    <div className="pc" data-s-pages-about-page=""><p className="n" data-s-pages-about-page="">01</p><h3 data-s-pages-about-page="">Record</h3><p data-s-pages-about-page="">No single object for a rack, a customer or a contract. Every system keeps its own, and they drift.</p></div>
    <div className="pc" data-s-pages-about-page=""><p className="n" data-s-pages-about-page="">02</p><h3 data-s-pages-about-page="">Handover</h3><p data-s-pages-about-page="">Sales to build to operations to finance, each step re-typed. The chain breaks at every boundary.</p></div>
    <div className="pc" data-s-pages-about-page=""><p className="n" data-s-pages-about-page="">03</p><h3 data-s-pages-about-page="">Proof</h3><p data-s-pages-about-page="">Approvals in email, overrides in memory. The audit pack is reconstructed, not retrieved.</p></div>
    <div className="pc" data-s-pages-about-page=""><p className="n" data-s-pages-about-page="">04</p><h3 data-s-pages-about-page="">Tooling</h3><p data-s-pages-about-page="">A generation of DCIM built for the facilities team alone, and ITSM built for IT alone. Neither built for the building as a business.</p></div>
  </div>
</div></section>

<section className="sec" data-s-pages-about-page=""><div className="wrap" data-s-pages-about-page="">
  <div className="sh" data-s-pages-about-page=""><h2 className="st" data-s-pages-about-page="">What we are <em data-s-pages-about-page="">building.</em></h2><p data-s-pages-about-page="">In stealth, with a small number of design partners, on live halls.</p></div>
  <div className="prose" data-s-pages-about-page="">
    <p data-s-pages-about-page=""><strong data-s-pages-about-page="">DIL is a lifecycle platform: one record of the data centre</strong> that four products read and write. Ayana sells and bills against it. Neev runs the floor on it. Vitana resolves incidents and changes on it. Aire provisions and meters cloud and GPU tenants on it.</p>
    <p data-s-pages-about-page="">It reads the BMS, EPMS, DCIM, ITSM and finance systems operators already run, reconciles them to one ID per object, and links what happens next into a chain: reading, alarm, incident, change, credit. It does not ask anyone to rip anything out on day one.</p>
  </div>
  <div className="flow" style={{ marginTop: "40px" }} data-s-pages-about-page="">
    <div data-s-pages-about-page=""><b data-s-pages-about-page="">Sell</b><span data-s-pages-about-page="">Quote what the floor can carry.</span></div><div data-s-pages-about-page=""><b data-s-pages-about-page="">Build</b><span data-s-pages-about-page="">Contract creates the racks and the work.</span></div><div data-s-pages-about-page=""><b data-s-pages-about-page="">Operate</b><span data-s-pages-about-page="">Power, cooling, capacity, PPM.</span></div><div data-s-pages-about-page=""><b data-s-pages-about-page="">Resolve</b><span data-s-pages-about-page="">One queue for alarm, incident, change.</span></div><div data-s-pages-about-page=""><b data-s-pages-about-page="">Bill</b><span data-s-pages-about-page="">Meter to invoice, credits attached.</span></div><div data-s-pages-about-page=""><b data-s-pages-about-page="">Prove</b><span data-s-pages-about-page="">Audit packs that assemble themselves.</span></div>
  </div>
</div></section>

<section className="sec alt" data-s-pages-about-page=""><div className="wrap" data-s-pages-about-page="">
  <div className="sh" data-s-pages-about-page=""><h2 className="st" data-s-pages-about-page="">How we <em data-s-pages-about-page="">work.</em></h2></div>
  <div className="vals" data-s-pages-about-page="">
    <div className="val" data-s-pages-about-page=""><p className="n" data-s-pages-about-page="">01</p><h3 data-s-pages-about-page="">Floor first.</h3><p data-s-pages-about-page="">We design from the rack up, not from the dashboard down. If it does not survive a 2 a.m. incident in Hall 2, it does not ship.</p></div>
    <div className="val" data-s-pages-about-page=""><p className="n" data-s-pages-about-page="">02</p><h3 data-s-pages-about-page="">Nothing re-keyed.</h3><p data-s-pages-about-page="">If a human types the same fact twice, we have failed. Every object has one ID and every product references it.</p></div>
    <div className="val" data-s-pages-about-page=""><p className="n" data-s-pages-about-page="">03</p><h3 data-s-pages-about-page="">Boring where it counts.</h3><p data-s-pages-about-page="">Strong consistency, attributed writes, full exports. The exciting part is what operators do with a record they can trust.</p></div>
  </div>
  <div style={{ marginTop: "56px", display: "grid", gap: "18px" }} data-s-pages-about-page="">
    <p className="eb" style={{ color: "var(--pd)" }} data-s-pages-about-page="">Who we build for</p>
    <div className="tags" data-s-pages-about-page=""><span data-s-pages-about-page="">Colocation operators</span><span data-s-pages-about-page="">Hyperscale campuses</span><span data-s-pages-about-page="">{"Edge & regional DCs"}</span><span data-s-pages-about-page="">{"Neoclouds & GPU hosts"}</span><span data-s-pages-about-page="">Managed service providers</span><span data-s-pages-about-page="">{"Sovereign & regulated sites"}</span><span data-s-pages-about-page="">Facilities teams</span><span data-s-pages-about-page="">{"NOC & IT ops"}</span><span data-s-pages-about-page="">{"Sales & finance"}</span></div>
  </div>
</div></section>

<section className="sec" data-s-pages-about-page=""><div className="wrap" data-s-pages-about-page="">
  <p className="quote about-quote" data-s-pages-about-page="">
    <span className="about-quote-intro" data-s-pages-about-page="">We have been in the operator's shoes for two decades.</span>{" "}
    <span data-s-pages-about-page="">We are building the record we kept wishing for,</span>{" "}
    <span data-s-pages-about-page="">and we are building it quietly, with the people who will run it.</span>
  </p>
</div></section>

<section className="sec investor-contact" id="investors" data-s-pages-about-page=""><div className="wrap" data-s-pages-about-page="">
  <div className="inv" data-s-pages-about-page="">
    <div className="investor-copy" style={{ display: "grid", gap: "16px" }} data-s-pages-about-page="">
      <p className="eb" style={{ color: "var(--pd)" }} data-s-pages-about-page="">For investors</p>
      <h2 data-s-pages-about-page="">Infrastructure software, built by the people who ran the infrastructure.</h2>
      <p data-s-pages-about-page="">We are raising quietly. If you back vertical software with operators behind it, and you would like to see the record running on a live hall, the founding team would like to hear from you.</p>
      <p style={{ fontSize: "14px", color: "var(--sub)" }} data-s-pages-about-page="">Goes straight to the founders at <a href="mailto:founders@dhiya.ai" data-s-pages-about-page="">founders@dhiya.ai</a>. We reply personally. No deck without a conversation first.</p>
    </div>
    <ContactForm kind="investor" />
  </div>
</div></section>


  <Cta heading="Make contact. Map your floor. <span>Run it as one.</span>" sub="Bring one hall, your BMS and your CRM. We'll show you the chain of record on your own floor, from a reading to the bill." />
  <PageScript src="/iso.js" />

</Base>
    </>
  );
}
