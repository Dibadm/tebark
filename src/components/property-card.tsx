import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import type { Property } from "@/lib/properties";
import { Link } from "@tanstack/react-router";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <Link
      to="/properties"
      className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
          {p.type}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {p.location}
        </div>
        <h3 className="mt-2 line-clamp-1 text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 text-xl font-bold text-primary">{p.price}</p>
        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Bed className="h-4 w-4" /> {p.beds}</span>
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" /> {p.baths}</span>
          <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4" /> {p.sqm} m²</span>
        </div>
      </div>
    </Link>
  );
}