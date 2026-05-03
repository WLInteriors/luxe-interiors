import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Westchester Luxury Interiors — Bespoke Renovations & Custom Millwork" },
      {
        name: "description",
        content:
          "Where craftsmanship meets architecture. Bespoke luxury interiors and custom millwork for Westchester, NYC, and the Tri-State.",
      },
      { property: "og:title", content: "Westchester Luxury Interiors" },
      {
        property: "og:description",
        content: "Bespoke luxury interiors and custom millwork for Westchester & NYC.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    n: "01",
    title: "Interior Renovations",
    blurb: "Kitchens, baths, and full-home transformations carried out with shop-grade precision.",
    href: "/services/interior-renovations",
    label: "Kitchen/casework detail",
    tone: "light" as const,
  },
  {
    n: "02",
    title: "Custom Millwork",
    blurb: "Cabinetry, paneling, and architectural details fabricated under one roof.",
    href: "/services/custom-millwork",
    label: "Custom millwork shop photo",
    tone: "warm" as const,
  },
  {
    n: "03",
    title: "Commercial Buildouts",
    blurb: "Schools, hospitality, and developer partnerships at institutional scale.",
    href: "/services/commercial",
    label: "Commercial interior photo",
    tone: "dark" as const,
  },
];

const projects = [
  { title: "Hudson Estate", loc: "Bronxville, NY", year: "2024", label: "Kitchen/casework detail", tone: "light" as const, ratio: "4/5" },
  { title: "Tribeca Loft", loc: "New York, NY", year: "2024", label: "Hero project photo", tone: "dark" as const, ratio: "4/5" },
  { title: "Greenwich Spa Bath", loc: "Greenwich, CT", year: "2023", label: "Bathroom vanity/millwork detail", tone: "warm" as const, ratio: "4/5" },
  { title: "Westchester Library", loc: "Scarsdale, NY", year: "2023", label: "Custom millwork shop photo", tone: "mid" as const, ratio: "4/5" },
];

