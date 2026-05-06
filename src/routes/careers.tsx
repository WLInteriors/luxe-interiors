import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Westchester Luxury Interiors" },
      {
        name: "description",
        content:
          "Open positions at Westchester Luxury Interiors — cabinetmakers, finishers, project managers, and apprentices in Rye, NY.",
      },
      { property: "og:title", content: "Careers" },
      { property: "og:description", content: "Open positions at our Rye, NY studio and shop." },
    ],
  }),
  component: Page,
});

const openings = [
  { t: "Senior Cabinetmaker", loc: "Rye, NY · Shop", type: "Full-time" },
  { t: "Spray Finisher", loc: "Rye, NY · Shop", type: "Full-time" },
  { t: "Project Manager — Residential", loc: "Westchester · Field", type: "Full-time" },
  { t: "Lead Site Carpenter", loc: "Tri-State · Field", type: "Full-time" },
  { t: "Apprentice (4-year program)", loc: "Rye, NY · Shop", type: "Full-time" },
  { t: "Drafter / Detailer", loc: "Rye, NY · Studio", type: "Full-time" },
];

const benefits = [
  { t: "Pay & profit-share", b: "Above-market base, profit-share after year one, and tools allowance." },
  { t: "Health & retirement", b: "Full medical, dental, vision, and a 5% 401(k) match — vested immediately." },
  { t: "Time off", b: "Three weeks PTO from day one. We close between Christmas and New Year." },
  { t: "Apprenticeship", b: "Fully-paid four-year program with day-release to a local trade school." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Studio · Careers"
        title="Build with us."
        sub="A second-generation studio looking for the next generation of craftsmen."
        label="Craftsman portrait"
        tone="dark"
      />

      <section className="container-luxe py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">
          <Reveal>
            <p className="eyebrow mb-4">Working Here</p>
            <h2 className="display-serif text-[clamp(2rem,4vw,3rem)]">
              Treat people the way you'd treat the wood.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We are a shop, not a factory. Our cabinetmakers know the field crew. Our project
              managers came up through the bench. Decisions are made by the person closest to the
              problem.
            </p>
            <p>
              Average shop-floor tenure is fourteen years. Average field-crew tenure is nine. We pay
              above market, we don't lay off in slow seasons, and we invest in apprenticeship.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-wide pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Placeholder label="Hands at work" tone="warm" ratio="4/5" />
          <Placeholder label="Craftsman portrait" tone="dark" ratio="4/5" className="md:mt-16" />
          <Placeholder label="Team meeting" tone="light" ratio="4/5" />
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="max-w-3xl mb-16">
            <p className="eyebrow mb-4">Benefits</p>
            <h2 className="display-serif text-[clamp(2rem,4vw,3rem)]">What you can expect.</h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.t} delay={i * 80}>
                <div className="border-t-2 border-gold pt-6">
                  <h3 className="font-serif text-2xl mb-3">{b.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32">
        <Reveal className="max-w-3xl mb-12 pb-6 border-b border-border">
          <p className="eyebrow mb-4">Open Positions</p>
          <h2 className="display-serif text-[clamp(2rem,4vw,3rem)]">Currently hiring.</h2>
        </Reveal>
        <ul className="divide-y divide-border">
          {openings.map((o) => (
            <li key={o.t}>
              <a
                href={`mailto:careers@westchesterluxury.com?subject=${encodeURIComponent(`Application: ${o.t}`)}`}
                className="group flex flex-wrap items-center justify-between gap-4 py-7 hover:bg-secondary/50 transition-colors px-3 -mx-3"
              >
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl group-hover:text-gold transition-colors">
                    {o.t}
                  </h3>
                  <p className="mt-2 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                    {o.loc} · {o.type}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-foreground group-hover:text-gold transition-colors">
                  Apply <ArrowUpRight size={16} />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-muted-foreground">
          Don't see your role? Send a portfolio or résumé to{" "}
          <a href="mailto:careers@westchesterluxury.com" className="link-gold text-foreground">
            careers@westchesterluxury.com
          </a>
          .
        </p>
      </section>

      <CtaSection />
    </>
  );
}
