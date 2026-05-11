"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";
import { Logo } from "./Logo";
import { company, services, footerLinks, socials } from "@/lib/content";

const NEWSLETTER_ACCESS_KEY = "c1a24f69-93dd-42e7-9e28-5c6bd5b89903";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: NEWSLETTER_ACCESS_KEY,
          subject: "New Newsletter Signup — Anchor NDSS",
          from_name: "Anchor NDSS Newsletter",
          email,
          message: `New newsletter signup: ${email}`
        })
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-brand-950 text-cream-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.035] pointer-events-none" />
      <div className="absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-brand-500/15 blur-3xl" />

      <div className="container-wide relative pt-20 pb-10 lg:pt-24">
        <div className="grid grid-cols-12 gap-y-14 gap-x-10 lg:gap-x-12">
          {/* Column 1: Logo, blurb, email */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <Logo variant="light" />
            <p className="mt-6 text-cream-300 leading-relaxed text-pretty text-sm">
              {company.longName} — a registered NDIS provider delivering
              person-centred disability and nursing supports across the Northern
              Territory.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-sage-300 transition"
            >
              <Mail className="h-4 w-4 text-sage-400" />
              {company.email}
            </a>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook", href: socials.facebook },
                { Icon: Instagram, label: "Instagram", href: socials.instagram },
                { Icon: Linkedin, label: "LinkedIn", href: socials.linkedin }
              ].map(({ Icon, label, href }) => {
                const isExternal = href.startsWith("http");
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    })}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Head Office */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ochre-400 font-bold mb-5">
              Head Office
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-sage-400 flex-shrink-0" />
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="text-white hover:text-sage-300 font-semibold"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-sage-400 flex-shrink-0" />
                <span className="text-cream-200 leading-relaxed">
                  {company.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ochre-400 font-bold mb-5">
              Useful Links
            </p>
            <ul className="space-y-3 text-sm">
              {footerLinks.useful.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-cream-200 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ochre-400 font-bold mb-5">
              Services
            </p>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-cream-200 hover:text-white transition leading-snug block"
                  >
                    {s.title.replace(" — 24/7 Care", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter + NDIS badge row */}
        <div className="mt-16 grid grid-cols-12 gap-8 items-center pt-10 border-t border-white/10">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-display font-bold text-xl text-white">
              Stay in the loop
            </p>
            <p className="mt-1.5 text-sm text-cream-300">
              Updates on services, NDIS changes, and community events.
            </p>
            <form
              onSubmit={onSubmit}
              className="mt-5 flex flex-col sm:flex-row gap-3 max-w-lg"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (submitted) setSubmitted(false);
                }}
                placeholder="Your email address"
                className="flex-1 rounded-full bg-white/5 ring-1 ring-white/15 focus:ring-sage-400 outline-none px-5 py-3 text-sm text-white placeholder:text-cream-400"
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-ochre-500 hover:bg-ochre-400 text-white font-semibold px-6 py-3 text-sm transition inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit"}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </form>
            {error && (
              <p className="mt-3 text-xs text-ochre-300">{error}</p>
            )}
            {submitted && !error && (
              <p className="mt-3 text-xs text-sage-300 inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Thanks — we&rsquo;ll be in touch.
              </p>
            )}
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-center sm:justify-start lg:justify-end">
            <div className="inline-flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4">
              <span className="grid place-items-center rounded-xl bg-white px-3 py-2 shadow-soft">
                <Image
                  src="/images/ndis-logo.png"
                  alt="NDIS"
                  width={120}
                  height={50}
                  className="h-8 w-auto"
                />
              </span>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.18em] text-cream-400 font-bold">
                  Registered Provider
                </p>
                <p className="font-display font-bold text-white">NDIS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-cream-400">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-cream-400">
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
