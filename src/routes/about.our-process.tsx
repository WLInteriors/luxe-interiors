import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/about/our-process")({
  head: () => ({
    meta: [
      { title: "Our Process — Westchester Luxury Interiors" },
      {
        name: "description",
        content:
          "From discovery and design development through fabrication, installation, and the five-year warranty — exactly how a Westchester Luxury Interiors project unfolds.",
      },
      { property: "og:title", content: "Our Process" },
      {
        property: "og:description",
        content: "How a Westchester Luxury Interiors project actually unfolds.",
      },
    ],
  }),
  component: Page,
});

const phases = [
  {
    n: "01",
    t: "Discovery & Feasibility",
    d: "2–3 weeks",
    b: "An on-site walkthrough and conversation about how you live, work, or operate. We assess existing conditions, structural and mechanical realities, and budget bands before anyone draws a line.",
    out: "Feasibility memo and budget band",
    label: "Sample boards",
  },
  {
    n: "02",
    t: "Design Development",
    d: "4–8 weeks",
    b: "We work alongside your architect or designer through schematic design, design development, and material selection. Our drafting room produces shop drawings while design is still moving.",
    out: "Stamped drawings and shop set",
    label: "Process drawings",
  },
  {
    n: "03",
    t: "Pre-Construction",
    d: "3–4 weeks",
    b: "Permitting, board approvals, COIs, lead times, and a fixed-price contract. We don't break ground without a complete subcontractor schedule and a delivery plan for every long-lead item.",
    out: "Fixed-price contract, AIA A201",
    label: "Blueprint detail",
  },
  {
    n: "04",
    t: "Fabrication",
    d: "Concurrent",
    b: "Cabinetry, paneling, and casegoods built in our 12,000 sq. ft. Rye shop while site work proceeds. Pre-finishing in our spray booth means a cleaner, faster install.",
    out: "Pre-finished, palletized millwork",
    label: "Custom millwork shop photo",
  },
  {
    n: "05",
    t: "Construction",
    d: "Project-specific",
    b: "Daily site protection, weekly walkthroughs, and a single project lead from demolition through punch. AIA G702/703 monthly billing with full backup.",
    out: "Substantial completion",
    label: "Hands at work",
  },
  {
    n: "06",
    t: "Reveal & Warranty",
    d: "Year 1–5",
    b: "Final walkthrough, owner training, and our five-year craftsmanship warranty. We schedule a 90-day check-in and an 11-month seasonal review before the first anniversary.",
    out: "Five-year written warranty",
    label: "Marble kitchen",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Studio · Process"
        title="How we build."
        sub="Six phases. One principal. Zero surprises."
        label="Process drawings"
        tone="dark"
      />

      <section className="container-wide py-24 md:py-32">
        {phases.map((p, i) => (
          <Reveal key={p.n} delay={i * 50}>
            <div
              className={`grid gap-10 lg:gap-20 items-center py-16 border-b border-border last:border-b-0 ${
                i % 2 ? "lg:grid-cols-[1fr_2fr] lg:[&>*:first-child]:order-2" : "lg:grid-cols-[2fr_1fr]"
              }`}
            >
              <Placeholder label={p.label} tone={i % 2 ? "warm" : "mid"} ratio="4/5" />
              <div>
                <span className="font-serif text-7xl md:text-8xl text-gold leading-none">{p.n}</span>
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-6">
                  {p.d}
                </p>
                <h2 className="display-serif text-[clamp(2rem,4vw,3rem)] mt-3 mb-6">{p.t}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{p.b}</p>
                <div className="inline-flex items-center gap-3 px-5 py-3 border border-gold/40 bg-gold/5">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="text-[11px] tracking-[0.25em] uppercase font-medium">
                    Deliverable: {p.out}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <CtaSection />
    </>
  );
}
