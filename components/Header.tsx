"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Search as SearchIcon,
  ChevronDown
} from "lucide-react";
import { Logo } from "./Logo";
import { TopBar } from "./TopBar";
import { SearchModal } from "./SearchModal";
import { navLinks, NavLink } from "@/lib/content";

function HasChildren(l: NavLink): l is NavLink & { children: NavLink[] } {
  return Array.isArray(l.children) && l.children.length > 0;
}

function DesktopItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<number | null>(null);

  if (!HasChildren(link)) {
    return (
      <Link
        href={link.href || "#"}
        className="text-sm font-semibold text-ink-700 hover:text-brand-500 transition py-2"
      >
        {link.label}
      </Link>
    );
  }

  const onEnter = () => {
    if (closeRef.current) window.clearTimeout(closeRef.current);
    setOpen(true);
  };
  const onLeave = () => {
    closeRef.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-semibold text-ink-700 hover:text-brand-500 transition py-2"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {link.href ? (
          <Link href={link.href}>{link.label}</Link>
        ) : (
          <span>{link.label}</span>
        )}
        <ChevronDown
          className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 ${
            link.label === "Services" ? "w-[28rem]" : "w-72"
          } rounded-2xl bg-white shadow-deep ring-1 ring-ink-100 p-2`}
        >
          <ul
            className={
              link.label === "Services"
                ? "grid grid-cols-2 gap-1"
                : "flex flex-col gap-1"
            }
          >
            {link.children.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href || "#"}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-2 rounded-xl px-3 py-2.5 hover:bg-cream-100 group"
                >
                  <span className="text-sm font-medium text-ink-800 group-hover:text-brand-500 leading-snug">
                    {c.label}
                  </span>
                  {c.external && (
                    <ArrowUpRight className="h-3.5 w-3.5 text-ink-400 ml-auto flex-shrink-0 mt-0.5" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileItem({
  link,
  onNavigate
}: {
  link: NavLink;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!HasChildren(link)) {
    return (
      <Link
        href={link.href || "#"}
        onClick={onNavigate}
        className="flex items-center justify-between py-3 px-2 rounded-xl hover:bg-cream-100"
      >
        <span className="font-display text-base font-bold text-ink-900">
          {link.label}
        </span>
        <ArrowUpRight className="h-4 w-4 text-ink-400" />
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-3 px-2 rounded-xl hover:bg-cream-100"
      >
        <span className="font-display text-base font-bold text-ink-900">
          {link.label}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-ink-500 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <ul className="pl-3 mb-2 border-l border-ink-100 ml-2">
          {link.children.map((c) => (
            <li key={c.label}>
              <a
                href={c.href || "#"}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                onClick={onNavigate}
                className="flex items-center justify-between py-2 px-2 text-sm text-ink-700 hover:text-brand-500"
              >
                <span>{c.label}</span>
                {c.external && (
                  <ArrowUpRight className="h-3.5 w-3.5 text-ink-400" />
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50">
        <TopBar />
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md border-b border-ink-100 shadow-soft"
              : "bg-white/90 border-b border-ink-100/60"
          }`}
        >
          <div className="container-wide flex items-center justify-between h-[72px]">
            <Logo />

            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((l) => (
                <DesktopItem key={l.label} link={l} />
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-cream-100 text-ink-700"
              >
                <SearchIcon className="h-4.5 w-4.5" />
              </button>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="xl:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-cream-100 text-ink-900"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="xl:hidden border-t border-ink-100 bg-white max-h-[80vh] overflow-y-auto">
              <div className="container-wide py-5 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <MobileItem
                    key={l.label}
                    link={l}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-4 text-sm w-full"
                >
                  Schedule a Service
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
