import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { TrustBadge } from "@/components/trust-badge";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/services/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Services — Westchester Luxury Interiors" },
      { name: "description", content: "SCA Prequalified, MBE/DBE certified general contractor for schools, hospitality, and developer projects." },
      { property: "og:title", content: "Commercial Services" },
      { property: "og:description", content: "SCA Prequalified general contractor for schools, hospitality, and developers." },
    ],
  }),
  component: Page,
});

const sectors = [
  { t: "K–12 & SCA", b: "SCA Prequalified for New York City School Construction Authority projects.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" },
  { t: "Hospitality", b: "Hotels, restaurants, and members clubs delivered without disrupting operations.", img: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1200&q=80" },
  { t: "Developers", b: "Pre-construction, value engineering, and white-glove turnover for amenity-driven projects.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Commercial Services"
        sub="A trusted partner for institutional and hospitality clients across the Tri-State."
        img="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="container-luxe py-20">
        <Reveal className="flex flex-wrap items-center justify-center gap-10">
          <TrustBadge label="SCA Prequalified" sub="NYC SCA" />
          <TrustBadge label="MBE Certified" sub="NY State" />
          <TrustBadge label="DBE Certified" sub="Federal" />
          <TrustBadge label="Licensed" sub="NY · CT · NJ" />
        </Reveal>
      </section>

      <section className="container-luxe pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img src={s.img} alt={s.t} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
