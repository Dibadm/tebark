import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Search, Star, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-dubai.jpg";
import { properties } from "@/lib/properties";
import { PropertyCard } from "@/components/property-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tebarek Real Estate — Modern Homes in Addis Ababa" },
      {
        name: "description",
        content:
          "Tebarek Real Estate builds modern, family-focused, and affordable apartments in Addis Ababa. Explore 1, 2 and 3 bedroom homes with flexible installments.",
      },
      { property: "og:title", content: "Tebarek Real Estate — Modern Homes in Addis Ababa" },
      {
        property: "og:description",
        content: "Affordable 1, 2 and 3 bedroom apartments in Nifas Silk-Lafto. Delivered on time, with ready ካርታ.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = properties.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Addis Ababa residential tower at dusk"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--hero-overlay)" }}
        />
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 md:pt-40 md:pb-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Modern Homes for{" "}
              <span className="text-primary">Modern Families</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
              Tebarek Real Estate develops affordable, family-focused apartments in suburban
              Addis Ababa — delivered on time, with flexible installment plans.
            </p>
          </div>

          {/* Search bar */}
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl md:p-4">
            <div className="grid gap-2 md:grid-cols-[1fr_1fr_1fr_auto]">
              <select className="rounded-lg bg-white/90 px-4 py-3 text-sm text-foreground">
                <option>Location</option><option>Haile Garment</option>
                <option>Meskelegna</option><option>Nifas Silk-Lafto</option>
                <option>Southern Addis Ababa</option>
              </select>
              <select className="rounded-lg bg-white/90 px-4 py-3 text-sm text-foreground">
                <option>Configuration</option><option>1 Bedroom</option>
                <option>2 Bedroom</option><option>3 Bedroom</option>
                <option>Penthouse</option>
              </select>
              <select className="rounded-lg bg-white/90 px-4 py-3 text-sm text-foreground">
                <option>Price Range</option><option>Up to 6M ETB</option>
                <option>6M – 10M ETB</option><option>10M – 15M ETB</option>
                <option>15M+ ETB</option>
              </select>
              <Link
                to="/properties"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Search className="h-4 w-4" /> Search
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-6 text-center text-white">
            {[
              { n: "3", l: "Towers Delivered" },
              { n: "48", l: "Units Handed Over (May 2026)" },
              { n: "13", l: "Story Latest Project" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold sm:text-5xl">{s.n}</div>
                <div className="mt-1 text-xs text-white/70 sm:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">Available Apartments</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            1, 2 and 3 bedroom homes across our delivered and in-construction towers in southern Addis Ababa.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <PropertyCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-accent"
          >
            View All Properties <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[oklch(0.97_0.01_150)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-5xl">Why Tebarek</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A developer built on on-time delivery, ready legal paperwork, and honest, family-first design.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { Icon: Star, t: "Delivered On Time", d: "Three towers completed — most recently 48 units handed over in May 2026." },
              { Icon: ShieldCheck, t: "Ready ካርታ", d: "Units transfer with 100% completed finishes and ready digital land holding certificates." },
              { Icon: TrendingUp, t: "Flexible Installments", d: "Buy off-plan or during construction with payment plans that fit Ethiopian families." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-3xl p-10 text-white shadow-[var(--shadow-elegant)] md:p-16"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to visit our Haile Garment site?
            </h2>
            <p className="mt-4 text-white/90">
              Book a site visit at our Haile Garment Roundabout office and tour the finished 13-story tower in person.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90"
            >
              Book a Site Visit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
