import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AppointmentCta } from "@/components/AppointmentCta";
import { AcknowledgementOfCountry } from "@/components/AcknowledgementOfCountry";
import { company } from "@/lib/content";
import { Scale, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the Anchor Nursing & Disability Support Services website."
};

const sections = [
  {
    title: "1. Acceptance",
    body: [
      `By accessing or using this website (“the Site”), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the Site.`,
      `The Site is operated by ${company.longName} (“Anchor”, “we”, “us”, “our”) from the Northern Territory, Australia.`
    ]
  },
  {
    title: "2. Purpose of the site",
    body: [
      "The Site provides general information about Anchor and our NDIS-related services. The content is intended for informational purposes only and does not constitute a service agreement, clinical advice, or a guarantee of service availability."
    ]
  },
  {
    title: "3. Enquiries and forms",
    body: [
      "Submitting an enquiry, referral, feedback, or job application through the Site does not create a contractual relationship. We will respond as soon as reasonably practicable. Where you submit information about a third party (for example a participant), you confirm that you have the authority and consent to do so."
    ]
  },
  {
    title: "4. Intellectual property",
    body: [
      "All content on the Site — including text, graphics, photography, logos, and code — is owned by or licensed to Anchor and is protected by Australian and international copyright laws. You may view and download content for personal, non-commercial use. Any other use requires our prior written permission."
    ]
  },
  {
    title: "5. Acceptable use",
    body: [
      "You agree not to use the Site in any way that breaches applicable law, infringes another person’s rights, transmits malicious code, or interferes with the Site’s availability, performance, or security."
    ]
  },
  {
    title: "6. External links",
    body: [
      "The Site may contain links to third-party websites (for example the NDIS, the NDIS Quality and Safeguards Commission, or advocacy services). We provide these for convenience only — we do not control or endorse third-party sites and are not responsible for their content or practices."
    ]
  },
  {
    title: "7. Disclaimer",
    body: [
      "To the maximum extent permitted by law, the Site is provided on an “as is” basis without warranties of any kind, whether express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free from viruses or other harmful components.",
      "Nothing in these terms excludes, restricts, or modifies any consumer guarantees or other rights you have under the Australian Consumer Law that cannot lawfully be excluded."
    ]
  },
  {
    title: "8. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Anchor is not liable for any indirect, incidental, special, or consequential loss arising from your use of, or inability to use, the Site. Our total liability in connection with the Site is limited, where permitted by law, to the resupply of the information or services in question."
    ]
  },
  {
    title: "9. Privacy",
    body: [
      "Your use of the Site is also governed by our Privacy Policy, which forms part of these terms."
    ]
  },
  {
    title: "10. Changes",
    body: [
      "We may update these Terms of Service at any time by publishing a revised version on the Site. Continued use of the Site after changes are published constitutes acceptance of those changes."
    ]
  },
  {
    title: "11. Governing law",
    body: [
      "These terms are governed by the laws of the Northern Territory, Australia. You submit to the non-exclusive jurisdiction of the courts of the Northern Territory."
    ]
  },
  {
    title: "12. Contact",
    body: [
      `Questions about these terms can be sent to ${company.email} or by calling ${company.phone}.`
    ]
  }
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="The terms that"
        emphasized="govern this site"
        description="Please read these terms carefully before using the Anchor website."
      />

      <section className="section bg-white">
        <div className="container-wide max-w-4xl">
          <div className="card p-6 sm:p-8 flex items-start gap-4 bg-brand-50 border border-brand-100">
            <FileText className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-ink-700 leading-relaxed">
              <strong className="text-ink-900">Version 1.0.</strong>{" "}
              These Terms govern your use of the Anchor website and sit alongside
              our{" "}
              <Link href="/privacy" className="font-semibold text-brand-500 hover:underline">
                Privacy Policy
              </Link>
              . Effective April 2026 · Reviewed at least annually · Next
              scheduled review April 2027.
            </div>
          </div>

          <div className="mt-10 flex items-start gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-white shadow-soft">
              <Scale className="h-5 w-5" />
            </span>
            <p className="lede text-pretty">
              These terms set out the basis on which you may use this website.
              Service-specific terms are agreed separately in writing with
              participants and families before supports commence.
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

          <p className="mt-12 text-sm text-ink-500">
            See also our{" "}
            <Link href="/privacy" className="font-semibold text-brand-500 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      <AppointmentCta />
      <AcknowledgementOfCountry />
    </>
  );
}
