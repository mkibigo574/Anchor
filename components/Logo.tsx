import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  if (variant === "light") {
    // Dark backgrounds (footer): icon + white wordmark so it stays legible
    return (
      <Link href="/" className="inline-flex items-center gap-3 group">
        <img
          src="/images/anchor-icon.png"
          alt=""
          width={44}
          height={43}
          className="h-11 w-auto select-none"
          draggable={false}
        />
        <span className="flex flex-col leading-none text-white">
          <span className="font-display font-extrabold text-[22px] tracking-tightlx">
            Anchor
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-cream-300">
            Nursing &amp; Disability Support Services
          </span>
        </span>
      </Link>
    );
  }

  // Light backgrounds (header / default): full brand lockup
  return (
    <Link href="/" className="inline-flex items-center group" aria-label="Anchor — Nursing & Disability Support Services home">
      <img
        src="/images/anchor-logo.png"
        alt="Anchor — Nursing & Disability Support Services"
        width={903}
        height={283}
        className="h-11 md:h-12 w-auto select-none"
        draggable={false}
      />
    </Link>
  );
}
