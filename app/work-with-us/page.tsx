import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AppointmentCta } from "@/components/AppointmentCta";
import { AcknowledgementOfCountry } from "@/components/AcknowledgementOfCountry";
import { company } from "@/lib/content";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Car,
  HeartPulse,
  Users,
  Award
} from "lucide-react";

export const metadata = {
  title: "Work With Us",
  description:
    "Join the Anchor team. Build a career delivering person-centred NDIS supports across the Northern Territory."
};

const requirements = [
  {
    icon: Users,
    title: "Working with Children Check (WWCC)",
    body: "Current and valid — required for all participant-facing roles."
  },
  {
    icon: HeartPulse,
    title: "First Aid Certificate &amp; CPR",
    body: "Up-to-date First Aid and CPR certifications."
  },
  {
    icon: Car,
    title: "Driver&rsquo;s Licence &amp; Insured Vehicle",
    body: "Current Australian driver&rsquo;s licence and a comprehensively insured vehicle."
  },
  {
    icon: ShieldCheck,
    title: "NDIS Worker Screening Check",
    body: "Cleared NDIS Worker Screening Check (or willingness to obtain)."
  },
  {
    icon: Award,
    title: "NDIS Worker Orientation Module",
    body: "Completed &lsquo;Quality, Safety and You&rsquo; orientation module certificate."
  }
];

export default function WorkWithUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers at Anchor"
        title="Work With"
        emphasized="Us"
        description="We're always looking for passionate, dedicated people to join our team and help participants live with dignity, independence, and choice across the Northern Territory."
      />

      {/* Why work with Anchor */}
      <section className="section bg-white">
        <div className="container-wide grid grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow">Why Anchor</span>
            <h2 className="h2 mt-4 text-balance">
              A workplace that{" "}
              <span className="accent">backs its people</span>.
            </h2>
            <p className="lede mt-5 text-pretty">
              At Anchor we invest in our team because the people we support
              deserve the very best. Expect proper training, real clinical
              oversight, flexible rostering, and a culture grounded in respect.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Ongoing paid training and professional development",
                "Flexible shifts across Darwin and remote NT",
                "Clinically supported team with strong mentoring",
                "Inclusive, culturally safe workplace",
                "Career pathways into coordination and clinical roles",
                "Support work that genuinely changes lives"
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl bg-cream-100 ring-1 ring-ink-100 p-5"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-ink-800 font-medium leading-relaxed">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section bg-cream-100">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">What You&rsquo;ll Need</span>
            <h2 className="h2 mt-4 text-balance">
              Mandatory <span className="accent">requirements</span>.
            </h2>
            <p className="lede mt-5 text-pretty">
              All Anchor support workers must hold the following before
              starting in a participant-facing role.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((r) => {
              const Icon = r.icon;
              return (
                <li
                  key={r.title}
                  className="card p-7 flex flex-col"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-white shadow-soft">
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </span>
                  <p
                    className="mt-5 font-display font-bold text-ink-900 text-[15px] leading-snug tracking-tightlx"
                    dangerouslySetInnerHTML={{ __html: r.title }}
                  />
                  <p
                    className="mt-2 text-sm text-ink-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: r.body }}
                  />
                </li>
              );
            })}
          </ul>
          <p className="mt-10 text-sm text-ink-600 max-w-2xl text-pretty">
            If you don&rsquo;t yet hold all of the above but are working towards
            them, we still want to hear from you — just let us know in your
            message below.
          </p>
        </div>
      </section>

      {/* Application form */}
      <section className="section bg-white">
        <div className="container-wide grid grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5">
            <span className="eyebrow">Apply Now</span>
            <h2 className="h2 mt-4 text-balance">
              Submit your <span className="accent">application</span>.
            </h2>
            <p className="lede mt-5 text-pretty">
              Send us a short message about your experience and goals, and
              attach your resume. We&rsquo;ll be in touch within a few business
              days.
            </p>
            <p className="mt-6 text-sm text-ink-600 leading-relaxed">
              Prefer email? Send your resume directly to{" "}
              <a
                href={`mailto:${company.email}?subject=Job%20Application`}
                className="font-semibold text-brand-500 hover:underline"
              >
                {company.email}
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-ink-600 leading-relaxed">
              Or call us on{" "}
              <a
                href={`tel:${company.phoneRaw}`}
                className="font-semibold text-brand-500 hover:underline"
              >
                {company.phone}
              </a>{" "}
              for a chat about current opportunities.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <form
              action={`mailto:${company.email}?subject=Job%20Application`}
              method="post"
              encType="multipart/form-data"
              className="card p-8 lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <div className="mt-5">
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" placeholder="e.g. Support Worker — Darwin" />
              </div>
              <div className="mt-5">
                <label className="block text-xs uppercase tracking-[0.16em] text-ink-500 font-bold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-xl bg-cream-100 border border-ink-100 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:bg-white transition resize-none text-sm"
                  placeholder="Tell us about your experience, qualifications, and availability…"
                />
              </div>
              <div className="mt-5">
                <label className="block text-xs uppercase tracking-[0.16em] text-ink-500 font-bold mb-2">
                  Resume (PDF or DOCX)
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="block w-full text-sm text-ink-700 file:mr-4 file:rounded-full file:border-0 file:bg-brand-500 file:text-white file:px-5 file:py-2.5 file:text-sm file:font-semibold file:hover:bg-brand-600 file:cursor-pointer cursor-pointer"
                />
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-500 max-w-xs leading-relaxed">
                  By submitting, you consent to Anchor contacting you about
                  your application.
                </p>
                <button type="submit" className="btn-primary">
                  Apply
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <AppointmentCta />
      <AcknowledgementOfCountry />
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
