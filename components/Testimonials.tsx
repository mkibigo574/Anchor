import { testimonials } from "@/lib/content";
import { Star, Quote } from "lucide-react";

const accents = ["bg-brand-500", "bg-ochre-500", "bg-sage-500"];

export function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-8 items-end mb-14 lg:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <span className="eyebrow">Voices</span>
            <h2 className="h2 mt-4 text-balance">
              Real stories from the people we{" "}
              <span className="accent">support</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="lede text-pretty">
              Participants and families across the Northern Territory share what
              support with Anchor has meant for them.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              className="card card-hover p-8 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-brand-300" fill="currentColor" />
                <div className="flex gap-0.5 text-ochre-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-6 text-ink-800 leading-relaxed font-display font-semibold text-lg tracking-tightlx flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-ink-100 flex items-center gap-3">
                <div
                  className={`h-11 w-11 rounded-full ${
                    accents[i % accents.length]
                  } text-white grid place-items-center font-bold`}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-ink-900 text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-ink-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
