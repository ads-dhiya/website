import LegalPage from "@/components/LegalPage";
import { security } from "@/data/legal";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(security);

export default function Page() {
  return <LegalPage doc={security} />;
}
