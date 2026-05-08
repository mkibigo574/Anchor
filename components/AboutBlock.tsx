import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function AboutBlock() {
  const points = [
    "Person-centred & strength-based",
    "Clinically informed nursing care",
    "Culturally safe across remote NT",
    "NDIS Practice Standards compliant"
  ];

  return (
    <section className="section bg-white">
      <div className="container-wide grid grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="col-span-12 lg:col-span-6 relative">
          <div className="grid grid-cols-6 gap-3 lg:gap-4">
            <figure className="col-span-4 aspect-[4/5] rounded-3xl overflow-hidden bg-ink-100 shadow-elev">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=85')"
                }}
              />
            </figure>
            <figure className="col-span-2 aspect-[3/4] rounded-3xl overflow-hidden bg-ink-100 mt-12 shadow-soft">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=85')"
                }}
              />
            </figure>
          </div>

          <div className="absolute -bottom-6 left-6 lg:-bottom-8 lg:left-12 bg-white rounded-2xl shadow-elev p-5 max-w-[230px] ring-1 ring-ink-100">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-3xl text-brand-500 tracking-tightest">
                11+
              </span>
              <span className="text-xs text-ink-500 font-semibold">
                services
              </span>
            </div>
            <p className="mt-1 text-sm text-ink-700">
              Tailored NDIS supports across the Northern Territory
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:pt-4">
          <span className="eyebrow">About Anchor</span>
          <h2 className="h2 mt-4 text-balance">
            More than a service provider — a{" "}
            <span className="accent">partner</span> in your independence.
          </h2>

          <p className="lede mt-6 text-pretty">
            Anchor is a registered NDIS provider based in Darwin. We deliver
            person-centred, clinically informed supports designed to help
            participants live independently — with genuine choice and control.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2.5 text-sm text-ink-800"
              >
                <CheckCircle2 className="h-5 w-5 text-brand-500 flex-shrink-0" />
                <span className="font-medium">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/about" className="btn-primary">
              Learn about us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-ghost">
              View services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
