import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { TrustBadge } from "@/components/trust-badge";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/about/certifications-affiliations")({
  head: () => ({
    meta: [
      { title: "Certifications & Affiliations — Westchester Luxury Interiors" },
      {
        name: "description",
        content:
          "Licenses, certifications, and industry affiliations of Westchester Luxury Interiors — SCA Prequalified, MBE/DBE certified, AGC and AWI member.",
      },
      { property: "og:title", content: "Certifications & Affiliations" },
      {
        property: "og:description",
        content: "Licenses, certifications, and affiliations.",
      },
    ],
  }),
  component: Page,
});

const certs = [
  { label: "SCA Prequalified", sub: "NYC School Construction Authority" },
  { label: "MBE Certified", sub: "New York State" },
  { label: "DBE Certified", sub: "U.S. Department of Transportation" },
  { label: "Licensed GC", sub: "NY · CT · NJ" },
  { label: "OSHA 30", sub: "All site supervisors" },
  { label: "EPA RRP", sub: "Lead-safe certified firm" },
];

const affiliations = [
  { t: "AGC", b: "Associated General Contractors of America — full member." },
  { t: "AWI", b: "Architectural Woodwork Institute — Premium-grade shop certification." },
  { t: "AIA Allied", b: "Allied member of the American Institute of Architects, NY chapter." },
  { t: "USGBC", b: "U.S. Green Building Council — LEED-AP staff on roster." },
  { t: "BBB A+", b: "Better Business Bureau A+ rating, accredited since 1998." },
  { t: "Houzz Pro", b: "Best of Houzz Service award, eight consecutive years." },
];

const insurance = [
  { l: "General Liability", v: "$5M per occurrence / $10M aggregate" },
  { l: "Excess Umbrella", v: "$25M" },
  { l: "Workers' Compensation", v: "Statutory, NY · CT · NJ" },
  { l: "Auto Liability", v: "$5M combined single limit" },
  { l: "Builder's Risk", v: "Project-specific, on request" },
  { l: "Professional Liability", v: "$2M per claim" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Studio · Credentials"
        title="Certifications & Affiliations"
        sub="The paperwork that lets us work on the most demanding sites in the region."
        label="Architect drawings"
        tone="dark"
      />

      <section className="container-luxe py-24 md:py-32">
        <Reveal className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">Certifications</p>
          <h2 className="display-serif text-[clamp(2rem,4vw,3rem)]">
            Held to the highest public and private standards.
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-8">
          {certs.map((c) => (
            <TrustBadge key={c.label} label={c.label} sub={c.sub} />
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="max-w-3xl mb-16">
            <p className="eyebrow mb-4">Affiliations</p>
            <h2 className="display-serif text-[clamp(2rem,4vw,3rem)]">
              Members of the institutions that set the bar.
            </h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3">
            {affiliations.map((a, i) => (
              <Reveal key={a.t} delay={i * 60}>
                <div className="border-t-2 border-gold pt-6">
                  <h3 className="font-serif text-2xl mb-3">{a.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32">
        <Reveal className="max-w-3xl mb-12">
          <p className="eyebrow mb-4">Insurance</p>
          <h2 className="display-serif text-[clamp(2rem,4vw,3rem)]">Coverage at a glance.</h2>
          <p className="mt-6 text-muted-foreground">
            Certificates of insurance issued within 24 hours, with custom additional insureds and
            waivers of subrogation as required by your building or board.
          </p>
        </Reveal>
        <dl className="divide-y divide-border border-y border-border">
          {insurance.map((i) => (
            <div key={i.l} className="grid grid-cols-1 md:grid-cols-3 gap-2 py-5">
              <dt className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">{i.l}</dt>
              <dd className="md:col-span-2 font-serif text-lg">{i.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaSection />
    </>
  );
}
