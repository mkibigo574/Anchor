import { PageHero } from "@/components/PageHero";
import { AppointmentCta } from "@/components/AppointmentCta";
import { AcknowledgementOfCountry } from "@/components/AcknowledgementOfCountry";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  ArrowUpRight,
  AlertTriangle,
  HeartHandshake,
  LifeBuoy,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Advocacy",
  description:
    "Anchor connects participants and families to advocacy and support services across the Northern Territory — independent advocates, legal advice, crisis support, and more."
};

type Contact = {
  name: string;
  role?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
};

const ntContacts: Contact[] = [
  {
    name: "Disability Advocacy Service NT",
    role: "Independent advocacy for Territorians with disability and their families.",
    phone: "08 8948 5400",
    website: "https://daservice.org.au",
    address: "Darwin · Alice Springs · Katherine"
  },
  {
    name: "Darwin Community Legal Service",
    role: "Free legal advice, including disability rights and discrimination matters.",
    phone: "08 8982 1111",
    website: "https://dcls.org.au"
  },
  {
    name: "Anti-Discrimination Commission NT",
    role: "Independent statutory body that handles complaints under the NT Anti-Discrimination Act.",
    phone: "1800 813 846",
    website: "https://adc.nt.gov.au"
  },
  {
    name: "Carers NT",
    role: "Information, support, and advocacy for unpaid carers.",
    phone: "1800 422 737",
    website: "https://carersnt.asn.au"
  },
  {
    name: "Office of the Public Guardian (NT)",
    role: "Decision-making support and adult guardianship.",
    phone: "08 8922 7116",
    website: "https://nt.gov.au/law/processes/public-guardian"
  },
  {
    name: "Office of the Children's Commissioner NT",
    role: "Independent advocacy for Territory children and young people.",
    phone: "1800 259 256",
    website: "https://occ.nt.gov.au"
  },
  {
    name: "NDIS Quality and Safeguards Commission",
    role: "National body for complaints about NDIS providers and worker conduct.",
    phone: "1800 035 544",
    website: "https://ndiscommission.gov.au"
  },
  {
    name: "Aged Care Quality and Safety Commission",
    role: "For complaints about aged-care services participants may also access.",
    phone: "1800 951 822",
    website: "https://agedcarequality.gov.au"
  }
];

const crisisCards = [
  {
    icon: AlertTriangle,
    tone: "bg-red-500",
    title: "Triple Zero (000)",
    body: "Police, Fire, Ambulance — for any emergency where someone is in immediate danger.",
    contact: "000",
    href: "tel:000"
  },
  {
    icon: LifeBuoy,
    tone: "bg-brand-500",
    title: "Lifeline",
    body: "24/7 crisis support and suicide prevention services across Australia.",
    contact: "13 11 14",
    href: "tel:131114"
  },
  {
    icon: HeartHandshake,
    tone: "bg-ochre-500",
    title: "13YARN",
    body: "24/7 national crisis support line for Aboriginal and Torres Strait Islander peoples.",
    contact: "13 92 76",
    href: "tel:139276"
  },
  {
    icon: Sparkles,
    tone: "bg-sage-500",
    title: "1800RESPECT",
    body: "National sexual assault, domestic and family violence counselling service.",
    contact: "1800 737 732",
    href: "tel:1800737732"
  }
];

export default function AdvocacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Independent Advocacy"
        title="Your voice,"
        emphasized="your rights"
        description="Anchor encourages every participant to access independent advocacy when it helps. Below are the services we point participants and families to most often across the Northern Territory."
      />

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-wide grid grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow">What is Advocacy</span>
            <h2 className="h2 mt-4 text-balance">
              Standing alongside you when{" "}
              <span className="accent">it matters most</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-5 text-ink-700 leading-relaxed text-pretty text-lg">
            <p>
              An advocate is an independent person who supports you to speak up
              about decisions that affect your life — at NDIS planning meetings,
              with housing or service providers, in healthcare settings, or
              with government agencies.
            </p>
            <p>
              Advocates are independent of Anchor and free to use. They listen
              to what you want, help you understand your rights, and stand with
              you so your voice is heard.
            </p>
            <p>
              We actively encourage participants to access advocacy whenever
              it&rsquo;s useful — there is no conflict with the supports we
              provide.
            </p>
          </div>
        </div>
      </section>

      {/* NT Advocacy Contacts */}
      <section className="section bg-cream-100">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Northern Territory</span>
            <h2 className="h2 mt-4 text-balance">
              Advocacy &amp; support{" "}
              <span className="accent">contacts</span>.
            </h2>
            <p className="lede mt-5 text-pretty">
              A starting list of NT-based and national services. Please verify
              opening hours and current contact details directly with the
              service.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ntContacts.map((c) => (
              <li
                key={c.name}
                className="card p-6 flex flex-col"
              >
                <h3 className="font-display font-bold text-ink-900 text-base lg:text-[17px] tracking-tightlx leading-snug">
                  {c.name}
                </h3>
                {c.role && (
                  <p className="mt-2.5 text-sm text-ink-600 leading-relaxed flex-1">
                    {c.role}
                  </p>
                )}
                <ul className="mt-5 space-y-2 text-sm">
                  {c.phone && (
                    <li>
                      <a
                        href={`tel:${c.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-2 text-ink-800 hover:text-brand-500 font-medium"
                      >
                        <Phone className="h-4 w-4 text-brand-500 flex-shrink-0" />
                        {c.phone}
                      </a>
                    </li>
                  )}
                  {c.email && (
                    <li>
                      <a
                        href={`mailto:${c.email}`}
                        className="inline-flex items-center gap-2 text-ink-800 hover:text-brand-500 font-medium break-all"
                      >
                        <Mail className="h-4 w-4 text-brand-500 flex-shrink-0" />
                        {c.email}
                      </a>
                    </li>
                  )}
                  {c.website && (
                    <li>
                      <a
                        href={c.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ink-800 hover:text-brand-500 font-medium break-all"
                      >
                        <Globe className="h-4 w-4 text-brand-500 flex-shrink-0" />
                        {c.website.replace(/^https?:\/\//, "")}
                      </a>
                    </li>
                  )}
                  {c.address && (
                    <li className="inline-flex items-start gap-2 text-ink-700">
                      <MapPin className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span>{c.address}</span>
                    </li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Crisis support */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Crisis Support</span>
            <h2 className="h2 mt-4 text-balance">
              In a crisis, <span className="accent">help is here</span>.
            </h2>
            <p className="lede mt-5 text-pretty">
              If you or someone you support is in immediate danger, call Triple
              Zero (000). The services below offer 24/7 confidential support.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {crisisCards.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.title} className="card card-hover p-6 flex flex-col">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl ${c.tone} text-white shadow-soft`}
                  >
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </span>
                  <h3 className="font-display font-bold text-ink-900 mt-5 tracking-tightlx text-base">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed flex-1">
                    {c.body}
                  </p>
                  <a
                    href={c.href}
                    className="mt-5 inline-flex items-center justify-between text-sm font-semibold text-ink-900 hover:text-brand-500 group transition"
                  >
                    {c.contact}
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <AppointmentCta />
      <AcknowledgementOfCountry />
    </>
  );
}
