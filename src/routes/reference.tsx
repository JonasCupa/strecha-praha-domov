import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { BASE_URL } from "@/lib/site";

export const Route = createFileRoute("/reference")({
  head: () => ({
    meta: [
      { title: "Reference a recenze — Jan Žížala" },
      {
        name: "description",
        content: "Co o nás říkají zákazníci v Praze. Reference z realizovaných zakázek.",
      },
      { property: "og:title", content: "Reference a recenze — Jan Žížala" },
      {
        property: "og:description",
        content: "Spokojení zákazníci v Praze. Reference z pokrývačských a klempířských prací.",
      },
      { property: "og:url", content: `${BASE_URL}/reference` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/reference` }],
  }),
  component: Reference,
});

const reviews = [
  {
    name: "Petr K.",
    location: "Praha 6",
    text: "Pan Žížala přijel do dvou dnů, vyřešil zatékání u komína a vše vysvětlil. Profesionál.",
    rating: 5,
  },
  {
    name: "Marie S.",
    location: "Praha 9",
    text: "Kompletní výměna okapů na rodinném domě. Čistá práce, dohodnutý termín i cena.",
    rating: 5,
  },
  {
    name: "Tomáš H.",
    location: "Praha-západ",
    text: "Pokládka nové plechové střechy. Vše perfektní, doporučuji.",
    rating: 5,
  },
  {
    name: "Jana N.",
    location: "Praha 4",
    text: "Drobná oprava po vichřici. Rychle, ochotně a za rozumnou cenu.",
    rating: 5,
  },
];

function Reference() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <header className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Spokojení zákazníci
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Reference</h1>
          <p className="mt-4 text-muted-foreground">
            Vážíme si každé doporučení. Níže najdete vybrané reakce zákazníků.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="relative rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-elevated)]"
            >
              <Quote className="absolute right-5 top-5 h-6 w-6 text-accent/30" />
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-base text-card-foreground">„{r.text}"</p>
              <div className="mt-6 text-sm font-semibold text-foreground">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.location}</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
