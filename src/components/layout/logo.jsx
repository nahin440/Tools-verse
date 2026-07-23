import Image from "next/image";

export function Logo({ className = "size-7" }) {
  return (
    <Image
      src="https://i.ibb.co.com/BdscVkK/vercel.jpg"
      alt="Tools Root Logo"
      width={28}
      height={28}
      className={`${className} shrink-0 object-contain`}
      priority
    />
  );
}

export function LogoMark({ className = "" }) {
  return (
    <div className={`${className} flex items-center gap-2`}>
      <Logo className="size-7" />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        Tools Root
      </span>
    </div>
  );
}