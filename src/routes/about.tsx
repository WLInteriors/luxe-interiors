import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Westchester Luxury Interiors" },
      { name: "description", content: "A second-generation general contractor and millwork shop in Rye, NY, building luxury interiors across the Tri-State." },
      { property: "og:title", content: "About Westchester Luxury Interiors" },
      { property: "og:description", content: "A second-generation contractor and in-house millwork shop in Rye, NY." },
    ],
  }),
  component: Page,
});

const values = [
  { t: "Precision", b: "Every reveal, every joint, every finish — held to a tolerance our shop foreman can defend." },
  { t: "Discretion", b: "Our clients live private lives. We protect them with NDAs, vetted crews, and quiet sites." },
  { t: "Accountability", b: "One principal, one project lead, one number to call. From first sketch to final punch." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Studio"
        title="A second-generation studio in Rye."
        sub="Founded on the belief that the most beautiful interiors begin in the shop."
        img="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="container-luxe py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">
          <Reveal>
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
              Built by craftsmen.<br />Run by stewards.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Westchester Luxury Interiors began in 1987 as a small millwork shop on the
              waterfront in Rye. Two generations later, we operate one of the Tri-State's
              most respected design-build studios — but we still consider ourselves
              craftsmen first.
            </p>
            <p>
              We are licensed and insured across New York, Connecticut, and New Jersey.
              We are MBE and DBE certified. We are SCA Prequalified. And we maintain a
              roster of long-tenured craftsmen, many of whom have been with us for over
              two decades.
            </p>
            <p>
              We do not chase volume. We accept a small number of projects each year so
              that every one of them receives the attention our clients pay for.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-28">
        <div className="container-luxe">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">What We Stand For</p>
            <h2 className="font-serif text-4xl md:text-5xl">Three values, in practice.</h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="border-t-2 border-gold pt-6">
                  <h3 className="font-serif text-2xl mb-4">{v.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
