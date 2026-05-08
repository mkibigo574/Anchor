import { PageHero } from "@/components/PageHero";
import { AppointmentCta } from "@/components/AppointmentCta";
import { AcknowledgementOfCountry } from "@/components/AcknowledgementOfCountry";
import { ReferralForm } from "@/components/ReferralForm";
import { Clock, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Refer a Participant",
  description:
    "Refer an NDIS participant to Anchor. Share their details, plan information, and your contact info — our intake team will respond within one business day."
};

export default function ReferPage() {
  return (
    <>
      <PageHero
        eyebrow="Refer a Participant"
        title="Connect someone with"
        emphasized="quality care"
        description="Whether you're a support coordinator, family member, or guardian, refer an NDIS participant to Anchor in three short steps. We'll be in touch within one business day."
      />

      <section className="section bg-cream-100">
        <div className="container-wide grid grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow">How referrals work</span>
            <h2 className="h2 mt-4 text-balance">
              A <span className="accent">simple</span> path to support.
            </h2>
            <p className="lede mt-5 text-pretty">
              Tell us about the participant, their NDIS plan, and how to reach
              you. Our intake team reviews every referral personally — no
              chatbots, no hold queues.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-ink-700">
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>
                  We respond within{" "}
                  <strong className="text-ink-900">1 business day</strong> of
                  receiving a referral.
                </span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>
                  All information is handled confidentially in line with NDIS
                  privacy standards.
                </span>
              </li>
              <li className="flex gap-3">
                <HeartHandshake className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>
                  Referrals are welcome from support coordinators, family,
                  guardians, and self-referrals.
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ReferralForm />
          </div>
        </div>
      </section>

      <AppointmentCta />
      <AcknowledgementOfCountry />
    </>
  );
}
