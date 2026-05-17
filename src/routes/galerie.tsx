import { createFileRoute } from "@tanstack/react-router";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { BASE_URL } from "@/lib/site";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie realizací — Jan Žížala" },
      {
        name: "description",
        content:
          "Ukázky našich pokrývačských a klempířských prací v Praze: plechové střechy, okapy, oplechování, tašky.",
      },
      { property: "og:title", content: "Galerie realizací — Jan Žížala" },
      {
        property: "og:description",
        content: "Pokládka střech, okapové systémy, klempířské detaily — naše realizace.",
      },
      { property: "og:url", content: `${BASE_URL}/galerie` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/galerie` }],
  }),
  component: Galerie,
});

const items = [
  { src: gallery1, title: "Falcovaná plechová střecha", category: "Pokládka" },
  { src: gallery3, title: "Pokládka pálených tašek", category: "Pokládka" },
  { src: gallery2, title: "Měděný okapový systém", category: "Klempířina" },
  { src: gallery4, title: "Oplechování komínu", category: "Klempířina" },
  { src: gallery6, title: "Vikýř s plechovým opláštěním", category: "Vikýře" },
  { src: gallery5, title: "Výškové práce na střeše", category: "Výškové práce" },
];

function Galerie() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <header className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Realizace
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Galerie</h1>
          <p className="mt-4 text-muted-foreground">
            Vybrané ukázky našich pokrývačských a klempířských prací. Galerie se postupně rozšiřuje.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 p-4">
                <span className="text-sm font-semibold text-card-foreground">{item.title}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
                  {item.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
