"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, company } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-ink-100 shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-[76px]">
        <Logo />

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-700 hover:text-brand-500 transition relative"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${company.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand-500 transition"
          >
            <Phone className="h-4 w-4 text-ochre-500" />
            {company.phone}
          </a>
          <Link href="/contact" className="btn-primary text-sm py-3 px-5">
            Book a Service
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <div className="container-wide py-6 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3.5 px-2 rounded-xl hover:bg-cream-100"
              >
                <span className="font-display text-lg font-bold text-ink-900">
                  {l.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-400" />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 text-sm w-full"
            >
              Book a Service
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${company.phoneRaw}`}
              className="mt-3 flex items-center justify-center gap-2 text-sm text-ink-600"
            >
              <Phone className="h-4 w-4 text-ochre-500" />
              {company.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
