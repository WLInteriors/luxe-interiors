import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — Westchester Luxury Interiors" },
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
        label="Team/shop/process photo"
        tone="dark"
      />

      <section className="container-luxe py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">
          <Reveal>
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="display-serif text-[clamp(2rem,4vw,3.25rem)]">
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

      <section className="container-wide pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <Placeholder label="Team/shop/process photo" tone="warm" ratio="4/5" />
          <Placeholder label="Custom millwork shop photo" tone="dark" ratio="4/5" className="md:mt-16" />
          <Placeholder label="Kitchen/casework detail" tone="light" ratio="4/5" />
        </div>
      </section>

      <section className="bg-secondary py-28 md:py-36">
        <div className="container-luxe">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">What We Stand For</p>
            <h2 className="display-serif text-[clamp(2rem,4vw,3.5rem)]">Three values, in practice.</h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="border-t-2 border-gold pt-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">0{i + 1}</span>
                  <h3 className="font-serif text-2xl mt-4 mb-4">{v.t}</h3>
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
