import LegalPage from "@/components/LegalPage";
import { privacy } from "@/data/legal";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(privacy);

export default function Page() {
  return <LegalPage doc={privacy} />;
}
