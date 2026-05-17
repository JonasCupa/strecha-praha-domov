import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BASE_URL } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Časté dotazy — Jan Žížala" },
      {
        name: "description",
        content:
          "Odpovědi na nejčastější dotazy ohledně klempířských a pokrývačských prací v Praze.",
      },
      { property: "og:title", content: "Časté dotazy — Jan Žížala" },
      {
        property: "og:description",
        content: "Cena, termíny, záruka, materiály — odpovědi na časté dotazy.",
      },
      { property: "og:url", content: `${BASE_URL}/faq` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

const faqs = [
  {
    q: "Jak rychle přijedete na prohlídku?",
    a: "Na běžnou poptávku reagujeme do 24 hodin. U havarijních situací (zatékání po bouřce) se snažíme přijet ještě tentýž den.",
  },
  {
    q: "Kolik bude práce stát?",
    a: "Konečnou cenu vám sdělíme až po osobní prohlídce — orientační odhad můžeme dát po telefonu. Cenová nabídka je vždy nezávazná a zdarma.",
  },
  {
    q: "Děláte i menší zakázky?",
    a: "Ano. Drobné opravy, dotěsnění komínu, výměna několika tašek nebo vyčištění okapů — to vše rádi uděláme.",
  },
  {
    q: "Jakou poskytujete záruku?",
    a: "Na řemeslné práce poskytujeme záruku v zákonné délce. Na materiály platí záruka výrobce, kterou předáme spolu s dokumentací.",
  },
  {
    q: "V jakém regionu pracujete?",
    a: "Pracujeme v Praze a v Středočeském kraji do cca 30 km od Prahy. Po domluvě i dále.",
  },
  {
    q: "Jaké materiály používáte?",
    a: "Pracujeme s ověřenými značkami — Lindab, Ruukki, Bramac, Tondach, KJG. Vždy doporučíme materiál vhodný pro konkrétní střechu a rozpočet.",
  },
];

function Faq() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <header>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            FAQ
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Časté dotazy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Nenašli jste odpověď? Zavolejte nebo nám napište.
          </p>
        </header>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
