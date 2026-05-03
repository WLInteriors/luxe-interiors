import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";

export const Route = createFileRoute("/services/interior-renovations")({
  head: () => ({
    meta: [
      { title: "Interior Renovations — Westchester Luxury Interiors" },
      { name: "description", content: "Luxury kitchens, baths, and additions executed with in-house millwork precision across Westchester and NYC." },
      { property: "og:title", content: "Interior Renovations" },
      { property: "og:description", content: "Luxury kitchens, baths, and additions in Westchester and NYC." },
    ],
  }),
  component: Page,
});

const focuses = [
  { title: "Gourmet Kitchens", label: "Kitchen/casework detail", tone: "light" as const, body: "Marble, quartzite, and bespoke cabinetry built to withstand a generation of use." },
  { title: "Spa Baths", label: "Bathroom vanity/millwork detail", tone: "warm" as const, body: "Honed stone, custom vanities, radiant heat — sanctuaries engineered for stillness." },
  { title: "Additions", label: "Hero project photo", tone: "dark" as const, body: "Seamless extensions that read as if they were always part of the original architecture." },
];

const steps = [
  { n: "01", t: "Discovery", b: "An on-site walkthrough and conversation about how you live, entertain, and unwind." },
  { n: "02", t: "Design Development", b: "Plans, elevations, and material boards developed with your architect." },
  { n: "03", t: "Shop Drawings", b: "Every millwork piece engineered in-house and approved before a board is cut." },
  { n: "04", t: "Fabrication", b: "Cabinetry built by our own craftsmen in our Rye shop." },
  { n: "05", t: "Installation", b: "A choreographed install protected by daily site standards." },
  { n: "06", t: "Reveal", b: "Final walkthrough, owner training, and a five-year craftsmanship warranty." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services · 01"
        title="Interior Renovations"
        sub="Kitchens, baths, and additions built with the precision of an in-house shop."
        label="Hero project photo"
        tone="dark"
      />
      <section className="container-wide py-28 md:py-36">
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-3">
          {focuses.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className={i === 1 ? "md:mt-20" : ""}>
              <Placeholder label={f.label} tone={f.tone} ratio="4/5" />
              <div className="pt-6">
                <h3 className="font-serif text-2xl md:text-3xl mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-28 md:py-36">
        <div className="container-luxe">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">Our Process</p>
            <h2 className="display-serif text-[clamp(2rem,4vw,3.5rem)]">Six steps. One standard.</h2>
          </Reveal>
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 80} className="bg-secondary p-10">
                <span className="font-serif text-5xl text-gold">{s.n}</span>
                <h3 className="font-serif text-2xl mt-4 mb-3">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  label,
  tone = "dark",
  img,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  label?: string;
  tone?: "light" | "mid" | "dark" | "warm";
  /** @deprecated kept for backward compat — Placeholder used instead */
  img?: string;
}) {
  void img;
  return (
    <section className="relative h-[78vh] min-h-[560px] flex items-end overflow-hidden">
      <Placeholder
        label={label ?? "Hero project photo"}
        tone={tone}
        className="absolute inset-0 !w-full !h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/85 pointer-events-none" />
      <div className="container-wide relative z-10 pb-20 md:pb-24 text-white">
        <Reveal>
          <p className="eyebrow text-white/80 mb-6">{eyebrow}</p>
          <h1 className="display-serif text-[clamp(2.5rem,7vw,6.5rem)] max-w-5xl">{title}</h1>
          <p className="mt-8 text-base md:text-xl text-white/75 max-w-2xl leading-relaxed">{sub}</p>
        </Reveal>
      </div>
    </section>
  );
}
