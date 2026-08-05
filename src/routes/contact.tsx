import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bereka Real Estate" },
      { name: "description", content: "Contact Bereka Real Estate in Addis Ababa for site visits, unit availability and installment plans." },
      { property: "og:title", content: "Contact — Bereka Real Estate" },
      { property: "og:description", content: "Visit our Haile Garment office or call our Addis Ababa sales team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Let's find your next home</h1>
          <p className="mt-4 text-muted-foreground">
            Share a few details and our Addis Ababa sales team will reach out within one business day.
          </p>
          <div className="mt-10 space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Phone className="h-4 w-4" /></span>
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-muted-foreground">+251 93 007 2610</div>
                <div className="text-muted-foreground">+251 93 007 2610 · +251 93 007 2610</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Mail className="h-4 w-4" /></span>
              <div><div className="font-semibold">Email</div><div className="text-muted-foreground">berekarealestate.et@gmail.com</div></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><MapPin className="h-4 w-4" /></span>
              <div><div className="font-semibold">Office</div><div className="text-muted-foreground">Haile Garment Roundabout (Meskelegna), Nifas Silk-Lafto Sub-City, Addis Ababa</div></div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          data-netlify="true"
          name="contact"
          className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
        >
          {sent ? (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">Thank you!</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                We've received your message and will be in touch within one business day.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <Select label="Interest" name="interest" options={["1 Bedroom", "2 Bedroom", "3 Bedroom", "Site Visit"]} />
                <Select label="Budget" name="budget" options={["Up to 6M ETB", "6M–10M ETB", "10M–15M ETB", "15M+ ETB"]} />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-primary focus:ring-2"
                  placeholder="Tell us what you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.01]"
              >
                Send message <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-primary focus:ring-2"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select
        name={name}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-primary focus:ring-2"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}