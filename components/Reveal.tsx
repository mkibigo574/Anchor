"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** "block" wraps in a div (default); "stagger" applies the staggered children variant */
  as?: "block" | "stagger";
  /** Extra delay in ms before the reveal kicks in */
  delay?: number;
  /** Trigger threshold (0–1). Default 0.15 */
  threshold?: number;
};

export function Reveal({
  children,
  className = "",
  as = "block",
  delay = 0,
  threshold = 0.15
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (delay > 0) {
              window.setTimeout(() => setShown(true), delay);
            } else {
              setShown(true);
            }
            obs.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  const base = as === "stagger" ? "reveal-stagger" : "reveal";
  return (
    <div
      ref={ref}
      className={`${base} ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
