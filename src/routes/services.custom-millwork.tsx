import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/services/custom-millwork")({
  head: () => ({
    meta: [
      { title: "Custom Millwork — Westchester Luxury Interiors" },
      { name: "description", content: "In-house custom millwork: vanities, closets, radiator covers, AC enclosures, and architectural paneling, built in our Rye shop." },
      { property: "og:title", content: "Custom Millwork" },
      { property: "og:description", content: "Bespoke vanities, closets, and architectural paneling, built in-house." },
    ],
  }),
  component: Page,
});

const items = [
  { t: "Vanities", b: "Stone-topped, hand-fitted, with concealed soft-close hardware throughout.", label: "Bathroom vanity/millwork detail", tone: "warm" as const },
  { t: "Walk-in Closets", b: "Lit, integrated wardrobes that elevate the most private rooms in the home.", label: "Custom millwork shop photo", tone: "mid" as const },
  { t: "Radiator Covers", b: "Architectural enclosures that disappear into the room's millwork language.", label: "Radiator cover photo", tone: "light" as const },
  { t: "AC Covers", b: "Discreet returns and through-wall AC enclosures that resolve into the architecture.", label: "AC cover photo", tone: "light" as const },
  { t: "Wall Paneling", b: "Fluted, beaded, or shadow-line — paneling tuned to the proportions of your space.", label: "Kitchen/casework detail", tone: "warm" as const },
  { t: "Built-In Libraries", b: "Floor-to-ceiling cabinetry engineered for volumes, art, and electronics.", label: "Custom millwork shop photo", tone: "dark" as const },
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
        eyebrow="Services · 02"
        title="Custom Millwork"
        sub="An in-house shop, sized for ambition. Built for designers and architects who refuse compromise."
        label="Custom millwork shop photo"
        tone="dark"
      />

      <section className="container-wide py-28 md:py-36">
        <Reveal className="max-w-2xl mb-20">
          <p className="eyebrow mb-4">What We Build</p>
          <h2 className="display-serif text-[clamp(2rem,4vw,3.5rem)]">Architectural elements,<br />made by hand.</h2>
        </Reveal>
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i, idx) => (
            <Reveal key={i.t} delay={(idx % 3) * 80}>
              <Placeholder label={i.label} tone={i.tone} ratio="4/5" />
              <div className="pt-5 border-t border-border mt-5">
                <h3 className="font-serif text-2xl mb-3">{i.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{i.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-charcoal-foreground py-28 md:py-36">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="eyebrow mb-4">Shop Capabilities</p>
            <h2 className="display-serif text-[clamp(2rem,4vw,3.25rem)] mb-8">A workshop the size of our ambition.</h2>
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
