import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { company } from "@/lib/content";

export function BookingSection() {
  const methods = [
    {
      icon: Phone,
      tone: "bg-brand-500",
      label: "Call us",
      value: company.phone,
      note: "Mon – Fri  ·  8:30am – 5:00pm",
      href: `tel:${company.phoneRaw}`,
      cta: "Call now"
    },
    {
      icon: Mail,
      tone: "bg-ochre-500",
      label: "Email us",
      value: company.email,
      note: "Replies within one business day",
      href: `mailto:${company.email}`,
      cta: "Send email"
    },
    {
      icon: MapPin,
      tone: "bg-sage-500",
      label: "Visit us",
      value: "28 Coleman Street",
      note: "Muirhead, NT 0810  ·  Darwin",
      href: "/contact",
      cta: "Get directions"
    }
  ];

  return (
    <section className="section bg-cream-100">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">Get Started</span>
            <h2 className="h2 mt-4 text-balance">
              Three easy ways to <span className="accent">get in touch</span>.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="lede text-pretty">
              Whether you're a participant, family member, or coordinator —
              we'll get back to you fast.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {methods.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.label}
                href={m.href}
                className="group card card-hover p-8 flex flex-col min-w-0"
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${m.tone} text-white shadow-soft`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-7 text-xs uppercase tracking-[0.14em] text-ink-500 font-semibold">
                  {m.label}
                </p>
                <p className="mt-2 font-display font-bold text-xl lg:text-[22px] text-ink-900 tracking-tightlx break-words leading-tight">
                  {m.value}
                </p>
                <p className="mt-3 text-sm text-ink-600">{m.note}</p>
                <span className="mt-7 pt-6 border-t border-ink-100 inline-flex items-center justify-between text-sm font-semibold text-ink-900 group-hover:text-brand-500 transition">
                  {m.cta}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
