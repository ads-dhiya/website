import "./Announcement.css";

interface Props { announcement?: string }

export default function Announcement(props: Props) {
/** Top announcement bar. */

const { announcement = "Design partner places are open" } = props;
  return (
    <>
<div className="ann dc-bar" data-s-announcement="">
  <div className="dc-inner" data-s-announcement="">
    <a className="dc-link" href="#talk" data-s-announcement=""><span className="dc-dot" aria-hidden="true" data-s-announcement=""></span><span data-s-announcement="">{announcement}</span><span className="dc-arrow" aria-hidden="true" data-s-announcement="">↗</span></a>
  </div>
</div>
    </>
  );
}
