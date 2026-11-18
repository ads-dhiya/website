import LegalPage from "@/components/LegalPage";
import { terms } from "@/data/legal";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(terms);

export default function Page() {
  return <LegalPage doc={terms} />;
}
