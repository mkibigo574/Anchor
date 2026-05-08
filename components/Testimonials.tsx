"use client";

import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/content";

const accents = ["bg-brand-500", "bg-ochre-500", "bg-sage-500"];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(
      () => setI((p) => (p + 1) % total),
      6500
    );
    return () => window.clearInterval(t);
  }, [paused, total]);

  const prev = () => setI((p) => (p - 1 + total) % total);
  const next = () => setI((p) => (p + 1) % total);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/mobility-stairs.webp')"
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-700/55"
        aria-hidden
      />

      <div className="container-wide relative py-20 md:py-28 lg:py-32 text-white">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <span className="eyebrow-light">Voices</span>
          <h2 className="h2 mt-4 text-white text-balance">
            Hear From Those <span className="text-ochre-400">We Support</span>.
          </h2>
          <p className="mt-5 text-cream-200 text-pretty text-base md:text-lg leading-relaxed max-w-2xl">
            Participants and families across the Northern Territory share what
            support with Anchor has meant for them.
          </p>
        </div>

        <div className="relative max-w-3xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <figure
                  key={t.author}
                  className="w-full flex-shrink-0 px-1"
                  aria-hidden={idx !== i}
                >
                  <div className="rounded-3xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-8 lg:p-10">
                    <div className="flex items-center justify-between">
                      <Quote
                        className="h-9 w-9 text-ochre-400"
                        fill="currentColor"
                      />
                      <div className="flex gap-0.5 text-ochre-400">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="mt-6 text-white leading-relaxed font-display font-semibold text-lg lg:text-xl tracking-tightlx">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-7 pt-6 border-t border-white/15 flex items-center gap-3">
                      <div
                        className={`h-12 w-12 rounded-full ${
                          accents[idx % accents.length]
                        } text-white grid place-items-center font-bold`}
                      >
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{t.author}</p>
                        <p className="text-xs text-cream-300">{t.role}</p>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/15 text-white transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/15 text-white transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="ml-2 flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-ochre-400" : "w-3 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
