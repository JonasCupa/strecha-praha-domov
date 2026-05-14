import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  Mail,
} from "lucide-react";
import heroImage from "@/assets/hero-roof.jpg";

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
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "+420 603 720 337";
const PHONE_TEL = "+420603720337";

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
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) return;
    const subject = encodeURIComponent("Poptávka z webu");
    const body = encodeURIComponent(
      `Jméno: ${form.name}\nTelefon: ${form.phone}\n\nZpráva:\n${form.message}`,
    );
    window.location.href = `mailto:info@klempir-zizala.cz?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex flex-col leading-tight">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-foreground">
              Jan Žížala
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Klempířství · Pokrývačství
            </span>
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elevated)] transition hover:opacity-90 sm:inline-flex"
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
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-[100svh] items-center pt-20"
      >
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
                Zavolejte nám
              </a>
              <a
                href="#sluzby"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card/40 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur transition hover:bg-card"
              >
                Zobrazit služby
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="sluzby" className="border-t border-border bg-background py-20 sm:py-28">
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

      {/* About */}
      <section className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              O mně
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Řemeslo, na které se můžete spolehnout
            </h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <p>
                Jmenuji se <span className="text-foreground font-medium">Jan Žížala</span> a klempířské
                a pokrývačské práci se věnuji řadu let. Pracuji po celé Praze a v jejím okolí — od
                drobných oprav po kompletní rekonstrukce střech.
              </p>
              <p>
                Ke každé zakázce přistupuji osobně. Nabídnu vám férové řešení, vysvětlím postup
                a stojím si za odvedenou prací. Používám kvalitní materiály a dbám na detail.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-elevated)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Kontakt
            </h3>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-3 flex items-center gap-3 text-2xl font-bold text-foreground sm:text-3xl"
            >
              <Phone className="h-6 w-6 text-accent" />
              {PHONE_DISPLAY}
            </a>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Podvinný mlýn 2117, Praha</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Po–So: 7:00 – 19:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="border-t border-border bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Kontaktujte nás
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Nezávazná poptávka
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

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-12 grid gap-4 rounded-lg border border-border bg-card p-6 text-left sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-foreground">Jméno</span>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-md border border-border bg-input/50 px-4 py-3 text-foreground outline-none transition focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Telefon</span>
                <input
                  required
                  type="tel"
                  maxLength={30}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 w-full rounded-md border border-border bg-input/50 px-4 py-3 text-foreground outline-none transition focus:border-accent"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Zpráva</span>
              <textarea
                required
                maxLength={2000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-y rounded-md border border-border bg-input/50 px-4 py-3 text-foreground outline-none transition focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition hover:opacity-90"
            >
              <Mail className="h-5 w-5" />
              Odeslat
            </button>
            {sent && (
              <p className="text-sm text-accent">
                Děkujeme. Otevřeli jsme váš e-mailový klient pro odeslání.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-3">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em]">Jan Žížala</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Klempířství · Pokrývačství
            </div>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" /> {PHONE_DISPLAY}
            </a>
            <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              Podvinný mlýn 2117, Praha
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Služby</div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div className="sm:text-right">
            <div className="text-sm font-semibold text-foreground">Provozní doba</div>
            <div className="mt-3 text-sm text-muted-foreground">Po–So: 7:00 – 19:00</div>
            <div className="text-sm text-muted-foreground">Neděle: dle dohody</div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-border px-5 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jan Žížala. Všechna práva vyhrazena.
        </div>
      </footer>
    </div>
  );
}
