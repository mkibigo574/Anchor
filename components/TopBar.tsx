import Link from "next/link";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { company } from "@/lib/content";

export function TopBar() {
  return (
    <div className="hidden md:block bg-brand-950 text-cream-200 border-b border-white/10">
      <div className="container-wide flex items-center justify-between h-10 text-xs">
        <div className="flex items-center gap-7">
          <a
            href={`tel:${company.phoneRaw}`}
            className="flex items-center gap-2 hover:text-white transition"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-ochre-500/20 text-ochre-400">
              <Phone className="h-3 w-3" />
            </span>
            <span>
              <span className="text-cream-300 font-medium">Darwin Office</span>
              <span className="text-cream-400 mx-1.5">—</span>
              <span className="font-semibold text-white">{company.phone}</span>
            </span>
          </a>
          <span
            aria-hidden
            className="hidden lg:inline h-3.5 w-px bg-white/15"
          />
          <span className="hidden lg:flex items-center gap-2 text-cream-300">
            <MapPin className="h-3.5 w-3.5 text-sage-400" />
            {company.address}
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-ochre-500 hover:bg-ochre-400 text-white font-semibold px-3.5 py-1 transition"
        >
          Schedule a Service
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
