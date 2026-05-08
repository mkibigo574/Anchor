import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { secondaryValues } from "@/lib/content";
import { Reveal } from "./Reveal";

export function AboutBlock() {
  return (
    <section className="section bg-white">
      <div className="container-wide grid grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Tall portrait image — ~40% width on desktop */}
        <Reveal className="col-span-12 lg:col-span-5 relative">
          <figure className="aspect-[4/5] rounded-3xl overflow-hidden bg-ink-100 shadow-elev ring-1 ring-ink-100">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/care-couple.webp')"
              }}
            />
          </figure>
          <div className="absolute -bottom-6 left-3 lg:-left-8 bg-white rounded-2xl shadow-deep p-4 sm:p-5 max-w-[200px] sm:max-w-[230px] ring-1 ring-ink-100">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-3xl text-brand-500 tracking-tightest">
                11+
              </span>
              <span className="text-xs text-ink-500 font-semibold">
                services
              </span>
            </div>
            <p className="mt-1 text-sm text-ink-700 leading-snug">
              Tailored NDIS supports across the Northern Territory
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="col-span-12 lg:col-span-7 lg:pt-2">
          <span className="eyebrow">About Us</span>
          <h2 className="h2 mt-4 text-balance">
            More than a service provider — a{" "}
            <span className="accent">partner</span> in your independence.
          </h2>

          <div className="mt-6 space-y-4 text-ink-700 leading-relaxed text-pretty">
            <p>
              Anchor Nursing &amp; Disability Support Services is a registered
              NDIS provider based in Darwin, delivering high-quality,
              person-centred disability and community-based supports across the
              Northern Territory.
            </p>
            <p>
              We work alongside participants — building capacity, strengthening
              independence, and giving people genuine choice and control across
              every aspect of their lives. Our supports reach urban, regional,
              remote, and very remote communities NT-wide.
            </p>
            <p>
              Our commitment is simple: deliver safe, ethical, and clinically
              informed services that meet the NDIS Practice Standards, and walk
              alongside participants for the long term.
            </p>
          </div>

          {/* Three secondary values as small cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {secondaryValues.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl bg-cream-100 ring-1 ring-ink-100 p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 text-white shadow-soft">
                    <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <p className="mt-4 font-display font-bold text-[15px] text-ink-900 leading-snug">
                    {s.title}
                  </p>
                  <p className="mt-1.5 text-xs text-ink-600 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Link href="/about" className="btn-primary">
              More About Us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
