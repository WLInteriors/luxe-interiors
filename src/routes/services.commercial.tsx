import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { TrustBadge } from "@/components/trust-badge";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/services/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Buildouts — Westchester Luxury Interiors" },
      { name: "description", content: "SCA Prequalified, MBE/DBE certified general contractor for schools, hospitality, and developer projects." },
      { property: "og:title", content: "Commercial Buildouts" },
      { property: "og:description", content: "SCA Prequalified general contractor for schools, hospitality, and developers." },
    ],
  }),
  component: Page,
});

const sectors = [
  { t: "K–12 & SCA", b: "SCA Prequalified for New York City School Construction Authority projects.", label: "Commercial interior photo", tone: "mid" as const },
  { t: "Hospitality", b: "Hotels, restaurants, and members clubs delivered without disrupting operations.", label: "Commercial interior photo", tone: "warm" as const },
  { t: "Developers", b: "Pre-construction, value engineering, and white-glove turnover for amenity-driven projects.", label: "Commercial interior photo", tone: "dark" as const },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services · 03"
        title="Commercial Buildouts"
        sub="A trusted partner for institutional and hospitality clients across the Tri-State."
        label="Commercial interior photo"
        tone="dark"
      />

      <section className="container-luxe py-24">
        <Reveal className="flex flex-wrap items-center justify-center gap-10">
          <TrustBadge label="SCA Prequalified" sub="NYC SCA" />
          <TrustBadge label="MBE Certified" sub="NY State" />
          <TrustBadge label="DBE Certified" sub="Federal" />
          <TrustBadge label="Licensed" sub="NY · CT · NJ" />
        </Reveal>
      </section>

      <section className="container-wide pb-32">
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.t} delay={i * 100} className={i === 1 ? "md:mt-16" : ""}>
              <Placeholder label={s.label} tone={s.tone} ratio="4/5" />
              <div className="pt-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">0{i + 1}</span>
                <h3 className="font-serif text-2xl md:text-3xl mt-3 mb-3">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
