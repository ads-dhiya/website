import cx from "clsx";
import ContactForm from "@/components/ContactForm";
import "./Cta.css";

interface Props { heading: string; sub: string; button?: string; eyebrow?: string; variant?: "default" | "home" }

export default function Cta(props: Props) {
const { heading, sub, button = "Talk to us →", eyebrow = "Design partner places are open", variant = "default" } = props;
  return (
    <>
<section className={cx(["cta", "cta-partner", { "cta-home": variant === "home" }])} id="talk" data-s-cta=""><div className="wrap ctaf" data-s-cta="">
  <div className="ctxt" data-s-cta=""><img className="cta-mark" src="/media/dhiya-mark-ink.svg" alt="" width="72" height="72" data-s-cta="" /><p className="eb" data-s-cta="">{eyebrow}</p><h2 className="st" dangerouslySetInnerHTML={{ __html: heading }} data-s-cta="" /><p data-s-cta="">{sub}</p></div>
  <ContactForm button={button} variant="partner" />
</div></section>
    </>
  );
}
