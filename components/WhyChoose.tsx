import { whyChoose } from "@/lib/content";

export function WhyChoose() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="eyebrow">Warm &amp; Welcoming</span>
          <h2 className="h2 mt-4 text-balance">
            Why Choose Anchor as your{" "}
            <span className="accent">NDIS Disability Service Provider</span>?
          </h2>
          <p className="lede mt-5 text-pretty">
            We&rsquo;re built around the participant — not the system. From the
            first conversation to long-term supports, here&rsquo;s what sets
            Anchor apart.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {whyChoose.map((w, i) => {
            const Icon = w.icon;
            const accent =
              i % 2 === 0
                ? { bg: "bg-brand-50", fg: "text-brand-600", ring: "ring-brand-100" }
                : { bg: "bg-ochre-50", fg: "text-ochre-600", ring: "ring-ochre-100" };
            return (
              <div
                key={w.title}
                className="rounded-3xl bg-cream-100 ring-1 ring-ink-100 p-7 lg:p-8 flex gap-5 transition hover:bg-white hover:shadow-elev hover:-translate-y-1 hover:ring-brand-200"
              >
                <span
                  className={`flex-shrink-0 grid h-14 w-14 place-items-center rounded-2xl ${accent.bg} ${accent.fg} ring-1 ${accent.ring}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg lg:text-xl tracking-tightlx text-ink-900">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
