import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { trustSafety } from "@/lib/content";
import { Reveal } from "./Reveal";

export function TrustSafety() {
  return (
    <section className="section bg-cream-100">
      <div className="container-wide grid grid-cols-12 gap-10 lg:gap-16 items-start">
        <Reveal className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
          <span className="eyebrow">{trustSafety.eyebrow}</span>
          <h2 className="h2 mt-4 text-balance">
            <span className="accent">{trustSafety.title}</span>
          </h2>
          {/* TODO: Restore NDIS Registered Provider badge once owner receives NDIS registration licence */}
          {/* <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-white ring-1 ring-ink-100 px-5 py-4 shadow-soft">
            <Image
              src="/images/ndis-logo.png"
              alt="NDIS"
              width={96}
              height={40}
              className="h-12 w-auto"
            />
            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-[0.18em] text-ink-500 font-bold">
                Registered Provider
              </p>
              <p className="font-display font-bold text-ink-900">NDIS</p>
            </div>
          </div> */}
        </Reveal>

        <Reveal delay={120} className="col-span-12 lg:col-span-7">
          <div className="space-y-5 text-ink-700 leading-relaxed text-pretty text-lg">
            {trustSafety.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <Link href={trustSafety.ctaHref} className="btn-primary">
              {trustSafety.ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
