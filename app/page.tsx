import { Hero } from "@/components/Hero";
import { ValuesGrid } from "@/components/ValuesGrid";
import { AboutBlock } from "@/components/AboutBlock";
import { TrustSafety } from "@/components/TrustSafety";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BookingSteps } from "@/components/BookingSteps";
import { NDISBanner } from "@/components/NDISBanner";
import { WhyChoose } from "@/components/WhyChoose";
import { QuoteBand } from "@/components/QuoteBand";
import { Testimonials } from "@/components/Testimonials";
import { ContactCta } from "@/components/ContactCta";
import { AcknowledgementOfCountry } from "@/components/AcknowledgementOfCountry";

export default function HomePage() {
  return (
    <>
      {/* 3. Hero */}
      <Hero />
      {/* 4. Four Core Values pill row */}
      <ValuesGrid />
      {/* 5. About + 3 secondary values */}
      <AboutBlock />
      {/* 6. Skilled Team + Strong Values / Trust & Safety Focused */}
      <TrustSafety />
      {/* 7. Services (all 11, photo cards) */}
      <ServicesGrid />
      {/* 8. Booking Your Support is Easy — 3 step */}
      <BookingSteps />
      {/* 9. NDIS Registered Provider banner */}
      <NDISBanner />
      {/* 10. Why Choose Anchor */}
      <WhyChoose />
      {/* 11. Inspirational quote band */}
      <QuoteBand />
      {/* 12. Testimonials carousel */}
      <Testimonials />
      {/* 13. Contact CTA */}
      <ContactCta />
      {/* 14. Acknowledgement of Country */}
      <AcknowledgementOfCountry />
      {/* 15. Footer rendered via root layout */}
    </>
  );
}
