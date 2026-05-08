import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "./Reveal";

export function ServicesGrid({
  showHeading = true
}: {
  showHeading?: boolean;
}) {
  return (
    <section id="services" className="section bg-white scroll-mt-24">
      <div className="container-wide">
        {showHeading && (
          <Reveal className="grid grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
            <div className="col-span-12 lg:col-span-7">
              <span className="eyebrow">Our Services</span>
              <h2 className="h2 mt-4 text-balance">
                Comprehensive NDIS Support,{" "}
                <span className="accent">Tailored for You</span>.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <p className="lede text-pretty">
                Eleven tailored services covering everything from 24/7 supported
                living to community participation — designed to grow with you.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal as="stagger" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-elev hover:ring-brand-200"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                <div
                  className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${s.image}')` }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-base lg:text-[17px] tracking-tightlx text-ink-900 leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm text-ink-600 leading-relaxed flex-1 line-clamp-3">
                  {s.short}
                </p>
                <span className="mt-5 inline-flex items-center justify-between text-sm font-semibold text-brand-500 group-hover:text-ochre-500 transition">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
