import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-ink-900";
  const sub = variant === "light" ? "text-cream-300" : "text-ink-500";

  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-brand-500 shadow-soft overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-br from-brand-400 to-brand-700" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v15" />
          <path d="M5 12h14" />
          <path d="M5 12a7 7 0 0 0 14 0" />
        </svg>
      </span>
      <span className={`flex flex-col leading-none ${text}`}>
        <span className="font-display font-extrabold text-[19px] tracking-tightlx">
          Anchor
        </span>
        <span className={`mt-1 text-[10px] uppercase tracking-[0.18em] font-semibold ${sub}`}>
          Nursing &amp; Disability
        </span>
      </span>
    </Link>
  );
}
