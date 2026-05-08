import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { BookingSection } from "@/components/BookingSection";
import { services } from "@/lib/content";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Our Services",
  description:
    "Eleven tailored NDIS services delivered by Anchor NDSS across the Northern Territory — SIL, ILO, community nursing, support coordination, and more."
};

const accentBg = [
  "from-brand-500 to-brand-700",
  "from-ochre-400 to-ochre-600",
  "from-sage-500 to-sage-700"
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Eleven tailored supports for"
        emphasized="every stage of independence"
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              const grad = accentBg[i % accentBg.length];
              return (
                <article
                  key={s.slug}
                  id={s.slug}
                  className="scroll-mt-32 card card-hover p-7 flex flex-col"
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-soft`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span className="text-xs font-mono text-ink-400 mt-1.5 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-lg lg:text-[19px] tracking-tightlx text-ink-900 mt-7 leading-snug">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                    {s.long}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs text-sage-600 font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    Available NT-wide
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 pt-5 border-t border-ink-100 inline-flex items-center justify-between text-sm font-semibold text-ink-900 hover:text-brand-500 transition group"
                  >
                    Enquire about this service
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <BookingSection />
      <CtaBanner />
    </>
  );
}
