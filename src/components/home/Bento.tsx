import { css } from "@/lib/css";

export default function Bento() {
  return (
    <>
<link rel="stylesheet" href="/js/sphere.css" />
<section className="bento-wrap" id="platform">
  <div className="wrap">
    <h2 className="bento-title">The system of record for the data centre.</h2>
    <div className="bento" id="claims" data-state="chaos">
      <div className="cell lead" id="chaos" data-state="chaos">
        <div className="txt">
          <span className="hate state-eb flip" data-chaos="Five systems of record" data-calm="One system of record">Five systems of record</span>
          <h3>From <em className="w-chaos">chaos</em><br />to <em className="w-calm">calm.</em></h3>
          <div className="swap">
            <div className="pane chaos" aria-hidden="false">
              <p>Five systems of record. Five versions of the floor. None of them the truth.</p>
              <ul>
                <li>The CRM doesn't know the capacity.</li>
                <li>The CMDB doesn't know the building.</li>
                <li>The ticket doesn't know the rack.</li>
                <li>The handover loses the data.</li>
                <li>Nobody can say who changed what.</li>
              </ul>
            </div>
            <div className="pane calm" aria-hidden="true">
              <p>One record. Yours. Four products read and write it, so nothing else has to agree.</p>
              <ul>
                <li>Site · hall · rack · power path</li>
                <li>Asset · reading · alarm</li>
                <li>Customer · contract · hold</li>
                <li>Ticket · change · credit</li>
                <li>One ID each. Kept for life.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="viz"><canvas id="graph" aria-hidden="true"></canvas>
        </div>
      </div>

      <div className="cell">
        <span className="hate flip" data-chaos="You hate · typing it twice" data-calm="You'll love · one ID">You hate · typing it twice</span>
        <h3 className="flip" data-chaos="Re-keyed. Five times." data-calm="One ID. Nothing re-keyed.">Re-keyed. Five times.</h3>
        <p className="fade" data-chaos="The same rack lives in five tools, spelled five ways. Nobody's copy is right." data-calm="A rack is one object in Ayana, Neev and Vitana. Change it once and every screen agrees.">The same rack lives in five tools, spelled five ways. Nobody's copy is right.</p>
        <div className="tile stat" aria-hidden="true">
          <ul className="variants"><li>2B-14</li><li>R2B14</li><li>Rack 2B/14</li><li>2b_14</li><li>2B-14 (old)</li></ul>
          <div className="one"><b>1</b><span>ID per rack, contract, person and ticket</span></div>
        </div>
      </div>

      <div className="cell">
        <span className="hate flip" data-chaos="You hate · the gap from alarm to invoice" data-calm="You'll love · chain of record">You hate · the gap from alarm to invoice</span>
        <h3 className="flip" data-chaos="Alarm. Ticket. Credit. Unlinked." data-calm="Chain of record.">Alarm. Ticket. Credit. Unlinked.</h3>
        <p className="fade" data-chaos="The reading, the incident and the credit sit in three systems that never met." data-calm="Reading, alarm, incident, change, credit. One linked chain from the sensor to the bill.">The reading, the incident and the credit sit in three systems that never met.</p>
        <div className="tile chain" aria-hidden="true">
          <span style={css("--a:var(--neev-a)")}>reading</span><i></i><span style={css("--a:var(--neev-a)")}>alarm</span><i></i><span style={css("--a:var(--vitana-a)")}>incident</span><i></i><span style={css("--a:var(--vitana-a)")}>change</span><i></i><span style={css("--a:var(--ayana-a)")}>credit</span>
        </div>
      </div>

      <div className="cell">
        <span className="hate flip" data-chaos="You hate · not knowing who changed what" data-calm="You'll love · traceable by default">You hate · not knowing who changed what</span>
        <h3 className="flip" data-chaos="Changed by someone. Sometime." data-calm="Traceable by default.">Changed by someone. Sometime.</h3>
        <p className="fade" data-chaos="No history on the edit. Audit week means a hunt through exports and inboxes." data-calm="Every approval, override and edit is kept, with who and when. Audit packs assemble themselves.">No history on the edit. Audit week means a hunt through exports and inboxes.</p>
        <div className="tile log" aria-hidden="true">
          <em className="flip" data-chaos="Who changed it?" data-calm="Every change">Who changed it?</em>
          <div className="row"><b style={{ width: "38%" }}></b><span className="flip" data-chaos="unknown · ??:??" data-calm="approved · 09:14">unknown · ??:??</span></div>
          <div className="row"><b style={{ width: "62%" }} className="acc"></b><span className="flip" data-chaos="unknown · no reason" data-calm="override · 09:31 · reason kept">unknown · no reason</span></div>
          <div className="row"><b style={{ width: "24%" }}></b><span className="flip" data-chaos="unknown · ??:??" data-calm="edited · 10:02">unknown · ??:??</span></div>
          <div className="row"><b style={{ width: "51%" }}></b><span className="flip" data-chaos="unknown · ??:??" data-calm="signed off · 10:40">unknown · ??:??</span></div>
          <div className="row"><b style={{ width: "30%" }} className="acc"></b><span className="flip" data-chaos="unknown · disputed" data-calm="credit issued · 11:05">unknown · disputed</span></div>
        </div>
      </div>

      <div className="cell">
        <span className="hate flip" data-chaos="You hate · rip and replace" data-calm="You'll love · extends what you run">You hate · rip and replace</span>
        <h3 className="flip" data-chaos="Rip it out. Start again." data-calm="Extends what you run.">Rip it out. Start again.</h3>
        <p className="fade" data-chaos="Every new tool wants your old ones gone, and a year of migration before anything works." data-calm="Connectors read your BMS, EPMS, DCIM and ServiceNow. Each has an owner, a mapping and a mismatch report.">Every new tool wants your old ones gone, and a year of migration before anything works.</p>
        <div className="tile conn" aria-hidden="true">
          <div className="src"><span>BMS</span><span>EPMS</span><span>DCIM</span><span>ServiceNow</span></div>
          <div className="pipe"></div>
          <div className="dst flip" data-chaos="?" data-calm="DIL">?</div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
