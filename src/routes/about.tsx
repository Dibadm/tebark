import { createFileRoute } from "@tanstack/react-router";
import agent from "@/assets/agent.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Marvelous Real Estate" },
      { name: "description", content: "Marvelous Real Estate is a private residential developer in Addis Ababa building affordable, family-focused apartments in Nifas Silk-Lafto." },
      { property: "og:title", content: "About — Marvelous Real Estate" },
      { property: "og:description", content: "A private Addis Ababa developer with three delivered residential towers and ready ካርታ." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Building modern homes in Addis Ababa</h1>
          <p className="mt-5 text-muted-foreground">
            Marvelous Real Estate is a private residential developer headquartered at the Haile Garment
            Roundabout in Nifas Silk-Lafto. We design and build affordable, family-focused vertical
            residences — and we deliver them on time, with ready legal paperwork.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "1, 2 and 3 bedroom apartments in suburban Addis Ababa",
              "Sell off-plan and during construction with flexible installments",
              "Three residential towers delivered — 48 units handed over May 16, 2026",
              "Units transfer with 100% completed finishes and ready ካርታ",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src={agent}
            alt="Lead advisor"
            loading="lazy"
            width={800}
            height={1000}
            className="rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-elegant)] sm:block">
            <div className="font-display text-3xl font-bold">48</div>
            <div className="text-xs opacity-90">Units Delivered May 2026</div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3">
        {[
          { n: "01", t: "Reserve", d: "Choose a 1, 2 or 3 bedroom unit off-plan or during construction and lock in installment terms." },
          { n: "02", t: "Visit", d: "Tour our delivered 13-story tower at Haile Garment Roundabout and see finishes in person." },
          { n: "03", t: "Handover", d: "Take keys to a 100% finished apartment with a ready-to-transfer digital ካርታ." },
        ].map((s) => (
          <div key={s.n} className="rounded-2xl border border-border p-8">
            <div className="font-display text-4xl font-bold text-primary">{s.n}</div>
            <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}