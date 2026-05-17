import { Link } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import { ADDRESS, HOURS, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-3">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.18em]">{SITE_NAME}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {SITE_TAGLINE}
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-accent"
          >
            <Phone className="h-4 w-4 text-accent" /> {PHONE_DISPLAY}
          </a>
          <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 text-accent" />
            {ADDRESS}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Stránky</div>
          <ul className="mt-3 space-y-1.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:text-right">
          <div className="text-sm font-semibold text-foreground">Provozní doba</div>
          <div className="mt-3 text-sm text-muted-foreground">{HOURS}</div>
          <div className="text-sm text-muted-foreground">Neděle: dle dohody</div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-5 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE_NAME}. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
