import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";
import { getProject, getRelatedProjects } from "@/lib/projects";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, related: getRelatedProjects(params.slug, 3) };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Westchester Luxury Interiors" }] };
    return {
      meta: [
        { title: `${p.title} — Westchester Luxury Interiors` },
        { name: "description", content: `${p.title} in ${p.loc}. ${p.challenge.slice(0, 140)}` },
        { property: "og:title", content: `${p.title} — Westchester Luxury Interiors` },
        { property: "og:description", content: p.solution.slice(0, 160) },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-luxe py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display-serif text-5xl mb-6">Project not found</h1>
      <Link to="/portfolio" className="link-gold text-sm tracking-[0.25em] uppercase text-gold">
        Back to portfolio
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

function Page() {
  const { project: p, related } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={`${p.cat} · ${p.year}`}
        title={p.title}
        sub={p.clientType}
        label={p.hero}
        tone={p.tone}
      />

      <section className="container-wide py-24 md:py-32">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-gold transition-colors mb-16"
        >
          <ArrowLeft size={14} /> All Projects
        </Link>
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <p className="eyebrow mb-3">Location</p>
            <p className="font-serif text-2xl">{p.loc}</p>
            <p className="eyebrow mt-10 mb-3">Sector</p>
            <p className="font-serif text-2xl">{p.cat}</p>
            <p className="eyebrow mt-10 mb-3">Year</p>
            <p className="font-serif text-2xl">{p.year}</p>
          </Reveal>
          <Reveal delay={120} className="space-y-12">
            <div>
              <p className="eyebrow mb-4">The Challenge</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{p.challenge}</p>
            </div>
            <div>
              <p className="eyebrow mb-4">Our Approach</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{p.solution}</p>
            </div>
            <div>
              <p className="eyebrow mb-4">Featured Detail</p>
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 border-t border-border pt-3">
                    <span className="text-gold mt-1.5">◆</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Outcome</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{p.outcome}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-wide pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {p.gallery.map((g, i) => (
            <Reveal key={`${g.label}-${i}`} delay={i * 80} className={i % 3 === 1 ? "md:mt-16" : ""}>
              <Placeholder label={g.label} alt={g.alt} tone={p.tone} ratio="4/5" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-charcoal-foreground py-28 md:py-36">
        <div className="container-luxe max-w-4xl text-center">
          <span className="font-serif text-7xl text-gold leading-none">"</span>
          <p className="display-serif text-[clamp(1.5rem,2.6vw,2.4rem)] mt-4 mb-10 text-white/95">
            {p.testimonial.quote}
          </p>
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold">{p.testimonial.author}</p>
          <p className="text-sm text-white/60 mt-2">{p.testimonial.role}</p>
        </div>
      </section>

      <section className="container-wide py-28">
        <Reveal className="flex items-end justify-between gap-6 mb-14 pb-6 border-b border-border">
          <div>
            <p className="eyebrow mb-3">Continue Exploring</p>
            <h2 className="display-serif text-[clamp(1.75rem,3vw,2.75rem)]">Related Projects</h2>
          </div>
        </Reveal>
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/portfolio/$slug"
              params={{ slug: r.slug }}
              className="group block"
            >
              <Placeholder label={r.hero} tone={r.tone} ratio="4/5" />
              <div className="pt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{r.cat}</p>
                  <h3 className="font-serif text-xl md:text-2xl">{r.title}</h3>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mt-2">
                    {r.loc} · {r.year}
                  </p>
                </div>
                <ArrowUpRight size={18} className="text-foreground/40 group-hover:text-gold transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
