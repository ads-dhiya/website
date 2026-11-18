import AboutPage from "@/components/pages/AboutPage";
import { pageMeta } from "@/lib/meta";

const page = {
  title: "About Dhiya Labs · Twenty years on the data centre floor",
  description: "Dhiya Labs is an operator-founded software company building the system of record for data centres, in stealth with design partners. For investors: get in touch with the founders.",
  path: "/about",
};
export const metadata = pageMeta(page);

export default function Page() {
  return <AboutPage {...page} />;
}
