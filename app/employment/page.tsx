import Image from "next/image";
import { BookingSection } from "@/components/BookingSection";
import { CtaBanner } from "@/components/CtaBanner";
import { AcknowledgementOfCountry } from "@/components/AcknowledgementOfCountry";
import {
  Target,
  Plane,
  Compass,
  FileText,
  Search,
  MessageSquare,
  Users,
  ClipboardCheck,
  Building2,
  UserCheck,
  HeartHandshake,
  Video,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "NDIS Employment Services",
  description:
    "Anchor NDSS delivers personalised NDIS employment support across regional and remote Australia — job readiness, coaching, interview preparation, and ongoing mentoring to help participants find and keep meaningful work."
};

const supports = [
  {
    icon: Compass,
    title: "Individual employment planning",
    body: "A personalised plan built around your strengths, interests, and career goals."
  },
  {
    icon: Sparkles,
    title: "Employment capacity building",
    body: "Developing the practical skills and confidence you need to become work-ready."
  },
  {
    icon: FileText,
    title: "Resume & cover letter development",
    body: "Crafting documents that showcase your abilities and stand out to employers."
  },
  {
    icon: Search,
    title: "Job searching & online applications",
    body: "Hands-on help finding suitable roles and submitting applications online."
  },
  {
    icon: ClipboardCheck,
    title: "Interview preparation",
    body: "Practice, coaching, and confidence-building so you're ready to shine on the day."
  },
  {
    icon: MessageSquare,
    title: "Workplace communication & social skills",
    body: "Building the everyday communication skills that help you thrive at work."
  },
  {
    icon: Users,
    title: "Job readiness & workplace preparation",
    body: "Getting you prepared for the routines and expectations of a real workplace."
  },
  {
    icon: Building2,
    title: "Employer engagement & workplace support",
    body: "Connecting with employers and providing support directly in the workplace."
  },
  {
    icon: UserCheck,
    title: "One-on-one employment coaching",
    body: "Dedicated, personalised coaching to keep you moving toward your goals."
  },
  {
    icon: HeartHandshake,
    title: "Ongoing mentoring",
    body: "Continued mentoring to help participants maintain and grow within employment."
  },
  {
    icon: Video,
    title: "Virtual support between visits",
    body: "Consistent coaching and mentoring online, wherever you live."
  },
  {
    icon: Target,
    title: "Finding & keeping a job supports",
    body: "End-to-end support to prepare for, find, and maintain meaningful employment."
  }
];

const pillars = [
  {
    icon: Target,
    tone: "from-brand-500 to-brand-700",
    eyebrow: "Tailored to You",
    title: "An individualised program, built around your goals",
    paragraphs: [
      "No two people are the same, and neither are their employment goals. Every participant receives an individualised employment program that is customised to their strengths, interests, abilities, learning style, and career aspirations.",
      "We work alongside participants to develop practical skills, build confidence, overcome barriers, and create a pathway towards sustainable employment. Our supports are flexible and designed around your goals, ensuring you receive the right support at the right pace."
    ]
  },
  {
    icon: Plane,
    tone: "from-ochre-400 to-ochre-600",
    eyebrow: "We Come to You",
    title: "Face-to-face support across regional and remote communities",
    paragraphs: [
      "Anchor NDSS proudly delivers employment supports across regional and remote communities. We understand that access to quality employment services can be challenging in remote Australia, which is why our team travels to communities to deliver face-to-face support where it matters most.",
      "Between community visits, participants continue to receive ongoing virtual coaching, mentoring, and employment support. This flexible model ensures consistent, personalised support regardless of where you live."
    ]
  }
];

