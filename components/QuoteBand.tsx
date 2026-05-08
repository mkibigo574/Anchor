import { Quote } from "lucide-react";
import { inspirationalQuote } from "@/lib/content";

export function QuoteBand() {
  return (
    <section className="bg-brand-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-ochre-500/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-sage-500/15 blur-3xl" />

      <div className="container-tight relative py-20 md:py-28 lg:py-32 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ochre-500 text-white shadow-soft mx-auto">
          <Quote className="h-6 w-6" fill="currentColor" />
        </span>
        <blockquote className="mt-8 font-display font-extrabold tracking-tightest leading-[1.15] text-[clamp(1.75rem,4.4vw,3.25rem)] text-white text-balance">
          &ldquo;{inspirationalQuote}&rdquo;
        </blockquote>
        <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ochre-400 font-bold">
          <span className="h-px w-8 bg-ochre-400/60" />
          Anchor NDSS
          <span className="h-px w-8 bg-ochre-400/60" />
        </div>
      </div>
    </section>
  );
}
