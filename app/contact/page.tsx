import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/content";
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";

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
            <div className="card p-6 sm:p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tightlx text-ink-900">
                Send us a message
              </h3>
              <p className="mt-2 text-ink-600 text-sm">
                Tell us about your needs and we'll be in touch shortly.
              </p>

              <form
                className="mt-8 space-y-5"
                action={`mailto:${company.email}`}
                method="post"
                encType="text/plain"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field
                  label="I am enquiring as"
                  name="role"
                  placeholder="Participant / family member / coordinator"
                />
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-ink-500 font-bold mb-2">
                    Your message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl bg-cream-100 border border-ink-100 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:bg-white transition resize-none text-sm"
                    placeholder="Tell us about your support needs or NDIS plan..."
                  />
                </div>
                <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
                  <p className="text-xs text-ink-500 sm:max-w-xs leading-relaxed">
                    By submitting, you consent to Anchor contacting you about
                    your enquiry.
                  </p>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send enquiry
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
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

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.16em] text-ink-500 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl bg-cream-100 border border-ink-100 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:bg-white transition text-sm"
      />
    </div>
  );
}