export default function EmploymentPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-gradient-to-b from-cream-100 to-white border-b border-ink-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 mask-fade-b pointer-events-none" />
        <div className="absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full bg-brand-100 blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-ochre-100 blur-3xl opacity-50 pointer-events-none" />
        <div className="container-tight relative py-10 sm:py-14 md:py-16">
          <span className="eyebrow">NDIS Employment Services</span>
          <h1 className="sr-only">
            NDIS Employment Services — building skills, creating
            opportunities, and supporting employment futures across regional
            and remote Australia.
          </h1>
          <div className="mt-6 relative">
            {/* soft ambient glow so the photo settles into the page */}
            <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-tr from-brand-200/40 via-transparent to-ochre-200/40 blur-2xl opacity-70 pointer-events-none" />
            <div className="relative overflow-hidden rounded-3xl shadow-elev ring-1 ring-white/60">
              <Image
                src="/images/employment-hero.jpg"
                alt="An Anchor NDSS employment support worker helping a participant complete paperwork at an outdoor table in a remote Northern Territory community, with overlaid text reading: Building skills. Creating opportunities. Supporting futures. Employment support that empowers individuals and strengthens communities."
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="w-full h-auto"
              />
              {/* feather the top edge into the cream background */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cream-100/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-wide grid grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow">Supporting Your Journey</span>
            <h2 className="h2 mt-4 text-balance">
              Everyone deserves the chance to{" "}
              <span className="accent">achieve their goals</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-5 text-ink-700 leading-relaxed text-pretty text-lg">
            <p>
              At Anchor Nursing &amp; Disability Support Services, we believe
              everyone deserves the opportunity to build meaningful skills, gain
              confidence, and achieve their employment goals.
            </p>
            <p>
              Our NDIS Employment Services are designed to support participants
              to prepare for, find, and maintain meaningful employment. Whether
              you are looking for your first job, returning to work, or
              developing the skills needed for future opportunities, we provide
              personalised support every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars: Tailored to You + We Come to You */}
      <section className="section bg-cream-100">
        <div className="container-wide space-y-6 lg:space-y-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.eyebrow}
                className="card p-8 md:p-10 lg:p-12 grid grid-cols-12 gap-8 items-start"
              >
                <div className="col-span-12 lg:col-span-4">
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${p.tone} text-white shadow-soft`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <span className="eyebrow block mt-6">{p.eyebrow}</span>
                  <h3 className="font-display font-bold text-xl lg:text-2xl tracking-tightlx text-ink-900 mt-3 leading-snug text-balance">
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-8 space-y-4 text-ink-700 leading-relaxed text-pretty text-lg">
                  {p.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Our Employment Supports */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">What We Offer</span>
            <h2 className="h2 mt-4 text-balance">
              Our employment <span className="accent">supports</span>.
            </h2>
            <p className="lede mt-5 text-pretty">
              Practical, engaging, and outcome-focused supports to help you
              become confident, independent, and work-ready.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {supports.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="card card-hover p-6 flex flex-col">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-sage-500 text-white shadow-soft">
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </span>
                  <h3 className="font-display font-bold text-ink-900 mt-5 tracking-tightlx text-base leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed flex-1">
                    {s.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-cream-100">
        <div className="container-wide grid grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow">Our Approach</span>
            <h2 className="h2 mt-4 text-balance">
              We don&rsquo;t just help you find a job —{" "}
              <span className="accent">we help you keep it</span>.
            </h2>
            <p className="lede mt-5 text-pretty">
              Your goals. Your future. Our support.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-5 text-ink-700 leading-relaxed text-pretty text-lg">
            <p>
              Our programs are practical, engaging, and outcome-focused. We focus
              on building each participant&rsquo;s capacity to become confident,
              independent, and work-ready while respecting their individual
              goals, culture, and aspirations.
            </p>
            <p>
              We don&rsquo;t just help participants find employment — we help
              them build the skills, confidence, and resilience to keep a job,
              grow within the workplace, and achieve long-term success.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "Confident, independent, and work-ready",
                "Respectful of your goals, culture, and aspirations",
                "Focused on long-term success, not just placement"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                  <span className="text-ink-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BookingSection />
      <CtaBanner />
      <AcknowledgementOfCountry />
    </>
  );
}
