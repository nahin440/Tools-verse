export function Logo({ className = "size-7" }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="20" rx="4" fill="var(--color-foreground)" fillOpacity="0.08" />
      <rect x="12" y="8" width="16" height="20" rx="4" fill="var(--color-accent)" />
      <path
        d="M18 15.5L21 18.5L18 21.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 18.5H21" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LogoMark({ className = "size-8" }) {
  return (
    <div className={className + " flex items-center gap-2"}>
      <Logo className="size-7 shrink-0" />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">FileFusion</span>
    </div>
  );
}