function HomePage() {
  return (
    <>
      {/* HERO — image-led, full-bleed */}
      <section className="relative h-[100svh] min-h-[680px] flex items-end overflow-hidden">
        <Placeholder
          label="Hero project photo"
          tone="dark"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/85 pointer-events-none" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="container-wide relative z-10 pb-44 md:pb-48 pt-32 text-white">
          <Reveal>
            <p className="eyebrow text-white/80 mb-8">
              <span className="text-gold">Est. 1987</span> &nbsp;·&nbsp; Westchester · NYC · Tri-State
            </p>
            <h1 className="display-serif text-[clamp(2.75rem,8vw,8.5rem)] max-w-[18ch]">
              Architecture,<br />finished by hand.
            </h1>
            <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end max-w-5xl">
              <p className="text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
                A second-generation general contractor and in-house millwork
                studio, building bespoke residential and commercial interiors
                across the Tri-State.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-gold text-charcoal text-[11px] tracking-[0.28em] uppercase font-medium hover:bg-white transition-colors"
                >
                  View Portfolio
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 border border-white/35 text-white text-[11px] tracking-[0.28em] uppercase font-medium hover:bg-white hover:text-charcoal transition-colors"
                >
                  Request Estimate
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero meta strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/15 bg-charcoal/40 backdrop-blur-md">
          <div className="container-wide grid grid-cols-4 divide-x divide-white/10 text-white/80">
            {[
              ["38", "Years building"],
              ["12,000", "Sq. ft. shop"],
              ["3", "States licensed"],
              ["100%", "In-house millwork"],
            ].map(([n, l]) => (
              <div key={l} className="px-6 py-5">
                <p className="font-serif text-2xl md:text-3xl text-white">{n}</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-background border-b border-border">
        <div className="container-wide py-7 flex flex-wrap items-center justify-between gap-6 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          <span>Licensed & Insured · NY · CT · NJ</span>
          <span>MBE / DBE Certified</span>
          <span>SCA Prequalified</span>
          <span>AIA Industry Partner</span>
          <span>5-Year Warranty</span>
        </div>
      </section>

      {/* INTRO STATEMENT — generous whitespace */}
      <section className="container-luxe py-32 md:py-44">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">A Word from the Studio</p>
            <span className="hairline block w-16 mb-8" />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <p className="display-serif text-[clamp(1.75rem,3.4vw,3.25rem)] leading-[1.1] text-foreground">
              We are not, strictly speaking, a contractor. We are a workshop
              that happens to manage construction — a small team of designers,
              draftsmen, and craftsmen building the rooms our clients
              <span className="text-gold"> remember</span>.
            </p>
            <Link
              to="/about"
              className="link-gold mt-12 inline-block text-[11px] tracking-[0.3em] uppercase font-medium"
            >
              Inside the Studio →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — large editorial cards */}
      <section className="bg-secondary py-28 md:py-36">
        <div className="container-wide">
          <Reveal className="flex flex-wrap items-end justify-between gap-8 mb-16">
            <div>
              <p className="eyebrow mb-4">Our Practice</p>
              <h2 className="display-serif text-[clamp(2.25rem,5vw,4rem)]">
                Three disciplines.<br />One studio.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              From a single bespoke vanity to a 40,000 sq. ft. school
              renovation — every project moves through the same shop, the same
              foreman, the same standard.
            </p>
          </Reveal>

          <div className="grid gap-2 md:gap-3 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <Link to={s.href} className="group relative block overflow-hidden">
                  <Placeholder
                    label={s.label}
                    tone={s.tone}
                    ratio="3/4"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 text-white">
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal/90 to-transparent -z-0" />
                    <div className="relative z-10">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{s.n}</span>
                      <h3 className="font-serif text-[1.75rem] md:text-3xl mt-3 mb-3 leading-tight">{s.title}</h3>
                      <p className="text-sm text-white/75 max-w-xs leading-relaxed">{s.blurb}</p>
                      <span className="inline-flex items-center gap-2 mt-6 text-[10px] tracking-[0.3em] uppercase text-white/90 group-hover:text-gold transition-colors">
                        Discover <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE — split, image dominant */}
      <section className="bg-background">
        <div className="grid lg:grid-cols-12 items-stretch min-h-[640px]">
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[640px]">
            <Placeholder
              label="Custom millwork shop photo"
              tone="dark"
              fill
            />
          </div>
          <div className="lg:col-span-5 flex items-center bg-charcoal text-charcoal-foreground px-8 md:px-16 lg:px-20 py-20 lg:py-0">
            <Reveal>
              <p className="eyebrow mb-6">The In-House Advantage</p>
              <h2 className="display-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] mb-10">
                Most contractors subcontract their millwork.<br />
                <span className="text-gold">We don't.</span>
              </h2>
              <span className="hairline block w-16 mb-8 bg-white/30" />
              <p className="text-base md:text-lg text-white/75 leading-relaxed mb-6">
                Our 12,000 sq. ft. shop in Rye allows us to control every
                joint, every reveal, every finish — from first sketch to final
                installation. The result is precision and accountability
                impossible to achieve any other way.
              </p>
              <Link
                to="/services/custom-millwork"
                className="link-gold mt-6 inline-block text-[11px] tracking-[0.3em] uppercase font-medium text-white"
              >
                Tour the Shop
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SELECTED WORK — staggered editorial grid */}
      <section className="container-wide py-28 md:py-40">
        <Reveal className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div>
            <p className="eyebrow mb-4">Selected Work</p>
            <h2 className="display-serif text-[clamp(2.25rem,5vw,4rem)]">Recent projects.</h2>
          </div>
          <Link to="/portfolio" className="link-gold text-[11px] tracking-[0.3em] uppercase font-medium">
            View Full Portfolio →
          </Link>
        </Reveal>

        <div className="grid gap-x-6 gap-y-16 md:grid-cols-12">
          {projects.map((p, i) => {
            // Staggered editorial layout
            const layouts = [
              "md:col-span-7 md:mt-0",
              "md:col-span-5 md:mt-24",
              "md:col-span-5 md:mt-0",
              "md:col-span-7 md:mt-16",
            ];
            return (
              <Reveal key={p.title} delay={(i % 2) * 80} className={layouts[i]}>
                <article className="group cursor-pointer">
                  <Placeholder label={p.label} tone={p.tone} ratio={p.ratio} />
                  <div className="pt-6 flex items-end justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl">{p.title}</h3>
                      <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mt-2">
                        {p.loc} · {p.year}
                      </p>
                    </div>
                    <ArrowUpRight size={20} className="text-foreground/40 group-hover:text-gold transition-colors flex-shrink-0" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* PROCESS PREVIEW — dark editorial */}
      <section className="bg-charcoal text-charcoal-foreground py-28 md:py-36">
        <div className="container-luxe">
          <Reveal className="max-w-2xl mb-20">
            <p className="eyebrow mb-4">How We Work</p>
            <h2 className="display-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
              A measured process.<br />A single point of contact.
            </h2>
          </Reveal>

          <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {[
              { n: "01", t: "Discovery", b: "On-site walkthrough and conversation about how you live and work." },
              { n: "02", t: "Design & Shop Drawings", b: "Plans and elevations engineered in collaboration with your architect." },
              { n: "03", t: "Build & Reveal", b: "Choreographed install protected by daily site standards and white-glove care." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="bg-charcoal p-10 md:p-12">
                <span className="font-serif text-5xl text-gold">{s.n}</span>
                <h3 className="font-serif text-2xl mt-6 mb-4">{s.t}</h3>
                <p className="text-white/70 leading-relaxed">{s.b}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 pt-10 border-t border-white/10">
            <p className="text-white/60">From first sketch to final punch — one principal, one number.</p>
            <Link to="/services/interior-renovations" className="link-gold text-[11px] tracking-[0.3em] uppercase text-white">
              See the Full Process →
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
