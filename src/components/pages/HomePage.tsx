import PageScript from "@/components/PageScript";
import Base from "@/components/Base";
import "@/styles/home.css";
import Stage from "@/components/home/Stage";
import Seen from "@/components/home/Seen";
import Bento from "@/components/home/Bento";
import Heart from "@/components/home/Heart";
import Architecture from "@/components/home/Architecture";
import Uses from "@/components/home/Uses";
import Cta from "@/components/Cta";

export default function HomePage(props: { title: string; description: string; path: string }) {
  return (
    <>
<Base title={props.title} description={props.description} path={props.path}>{" "}
  <Stage />
  <div className="after">
    <Seen />{" "}
    <Bento />{" "}
    <Heart />{" "}
    <Architecture />{" "}
    <Uses />{" "}
    <Cta variant="home" heading="Make contact. Map your floor. <span>Run it as one.</span>" sub="Design partner places are open. Bring one hall, your BMS and your CRM, and we'll show you the chain of record on your own floor." />
  </div>
  <PageScript src="/js/home.js" />
  <PageScript src="/js/sphere.js" />
</Base>
    </>
  );
}
