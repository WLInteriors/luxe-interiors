import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials — Westchester Luxury Interiors" },
      {
        name: "description",
        content:
          "What homeowners, architects, property managers, hoteliers, and school facilities directors say about working with Westchester Luxury Interiors.",
      },
      { property: "og:title", content: "Client Testimonials" },
      { property: "og:description", content: "What our clients say." },
    ],
  }),
  component: Page,
});

type Cat = "All" | "Homeowners" | "Architects" | "Property" | "Hospitality" | "Schools";

const reviews: { quote: string; author: string; role: string; cat: Exclude<Cat, "All"> }[] = [
  {
    quote:
      "They protected our design intent through every RFI. The millwork came out exactly as drawn — which almost never happens.",
    author: "Principal Architect",
    role: "AIA-member firm, NYC",
    cat: "Architects",
  },
  {
    quote:
      "Fixed price held. Schedule held. Our neighbors never complained once. That alone is worth the premium.",
    author: "Homeowner",
    role: "Bronxville, NY",
    cat: "Homeowners",
  },
  {
    quote: "Every joint is perfect. They worked around our archivist's pace without ever losing their schedule.",
    author: "Homeowner",
    role: "Scarsdale, NY",
    cat: "Homeowners",
  },
  {
    quote:
      "They told us the truth about the slab and gave us a fixed plan to fix it. No theatrics.",
    author: "Homeowner",
    role: "Greenwich, CT",
    cat: "Homeowners",
  },
  {
    quote:
      "Their schedule was the same on day one and day 112. Our brokers now use them as a reference.",
    author: "Director of Real Estate",
    role: "Investment firm, NYC",
    cat: "Property",
  },
  {
    quote:
      "Our front desk never noticed they were here. Our guests only noticed the new lobby.",
    author: "General Manager",
    role: "Boutique hotel, CT",
    cat: "Hospitality",
  },
  {
    quote:
      "They understood SCA paperwork better than our own consultants. That alone saved us weeks.",
    author: "Director of Facilities",
    role: "Charter school, NYC",
    cat: "Schools",
  },
  {
    quote:
      "They got the vocabulary immediately. Every detail feels intentional, never decorated.",
    author: "Homeowner",
    role: "Tribeca, NY",
    cat: "Homeowners",
  },
  {
    quote:
      "The COI was on my desk in twelve hours with the right additional insureds. That never happens.",
    author: "Managing Agent",
    role: "Park Avenue co-op",
    cat: "Property",
  },
  {
    quote:
      "Their shop drawings come back inside a week. We've added them to our short list for every gut.",
    author: "Senior Designer",
    role: "Interior design studio, NYC",
    cat: "Architects",
  },
];

const filters: Cat[] = ["All", "Homeowners", "Architects", "Property", "Hospitality", "Schools"];

function Page() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = useMemo(
    () => (active === "All" ? reviews : reviews.filter((r) => r.cat === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="In Their Words"
        title="What our clients say."
        sub="Unedited excerpts from homeowners, architects, managers, hoteliers, and schools."
        label="Living room interior"
        tone="dark"
      />

      <section className="container-wide py-20 md:py-24">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-14 pb-6 border-b border-border">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-3 text-[10px] tracking-[0.3em] uppercase font-medium transition-all ${
                  active === f
                    ? "bg-charcoal text-charcoal-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "review" : "reviews"}
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {filtered.map((r, i) => (
            <Reveal key={`${r.author}-${i}`} delay={(i % 2) * 80}>
              <figure className="border-t-2 border-gold pt-6">
                <span className="font-serif text-5xl text-gold leading-none">"</span>
                <blockquote className="display-serif text-xl md:text-2xl mt-2 mb-6 leading-snug">
                  {r.quote}
                </blockquote>
                <figcaption>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-foreground">
                    {r.author}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {r.role} · <span className="text-gold">{r.cat}</span>
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
