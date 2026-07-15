import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { company } from "@/lib/content";

export function CtaBanner() {
  return (
    <section className="bg-white">
      <div className="container-wide py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 text-white px-8 py-16 md:px-14 md:py-20 lg:px-20 lg:py-24 shadow-deep">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=85')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-900/85 to-brand-700/60" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-ochre-500/20 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="pill-light">
                <span className="dot-live h-2 w-2" />
                <span className="ml-1.5">Free consultation available</span>
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tightest leading-[1.05] mt-6 text-white text-balance">
                Find the support that's{" "}
                <span className="text-ochre-400">right for you</span>.
              </h2>
              <p className="mt-6 text-cream-200 max-w-xl leading-relaxed text-pretty text-lg">
                Speak with our intake team about your NDIS plan, your goals, and
                how we can help. No obligation, no pressure.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="btn-accent w-full">
                  Book a free consultation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition w-full"
                >
                  <Phone className="h-4 w-4" />
                  Call {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
