export function PageHero({
  eyebrow,
  title,
  description,
  emphasized
}: {
  eyebrow: string;
  title: string;
  description?: string;
  emphasized?: string;
}) {
  return (
    <section className="relative bg-gradient-to-b from-cream-100 to-white overflow-hidden border-b border-ink-100">
      <div className="absolute inset-0 bg-grid opacity-50 mask-fade-b pointer-events-none" />
      <div className="absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full bg-brand-100 blur-3xl opacity-60" />
      <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-ochre-100 blur-3xl opacity-50" />

      <div className="container-wide relative py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="h1 mt-5 text-balance">
              {emphasized ? (
                <>
                  {title}{" "}
                  <span className="text-brand-500">{emphasized}</span>.
                </>
              ) : (
                title
              )}
            </h1>
          </div>
          {description && (
            <div className="col-span-12 lg:col-span-4">
              <p className="lede text-pretty">{description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
