"use client";

import { useEffect, useState } from "react";
import { secondaryValues } from "@/lib/content";

function Card({ s }: { s: (typeof secondaryValues)[number] }) {
  const Icon = s.icon;
  return (
    <div className="h-full rounded-2xl bg-cream-100 ring-1 ring-ink-100 p-5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 text-white shadow-soft">
        <Icon className="h-4.5 w-4.5" strokeWidth={2} />
      </span>
      <p className="mt-4 font-display font-bold text-[15px] text-ink-900 leading-snug">
        {s.title}
      </p>
      <p className="mt-1.5 text-xs text-ink-600 leading-relaxed">{s.body}</p>
    </div>
  );
}

export function SecondaryValues() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = secondaryValues.length;

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(
      () => setI((p) => (p + 1) % total),
      4500
    );
    return () => window.clearInterval(t);
  }, [paused, total]);

  return (
    <div className="mt-10">
      {/* Mobile: horizontal auto-sliding carousel */}
      <div className="sm:hidden">
        <div
          className="overflow-hidden"
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
            {secondaryValues.map((s, idx) => (
              <div
                key={s.title}
                className="flex-shrink-0 w-[85%]"
                aria-hidden={idx !== i}
              >
                <Card s={s} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-1.5">
          {secondaryValues.map((_, idx) => (
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

      {/* sm+: 3-up grid */}
      <div className="hidden sm:grid gap-4 sm:grid-cols-3">
        {secondaryValues.map((s) => (
          <Card key={s.title} s={s} />
        ))}
      </div>
    </div>
  );
}
