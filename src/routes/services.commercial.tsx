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
  {
    t: "K–12 & SCA",
    b: "SCA Prequalified for New York City School Construction Authority projects, with prevailing wage and certified payroll experience.",
    label: "School interior photo",
    tone: "mid" as const,
    bullets: [
      "Summer-window completion specialists (June–August)",
      "MBE/DBE participation built into every bid",
      "DOE, DOB, and DOH liaison from day one",
      "$24M in completed SCA work, 100% on-time turnover",
    ],
  },
  {
    t: "Hospitality",
    b: "Hotels, restaurants, and members clubs delivered without disrupting operations — phased construction around live occupancy.",
    label: "Boutique hotel lobby",
    tone: "warm" as const,
    bullets: [
      "Phased and night-shift construction around live ops",
      "FF&E coordination and custom casegoods in-house",
      "Brand-standard finish protection and rigorous punch",
      "12 hospitality projects, zero unplanned closures",
    ],
  },
  {
    t: "Class-A Office",
    b: "Tenant fit-outs and pre-built suites for landlords and occupiers who can't afford a missed turnover date.",
    label: "Office interior",
    tone: "dark" as const,
    bullets: [
      "After-hours freight and protected-path coordination",
      "Pre-built partitions and millwork delivered overnight",
      "AV, IT, and security trade integration in-house",
      "16-week typical 14k sq. ft. fit-out turnaround",
    ],
  },
  {
    t: "Developers",
    b: "Pre-construction, value engineering, and white-glove turnover for amenity-driven luxury condo, mixed-use, and boutique commercial product.",
    label: "Commercial interior photo",
    tone: "mid" as const,
    bullets: [
      "12,000 sq. ft. shop — capacity for 60+ unit packages",
      "GMP and bid-spec friendly, AIA G702/703 billing",
      "Punchlist accountability through TCO and sell-out",
      "Active on 6 ground-up developments in the Tri-State",
    ],
  },
  {
    t: "Healthcare & Wellness",
    b: "Medical office, dental, and luxury wellness fit-outs requiring infection-control protocols, dust containment, and ICRA-compliant phasing.",
    label: "Commercial interior photo",
    tone: "light" as const,
    bullets: [
      "ICRA Class III and IV trained site supervision",
      "Negative-air containment and HEPA filtration",
      "After-hours phasing around active practice",
      "Custom millwork for reception and exam casework",
    ],
  },
  {
    t: "Cultural & Civic",
    b: "Libraries, museums, and civic interiors where archival climate control, acoustic performance, and accessibility all have to coexist.",
    label: "Library millwork",
    tone: "warm" as const,
    bullets: [
      "Climate-buffered cabinetry for archival storage",
      "Integrated acoustic treatment in millwork",
      "Full ADA accessibility coordination",
      "Donor-recognition and signage millwork in-house",
    ],
  },
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
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 100} className={i % 3 === 1 ? "md:mt-16" : ""}>
              <Placeholder label={s.label} tone={s.tone} ratio="4/5" />
              <div className="pt-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl mt-3 mb-3">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{s.b}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-foreground/80 border-t border-border pt-2"
                    >
                      <span className="text-gold mt-1.5">◆</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
