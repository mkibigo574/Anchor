import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AppointmentCta() {
  return (
    <section className="bg-white">
      <div className="container-tight py-16 md:py-20 text-center">
        <p className="font-display font-bold text-2xl md:text-3xl text-ink-900 tracking-tightlx text-balance">
          Have any Question? <span className="accent">We can help you!</span>
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 btn-primary"
        >
          Make an Appointment
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
