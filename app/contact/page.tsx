import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/content";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Anchor NDSS in Darwin. Phone, email, address, and contact form for participants, families, and support coordinators."
};

export default function ContactPage() {
  const details = [
    {
      icon: Phone,
      tone: "bg-brand-500",
      label: "Phone",
      value: company.phone,
      href: `tel:${company.phoneRaw}`
    },
    {
      icon: Mail,
      tone: "bg-ochre-500",
      label: "Email",
      value: company.email,
      href: `mailto:${company.email}`
    },
    {
      icon: MapPin,
      tone: "bg-sage-500",
      label: "Office",
      value: company.address
    },
    {
      icon: Clock,
      tone: "bg-brand-500",
      label: "Hours",
      value: company.hours
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help —"
        emphasized="let's talk"
      />

      <section className="section bg-white">
        <div className="container-wide grid grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-5">
            <span className="eyebrow">Reach Us</span>
            <h2 className="h2 mt-4 text-balance">
              Speak directly with our{" "}
              <span className="accent">Darwin team</span>.
            </h2>
            <p className="lede mt-5 text-pretty">
              Whether you're enquiring on behalf of yourself, a family member,
              or a participant you support — we'll respond within one business
              day.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {details.map((d) => {
                const Icon = d.icon;
                const inner = (
                  <>
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl ${d.tone} text-white shadow-soft`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-xs uppercase tracking-[0.16em] text-ink-500 font-bold">
                      {d.label}
                    </p>
                    <p className="mt-1.5 text-ink-900 font-display font-bold tracking-tightlx text-base lg:text-[17px] leading-snug break-words">
                      {d.value}
                    </p>
                  </>
                );
                return d.href ? (
                  <a
                    key={d.label}
                    href={d.href}
                    className="card card-hover p-6 block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={d.label} className="card p-6">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-cream-100 border-t border-ink-100">
        <div className="container-wide py-16">
          <div className="grid grid-cols-12 gap-10 items-end mb-10">
            <div className="col-span-12 lg:col-span-7">
              <span className="eyebrow">Find Us</span>
              <h2 className="h2 mt-4 text-balance">
                Muirhead, Darwin —{" "}
                <span className="accent">Northern Territory</span>.
              </h2>
            </div>
          </div>
          <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/8] rounded-3xl overflow-hidden ring-1 ring-ink-100 shadow-soft">
            <iframe
              title="Anchor NDSS office location"
              src="https://www.google.com/maps?q=28+Coleman+Street,+Muirhead+NT+0810&output=embed"
              loading="lazy"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}

