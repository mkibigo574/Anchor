import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { ndisBanner } from "@/lib/content";

export function NDISBanner() {
  return (
    <section className="bg-brand-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-ochre-500/25 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-sage-300/15 blur-3xl" />

      <div className="container-wide relative py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-12 gap-10 items-center">
          {/* Badge */}
          <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-white/15 blur-xl" />
              <div className="relative rounded-3xl bg-white p-7 shadow-deep ring-1 ring-white/40 max-w-[260px]">
                <div className="flex justify-center">
                  <Image
                    src="/images/ndis-logo.png"
                    alt="NDIS"
                    width={180}
                    height={75}
                    className="h-[72px] w-auto"
                  />
                </div>
                <p className="mt-5 text-center font-display font-extrabold text-xl text-ink-900 tracking-tightlx leading-tight">
                  Registered Provider
                </p>
                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-sage-700 font-semibold">
                  <BadgeCheck className="h-4 w-4" />
                  Approved &amp; Audited
                </div>
              </div>
            </div>
          </div>

          {/* Heading + paragraphs */}
          <div className="col-span-12 lg:col-span-8">
            <h2 className="h2 text-white text-balance">
              {ndisBanner.title}
            </h2>
            <div className="mt-6 space-y-4 text-cream-100/95 leading-relaxed text-pretty">
              {ndisBanner.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href={ndisBanner.ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-700 hover:bg-cream-100 hover:text-brand-800 px-6 py-3.5 text-sm font-semibold transition shadow-soft"
              >
                {ndisBanner.ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
