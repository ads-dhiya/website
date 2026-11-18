import PageScript from "@/components/PageScript";
import "./Seen.css";

export default function Seen() {
  return (
    <>
<section className="seen seen-band" data-seen="" aria-label="Your kilowatts, megawatts and gigawatts. Seen in action. Everything, everywhere, all at once." data-s-home-seen="">
  <div className="seen-in wrap" aria-hidden="true" data-s-home-seen="">
    <p data-s-home-seen="">Your <span className="word-group power-word" data-s-home-seen=""><span className="type power-type" data-words="Kilowatts|Megawatts|Gigawatts" data-colors="#5662A6|#AE7C26|#83296A" data-s-home-seen="">Kilowatts</span><span className="caret" data-s-home-seen=""></span></span></p>
    <p data-s-home-seen="">Seen in action.</p>
    <p data-s-home-seen=""><span className="word-group quiet-word" data-s-home-seen=""><span className="type" data-words="Everything|Everywhere|All" data-s-home-seen="">Everything</span><span className="caret" data-s-home-seen=""></span></span> at once.</p>
  </div>
</section>

<PageScript src="/js/inline-home-seen.js" />
    </>
  );
}
