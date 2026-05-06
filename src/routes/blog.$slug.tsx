import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { getPost, posts, renderBody, type BlogPost } from "@/lib/blog";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
    return { post, related };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Article — Westchester Luxury Interiors" }] };
    return {
      meta: [
        { title: `${p.title} — Journal` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "article:published_time", content: p.date },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-luxe py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display-serif text-5xl mb-6">Article not found</h1>
      <Link to="/blog" className="link-gold text-sm tracking-[0.25em] uppercase text-gold">
        Back to journal
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-luxe py-32 text-center">
      <h1 className="display-serif text-3xl mb-4">Something went wrong</h1>
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: Page,
});

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function Page() {
  const { post, related } = Route.useLoaderData();
  const blocks = renderBody(post.body);

  return (
    <>
      <article>
        <header className="container-luxe pt-32 md:pt-40 pb-16 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-gold transition-colors mb-12"
          >
            <ArrowLeft size={14} /> Journal
          </Link>
          <p className="eyebrow mb-6">{post.category} · {post.readMinutes} min read</p>
          <h1 className="display-serif text-[clamp(2.25rem,5vw,4rem)] mb-8">{post.title}</h1>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
            {fmt(post.date)} · {post.author}
          </p>
        </header>

        <div className="container-wide pb-20">
          <Placeholder label={post.cover} alt={post.coverAlt} tone="warm" ratio="16/9" />
        </div>

        <div className="container-luxe pb-32">
          <div className="max-w-3xl mx-auto space-y-7 text-lg leading-relaxed text-foreground/90">
            {blocks.map((b, i) =>
              b.type === "h2" ? (
                <h2 key={i} className="display-serif text-3xl md:text-4xl mt-12 mb-2 text-foreground">
                  {b.text}
                </h2>
              ) : (
                <p key={i}>{b.text}</p>
              ),
            )}
          </div>
        </div>
      </article>

      <section className="bg-secondary py-24">
        <div className="container-wide">
          <Reveal className="mb-12 pb-6 border-b border-border">
            <p className="eyebrow mb-3">Continue Reading</p>
            <h2 className="display-serif text-[clamp(1.75rem,3vw,2.75rem)]">More from the journal</h2>
          </Reveal>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
            {related.map((r: BlogPost) => (
              <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group block">
                <Placeholder label={r.cover} alt={r.coverAlt} tone="mid" ratio="16/10" />
                <div className="pt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{r.category}</p>
                    <h3 className="font-serif text-xl md:text-2xl group-hover:text-gold transition-colors">
                      {r.title}
                    </h3>
                  </div>
                  <ArrowUpRight size={18} className="text-foreground/40 group-hover:text-gold transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
