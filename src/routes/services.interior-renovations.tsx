import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";

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
  { title: "Gourmet Kitchens", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80", body: "Marble, quartzite, and bespoke cabinetry built to withstand a generation of use." },
  { title: "Spa Baths", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80", body: "Honed stone, custom vanities, radiant heat — sanctuaries engineered for stillness." },
  { title: "Additions", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", body: "Seamless extensions that read as if they were always part of the original architecture." },
];

const steps = [
  { n: "01", t: "Discovery", b: "An on-site walkthrough and conversation about how you live, entertain, and unwind." },
  { n: "02", t: "Design Development", b: "Plans, elevations, and material boards developed in close collaboration with your architect." },
  { n: "03", t: "Shop Drawings", b: "Every millwork piece engineered in-house and approved before a single board is cut." },
  { n: "04", t: "Fabrication", b: "Cabinetry and architectural elements built by our own craftsmen in our Rye shop." },
  { n: "05", t: "Installation", b: "A choreographed install protected by daily site standards and white-glove care." },
  { n: "06", t: "Reveal", b: "Final walkthrough, owner training, and a five-year craftsmanship warranty." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Interior Renovations"
        sub="Kitchens, baths, and additions built with the precision of an in-house shop."
        img="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80"
      />
      <section className="container-luxe py-28">
        <div className="grid gap-10 md:grid-cols-3">
          {focuses.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-2xl mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-28">
        <div className="container-luxe">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">Our Process</p>
            <h2 className="font-serif text-4xl md:text-5xl">Six steps. One standard.</h2>
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

export function PageHero({ eyebrow, title, sub, img }: { eyebrow: string; title: string; sub: string; img: string }) {
  return (
    <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
      <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/80" />
      <div className="container-luxe relative z-10 pb-20 text-white">
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="font-serif text-5xl md:text-7xl max-w-4xl leading-[1.05]">{title}</h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">{sub}</p>
        </Reveal>
      </div>
    </section>
  );
}
