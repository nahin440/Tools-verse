import { HiOutlineEnvelope } from "react-icons/hi2";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Tools Root team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[600px] px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">Contact us</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Questions, feedback, or something not working the way it should? We&apos;d like to hear
        about it.
      </p>

      <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-tint text-accent">
          <HiOutlineEnvelope className="size-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Email us</p>
          <a href="mailto:hello@toolsversa.app" className="text-sm text-accent hover:underline">
            hello@toolsversa.app
          </a>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Since every file you process stays on your own device, we won&apos;t be able to see the
        contents of any file you had trouble with — if you run into an issue with a specific tool,
        it helps to describe what the input file looked like (format, roughly how large, any
        unusual formatting) rather than attaching it.
      </p>
    </div>
  );
}
