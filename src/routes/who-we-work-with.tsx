import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/who-we-work-with")({
  head: () => ({
    meta: [
      { title: "Who We Work With — Westchester Luxury Interiors" },
      { name: "description", content: "We partner with discerning homeowners, architects and designers, property managers, and schools across the Tri-State." },
      { property: "og:title", content: "Who We Work With" },
      { property: "og:description", content: "Homeowners, architects, property managers, and schools." },
    ],
  }),
  component: Page,
});

const personas = [
  {
    id: "homeowners",
    eyebrow: "01",
    t: "Homeowners",
    b: "Discerning families who expect their home to feel as considered behind the walls as in front of them. We deliver peace of mind through fixed pricing, weekly walkthroughs, and a single accountable point of contact.",
    label: "Hero project photo",
    tone: "warm" as const,
    bullets: ["Fixed-price contracts", "Dedicated project lead", "5-year craftsmanship warranty"],
  },
  {
    id: "architects",
    eyebrow: "02",
    t: "Architects & Designers",
    b: "Design partners who require a builder fluent in shop drawings, RFIs, and site protection. Our in-house millwork shop gives you a single source of truth from sketch to install.",
    label: "Custom millwork shop photo",
    tone: "dark" as const,
    bullets: ["Engineered shop drawings", "Sample boards on request", "Design-intent stewardship"],
  },
  {
    id: "property-managers",
    eyebrow: "03",
    t: "Property Managers",
    b: "Co-op and condo boards who need a contractor who respects building rules, neighbors, and timelines. Fully insured with COIs ready in 24 hours.",
    label: "Commercial interior photo",
    tone: "mid" as const,
    bullets: ["24-hr COI turnaround", "Building-staff coordination", "Strict noise & dust protocols"],
  },
  {
    id: "schools",
    eyebrow: "04",
    t: "Schools (SCA)",
    b: "SCA Prequalified, MBE/DBE certified, and experienced with the unique compliance demands of public school construction across NYC and Westchester.",
    label: "Commercial interior photo",
    tone: "light" as const,
    bullets: ["SCA Prequalified", "MBE/DBE certified", "Summer-window completion expertise"],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Who we work with."
        sub="Four kinds of clients. One uncompromising standard."
        label="Team/shop/process photo"
        tone="dark"
      />

      <nav className="border-b border-border bg-background/95 backdrop-blur-md sticky top-20 md:top-24 z-30">
        <div className="container-wide flex flex-wrap gap-6 md:gap-10 py-5 text-[10px] tracking-[0.3em] uppercase font-medium text-muted-foreground">
          {personas.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="hover:text-gold transition-colors">
              {p.t}
            </a>
          ))}
        </div>
      </nav>

      <div>
        {personas.map((p, i) => (
          <section
            key={p.id}
            id={p.id}
            className={`scroll-mt-32 py-24 md:py-36 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <div className="container-wide">
              <div className={`grid gap-12 lg:gap-20 items-center lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <Placeholder label={p.label} tone={p.tone} ratio="4/5" />
                </Reveal>
                <Reveal delay={120}>
                  <span className="font-serif text-6xl md:text-7xl text-gold">{p.eyebrow}</span>
                  <h2 className="display-serif text-[clamp(2rem,4vw,3.5rem)] mt-4 mb-8">{p.t}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">{p.b}</p>
                  <ul className="space-y-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-foreground border-t border-border pt-3">
                        <span className="text-gold mt-1.5">◆</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaSection />
    </>
  );
}
