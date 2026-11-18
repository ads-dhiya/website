import HomePage from "@/components/pages/HomePage";
import { pageMeta } from "@/lib/meta";

const page = {
  title: "Dhiya Labs",
  description: "DIL is the system of record for the data centre. Four products, Ayana, Neev, Vitana and Aire, sell, operate, resolve and bill on one record. Design partner places are open.",
  path: "/",
};
export const metadata = pageMeta(page);

export default function Page() {
  return <HomePage {...page} />;
}
