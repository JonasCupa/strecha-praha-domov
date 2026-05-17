import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { BASE_URL } from "@/lib/site";
import { posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.post.title ?? "Článek";
    const desc = loaderData?.post.excerpt ?? "";
    return {
      meta: [
        { title: `${title} — Jan Žížala` },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${BASE_URL}/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `${BASE_URL}/blog/${params.slug}` }],
    };
  },
  component: Post,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-20 text-center">
      <h1 className="text-3xl font-bold">Článek nenalezen</h1>
      <Link to="/blog" className="mt-6 inline-block text-accent">
        ← Zpět na blog
      </Link>
    </div>
  ),
});

function Post() {
  const { post } = Route.useLoaderData();
  return (
    <article className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Zpět na blog
        </Link>
        <div className="mt-8 text-xs uppercase tracking-[0.18em] text-accent">{post.date}</div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="prose-zinc mt-10 space-y-5 text-base leading-relaxed text-foreground">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
