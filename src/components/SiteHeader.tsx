import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-foreground">
            {SITE_NAME}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {SITE_TAGLINE}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="px-3 py-2 text-sm font-medium transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:opacity-90 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label="Zavolat"
            className="inline-flex items-center justify-center rounded-md bg-accent p-2.5 text-accent-foreground sm:hidden"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center justify-center rounded-md border border-border p-2.5 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-3 py-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-accent" }}
                inactiveProps={{ className: "text-foreground" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium transition hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
