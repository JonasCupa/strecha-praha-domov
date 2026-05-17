import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { ADDRESS, HOURS, PHONE_DISPLAY, PHONE_TEL, BASE_URL } from "@/lib/site";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Jan Žížala, klempířství Praha" },
      {
        name: "description",
        content:
          "Kontakt na Jana Žížalu. Telefon +420 603 720 337, Podvinný mlýn 2117 Praha. Nezávazná poptávka přes formulář.",
      },
      { property: "og:title", content: "Kontakt — Jan Žížala" },
      {
        property: "og:description",
        content: "Telefon, adresa, kontaktní formulář. Praha a okolí.",
      },
      { property: "og:url", content: `${BASE_URL}/kontakt` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/kontakt` }],
  }),
  component: Kontakt,
});

type Status = "idle" | "submitting" | "ok" | "error";

function Kontakt() {
  const send = useServerFn(submitContact);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      await send({
        data: {
          name: form.name.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        },
      });
      setStatus("ok");
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Něco se nepovedlo. Zkuste to znovu, nebo zavolejte.",
      );
    }
  };

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <header className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Kontakt
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Pojďme se domluvit
          </h1>
          <p className="mt-4 text-muted-foreground">
            Zavolejte nám nebo nám napište přes formulář — ozveme se obratem.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <aside className="space-y-5">
            <div className="rounded-lg border border-border bg-card p-7">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Telefon
              </h2>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-3 flex items-center gap-3 text-2xl font-bold text-foreground hover:text-accent sm:text-3xl"
              >
                <Phone className="h-6 w-6 text-accent" />
                {PHONE_DISPLAY}
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                Nejrychlejší způsob, jak se domluvit. Volejte v provozní době.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-7">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Adresa
              </h2>
              <div className="mt-3 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                <span className="text-base">{ADDRESS}</span>
              </div>
              <div className="mt-3 flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-accent" />
                <span className="text-base">{HOURS}</span>
              </div>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-border bg-card p-7 sm:p-9"
          >
            <h2 className="text-xl font-semibold">Nezávazná poptávka</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Vyplňte krátký formulář, ozveme se vám obratem.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-foreground">Jméno</span>
                <input
                  required
                  minLength={2}
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
                  minLength={6}
                  maxLength={30}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 w-full rounded-md border border-border bg-input/50 px-4 py-3 text-foreground outline-none transition focus:border-accent"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-medium text-foreground">Zpráva</span>
              <textarea
                required
                minLength={5}
                maxLength={2000}
                rows={6}
                placeholder="Krátce popište, co potřebujete — typ střechy, adresu, termín…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-y rounded-md border border-border bg-input/50 px-4 py-3 text-foreground outline-none transition focus:border-accent"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Odesílám…
                </>
              ) : (
                <>
                  <Mail className="h-5 w-5" /> Odeslat poptávku
                </>
              )}
            </button>

            {status === "ok" && (
              <div className="mt-5 flex items-start gap-3 rounded-md border border-accent/30 bg-accent/10 p-4 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-semibold">Děkujeme, zprávu jsme přijali.</div>
                  <div className="mt-1 text-muted-foreground">
                    Ozveme se vám co nejdříve. Pokud spěcháte, zavolejte na {PHONE_DISPLAY}.
                  </div>
                </div>
              </div>
            )}
            {status === "error" && error && (
              <div className="mt-5 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
