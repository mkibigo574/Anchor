import { PageHero } from "@/components/PageHero";
import { AppointmentCta } from "@/components/AppointmentCta";
import { AcknowledgementOfCountry } from "@/components/AcknowledgementOfCountry";
import { FeedbackForm } from "@/components/FeedbackForm";
import { company, socials } from "@/lib/content";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ShieldCheck,
  MessageCircleHeart,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Feedback & Complaints",
  description:
    "Anchor welcomes feedback, compliments, and complaints. Tell us how we're doing or escalate concerns directly to the NDIS Quality and Safeguards Commission."
};

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Feedback & Complaints"
        title="Get in touch"
        emphasized="with us"
        description="Anchor is committed to delivering high-quality care and continuous improvement. Your feedback — positive or critical — helps us get better. Tell us how we're doing."
      />

      {/* Contact info row */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid gap-5 md:grid-cols-3">
            <a
              href={`tel:${company.phoneRaw}`}
              className="group card card-hover p-7 flex items-center gap-4"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-white shadow-soft flex-shrink-0">
                <Phone className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] text-ink-500 font-bold">
                  Phone
                </p>
                <p className="mt-0.5 font-display font-bold text-ink-900 group-hover:text-brand-500 transition">
                  {company.phone}
                </p>
              </div>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="group card card-hover p-7 flex items-center gap-4"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-ochre-500 text-white shadow-soft flex-shrink-0">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] text-ink-500 font-bold">
                  Email
                </p>
                <p className="mt-0.5 font-display font-bold text-ink-900 group-hover:text-ochre-500 transition break-all">
                  {company.email}
                </p>
              </div>
            </a>
            <div className="card p-7 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-sage-500 text-white shadow-soft flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] text-ink-500 font-bold">
                  Office
                </p>
                <p className="mt-0.5 font-display font-bold text-ink-900 leading-snug">
                  {company.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback form */}
      <section className="section bg-cream-100">
        <div className="container-wide grid grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow">Send us your feedback</span>
            <h2 className="h2 mt-4 text-balance">
              We <span className="accent">listen</span>, we act.
            </h2>
            <p className="lede mt-5 text-pretty">
              Whether it&rsquo;s a compliment, a suggestion, or a complaint —
              every message goes directly to our team and is responded to
              promptly. You can stay anonymous if you prefer.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-ink-700">
              <li className="flex gap-3">
                <MessageCircleHeart className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>
                  We acknowledge feedback within{" "}
                  <strong className="text-ink-900">2 business days</strong>.
                </span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>
                  Complaints are handled confidentially and will not affect the
                  supports you receive.
                </span>
              </li>
              <li className="flex gap-3">
                <Sparkles className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>
                  You can also escalate directly to the{" "}
                  <a
                    href="https://www.ndiscommission.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-500 hover:underline"
                  >
                    NDIS Quality &amp; Safeguards Commission
                  </a>{" "}
                  on{" "}
                  <a
                    href="tel:1800035544"
                    className="font-semibold text-brand-500 hover:underline"
                  >
                    1800 035 544
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <FeedbackForm />
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="bg-white">
        <div className="container-wide py-16 md:py-20">
          <div className="rounded-3xl bg-brand-950 text-white px-8 py-12 lg:px-12 lg:py-16 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-ochre-500/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-sage-500/15 blur-3xl" />
            <div className="relative grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-7">
                <span className="eyebrow-light">Stay connected</span>
                <h2 className="h2 mt-3 text-white text-balance">
                  Follow us on{" "}
                  <span className="text-ochre-400">social media</span>.
                </h2>
                <p className="mt-5 text-cream-200 leading-relaxed text-pretty max-w-xl">
                  Updates on community events, NDIS changes, team stories, and
                  the everyday moments that keep us proud of the work we do
                  across the Northern Territory.
                </p>
                <p className="mt-3 text-cream-300 leading-relaxed text-pretty max-w-xl text-sm">
                  Engage, share, and join the conversation — we&rsquo;d love to
                  hear from you.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-5 flex lg:justify-end gap-3">
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
                      className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 hover:bg-white/15 hover:ring-white/25 text-white transition"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentCta />
      <AcknowledgementOfCountry />
    </>
  );
}

