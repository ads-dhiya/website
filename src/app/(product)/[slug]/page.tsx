import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { products } from "@/data/products";
import { pageMeta } from "@/lib/meta";

type Params = { params: Promise<{ slug: string }> };
const all = products as Record<string, any>;

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(all).map((slug) => ({ slug }));

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const p = all[slug];
  return p ? pageMeta({ title: p.title, description: p.lede, path: `/${slug}` }) : {};
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const p = all[slug];
  if (!p) notFound();
  return <ProductPage p={p} />;
}
