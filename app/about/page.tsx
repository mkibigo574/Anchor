import { PageHero } from "@/components/PageHero";
import { ValuesGrid } from "@/components/ValuesGrid";
import { WhyChoose } from "@/components/WhyChoose";
import { CtaBanner } from "@/components/CtaBanner";
import { Target, Eye, Shield, MapPin } from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Anchor Nursing & Disability Support Services — registered NDIS provider in Darwin delivering person-centred, culturally safe disability supports across the Northern Territory."
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Target,
      tone: "bg-brand-50 text-brand-600 ring-brand-100",
      label: "Mission",
      body: "To empower people living with disability to live independently, confidently, and with dignity — through compassionate care and professional excellence."
    },
    {
      icon: Eye,
      tone: "bg-ochre-50 text-ochre-600 ring-ochre-100",
      label: "Vision",
      body: "Communities where people living with disability are not defined by limitations, but supported to achieve inclusion and meaningful participation."
    },
    {
      icon: Shield,
      tone: "bg-sage-50 text-sage-600 ring-sage-100",
      label: "Commitment",
      body: "Safe and ethical supports, NDIS-compliant practice, and continual review and improvement of service quality."
    },
    {
      icon: MapPin,
      tone: "bg-brand-50 text-brand-600 ring-brand-100",
      label: "Reach",
      body: "Across urban, regional, remote and very remote NT — based in Darwin, supporting participants wherever they call home."
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="About Anchor"
        title="A community dedicated to"
        emphasized="empowering independence"
      />

      <section className="section bg-white">
        <div className="container-wide grid grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow">Our Story</span>
            <h2 className="h2 mt-4 text-balance">
              Built to address the gaps in{" "}
              <span className="accent">NDIS service provision</span>.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-5 text-ink-700 leading-relaxed text-pretty text-lg">
            <p>
              Anchor Nursing &amp; Disability Support Services (Anchor NDSS) is
              an Australian NDIS provider delivering high-quality,
              person-centred disability and community-based supports.
            </p>
            <p>
              We work alongside participants — building capacity, strengthening
              independence, and giving people genuine choice and control across
              every aspect of their lives. Our supports reach urban, regional,
              remote, and very remote communities across the Northern
              Territory.
            </p>
            <p>
              Our commitment is simple: deliver safe, ethical, and clinically
              informed services that meet the NDIS Practice Standards, and
              walk alongside our participants for the long term.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="h2 mt-4 text-balance">
              The four pillars that <span className="accent">guide us</span>.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="card p-7 flex flex-col">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl ring-1 ${p.tone}`}
                  >
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </span>
                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-ink-500 font-bold">
                    {p.label}
                  </p>
                  <p className="mt-3 text-ink-800 leading-relaxed font-medium">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ValuesGrid overlap={false} />
      <WhyChoose />
      <CtaBanner />
    </>
  );
}
