import Link from "next/link";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { company } from "@/lib/content";

export function ContactCta() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <span className="eyebrow">Contact</span>
          <h2 className="h2 mt-4 text-balance">
            Feel free to <span className="accent">contact us</span>!
          </h2>
          <p className="lede mt-5 text-pretty">
            Whether you&rsquo;re a participant, family member, or support
            coordinator, we&rsquo;d love to hear from you. Our friendly team is
            ready to answer your questions about NDIS supports.
          </p>
          <p className="mt-3 text-ink-600 text-pretty">
            Call us, email us, or send a message — we respond within one
            business day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          <div className="rounded-3xl bg-cream-100 ring-1 ring-ink-100 p-8 text-center transition hover:shadow-elev hover:bg-white hover:ring-brand-200">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white shadow-soft mx-auto">
              <Phone className="h-6 w-6" />
            </span>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-ink-500 font-bold">
              Call Us
            </p>
            <a
              href={`tel:${company.phoneRaw}`}
              className="mt-2 block font-display font-bold text-xl text-ink-900 tracking-tightlx hover:text-brand-500 transition"
            >
              {company.phone}
            </a>
            <a
              href={`tel:${company.phoneRaw}`}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white px-5 py-3 text-sm font-semibold transition"
            >
              Call Us
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="rounded-3xl bg-cream-100 ring-1 ring-ink-100 p-8 text-center transition hover:shadow-elev hover:bg-white hover:ring-brand-200">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ochre-500 text-white shadow-soft mx-auto">
              <Mail className="h-6 w-6" />
            </span>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-ink-500 font-bold">
              Send us email
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-2 block font-display font-bold text-xl text-ink-900 tracking-tightlx break-all hover:text-ochre-500 transition"
            >
              {company.email}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ochre-500 hover:bg-ochre-400 text-white px-5 py-3 text-sm font-semibold transition"
            >
              Send us email
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-display font-bold text-xl md:text-2xl text-ink-900 tracking-tightlx">
            Have any Question? <span className="accent">We can help you!</span>
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 btn-primary"
          >
            Make an Appointment
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
