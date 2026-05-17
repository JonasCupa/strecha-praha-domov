import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  Hammer,
  Wrench,
  Home,
  CloudRain,
  Thermometer,
  Mountain,
  Clock,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-roof.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { PHONE_DISPLAY, PHONE_TEL, BASE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jan Žížala — Klempířské a pokrývačské práce Praha" },
      {
        name: "description",
        content:
          "Spolehlivé klempířské a pokrývačské práce v Praze. Pokládka a opravy střech, okapy, zateplení. Rychlý příjezd, férová cena. Volejte +420 603 720 337.",
      },
      { property: "og:title", content: "Jan Žížala — Klempířské a pokrývačské práce Praha" },
      {
        property: "og:description",
        content: "Pokrývačské a klempířské práce v Praze a okolí. Rychle, kvalitně, férově.",
      },
      { property: "og:url", content: `${BASE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "Jan Žížala — Klempířské a pokrývačské práce",
          telephone: "+420603720337",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Podvinný mlýn 2117",
            addressLocality: "Praha",
            addressCountry: "CZ",
          },
          areaServed: "Praha",
          openingHours: "Mo-Sa 07:00-19:00",
          url: `${BASE_URL}/`,
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Home, title: "Pokládka střech", desc: "Nové střechy z plechu, tašek i šindele." },
  { icon: Wrench, title: "Opravy střech", desc: "Lokální opravy, výměna prvků, řešení zatékání." },
  { icon: Hammer, title: "Klempířské práce", desc: "Oplechování, lemování, parapety, atiky." },
  { icon: CloudRain, title: "Okapové systémy", desc: "Montáž, čištění a opravy okapů a svodů." },
  { icon: Thermometer, title: "Zateplení střech", desc: "Zateplení podkroví a střešních konstrukcí." },
  { icon: Mountain, title: "Výškové práce", desc: "Práce ve výškách s jištěním a plošinou." },
];

const benefits = [
  { icon: Clock, title: "Rychlý příjezd", desc: "Reagujeme do 24 hodin po celé Praze." },
  { icon: ShieldCheck, title: "Záruční práce", desc: "Na všechny práce poskytujeme záruku." },
  { icon: BadgeCheck, title: "Férová cena", desc: "Bez skrytých poplatků a překvapení." },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[88svh] items-center">
        <img
          src={heroImage}
          alt="Pokrývačské práce na střeše v Praze"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <MapPin className="h-3 w-3" /> Praha a okolí
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Spolehlivé klempířské a pokrývačské práce v Praze
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Rychlé řešení, kvalitní materiály, férová cena.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-elevated)] transition hover:opacity-90"
              >
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card/40 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur transition hover:bg-card"
              >
                Nezávazná poptávka
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Naše služby
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Kompletní řešení pro vaši střechu
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col gap-3 bg-card p-7 transition hover:bg-secondary"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent/15 text-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-border bg-secondary/30 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="border-t border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Realizace
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ukázky naší práce
              </h2>
            </div>
            <Link
              to="/galerie"
              className="hidden items-center gap-2 text-sm font-semibold text-accent hover:opacity-80 sm:inline-flex"
            >
              Celá galerie <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[gallery1, gallery2, gallery3].map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg bg-card">
                <img
                  src={src}
                  alt={`Realizace ${i + 1}`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link to="/galerie" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Celá galerie <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary/30 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Potřebujete poradit se střechou?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Zavolejte nebo nám napište — ozveme se obratem.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-8 inline-flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground transition hover:text-accent sm:text-4xl"
          >
            <Phone className="h-7 w-7 text-accent" />
            {PHONE_DISPLAY}
          </a>
          <div className="mt-6">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition hover:opacity-90"
            >
              Napsat zprávu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
