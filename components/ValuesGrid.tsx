import { values } from "@/lib/content";
import { Reveal } from "./Reveal";

const accents = [
  { bg: "bg-brand-50", fg: "text-brand-600", ring: "ring-brand-100" },
  { bg: "bg-ochre-50", fg: "text-ochre-600", ring: "ring-ochre-100" },
  { bg: "bg-sage-50", fg: "text-sage-600", ring: "ring-sage-100" },
  { bg: "bg-brand-50", fg: "text-brand-600", ring: "ring-brand-100" }
];

export function ValuesGrid({ overlap = true }: { overlap?: boolean }) {
  return (
    <section
      className={`relative z-10 ${
        overlap ? "-mt-16 md:-mt-20" : "section bg-white"
      }`}
    >
      <div className="container-wide">
        <Reveal as="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            const a = accents[i % accents.length];
            return (
              <div
                key={v.title}
                className="group rounded-2xl bg-white p-6 shadow-elev ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-deep"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl ${a.bg} ${a.fg} ring-1 ${a.ring}`}
                >
                  <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                </span>
                <h3 className="font-display font-bold text-lg tracking-tightlx text-ink-900 mt-5">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {v.body}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
