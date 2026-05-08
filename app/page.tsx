import { Hero } from "@/components/Hero";
import { ValuesGrid } from "@/components/ValuesGrid";
import { AboutBlock } from "@/components/AboutBlock";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BookingSection } from "@/components/BookingSection";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuesGrid />
      <AboutBlock />
      <ServicesGrid limit={6} />
      <BookingSection />
      <WhyChoose />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
