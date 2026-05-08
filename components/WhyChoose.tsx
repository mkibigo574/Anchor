import { whyChoose } from "@/lib/content";
import { Sparkles, Users, Heart, Compass } from "lucide-react";

const icons = [Sparkles, Users, Heart, Compass];

export function WhyChoose() {
  return (
    <section className="relative section bg-brand-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />
      <div className="absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-sage-500/15 blur-3xl" />

      <div className="container-wide relative">
        <div className="grid grid-cols-12 gap-10 mb-14 lg:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <span className="eyebrow-light">Why Anchor</span>
            <h2 className="h2 mt-4 text-balance text-white">
              Built around the participant —{" "}
              <span className="text-ochre-400">not the system</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="lede text-cream-200 text-pretty">
              Our supports are designed to grow your skills and confidence —
              never your dependence on us. Choice and control sit with you, in
              every conversation.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((w, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={w.title}
                className="rounded-2xl bg-white/5 backdrop-blur-sm p-7 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition flex flex-col"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ochre-500 text-white shadow-soft">
                  <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                </span>
                <h3 className="font-display font-bold text-lg tracking-tightlx text-white mt-6">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm text-cream-200 leading-relaxed flex-1">
                  {w.body}
                </p>
                <p className="mt-5 pt-5 border-t border-white/10 text-xs uppercase tracking-[0.14em] text-cream-300 font-semibold">
                  0{i + 1} reason
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
