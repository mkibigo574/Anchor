import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { heroCopy } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroCopy.bgImage}')` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-900/65 to-brand-700/30"
        aria-hidden
      />
      <div
        className="absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full bg-ochre-500/20 blur-3xl"
        aria-hidden
      />

      <div className="container-wide relative pt-20 md:pt-28 pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-3xl text-white">
          <span className="pill-light">
            <ShieldCheck className="h-3.5 w-3.5 text-sage-300" />
            Registered NDIS Provider
          </span>

          <h1 className="font-display font-extrabold tracking-tightest leading-[1.04] text-[clamp(2.5rem,5.4vw,4.75rem)] mt-7 text-white text-balance">
            {heroCopy.headlineLine1}
            <br />
            <span className="text-ochre-400">{heroCopy.headlineLine2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-cream-200 text-pretty">
            {heroCopy.sub}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href={heroCopy.primaryCta.href} className="btn-accent">
              {heroCopy.primaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={heroCopy.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              {heroCopy.secondaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
