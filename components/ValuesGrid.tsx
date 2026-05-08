import { values } from "@/lib/content";

const accents = [
  { bg: "bg-brand-50", fg: "text-brand-600", ring: "ring-brand-100" },
  { bg: "bg-ochre-50", fg: "text-ochre-600", ring: "ring-ochre-100" },
  { bg: "bg-sage-50", fg: "text-sage-600", ring: "ring-sage-100" },
  { bg: "bg-brand-50", fg: "text-brand-600", ring: "ring-brand-100" }
];

export function ValuesGrid() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="max-w-2xl mb-14 lg:mb-16">
          <span className="eyebrow">Principles</span>
          <h2 className="h2 mt-4 text-balance">
            Anchored in what <span className="accent">matters most</span>.
          </h2>
          <p className="lede mt-5 text-pretty">
            The principles that shape how we show up — for participants, their
            families, and the wider community we serve.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            const a = accents[i % accents.length];
            return (
              <div
                key={v.title}
                className="card card-hover p-7 flex flex-col"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl ${a.bg} ${a.fg} ring-1 ${a.ring}`}
                >
                  <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                </span>
                <h3 className="h3 mt-6 text-ink-900">{v.title}</h3>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed flex-1">
                  {v.body}
                </p>
                <p className="mt-5 pt-5 border-t border-ink-100 text-xs uppercase tracking-[0.14em] text-ink-400 font-semibold">
                  0{i + 1} / 0{values.length}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
