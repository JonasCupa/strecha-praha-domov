import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { BASE_URL } from "@/lib/site";

const imageModules = import.meta.glob("/src/assets/gallery/*.{JPG,jpg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const images = Object.values(imageModules);

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie realizací — Jan Žížala" },
      {
        name: "description",
        content:
          "Ukázky montáží střešních oken VELUX a pokrývačských prací v Praze.",
      },
      { property: "og:title", content: "Galerie realizací — Jan Žížala" },
      {
        property: "og:description",
        content:
          "Montáž střešních oken VELUX, pokrývačské a klempířské práce — naše realizace.",
      },
      { property: "og:url", content: `${BASE_URL}/galerie` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/galerie` }],
  }),
  component: Galerie,
});

function Galerie() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + images.length) % images.length,
      ),
    [],
  );

  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i + 1) % images.length,
      ),
    [],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next]);

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <header className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Realizace
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Galerie
          </h1>
          <p className="mt-4 text-muted-foreground">
            Ukázky montáží střešních oken VELUX a pokrývačských prací. Kliknutím
            zobrazíte větší náhled.
          </p>
        </header>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group mb-4 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-lg border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={src}
                alt={`Realizace ${i + 1}`}
                loading="lazy"
                className="w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog.Root
        open={lightboxIndex !== null}
        onOpenChange={(open) => {
          if (!open) setLightboxIndex(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 focus:outline-none">
            <Dialog.Title className="sr-only">
              Fotografie realizace{" "}
              {lightboxIndex !== null ? lightboxIndex + 1 : ""}
            </Dialog.Title>
            {lightboxIndex !== null && (
              <img
                src={images[lightboxIndex]}
                alt={`Realizace ${lightboxIndex + 1}`}
                className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              />
            )}

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/80"
              aria-label="Předchozí"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-14 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/80 sm:right-4"
              aria-label="Další"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <Dialog.Close className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/80">
              <X className="h-5 w-5" />
              <span className="sr-only">Zavřít</span>
            </Dialog.Close>

            {lightboxIndex !== null && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                {lightboxIndex + 1} / {images.length}
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
