import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { company, navLinks, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-cream-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.035] pointer-events-none" />
      <div className="absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-brand-500/15 blur-3xl" />

      <div className="container-wide relative pt-20 pb-10 lg:pt-24">
        <div className="grid grid-cols-12 gap-y-14 gap-x-10 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 text-cream-300 leading-relaxed text-pretty max-w-md">
              A registered NDIS provider delivering person-centred disability
              and nursing supports across the Northern Territory.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 group"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-ochre-500 text-white shadow-soft group-hover:bg-ochre-400 transition">
                <ArrowUpRight className="h-5 w-5" />
              </span>
              <span className="font-display font-bold text-lg text-white group-hover:text-ochre-400 transition">
                Start a conversation
              </span>
            </Link>
            <div className="mt-8 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ochre-400 font-bold mb-5">
              Pages
            </p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
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

          <div className="col-span-6 lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ochre-400 font-bold mb-5">
              Services
            </p>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-cream-200 hover:text-white transition"
                  >
                    {s.title.split(" — ")[0].split(" / ")[0].slice(0, 32)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sage-300 font-semibold hover:text-sage-200"
                >
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ochre-400 font-bold mb-5">
              Contact
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
                <Mail className="h-4 w-4 mt-0.5 text-sage-400 flex-shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-cream-200 hover:text-white break-all"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-sage-400 flex-shrink-0" />
                <span className="text-cream-200">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 pt-8 border-t border-white/10 grid grid-cols-12 gap-6 items-center">
          <p className="col-span-12 md:col-span-5 text-xs text-cream-400">
            © {new Date().getFullYear()} {company.longName}
          </p>
          <p className="col-span-12 md:col-span-7 md:text-right text-xs text-cream-400 leading-relaxed text-pretty">
            Anchor acknowledges the Traditional Custodians of the lands on
            which we work and live, and pays respects to Elders past and
            present.
          </p>
        </div>
      </div>
    </footer>
  );
}
