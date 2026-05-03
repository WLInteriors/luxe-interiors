import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Westchester Luxury Interiors — Bespoke Renovations & Custom Millwork" },
      {
        name: "description",
        content:
          "Where craftsmanship meets elegance. Bespoke luxury interiors and custom millwork for Westchester, NYC, and the Tri-State area.",
      },
      { property: "og:title", content: "Westchester Luxury Interiors" },
      {
        property: "og:description",
        content: "Bespoke luxury interiors and custom millwork for Westchester & NYC.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Residential Renovations",
    blurb: "Kitchens, baths, and full-home transformations.",
    href: "/services/interior-renovations",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Custom Millwork",
    blurb: "Cabinetry, paneling, and architectural details — built in-house.",
    href: "/services/custom-millwork",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Commercial Build-outs",
    blurb: "Schools, hospitality, and developer partnerships at scale.",
    href: "/services/commercial",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

const projects = [
  { title: "Modern Penthouse", loc: "Manhattan, NY", img: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1200&q=80" },
  { title: "Colonial Revival", loc: "Rye, NY", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" },
  { title: "Hudson Estate Kitchen", loc: "Bronxville, NY", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80" },
  { title: "Tribeca Loft", loc: "New York, NY", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80" },
  { title: "Greenwich Master Bath", loc: "Greenwich, CT", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80" },
  { title: "Westchester Library", loc: "Scarsdale, NY", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" },
] as const;

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Luxury marble kitchen with custom millwork"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/85" />
        <div className="container-luxe relative z-10 pb-24 md:pb-32 text-white">
          <Reveal>
            <p className="eyebrow mb-6">Westchester · NYC · Tri-State</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl">
              Where craftsmanship<br />meets elegance.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              Bespoke luxury interiors and custom millwork, executed entirely under one roof.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold/90 transition-colors"
              >
                View Our Work <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-white hover:text-charcoal transition-colors"
              >
                Begin a Project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-y border-border">
        <div className="container-luxe py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">
          <span>Licensed & Insured</span>
          <span className="text-gold">◆</span>
          <span>MBE / DBE Certified</span>
          <span className="text-gold">◆</span>
          <span>SCA Prequalified</span>
          <span className="text-gold">◆</span>
          <span>In-House Millwork Shop</span>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="container-luxe py-28 md:py-36">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Our Practice</p>
          <h2 className="font-serif text-4xl md:text-5xl">A complete studio for ambitious interiors.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Link to={s.href} className="group relative block h-[460px] overflow-hidden hover-lift">
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 image-scrim" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{s.blurb}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-gold">
                    Discover <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The Difference */}
      <section className="bg-secondary">
        <div className="grid lg:grid-cols-2 items-stretch">
          <div className="relative min-h-[480px] lg:min-h-[640px]">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
              alt="Craftsmen working in millwork shop"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 py-20 md:px-20">
            <Reveal>
              <p className="eyebrow mb-6">The Difference</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-[1.1]">
                The in-house advantage.
              </h2>
              <div className="gold-rule mb-8" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most contractors subcontract their millwork. We don't. Our 12,000-square-foot
                shop in Rye allows us to control every joint, every finish, every reveal — from
                first sketch to final installation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The result is a level of precision and accountability impossible to achieve any
                other way.
              </p>
              <Link to="/about" className="link-gold mt-10 inline-block text-xs tracking-[0.25em] uppercase font-medium text-foreground">
                Inside the Studio
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-luxe py-28 md:py-36">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow mb-4">Selected Work</p>
            <h2 className="font-serif text-4xl md:text-5xl">Featured projects.</h2>
          </div>
          <Link to="/portfolio" className="link-gold text-xs tracking-[0.25em] uppercase font-medium">
            View Full Portfolio
          </Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="pt-5">
                  <h3 className="font-serif text-xl">{p.title}</h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{p.loc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
