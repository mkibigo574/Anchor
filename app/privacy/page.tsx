import { PageHero } from "@/components/PageHero";
import { AppointmentCta } from "@/components/AppointmentCta";
import { AcknowledgementOfCountry } from "@/components/AcknowledgementOfCountry";
import { company } from "@/lib/content";
import { ShieldCheck, FileWarning } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Anchor Nursing & Disability Support Services collects, uses, stores, and protects personal and health information under the Australian Privacy Principles."
};

const sections = [
  {
    title: "1. Introduction",
    body: [
      `${company.longName} (“Anchor”, “we”, “us”, “our”) is committed to protecting your privacy. This Privacy Policy explains how we handle personal and sensitive information in accordance with the Privacy Act 1988 (Cth), the Australian Privacy Principles (APPs), and the NDIS Code of Conduct.`,
      "This policy applies to all participants, families, carers, employees, volunteers, contractors, and visitors to our website."
    ]
  },
  {
    title: "2. Information we collect",
    body: [
      "We collect personal information that is reasonably necessary to provide our services, including: name, contact details, date of birth, NDIS number, plan details, health information, cultural background, emergency contacts, support preferences, and feedback.",
      "We may also collect technical information when you visit our website, such as your device type, browser, IP address, and pages visited."
    ]
  },
  {
    title: "3. How we collect information",
    body: [
      "We collect information directly from you wherever possible — through enquiry and referral forms, conversations, assessments, and service agreements. We may also collect information from authorised representatives, support coordinators, allied health professionals, and the NDIA, where you have consented or where the law permits."
    ]
  },
  {
    title: "4. How we use your information",
    body: [
      "We use personal information to deliver, coordinate, and improve the supports you receive; to communicate with you and your nominated contacts; to manage employment and contractor relationships; to meet our obligations to the NDIS Quality and Safeguards Commission, the NDIA, and other regulators; and to handle feedback, complaints, and incidents."
    ]
  },
  {
    title: "5. Disclosure",
    body: [
      "We only disclose your information where you have consented, where disclosure is required or authorised by law, or where disclosure is necessary to prevent a serious threat to life, health, or safety. We do not sell personal information.",
      "Information may be shared with our support workers and clinicians on a need-to-know basis, and with NDIS-related bodies for compliance, audit, and quality purposes."
    ]
  },
  {
    title: "6. Storage and security",
    body: [
      "Personal information is stored in secure paper and electronic records with appropriate access controls. We take reasonable steps to protect information from misuse, interference, loss, and unauthorised access, modification, or disclosure.",
      "We retain records for as long as required to deliver supports and to meet our legal and regulatory obligations, after which records are securely destroyed or de-identified."
    ]
  },
  {
    title: "7. Accessing and correcting your information",
    body: [
      "You may request access to the personal information we hold about you, and you may ask us to correct anything that is inaccurate, out of date, incomplete, or misleading. Contact us using the details below and we will respond within a reasonable period."
    ]
  },
  {
    title: "8. Complaints",
    body: [
      "If you believe we have breached your privacy, please contact us first so we can try to resolve the issue. You may also lodge a complaint with the NDIS Quality and Safeguards Commission on 1800 035 544, or with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au."
    ]
  },
  {
    title: "9. Cookies and website analytics",
    body: [
      "Our website uses minimal cookies necessary for site function. If we add analytics or marketing technologies in the future, this policy will be updated and, where required, consent will be sought."
    ]
  },
  {
    title: "10. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The latest version will always be published on this page with a current “last reviewed” date."
    ]
  },
  {
    title: "11. Contact us",
    body: [
      `For privacy questions, requests, or complaints, contact Anchor at ${company.email} or call ${company.phone}.`
    ]
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Your privacy,"
        emphasized="our responsibility"
        description="How Anchor collects, uses, stores, and protects your personal and health information."
      />

      <section className="section bg-white">
        <div className="container-wide max-w-4xl">
          <div className="card p-6 sm:p-8 flex items-start gap-4 bg-ochre-50 border border-ochre-200">
            <FileWarning className="h-5 w-5 text-ochre-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-ink-700 leading-relaxed">
              <strong className="text-ink-900">Draft — pending legal review.</strong>{" "}
              This document is provided as a starting template tailored for an
              Australian NDIS provider. Please have it reviewed by qualified
              legal counsel before publishing the website. Last reviewed:{" "}
              {new Date().toLocaleDateString("en-AU", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
              .
            </div>
          </div>

          <div className="mt-10 flex items-start gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-white shadow-soft">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <p className="lede text-pretty">
              We take the trust placed in us by participants and families
              seriously. This policy explains, in plain language, how we look
              after the information you share with us.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tightlx text-ink-900">
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4 text-ink-700 leading-relaxed text-[15px]">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCta />
      <AcknowledgementOfCountry />
    </>
  );
}
