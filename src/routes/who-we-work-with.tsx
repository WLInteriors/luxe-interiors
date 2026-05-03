import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/who-we-work-with")({
  head: () => ({
    meta: [
      { title: "Who We Work With — Westchester Luxury Interiors" },
      { name: "description", content: "We partner with discerning homeowners, architects and designers, property managers, and schools across the Tri-State." },
      { property: "og:title", content: "Who We Work With" },
      { property: "og:description", content: "Homeowners, architects, property managers, and schools." },
    ],
  }),
  component: Page,
});

const personas = [
  {
    id: "homeowners",
    eyebrow: "01",
    t: "High-End Homeowners",
    b: "Discerning families investing in a primary residence, weekend home, or generational property. You expect the same quiet rigor behind the walls that you see on the surface — and a contractor who respects that your home is also where you live.",
    label: "Living room interior",
    tone: "warm" as const,
    bullets: [
      "Fixed-price, lump-sum contracts — no open-ended T&M",
      "Weekly client walkthroughs with your dedicated principal",
      "Daily site protection, white-glove cleanup, neighbor-aware schedule",
      "5-year craftsmanship warranty, in writing",
    ],
    proof: "Average homeowner project: $450K–$3.2M · 92% referral rate",
  },
  {
    id: "architects",
    eyebrow: "02",
    t: "Architects & Interior Designers",
    b: "You spent months developing the design intent. We're the builder who protects it — fluent in shop drawings, RFIs, submittals, and the unglamorous coordination that makes ambitious detailing actually buildable.",
    label: "Architect drawings",
    tone: "dark" as const,
    bullets: [
      "AIA A201 contract literacy, RFI turnaround under 48 hrs",
      "In-house draftsmen producing engineered shop drawings",
      "Sample boards, mockups, and finish reviews on request",
      "Design-intent stewardship — your details, executed",
    ],
    proof: "Trusted by 40+ AIA-member firms across NY, CT, and NJ",
  },
  {
    id: "property-managers",
    eyebrow: "03",
    t: "Property & Building Managers",
    b: "Co-op and condo boards, managing agents, and family offices who need a contractor that respects house rules, neighbors, and tight pre-war infrastructure. Insurance and paperwork delivered before you have to ask.",
    label: "Office interior",
    tone: "mid" as const,
    bullets: [
      "24-hour COI turnaround with custom additional insureds",
      "Building staff, doorman, and freight elevator coordination",
      "OSHA 30 site supervisors, posted safety plans",
      "Strict noise, dust, and working-hour protocols",
    ],
    proof: "Approved vendor at 80+ Manhattan & Westchester buildings",
  },
  {
    id: "hotels",
    eyebrow: "04",
    t: "Boutique Hotels & Hospitality",
    b: "Independent hoteliers and F&B owners who can't afford to go dark. We phase work around occupancy, run night shifts when needed, and deliver the kind of millwork — banquettes, bars, paneling, casegoods — your guests photograph.",
    label: "Boutique hotel lobby",
    tone: "warm" as const,
    bullets: [
      "Phased construction around live operations",
      "FF&E coordination and custom casegoods in-house",
      "Brand-standard finish protection and punch list rigor",
      "Night-shift and weekend crews available",
    ],
    proof: "Completed 12 hospitality projects · zero days closed unplanned",
  },
  {
    id: "schools",
    eyebrow: "05",
    t: "School Facilities (SCA & Private)",
    b: "Public school construction has its own gravity: SCA prequalification, MBE/DBE participation, prevailing wage, and a non-negotiable summer window. We deliver on all four.",
    label: "School interior photo",
    tone: "light" as const,
    bullets: [
      "SCA Prequalified · MBE/DBE certified",
      "Prevailing wage and certified payroll experience",
      "Summer-window completion specialists (June–August)",
      "DOE, DOB, and DOH liaison from day one",
    ],
    proof: "$24M in completed SCA work · 100% on-time turnover",
  },
  {
    id: "developers",
    eyebrow: "06",
    t: "Commercial Developers",
    b: "Owners and GCs delivering luxury condo, mixed-use, or boutique commercial product. We come in as the millwork and high-end finish package — predictable pricing, schedule alignment, and shop capacity that scales with your phasing.",
    label: "Commercial interior photo",
    tone: "dark" as const,
    bullets: [
      "12,000 sq. ft. shop — capacity for 60+ unit packages",
      "GMP and bid-spec friendly, AIA G702/703 billing",
      "Punchlist accountability through TCO",
      "Single-source liability for finish and millwork scope",
    ],
    proof: "Active on 6 ground-up developments across the Tri-State",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Who we work with."
        sub="Four kinds of clients. One uncompromising standard."
        label="Team/shop/process photo"
        tone="dark"
      />

      <nav className="border-b border-border bg-background/95 backdrop-blur-md sticky top-20 md:top-24 z-30">
        <div className="container-wide flex flex-wrap gap-6 md:gap-10 py-5 text-[10px] tracking-[0.3em] uppercase font-medium text-muted-foreground">
          {personas.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="hover:text-gold transition-colors">
              {p.t}
            </a>
          ))}
        </div>
      </nav>

      <div>
        {personas.map((p, i) => (
          <section
            key={p.id}
            id={p.id}
            className={`scroll-mt-32 py-24 md:py-36 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <div className="container-wide">
              <div className={`grid gap-12 lg:gap-20 items-center lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <Placeholder label={p.label} tone={p.tone} ratio="4/5" />
                </Reveal>
                <Reveal delay={120}>
                  <span className="font-serif text-6xl md:text-7xl text-gold">{p.eyebrow}</span>
                  <h2 className="display-serif text-[clamp(2rem,4vw,3.5rem)] mt-4 mb-8">{p.t}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">{p.b}</p>
                  <ul className="space-y-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-foreground border-t border-border pt-3">
                        <span className="text-gold mt-1.5">◆</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 border border-gold/40 bg-gold/5">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-[11px] tracking-[0.25em] uppercase font-medium text-foreground">
                      {p.proof}
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaSection />
    </>
  );
}
