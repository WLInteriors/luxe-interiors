import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";
import { posts } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Westchester Luxury Interiors" },
      {
        name: "description",
        content:
          "Notes on craft, planning, and practice from the Westchester Luxury Interiors studio and millwork shop.",
      },
      { property: "og:title", content: "Journal — Westchester Luxury Interiors" },
      {
        property: "og:description",
        content: "Notes on craft, planning, and practice from our studio.",
      },
    ],
  }),
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
  const [feature, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes from the studio."
        sub="On craft, planning, and the practice of building luxury interiors."
        label={feature.cover}
        tone="dark"
      />

      <section className="container-wide py-24 md:py-32">
        <Reveal>
          <Link to="/blog/$slug" params={{ slug: feature.slug }} className="group grid gap-10 lg:grid-cols-2 items-center">
            <Placeholder label={feature.cover} alt={feature.coverAlt} tone="warm" ratio="4/5" />
            <div>
              <p className="eyebrow mb-4">{feature.category} · {feature.readMinutes} min read</p>
              <h2 className="display-serif text-[clamp(2rem,4vw,3.5rem)] mb-6 group-hover:text-gold transition-colors">
                {feature.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{feature.excerpt}</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                {fmt(feature.date)}
              </p>
            </div>
          </Link>
        </Reveal>

        <div className="mt-28 grid gap-x-6 gap-y-16 md:grid-cols-2">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <Placeholder label={p.cover} alt={p.coverAlt} tone="mid" ratio="16/10" />
              <div className="pt-6 flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                    {p.category} · {p.readMinutes} min
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    {fmt(p.date)}
                  </p>
                </div>
                <ArrowUpRight size={20} className="text-foreground/40 group-hover:text-gold transition-colors flex-shrink-0 mt-2" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
