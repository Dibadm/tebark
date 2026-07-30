import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[oklch(0.13_0.03_150)] text-[oklch(0.95_0_0)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold">M</span>
            <span className="text-lg font-bold">Tebarek Real Estate</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">
            A private residential developer in Addis Ababa building modern, family-focused, and
            affordable vertical living in the southern zone of the capital.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/properties" className="hover:text-primary">Properties</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +251 93 007 2610</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +251 93 007 2610</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> tebarekrealestate.et@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Haile Garment Roundabout, Nifas Silk-Lafto, Addis Ababa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Tebarek Real Estate. All rights reserved.</p>
          <p>Modern homes for modern families in Addis Ababa.</p>
        </div>
      </div>
    </footer>
  );
}