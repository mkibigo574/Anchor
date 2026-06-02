import { PageHero } from "@/components/PageHero";
import { AppointmentCta } from "@/components/AppointmentCta";
import { AcknowledgementOfCountry } from "@/components/AcknowledgementOfCountry";
import { company } from "@/lib/content";
import { ShieldCheck, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Anchor Nursing & Disability Support Services collects, uses, stores, and protects personal and health information under the Australian Privacy Principles."
};

const sections = [
  {
    title: "1. Introduction",
    body: [
      `${company.longName} (“Anchor”, “we”, “us”, “our”) is committed to protecting the privacy and confidentiality of everyone we work with. This Privacy Policy explains how we handle personal, health, and sensitive information in accordance with the Privacy Act 1988 (Cth), the Australian Privacy Principles (APPs), the Notifiable Data Breaches (NDB) scheme, the NDIS Practice Standards, and the NDIS Code of Conduct.`,
      "It reflects our internal Privacy and Confidentiality Policy and Procedure and applies to all participants, families, carers, advocates, employees, volunteers, contractors, and visitors to our website.",
      "Each participant has the right to determine with whom they share their personal information. We explain our privacy practices using the language, communication mode, and terms a person is most likely to understand."
    ]
  },
  {
    title: "2. Information we collect",
    body: [
      "We only collect personal information that is reasonably necessary to deliver and coordinate your supports. For participants this may include, but is not limited to: full name, nationality and cultural background, date of birth, contact details, NDIS number and plan details, support preferences and personal goals, medical and health information, emergency contacts, referrals, and case or progress notes.",
      "With your consent, we may also hold photographs, films, and recordings. No such material is used without consent.",
      "For workers and contractors we collect information such as contact and residential details, payroll and tax information, qualifications and registration details, contracts, consent forms, results of background checks, and relevant health and training records.",
      "When you visit our website we may collect technical information such as your device type, browser, IP address, and pages visited."
    ]
  },
  {
    title: "3. Consent and how we collect information",
    body: [
      "Before collecting personal information, we explain why it is being collected, how it will be stored and used, and why we need it. Participants are asked to give consent — verbal and written — through a Participant Consent Form before we hold, retain, or use their information.",
      "We collect information directly from you wherever possible — through enquiry and referral forms, conversations, assessments, and service agreements. We may also collect information from authorised representatives, advocates, support coordinators, allied health professionals, and the NDIA, where you have consented or where the law permits.",
      "You may refuse to provide certain information and you may withdraw your consent to the disclosure of your personal information at any time."
    ]
  },
  {
    title: "4. How we use your information",
    body: [
      "We use personal information to deliver, coordinate, and improve the supports you receive; to communicate with you and your nominated contacts; to manage employment and contractor relationships; to meet our obligations to the NDIS Quality and Safeguards Commission, the NDIA, and other regulators; and to handle feedback, complaints, and incidents.",
      "Workers may only access your personal information where it is necessary to carry out their responsibilities or deliver your services."
    ]
  },
  {
    title: "5. Disclosure",
    body: [
      "We only disclose your information where you have consented, where disclosure is required or authorised by law (including mandatory reporting), or where it is necessary to prevent a serious threat to life, health, or safety. We do not sell personal information.",
      "Information may be shared with our support workers and clinicians on a need-to-know basis, and with NDIS-related bodies for compliance, audit, and quality purposes. An NDIS-approved quality auditor may request access to participant files; you may decline to take part in an audit by written notice to our Director.",
      "Where personal information is handled in connection with overseas arrangements, we take steps to ensure it remains protected consistently with the Australian Privacy Principles."
    ]
  },
  {
    title: "6. Storage and security",
    body: [
      "Personal information is stored in secure paper and electronic records with appropriate access controls, including password protection, encryption, and logging of access to sensitive data. We take reasonable steps to protect information from misuse, interference, loss, and unauthorised access, modification, or disclosure.",
      "We retain records for as long as required to deliver supports and to meet our legal and regulatory obligations, after which records are securely destroyed or de-identified in line with our Records and Information Management Policy.",
      "We subscribe to Australian Cyber Security Centre (ACSC) alerts and work to align our practices with the ACSC Essential Eight."
    ]
  },
  {
    title: "7. Accessing and correcting your information",
    body: [
      "You may request access to the personal information we hold about you, and you may ask us to correct anything that is inaccurate, out of date, incomplete, or misleading. Requests are directed to the person responsible for your records and escalated to our Director, who is notified within two business days.",
      "A request may be declined where granting it would unreasonably affect the privacy of others, pose a risk to a person’s life, health, or safety, or where the request is unfounded. Where a request is refused, the decision and reasons are documented in the relevant file and communicated to you."
    ]
  },
  {
    title: "8. Communication support",
    body: [
      "We support participants to access interpreters and other communication assistance — in person, by telephone, or by video — where there are language or communication barriers, so you can understand and exercise your privacy rights. Confidentiality is maintained throughout."
    ]
  },
  {
    title: "9. Data breaches",
    body: [
      "We maintain procedures to identify, contain, assess, and respond to data breaches, and to put measures in place to prevent recurrence. Suspected breaches must be reported to management immediately.",
      "Under the Notifiable Data Breaches scheme (Privacy Act 1988), we report eligible data breaches to the Office of the Australian Information Commissioner (OAIC) and notify affected individuals. Breaches are also reported to the NDIS Quality and Safeguards Commission, and to other authorities where required."
    ]
  },
  {
    title: "10. Complaints",
    body: [
      "If you believe we have breached your privacy, please contact us first so we can try to resolve the issue. You may also lodge a complaint with the NDIS Quality and Safeguards Commission on 1800 035 544, or with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au."
    ]
  },
  {
    title: "11. Cookies and website analytics",
    body: [
      "Our website uses minimal cookies necessary for site function. If we add analytics or marketing technologies in the future, this policy will be updated and, where required, consent will be sought."
    ]
  },
  {
    title: "12. Changes to this policy",
    body: [
      "We review this policy at least annually, in consultation with the people who use our service, their families, carers, and our workers. The latest version is always published on this page with a current review date."
    ]
  },
  {
    title: "13. Contact us",
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
          <div className="card p-6 sm:p-8 flex items-start gap-4 bg-brand-50 border border-brand-100">
            <FileText className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-ink-700 leading-relaxed">
              <strong className="text-ink-900">Version 1.0.</strong>{" "}
              This Privacy Policy reflects Anchor’s endorsed Privacy and
              Confidentiality Policy and Procedure. Effective April 2026 ·
              Reviewed at least annually · Next scheduled review April 2027.
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
