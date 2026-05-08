import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";

const accentBg = [
  "from-brand-500 to-brand-700",
  "from-ochre-400 to-ochre-600",
  "from-sage-500 to-sage-700",
  "from-brand-400 to-brand-600",
  "from-ochre-500 to-ochre-700",
  "from-sage-400 to-sage-600"
];

export function ServicesGrid({
  limit,
  showHeading = true
}: {
  limit?: number;
  showHeading?: boolean;
}) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="section bg-cream-100">
      <div className="container-wide">
        {showHeading && (
          <div className="grid grid-cols-12 gap-8 items-end mb-14 lg:mb-16">
            <div className="col-span-12 lg:col-span-7">
              <span className="eyebrow">Our Services</span>
              <h2 className="h2 mt-4 text-balance">
                NDIS supports designed to{" "}
                <span className="accent">grow with you</span>.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <p className="lede text-pretty">
                Eleven tailored services covering everything from 24/7 supported
                living to clinically informed community nursing.
              </p>
            </div>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => {
            const Icon = s.icon;
            const grad = accentBg[i % accentBg.length];
            return (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="group card card-hover p-7 flex flex-col"
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

                <h3 className="font-display font-bold text-lg lg:text-[19px] tracking-tightlx text-ink-900 mt-7 leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed flex-1">
                  {s.short}
                </p>

                <span className="mt-6 pt-5 border-t border-ink-100 inline-flex items-center justify-between text-sm font-semibold text-ink-900 group-hover:text-brand-500 transition">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>

        {limit && (
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-white p-8 lg:p-10 shadow-soft ring-1 ring-ink-100">
            <div>
              <p className="font-display text-xl lg:text-2xl font-bold tracking-tightlx text-ink-900">
                See all {services.length} services we offer
              </p>
              <p className="mt-1.5 text-ink-600 text-sm">
                Showing {limit} highlights — many more available NT-wide.
              </p>
            </div>
            <Link href="/services" className="btn-primary">
              Browse all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
