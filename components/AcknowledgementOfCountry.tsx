import { acknowledgement } from "@/lib/content";

function AboriginalFlag() {
  return (
    <svg
      viewBox="0 0 60 40"
      className="h-full w-full"
      role="img"
      aria-label="Aboriginal Flag"
    >
      <rect width="60" height="20" fill="#000000" />
      <rect y="20" width="60" height="20" fill="#CC0000" />
      <circle cx="30" cy="20" r="7.5" fill="#FFCC00" />
    </svg>
  );
}

function TorresStraitFlag() {
  return (
    <svg
      viewBox="0 0 60 40"
      className="h-full w-full"
      role="img"
      aria-label="Torres Strait Islander Flag"
    >
      <rect width="60" height="40" fill="#0F8A33" />
      <rect y="6" width="60" height="28" fill="#0072CE" />
      <rect width="60" height="2" fill="#000000" y="6" />
      <rect width="60" height="2" fill="#000000" y="32" />
      <g transform="translate(30 20)" fill="#FFFFFF">
        <path d="M0 -7 L1.5 -1.5 L7 0 L1.5 1.5 L0 7 L-1.5 1.5 L-7 0 L-1.5 -1.5 Z" />
        <circle r="3.2" fill="none" stroke="#FFFFFF" strokeWidth="1" />
      </g>
    </svg>
  );
}

function AustralianFlag() {
  return (
    <svg
      viewBox="0 0 60 40"
      className="h-full w-full"
      role="img"
      aria-label="Australian Flag"
    >
      <rect width="60" height="40" fill="#00247D" />
      {/* Union Jack — simplified */}
      <g>
        <rect width="30" height="20" fill="#00247D" />
        <path
          d="M0 0 L30 20 M30 0 L0 20"
          stroke="#FFFFFF"
          strokeWidth="3"
        />
        <path
          d="M0 0 L30 20 M30 0 L0 20"
          stroke="#CF142B"
          strokeWidth="1.4"
        />
        <path d="M15 0 V20 M0 10 H30" stroke="#FFFFFF" strokeWidth="4" />
        <path d="M15 0 V20 M0 10 H30" stroke="#CF142B" strokeWidth="2" />
      </g>
      {/* Commonwealth Star */}
      <g
        transform="translate(15 30)"
        fill="#FFFFFF"
      >
        <path d="M0 -3.5 L0.9 -0.9 L3.5 -0.7 L1.5 1.1 L2.1 3.5 L0 2.1 L-2.1 3.5 L-1.5 1.1 L-3.5 -0.7 L-0.9 -0.9 Z" />
      </g>
      {/* Southern Cross — simplified positions */}
      <g fill="#FFFFFF">
        <circle cx="46" cy="14" r="1.6" />
        <circle cx="50" cy="22" r="1.6" />
        <circle cx="42" cy="26" r="1.4" />
        <circle cx="46" cy="32" r="1.2" />
        <circle cx="50" cy="9" r="1" />
      </g>
    </svg>
  );
}

export function AcknowledgementOfCountry() {
  return (
    <section className="bg-cream-100 border-t border-ink-100">
      <div className="container-wide py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-extrabold tracking-tightest text-2xl md:text-3xl text-ink-900">
            {acknowledgement.title}
          </h2>
          <p className="mt-5 text-ink-700 leading-relaxed text-pretty">
            {acknowledgement.body}
          </p>
          <div className="mt-9 flex items-center justify-center gap-5 md:gap-7">
            <figure className="flex flex-col items-center">
              <span className="block w-24 md:w-28 aspect-[3/2] overflow-hidden rounded-md ring-1 ring-ink-200 shadow-soft">
                <AboriginalFlag />
              </span>
              <figcaption className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500 font-semibold">
                Aboriginal Flag
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center">
              <span className="block w-24 md:w-28 aspect-[3/2] overflow-hidden rounded-md ring-1 ring-ink-200 shadow-soft">
                <TorresStraitFlag />
              </span>
              <figcaption className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500 font-semibold">
                Torres Strait Islander
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center">
              <span className="block w-24 md:w-28 aspect-[3/2] overflow-hidden rounded-md ring-1 ring-ink-200 shadow-soft">
                <AustralianFlag />
              </span>
              <figcaption className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ink-500 font-semibold">
                Australian Flag
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
