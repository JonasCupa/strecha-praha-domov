import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BASE_URL } from "@/lib/site";
import { posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Rady o střechách — Blog Jan Žížala" },
      {
        name: "description",
        content:
          "Praktické rady o střechách, okapech a klempířských pracích. Jak poznat zatékání, kdy vyměnit okapy a další tipy.",
      },
      { property: "og:title", content: "Rady o střechách — Blog Jan Žížala" },
      {
        property: "og:description",
        content: "Praktické rady a tipy pro majitele domů od pokrývače z Prahy.",
      },
      { property: "og:url", content: `${BASE_URL}/blog` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/blog` }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5">
        <header className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Rady a tipy
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-4 text-muted-foreground">
            Praktické rady pro majitele domů — od drobné údržby po větší rekonstrukce.
          </p>
        </header>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col gap-2 py-7 transition hover:bg-secondary/40"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {p.date}
              </div>
              <h2 className="text-xl font-semibold text-foreground transition group-hover:text-accent sm:text-2xl">
                {p.title}
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">{p.excerpt}</p>
              <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Číst dál <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
