"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
};

const slides: Slide[] = [
  {
    image: "/images/accessible-transport.jpg",
    eyebrow: "Community Access",
    title: "Door-to-door transport, your way.",
    body: "Wheelchair-accessible vehicles and trained drivers — getting you to appointments, work, and the people you love.",
    href: "/services",
    cta: "See transport supports"
  },
  {
    image: "/images/personal-care.jpg",
    eyebrow: "Personal Care",
    title: "Daily support, delivered with dignity.",
    body: "From morning routines to mobility, our team helps you live the day on your own terms — at home, with respect.",
    href: "/services",
    cta: "Explore daily living"
  },
  {
    image: "/images/mobility-support.jpg",
    eyebrow: "Capacity Building",
    title: "Build skills, build independence.",
    body: "Tailored supports that grow with you — practical goals, steady progress, and a team that genuinely shows up.",
    href: "/services",
    cta: "Browse services"
  },
  {
    image: "/images/companion-care.jpg",
    eyebrow: "Companionship",
    title: "Support that feels like family.",
    body: "Consistent support workers who learn your routines, your stories, and the small things that make a big difference.",
    href: "/about",
    cta: "Meet our approach"
  },
  {
    image: "/images/clinical-team.jpg",
    eyebrow: "Clinical Oversight",
    title: "A skilled team behind every visit.",
    body: "Allied health input and clinical governance — so the supports you receive are safe, evidence-based, and effective.",
    href: "/services",
    cta: "Our standards"
  }
];

export function HomeCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setI((p) => (p + 1) % total), 6000);
    return () => window.clearInterval(t);
  }, [paused, total]);

  const prev = () => setI((p) => (p - 1 + total) % total);
  const next = () => setI((p) => (p + 1) % total);

  return (
    <section
      className="section bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-wide">
        <Reveal className="max-w-2xl mb-10 lg:mb-14">
          <span className="eyebrow">Life with Anchor</span>
          <h2 className="h2 mt-4 text-balance">
            Real <span className="accent">support</span>, in real moments.
          </h2>
          <p className="lede mt-5 text-pretty">
            A glimpse of what NDIS supports look like day to day — at home, in
            the community, and everywhere in between.
          </p>
        </Reveal>

        <div className="relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-ink-100">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {slides.map((s, idx) => (
              <article
                key={s.image}
                className="relative w-full flex-shrink-0"
                aria-hidden={idx !== i}
              >
                <div
                  className="aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] bg-cover bg-center"
                  style={{ backgroundImage: `url('${s.image}')` }}
                  role="img"
                  aria-label={s.title}
                />
                {/* Bottom-to-top gradient for mobile readability */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/55 to-brand-950/15 sm:hidden"
                  aria-hidden
                />
                {/* Left-to-right gradient for tablet/desktop */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-900/55 to-transparent hidden sm:block"
                  aria-hidden
                />
                <div className="absolute inset-0 flex items-end md:items-center">
                  <div className="px-5 py-7 sm:px-8 sm:py-9 md:px-12 md:py-12 lg:px-16 lg:py-16 max-w-2xl text-white">
                    <span className="pill-light">{s.eyebrow}</span>
                    <h3 className="font-display font-extrabold tracking-tightest leading-[1.1] text-[clamp(1.35rem,4.5vw,2.75rem)] mt-4 sm:mt-5 text-balance text-white drop-shadow-md">
                      {s.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-cream-200 text-pretty text-sm md:text-base leading-relaxed max-w-lg line-clamp-3 sm:line-clamp-none">
                      {s.body}
                    </p>
                    <Link
                      href={s.href}
                      className="btn-accent mt-5 sm:mt-6 w-full sm:w-auto"
                    >
                      {s.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous slide"
            className="hidden md:grid absolute left-5 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur hover:bg-white/25 text-white transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="hidden md:grid absolute right-5 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur hover:bg-white/25 text-white transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-cream-100 ring-1 ring-ink-100 hover:bg-cream-200 text-ink-900 transition"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-cream-100 ring-1 ring-ink-100 hover:bg-cream-200 text-ink-900 transition"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1.5 md:ml-0">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-brand-500" : "w-3 bg-ink-200 hover:bg-ink-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-auto text-xs text-ink-500 font-medium tabular-nums">
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
