import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/services/custom-millwork")({
  head: () => ({
    meta: [
      { title: "Custom Millwork — Westchester Luxury Interiors" },
      { name: "description", content: "In-house custom millwork: vanities, closets, radiator covers, and architectural paneling, built in our Rye shop." },
      { property: "og:title", content: "Custom Millwork" },
      { property: "og:description", content: "Bespoke vanities, closets, and architectural paneling, built in-house." },
    ],
  }),
  component: Page,
});

const items = [
  { t: "Vanities", b: "Stone-topped, hand-fitted, with concealed soft-close hardware throughout." },
  { t: "Walk-in Closets", b: "Lit, integrated wardrobes that elevate the most private rooms in the home." },
  { t: "Radiator Covers", b: "Architectural enclosures that disappear into the room's millwork language." },
  { t: "Wall Paneling", b: "Fluted, beaded, or shadow-line — paneling tuned to the proportions of your space." },
  { t: "Built-In Libraries", b: "Floor-to-ceiling cabinetry engineered to accommodate volumes, art, and electronics." },
  { t: "Bar & Wine Rooms", b: "Climate-aware millwork integrating refrigeration, glassware, and stone." },
];

const capabilities = [
  "12,000 sq. ft. shop",
  "5-axis CNC routing",
  "European hardware standards",
  "Spray booth & in-house finishing",
  "Veneer matching & marquetry",
  "Engineered shop drawings",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Custom Millwork"
        sub="An in-house shop, sized for ambition. Built for designers and architects who refuse compromise."
        img="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="container-luxe py-28">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">What We Build</p>
          <h2 className="font-serif text-4xl md:text-5xl">Architectural elements, made by hand.</h2>
        </Reveal>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i, idx) => (
            <Reveal key={i.t} delay={(idx % 3) * 80}>
              <div className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl mb-3">{i.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{i.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-charcoal-foreground py-28">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="eyebrow mb-4">Shop Capabilities</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">A workshop the size of our ambition.</h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Our Rye facility houses the equipment, the craftsmen, and the finishing
              capacity to deliver an entire residence's millwork — without subcontracting
              a single board.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="grid grid-cols-2 gap-6">
              {capabilities.map((c) => (
                <li key={c} className="border-t border-white/15 pt-4 text-sm text-white/85">
                  <span className="text-gold mr-2">◆</span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
