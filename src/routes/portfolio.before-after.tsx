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
    beforeLabel: "Before renovation photo",
    afterLabel: "After renovation photo",
    alt: "Bronxville kitchen",
  },
  {
    title: "Primary bath transformation",
    loc: "Greenwich, CT",
    beforeLabel: "Before renovation photo",
    afterLabel: "Bathroom vanity/millwork detail",
    alt: "Greenwich bath",
  },
  {
    title: "Boutique office reception",
    loc: "Midtown, NYC",
    beforeLabel: "Before renovation photo",
    afterLabel: "Commercial interior photo",
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
        label="After renovation photo"
        tone="warm"
      />

      <section className="container-wide py-28 md:py-32 space-y-28">
        {comparisons.map((c, i) => (
          <Reveal key={c.title}>
            <div className={`grid gap-10 lg:gap-16 items-center ${i % 2 ? "lg:grid-cols-[1fr_2fr]" : "lg:grid-cols-[2fr_1fr]"}`}>
              {i % 2 === 0 && (
                <div>
                  <BeforeAfterSlider beforeLabel={c.beforeLabel} afterLabel={c.afterLabel} alt={c.alt} />
                </div>
              )}
              <div className={i % 2 === 0 ? "" : "lg:order-1"}>
                <p className="eyebrow mb-4">Case Study {String(i + 1).padStart(2, "0")}</p>
                <h2 className="display-serif text-[clamp(1.75rem,3vw,2.75rem)] mb-3">{c.title}</h2>
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6">{c.loc}</p>
                <p className="text-muted-foreground leading-relaxed">
                  A complete reconfiguration including custom millwork, stonework, lighting,
                  and finishes — executed entirely in-house from design through installation.
                </p>
              </div>
              {i % 2 === 1 && (
                <div className="lg:order-2">
                  <BeforeAfterSlider beforeLabel={c.beforeLabel} afterLabel={c.afterLabel} alt={c.alt} />
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
