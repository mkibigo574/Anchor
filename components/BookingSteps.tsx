import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { bookingSteps } from "@/lib/content";

export function BookingSteps() {
  return (
    <section className="section bg-cream-100">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="eyebrow">Get Started</span>
          <h2 className="h2 mt-4 text-balance">
            Booking Your Support is <span className="accent">Easy</span>
          </h2>
          <p className="lede mt-5 text-pretty">
            Three simple ways to start the conversation — choose what suits you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {bookingSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-8 flex flex-col text-center transition hover:-translate-y-1 hover:shadow-elev"
              >
                <span className="absolute top-6 right-7 font-display font-extrabold text-5xl tracking-tightest text-brand-100 leading-none">
                  {s.step}
                </span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white shadow-soft mx-auto">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display font-bold text-xl text-ink-900 mt-6 tracking-tightlx">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed flex-1">
                  {s.body}
                </p>
                <Link
                  href={s.cta.href}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ochre-500 hover:bg-ochre-400 text-white px-5 py-3 text-sm font-semibold transition"
                >
                  {s.cta.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
