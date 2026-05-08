import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-cream-100 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b pointer-events-none" />
      <div className="absolute -top-24 -right-32 h-[480px] w-[480px] rounded-full bg-brand-100 blur-3xl opacity-60" />
      <div className="absolute top-1/3 -left-48 h-[420px] w-[420px] rounded-full bg-ochre-100 blur-3xl opacity-50" />

      <div className="container-wide relative pt-12 md:pt-20 pb-20 md:pb-28">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          <div className="col-span-12 lg:col-span-7">
            <span className="pill">
              <span className="dot-live h-2 w-2" />
              <span className="ml-1.5">Now accepting NDIS participants</span>
            </span>

            <h1 className="h1 mt-7 text-balance">
              Trusted NDIS care across the{" "}
              <span className="text-brand-500">Northern Territory</span>.
            </h1>

            <p className="lede mt-7 max-w-xl text-pretty">
              Anchor delivers person-centred disability and community-based
              supports — helping participants live independently, confidently,
              and with dignity.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a free consultation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50">
                  <ShieldCheck className="h-4.5 w-4.5 text-brand-500" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs text-ink-500">Registered</p>
                  <p className="text-sm font-semibold text-ink-900">
                    NDIS Provider
                  </p>
                </div>
              </div>
              <div className="h-10 w-px bg-ink-200 hidden sm:block" />
              <div className="flex items-center gap-2.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-ochre-500 fill-ochre-500"
                    />
                  ))}
                </div>
                <p className="text-sm text-ink-700">
                  <span className="font-semibold">Trusted</span> by Darwin
                  families
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-ink-100 shadow-deep ring-1 ring-ink-200">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=85')"
                  }}
                />
              </div>

              <div className="hidden md:block absolute -bottom-8 -left-8 w-44 aspect-square rounded-2xl overflow-hidden ring-4 ring-white shadow-elev">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=600&q=85')"
                  }}
                />
              </div>

              <div className="absolute -top-5 -right-5 lg:-right-8 bg-white rounded-2xl shadow-elev p-4 flex items-center gap-3 ring-1 ring-ink-100">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sage-100 text-sage-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9 12l2 2 4-4"/></svg>
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-ink-500 font-semibold">
                    Live now
                  </p>
                  <p className="text-sm font-bold text-ink-900">
                    24/7 Support
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-ink-900/95 backdrop-blur text-white rounded-2xl p-4 max-w-[200px] shadow-deep">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex -space-x-2">
                    {["#F47A20", "#2D9CFF", "#1E5AA8"].map((c, i) => (
                      <span
                        key={i}
                        className="h-6 w-6 rounded-full ring-2 ring-ink-900"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-semibold">+24 staff</p>
                </div>
                <p className="text-xs text-cream-200 leading-snug">
                  Qualified support workers ready in Darwin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-200 bg-white relative">
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4 divide-x divide-ink-200">
          {[
            { k: "11+", v: "Tailored NDIS supports", c: "text-brand-500" },
            { k: "24 / 7", v: "Care availability", c: "text-ochre-500" },
            { k: "NT-wide", v: "Urban, regional & remote", c: "text-sage-500" },
            { k: "100%", v: "Person-centred", c: "text-brand-500" }
          ].map((item, i) => (
            <div key={i} className="px-5 lg:px-8 py-8 first:pl-0 last:pr-0">
              <p
                className={`font-display text-3xl md:text-4xl font-extrabold tracking-tightest ${item.c}`}
              >
                {item.k}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-500 font-semibold">
                {item.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
