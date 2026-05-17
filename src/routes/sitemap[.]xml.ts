import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/lib/blog-posts";

const BASE_URL = "https://strecha-praha-domov.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/galerie", changefreq: "monthly", priority: "0.8" },
          { path: "/reference", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/o-mne", changefreq: "yearly", priority: "0.6" },
          { path: "/faq", changefreq: "monthly", priority: "0.6" },
          { path: "/kontakt", changefreq: "yearly", priority: "0.9" },
        ];
        const blogEntries = posts.map((p) => ({
          path: `/blog/${p.slug}`,
          changefreq: "monthly" as const,
          priority: "0.6",
        }));
        const all = [...staticEntries, ...blogEntries];

        const urls = all.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
