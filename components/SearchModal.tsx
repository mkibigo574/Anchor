"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Search, X, ArrowUpRight } from "lucide-react";
import { services, navLinks, NavLink } from "@/lib/content";

type Hit = { label: string; href: string; group: string };

function flattenNav(): Hit[] {
  const out: Hit[] = [];
  const walk = (l: NavLink) => {
    if (l.href && !l.external) out.push({ label: l.label, href: l.href, group: "Pages" });
    l.children?.forEach(walk);
  };
  navLinks.forEach(walk);
  return out;
}

export function SearchModal({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");

  const corpus = useMemo<Hit[]>(() => {
    const fromServices = services.map((s) => ({
      label: s.title,
      href: `/services#${s.slug}`,
      group: "Services"
    }));
    const fromPages = flattenNav();
    return [...fromPages, ...fromServices];
  }, []);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return corpus.slice(0, 8);
    return corpus
      .filter((h) => h.label.toLowerCase().includes(t))
      .slice(0, 12);
  }, [q, corpus]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[12vh] px-4 bg-ink-900/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div
        className="w-full max-w-2xl rounded-3xl bg-white shadow-deep ring-1 ring-ink-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-ink-100">
          <Search className="h-5 w-5 text-ink-400" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search services and pages…"
            className="flex-1 outline-none text-base placeholder:text-ink-400 text-ink-900"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="grid h-8 w-8 place-items-center rounded-full text-ink-500 hover:bg-cream-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="p-6 text-sm text-ink-500">
              No matches for &ldquo;{q}&rdquo;.
            </p>
          ) : (
            <ul className="divide-y divide-ink-100">
              {results.map((r) => (
                <li key={`${r.group}-${r.href}-${r.label}`}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl hover:bg-cream-100 transition"
                  >
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-ink-400 font-bold">
                        {r.group}
                      </p>
                      <p className="text-sm font-semibold text-ink-900 truncate">
                        {r.label}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-ink-400" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
