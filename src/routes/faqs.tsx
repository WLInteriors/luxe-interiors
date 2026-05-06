import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "./services.interior-renovations";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Westchester Luxury Interiors" },
      {
        name: "description",
        content:
          "Answers to common questions about contracts, pricing, schedule, warranty, insurance, and the design process at Westchester Luxury Interiors.",
      },
      { property: "og:title", content: "Frequently Asked Questions" },
      {
        property: "og:description",
        content: "Common questions about contracts, pricing, schedule, and warranty.",
      },
    ],
  }),
  component: Page,
});

const sections: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Working With Us",
    items: [
      {
        q: "What kinds of projects do you take on?",
        a: "Luxury renovations and additions, ground-up custom homes, commercial fit-outs in hospitality and Class-A office, and standalone millwork commissions. Typical residential project value is $450K to $3.5M; commercial typically $1M to $20M.",
      },
      {
        q: "Do you work outside Westchester?",
        a: "Yes. We're licensed and active across New York, Connecticut, and New Jersey. Our work spans Manhattan, Westchester, Fairfield County, the Hamptons, and northern New Jersey.",
      },
      {
        q: "Do you work with our architect or designer?",
        a: "Always preferred. We're fluent in AIA A201 contracts and have long-standing relationships with most NYC and Westchester firms. We can also recommend trusted designers if you don't have one.",
      },
    ],
  },
  {
    title: "Pricing & Contracts",
    items: [
      {
        q: "How is your pricing structured?",
        a: "We deliver a fixed lump-sum price after design development is complete. We do not work on open-ended T&M for new projects. For early-stage feasibility, we provide a budget band based on comparable completed work.",
      },
      {
        q: "What does a typical kitchen or bath renovation cost?",
        a: "Our true-luxury kitchen renovations start around $325K and run to $750K+ for projects with butler's pantries and sculleries. Primary baths run $150K to $450K. Detailed budget guidance is in our journal article on the topic.",
      },
      {
        q: "How are change orders handled?",
        a: "Every change is priced and approved in writing before any work proceeds. We will tell you up front when a request is going to add cost or schedule — no surprise invoices.",
      },
    ],
  },
  {
    title: "Schedule & Site",
    items: [
      {
        q: "How long does a luxury renovation take?",
        a: "Design development typically runs 2–4 months. A whole-floor or kitchen-and-bath renovation typically runs 6–10 months on site. Whole-house gut renovations typically run 12–18 months. We commit to a date when we sign.",
      },
      {
        q: "How do you handle living-in-place projects?",
        a: "Daily protected paths, dust containment, scheduled noise windows, and white-glove cleanup at end of day. For occupied luxury homes we can also mobilize night-shift or weekend-only crews.",
      },
      {
        q: "Do you handle permits and board approvals?",
        a: "Yes. We manage DOB, DOH, and DOE filings in NYC and the equivalent in Westchester and Connecticut. For co-op and condo projects, we manage alteration agreements, COIs, and board interviews end-to-end.",
      },
    ],
  },
  {
    title: "Warranty & Insurance",
    items: [
      {
        q: "What warranty do you provide?",
        a: "A five-year written craftsmanship warranty on everything we build, in addition to all manufacturer warranties. We schedule a 90-day check-in and an 11-month seasonal review before the first anniversary.",
      },
      {
        q: "What insurance do you carry?",
        a: "$5M general liability per occurrence, $25M excess umbrella, statutory workers' comp in NY/CT/NJ, $5M auto, and $2M professional liability. COIs with custom additional insureds are issued within 24 hours.",
      },
      {
        q: "Are you licensed and certified?",
        a: "Yes. Licensed GC in NY, CT, and NJ. SCA Prequalified. MBE and DBE certified. All site supervisors hold OSHA 30. We are an EPA RRP lead-safe certified firm.",
      },
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Studio · FAQs"
        title="Frequently asked."
        sub="Straightforward answers about how we work, price, and protect your project."
        label="Architect drawings"
        tone="dark"
      />

      <section className="container-luxe py-24 md:py-32 max-w-4xl">
        <div className="space-y-20">
          {sections.map((s, si) => (
            <Reveal key={s.title} delay={si * 60}>
              <p className="eyebrow mb-4">Section 0{si + 1}</p>
              <h2 className="display-serif text-[clamp(1.75rem,3vw,2.5rem)] mb-10">{s.title}</h2>
              <ul className="divide-y divide-border border-y border-border">
                {s.items.map((it) => (
                  <FaqItem key={it.q} q={it.q} a={it.a} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-lg md:text-xl">{q}</span>
        <span className="mt-1 text-gold flex-shrink-0">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {open && (
        <div className="pb-6 pr-10 text-muted-foreground leading-relaxed">{a}</div>
      )}
    </li>
  );
}
