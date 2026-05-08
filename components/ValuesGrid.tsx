"use client";

import { useEffect, useState } from "react";
import { values } from "@/lib/content";
import { Reveal } from "./Reveal";

const accents = [
  { bg: "bg-brand-50", fg: "text-brand-600", ring: "ring-brand-100" },
  { bg: "bg-ochre-50", fg: "text-ochre-600", ring: "ring-ochre-100" },
  { bg: "bg-sage-50", fg: "text-sage-600", ring: "ring-sage-100" },
  { bg: "bg-brand-50", fg: "text-brand-600", ring: "ring-brand-100" }
];

function Card({
  v,
  accent
}: {
  v: (typeof values)[number];
  accent: (typeof accents)[number];
}) {
  const Icon = v.icon;
  return (
    <div className="h-full rounded-2xl bg-white p-6 shadow-elev ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-deep">
      <span
        className={`grid h-12 w-12 place-items-center rounded-xl ${accent.bg} ${accent.fg} ring-1 ${accent.ring}`}
      >
        <Icon className="h-5.5 w-5.5" strokeWidth={2} />
      </span>
      <h3 className="font-display font-bold text-lg tracking-tightlx text-ink-900 mt-5">
        {v.title}
      </h3>
      <p className="mt-2 text-sm text-ink-600 leading-relaxed">{v.body}</p>
    </div>
  );
}

export function ValuesGrid({ overlap = true }: { overlap?: boolean }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = values.length;

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(
      () => setI((p) => (p + 1) % total),
      4500
    );
    return () => window.clearInterval(t);
  }, [paused, total]);

  return (
    <section
      className={`relative z-10 ${
        overlap ? "-mt-16 md:-mt-20" : "section bg-white"
      }`}
    >
      {/* Mobile: horizontal auto-sliding carousel */}
      <div className="sm:hidden">
        <div
          className="overflow-hidden px-5"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className="flex gap-4"
            style={{
              transform: `translateX(calc(-${i * 85}% - ${i}rem))`,
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="flex-shrink-0 w-[85%]"
                aria-hidden={idx !== i}
              >
                <Card v={v} accent={accents[idx % accents.length]} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-1.5">
          {values.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show value ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i
                  ? "w-8 bg-brand-500"
                  : "w-3 bg-ink-200 hover:bg-ink-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* sm+: 2-up / 4-up grid */}
      <div className="hidden sm:block container-wide">
        <Reveal
          as="stagger"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((v, idx) => (
            <Card
              key={v.title}
              v={v}
              accent={accents[idx % accents.length]}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
