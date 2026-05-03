import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
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
    b: "Discerning families who expect their home to feel as considered behind the walls as it does in front of them. We deliver peace of mind through fixed pricing, weekly walkthroughs, and a single accountable point of contact.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Fixed-price contracts", "Dedicated project lead", "5-year craftsmanship warranty"],
  },
  {
    id: "architects",
    eyebrow: "02",
    t: "Architects & Designers",
    b: "Design partners who require a builder fluent in shop drawings, RFIs, and site protection. Our in-house millwork shop gives you a single source of truth from sketch to install.",
    img: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Engineered shop drawings", "Sample boards on request", "Design-intent stewardship"],
  },
  {
    id: "property-managers",
    eyebrow: "03",
    t: "Property Managers",
    b: "Co-op and condo boards who need a contractor who respects building rules, neighbors, and timelines. Fully insured with COIs ready in 24 hours.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    bullets: ["24-hr COI turnaround", "Building-staff coordination", "Strict noise & dust protocols"],
  },
  {
    id: "schools",
    eyebrow: "04",
    t: "Schools (SCA)",
    b: "SCA Prequalified, MBE/DBE certified, and experienced with the unique compliance demands of public school construction across NYC and Westchester.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    bullets: ["SCA Prequalified", "MBE/DBE certified", "Summer-window completion expertise"],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Who We Work With"
        sub="Four kinds of clients. One uncompromising standard."
        img="https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=2400&q=80"
      />

      <nav className="border-b border-border bg-card sticky top-20 z-30">
        <div className="container-luxe flex flex-wrap gap-6 md:gap-10 py-5 text-[11px] tracking-[0.25em] uppercase font-medium text-muted-foreground">
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
            className={`scroll-mt-32 py-24 md:py-32 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <div className="container-luxe">
              <div className={`grid gap-12 lg:gap-20 items-center lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.img} alt={p.t} className="w-full h-full object-cover" />
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <span className="font-serif text-6xl text-gold">{p.eyebrow}</span>
                  <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8">{p.t}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{p.b}</p>
                  <ul className="space-y-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-foreground">
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
