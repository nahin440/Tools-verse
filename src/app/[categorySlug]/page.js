import { notFound } from "next/navigation";
import { HiOutlineCheckCircle } from "react-icons/hi2";

import { getCategoryBySlug, getToolsByCategory, CATEGORIES } from "@/lib/registry/tools";
import { ToolCard } from "@/components/home/tool-card";

export function generateStaticParams() {
  return Object.values(CATEGORIES).map((cat) => ({ categorySlug: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    title: category.label,
    description: category.description,
    alternates: { canonical: `/${category.slug}` },
  };
}

export default async function CategoryPage({ params }) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const tools = getToolsByCategory(category.key);

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <HiOutlineCheckCircle className="size-3.5 text-accent" />
          {tools.length} free tools
        </span>
        <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {category.label}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{category.description}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
