import Link from "next/link";
import { HiLockClosed, HiBolt, HiGlobeAlt, HiOutlineCheckCircle } from "react-icons/hi2";

import { ToolSearchBar } from "@/components/home/tool-search-bar";
import { ToolCard } from "@/components/home/tool-card";
import { CATEGORIES, getToolsByCategory, TOOLS } from "@/lib/registry/tools";
import { getToolIcon } from "@/lib/registry/tool-icons";
import { Button } from "@/components/ui/button";

const POPULAR_SLUGS = [
  "merge-pdf",
  "compress-pdf",
  "pdf-to-word",
  "convert-image",
  "split-pdf",
  "word-to-pdf",
  "compress-image",
  "convert-video",
];

const TRUST_POINTS = [
  {
    icon: HiLockClosed,
    title: "Private by design",
    description: "Files are processed locally in your browser. Nothing is uploaded to a server.",
  },
  {
    icon: HiBolt,
    title: "Genuinely fast",
    description: "No upload wait, no queue. Processing starts the instant you drop a file.",
  },
  {
    icon: HiGlobeAlt,
    title: "Works everywhere",
    description: "No install, no account required. Runs in any modern browser, on any device.",
  },
];

export const metadata = {
  title: "FileFusion — Free Online File Converter & PDF Tools",
  description:
    "Merge, split, compress, and convert PDFs, images, documents, audio, and video — free, private, and no install required.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const popularTools = POPULAR_SLUGS.map((slug) => TOOLS.find((t) => t.slug === slug)).filter(Boolean);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, var(--color-accent-tint) 0%, transparent 40%), radial-gradient(circle at 85% 0%, var(--color-accent-tint) 0%, transparent 35%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-4 py-20 text-center sm:px-6 sm:py-28">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <HiOutlineCheckCircle className="size-3.5 text-accent" />
            42 tools, entirely free
          </span>
          <h1 className="font-display mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
            Every file tool you need, in one place
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground text-balance">
            Merge, convert, compress, and edit PDFs, images, documents, audio, and video — free,
            private, and processed entirely in your browser.
          </p>
          <div className="mt-8 flex justify-center">
            <ToolSearchBar />
          </div>
        </div>
      </section>

      {/* Popular tools */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Most popular tools</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Category navigation */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Browse by category</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(CATEGORIES).map(([key, cat]) => {
              const tools = getToolsByCategory(key);
              const FirstIcon = getToolIcon(tools[0]?.slug);
              return (
                <Link
                  key={key}
                  href={`/${cat.slug}`}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-subtle transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-accent-tint text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <FirstIcon className="size-6" />
                    </div>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {tools.length} tools
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cat.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust messaging */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {TRUST_POINTS.map((point) => (
            <div key={point.title} className="flex flex-col items-start gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent-tint text-accent">
                <point.icon className="size-5" />
              </div>
              <h3 className="font-semibold text-foreground">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-[1280px] px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Ready to get started?</h2>
          <p className="mt-3 text-muted-foreground">No signup required. Pick a tool and try it now.</p>
          <div className="mt-6">
            <Button asChild variant="accent" size="lg">
              <Link href="/pdf-tools">Browse all tools</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
