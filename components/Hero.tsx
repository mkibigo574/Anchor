"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { heroCopy } from "@/lib/content";

const slides = [
  heroCopy.bgImage,
  "/images/accessible-transport.jpg",
  "/images/companion-care.jpg",
  "/images/mobility-support.jpg"
];

export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(
      () => setI((p) => (p + 1) % slides.length),
      6000
    );
    return () => window.clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cross-fading background images with slow ken-burns zoom */}
      {slides.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        >
          <div
            key={`${src}-${idx === i ? "active" : "idle"}`}
            className={`absolute inset-0 bg-cover bg-center ${
              idx === i ? "animate-ken-burns" : ""
            }`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        </div>
      ))}
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-900/65 to-brand-700/30"
        aria-hidden
      />
      <div
        className="absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full bg-ochre-500/20 blur-3xl"
        aria-hidden
      />

      <div className="container-wide relative pt-20 md:pt-28 pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-3xl text-white animate-fade-up-lg">
          <span className="pill-light !pl-1">
            <span className="grid place-items-center rounded-full bg-white px-1.5 py-1 shadow-sm">
              <Image
                src="/images/ndis-logo.png"
                alt="NDIS"
                width={56}
                height={24}
                className="h-4 w-auto"
              />
            </span>
            Registered NDIS Provider
          </span>

          <h1 className="font-display font-extrabold tracking-tightest leading-[1.04] text-[clamp(2.5rem,5.4vw,4.75rem)] mt-7 text-white text-balance">
            {heroCopy.headlineLine1}
            <br />
            <span className="text-ochre-400">{heroCopy.headlineLine2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-cream-200 text-pretty">
            {heroCopy.sub}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href={heroCopy.primaryCta.href} className="btn-accent">
              {heroCopy.primaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={heroCopy.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              {heroCopy.secondaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Slide indicator */}
          <div className="mt-12 flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show hero image ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i
                    ? "w-8 bg-ochre-400"
                    : "w-3 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
