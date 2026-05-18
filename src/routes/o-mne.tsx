import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, BadgeCheck, Hammer, MapPinned } from "lucide-react";
import heroImage from "@/assets/hero-roof.jpg";
import { ADDRESS, HOURS, PHONE_DISPLAY, PHONE_TEL, BASE_URL } from "@/lib/site";

export const Route = createFileRoute("/o-mne")({
  head: () => ({
    meta: [
      { title: "O mně — Jan Žížala, klempíř a pokrývač Praha" },
      {
        name: "description",
        content:
          "Jan Žížala — OSVČ, klempířské, pokrývačské a výškové práce v Praze a Středočeském kraji. IČO 43656579.",
      },
      { property: "og:title", content: "O mně — Jan Žížala" },
      {
        property: "og:description",
        content: "Klempířské, pokrývačské a výškové práce. Praha a Středočeský kraj.",
      },
      { property: "og:url", content: `${BASE_URL}/o-mne` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/o-mne` }],
  }),
  component: OMne,
});

const facts = [
  { icon: Hammer, label: "Klempířství · pokrývačství · výšky" },
  { icon: MapPinned, label: "Praha a Středočeský kraj" },
  { icon: BadgeCheck, label: "IČO 43656579" },
];

function OMne() {
  return (
    <div>
      <section className="grid gap-0 lg:grid-cols-2">
        <div className="flex items-center bg-background px-5 py-16 sm:py-20 lg:px-12">
          <div className="mx-auto w-full max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              O mně
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Jan Žížala
            </h1>
            <p className="mt-4 text-lg font-medium text-muted-foreground">
              Klempířské, pokrývačské a výškové práce
            </p>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/90">
              <p>
                Provádím pokrývačské, klempířské a výškové práce. Montuji střešní krytinu
                a střešní okna VELUX a ROTO včetně příslušenství.
              </p>
              <p>
                Dále nabízím rizikové kácení stromů, nátěry fasád i ocelových konstrukcí,
                montážní práce ve výškách za pomocí horolezecké techniky a zabezpečení
                proti hnízdění holubů.
              </p>
              <p>
                Oblastí působnosti je především Praha a Středočeský kraj, po dohodě
                pracuji i mimo region.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-md border border-border bg-card p-4"
                >
                  <f.icon className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-border bg-card p-6">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-3 text-2xl font-bold text-foreground hover:text-accent"
              >
                <Phone className="h-6 w-6 text-accent" />
                {PHONE_DISPLAY}
              </a>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" /> {ADDRESS}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" /> {HOURS}
                </div>
              </div>
              <Link
                to="/kontakt"
                className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                Nezávazná poptávka
              </Link>
            </div>
          </div>
        </div>
        <div className="relative min-h-[300px] lg:min-h-0">
          <img
            src={heroImage}
            alt="Jan Žížala — klempířské a pokrývačské práce"
            width={1920}
            height={1280}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
