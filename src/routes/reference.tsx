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
    name: "Michou",
    location: "Hodnocení na Mapy.cz",
    date: "3. září 2015",
    text: "Velmi příjemná komunikace a ochota, domluven termín a čas montáže, firma dojela přesně na čas a montáž trvala přesně předem odhadnutou dobu. Odvedli profesionální práci s připraveným profi nářadím i čistým firemním oblečením, ukázková práce, děkuji!",
    rating: 5,
  },
  {
    name: "Radek Soběslavský",
    location: "Hodnocení na Mapy.cz",
    date: "23. října 2024",
    text: "Termíny, kvalita, komunikace — vše v pořádku. Doporučuji.",
    rating: 5,
  },
  {
    name: "Jaroslav Kvasnička",
    location: "Hodnocení na Mapy.cz",
    date: "23. listopadu 2024",
    text: "Spokojenost s cenou, termíny, kvalitou i komunikací.",
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
            Reálná hodnocení zákazníků z Firmy.cz a Mapy.cz. Děkuji za každé doporučení.
          </p>
          <a
            href="https://www.firmy.cz/detail/405017-jan-zizala-praha-liben.html#hodnoceni"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
          >
            Zobrazit hodnocení na Firmy.cz →
          </a>
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
              <div className="text-xs text-muted-foreground">
                {r.location} · {r.date}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
