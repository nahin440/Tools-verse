import { HiOutlineLockClosed, HiOutlineBolt, HiOutlineGlobeAlt } from "react-icons/hi2";

export const metadata = {
  title: "About",
  description: "Why FileFusion exists and how it works.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    icon: HiOutlineLockClosed,
    title: "Private by architecture",
    description:
      "Every tool runs entirely in your browser. There's no upload step because there's no server-side endpoint to upload to — your files simply never leave your device.",
  },
  {
    icon: HiOutlineBolt,
    title: "Fast because it's local",
    description:
      "No round-trip to a server means processing starts the instant you drop a file, and isn't limited by anyone else's server queue.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "No account needed",
    description: "Every tool works immediately, for free, without creating an account or installing anything.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[760px] px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        About FileFusion
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        FileFusion is a collection of file conversion and editing tools built on a simple premise:
        your files are yours, and a tool that merges two PDFs shouldn&apos;t need to see the inside
        of either one.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="flex flex-col items-start gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-accent-tint text-accent">
              <p.icon className="size-5" />
            </div>
            <h3 className="font-semibold text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-neutral mt-16 max-w-none space-y-4 text-sm leading-relaxed text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">How the tools actually work</h2>
        <p>
          Every conversion on this site runs using JavaScript and WebAssembly directly in your
          browser tab. PDF operations use a real PDF engine; audio and video tools use a real
          ffmpeg build compiled to WebAssembly — the same underlying engine used by professional
          video tools, just running on your device instead of a server; scanned-document text
          recognition uses a real OCR engine, also running locally.
        </p>
        <p>
          This means the quality of the underlying engines is the same as you&apos;d get from
          desktop software, without the download, and without your files passing through anyone
          else&apos;s server along the way.
        </p>
      </div>
    </div>
  );
}
