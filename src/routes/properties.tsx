import { createFileRoute } from "@tanstack/react-router";
import { properties } from "@/lib/properties";
import { PropertyCard } from "@/components/property-card";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Apartments in Addis Ababa — Bereka Real Estate" },
      { name: "description", content: "Browse 1, 2 and 3 bedroom apartments by Bereka Real Estate in Nifas Silk-Lafto, Addis Ababa." },
      { property: "og:title", content: "Apartments in Addis Ababa — Bereka Real Estate" },
      { property: "og:description", content: "Modern, family-focused homes in southern Addis Ababa with flexible installments." },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Listings</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Apartments in Addis Ababa</h1>
        <p className="mt-3 text-muted-foreground">
          Our full portfolio of 1, 2 and 3 bedroom homes across Bereka Real Estate towers in Nifas Silk-Lafto.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => <PropertyCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}