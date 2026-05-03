import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/portfolio/before-after")({
  head: () => ({
    meta: [
      { title: "Before & After — Westchester Luxury Interiors" },
      { name: "description", content: "Dramatic transformations across kitchens, baths, and commercial spaces. Drag to reveal the difference." },
      { property: "og:title", content: "Before & After Transformations" },
      { property: "og:description", content: "Drag to reveal — kitchens, baths, and commercial spaces transformed." },
    ],
  }),
  component: Page,
});

const comparisons = [
  {
    title: "Mid-century kitchen reimagined",
    loc: "Bronxville, NY",
    before: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    alt: "Bronxville kitchen",
  },
  {
    title: "Primary bath transformation",
    loc: "Greenwich, CT",
    before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
    alt: "Greenwich bath",
  },
  {
    title: "Boutique office reception",
    loc: "Midtown, NYC",
    before: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    alt: "Midtown office",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Transformations"
        title="Before & After"
        sub="Drag the divider to reveal what's possible when craft meets vision."
        img="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="container-luxe py-28 space-y-24">
        {comparisons.map((c, i) => (
          <Reveal key={c.title}>
            <div className={`grid gap-10 lg:gap-16 items-center ${i % 2 ? "lg:grid-cols-[1fr_2fr]" : "lg:grid-cols-[2fr_1fr]"}`}>
              {i % 2 === 0 && (
                <div>
                  <BeforeAfterSlider before={c.before} after={c.after} alt={c.alt} />
                </div>
              )}
              <div className={i % 2 === 0 ? "" : "lg:order-1"}>
                <p className="eyebrow mb-4">Case Study {String(i + 1).padStart(2, "0")}</p>
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{c.title}</h2>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">{c.loc}</p>
                <p className="text-muted-foreground leading-relaxed">
                  A complete reconfiguration including custom millwork, stonework, lighting,
                  and finishes — executed entirely in-house from design through installation.
                </p>
              </div>
              {i % 2 === 1 && (
                <div className="lg:order-2">
                  <BeforeAfterSlider before={c.before} after={c.after} alt={c.alt} />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </section>

      <CtaSection />
    </>
  );
}
