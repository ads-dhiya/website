import cx from "clsx";
import { site } from "@/data/site";
import "./ContactForm.css";

interface Props { kind?: "partner" | "investor"; button?: string; variant?: "default" | "home" | "partner" }

export default function ContactForm(props: Props) {
/** Basic-details form. kind="partner" goes to dhiya@, kind="investor" to founders@. Posts to /api/contact; forms.js falls back to mailto if the endpoint is missing. */


const { kind = "partner", button = kind === "investor" ? "Reach the founders →" : "Talk to us →", variant = "default" } = props;
const to = kind === "investor" ? site.investors : site.mail;
  return (
    <>
<form className={cx(["cf", "cf-plum", { "cf-home": variant === "home" }])} data-kind={kind} data-to={to} data-endpoint={site.endpoint} noValidate data-s-contact-form="">
  <input type="text" name="website" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" data-s-contact-form="" />{" "}
  {kind === "investor" ? (
    <>
      <div className="row2" data-s-contact-form=""><label data-s-contact-form="">Name<input name="name" required autoComplete="name" data-s-contact-form="" /></label><label data-s-contact-form="">Firm<input name="firm" required autoComplete="organization" data-s-contact-form="" /></label></div>
      <div className="row2" data-s-contact-form=""><label data-s-contact-form="">Email<input type="email" name="email" required autoComplete="email" data-s-contact-form="" /></label><label data-s-contact-form="">You back<select name="stage" data-s-contact-form=""><option data-s-contact-form="">Pre-seed · Seed</option><option data-s-contact-form="">Series A and later</option><option data-s-contact-form="">Strategic · corporate</option><option data-s-contact-form="">Angel</option></select></label></div>
      <label data-s-contact-form="">Anything we should know?<textarea name="message" rows={3} maxLength={600} placeholder="Thesis, timing, how you found us" data-s-contact-form=""></textarea></label>{" "}
    </>
  ) : (
    <>
      <div className="row2" data-s-contact-form=""><label data-s-contact-form="">Name<input name="name" required autoComplete="name" data-s-contact-form="" /></label><label data-s-contact-form="">Work email<input type="email" name="email" required autoComplete="email" data-s-contact-form="" /></label></div>
      <div className="row2" data-s-contact-form=""><label data-s-contact-form="">Company<input name="company" required autoComplete="organization" data-s-contact-form="" /></label><label data-s-contact-form="">Role<input name="role" autoComplete="organization-title" placeholder="Optional" data-s-contact-form="" /></label></div>
      <div className="row2" data-s-contact-form=""><label data-s-contact-form="">You run<select name="segment" data-s-contact-form=""><option data-s-contact-form="">Colocation</option><option data-s-contact-form="">Hyperscale · enterprise</option><option data-s-contact-form="">Neocloud · GPU</option><option data-s-contact-form="">Managed services</option><option data-s-contact-form="">Something else</option></select></label><label data-s-contact-form="">Capacity<select name="capacity" data-s-contact-form=""><option data-s-contact-form="">Under 2 MW</option><option data-s-contact-form="">2–10 MW</option><option data-s-contact-form="">10–50 MW</option><option data-s-contact-form="">50 MW and up</option></select></label></div>
      <label data-s-contact-form="">Anything we should know?<textarea name="message" rows={3} maxLength={600} placeholder="Optional · the tools you run, the hall you'd start with" data-s-contact-form=""></textarea></label>{" "}
    </>
  )}
  <div className="act" data-s-contact-form=""><button className="btn" type="submit" data-s-contact-form="">{button}</button><p className="fine" data-s-contact-form="">We reply personally. Nothing goes on a list. <a href="/privacy" data-s-contact-form="">Privacy</a></p></div>
  <p className="ok" role="status" aria-live="polite" hidden data-s-contact-form="">Thanks. We'll write to <b data-echo="" data-s-contact-form=""></b> within two working days.</p>
  <p className="err" role="alert" hidden data-s-contact-form="">That didn't send. Email us directly at <a href={`mailto:${to}`} data-s-contact-form="">{to}</a>.</p>
</form>
    </>
  );
}
