import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Westchester Luxury Interiors" },
      { name: "description", content: "Selected residential, commercial, and millwork projects across Westchester, NYC, and the Tri-State area." },
      { property: "og:title", content: "Portfolio — Westchester Luxury Interiors" },
      { property: "og:description", content: "Selected residential, commercial, and millwork projects." },
    ],
  }),
  component: Page,
});

type Cat = "All" | "Residential" | "Commercial" | "Millwork";

type Tone = "light" | "mid" | "dark" | "warm";

const projects: { title: string; loc: string; year: string; cat: Exclude<Cat, "All">; label: string; tone: Tone }[] = [
  { title: "Modern Penthouse", loc: "Manhattan, NY", year: "2024", cat: "Residential", label: "Hero project photo", tone: "dark" },
  { title: "Colonial Revival", loc: "Rye, NY", year: "2024", cat: "Residential", label: "Kitchen/casework detail", tone: "light" },
  { title: "Hudson Estate Kitchen", loc: "Bronxville, NY", year: "2023", cat: "Residential", label: "Kitchen/casework detail", tone: "warm" },
  { title: "Tribeca Loft", loc: "New York, NY", year: "2024", cat: "Residential", label: "Hero project photo", tone: "mid" },
  { title: "Greenwich Master Bath", loc: "Greenwich, CT", year: "2023", cat: "Residential", label: "Bathroom vanity/millwork detail", tone: "warm" },
  { title: "Westchester Library", loc: "Scarsdale, NY", year: "2023", cat: "Millwork", label: "Custom millwork shop photo", tone: "dark" },
  { title: "Hotel Lobby Refresh", loc: "Stamford, CT", year: "2022", cat: "Commercial", label: "Commercial interior photo", tone: "warm" },
  { title: "Boutique Office Buildout", loc: "Midtown, NYC", year: "2024", cat: "Commercial", label: "Commercial interior photo", tone: "mid" },
  { title: "Walnut Wine Room", loc: "Larchmont, NY", year: "2023", cat: "Millwork", label: "Custom millwork shop photo", tone: "dark" },
  { title: "Fluted Oak Foyer", loc: "Mamaroneck, NY", year: "2024", cat: "Millwork", label: "Custom millwork shop photo", tone: "warm" },
  { title: "Charter School Atrium", loc: "Bronx, NY", year: "2022", cat: "Commercial", label: "Commercial interior photo", tone: "light" },
  { title: "Lakeside Retreat", loc: "Pound Ridge, NY", year: "2023", cat: "Residential", label: "Hero project photo", tone: "mid" },
];

const filters: Cat[] = ["All", "Residential", "Commercial", "Millwork"];

function Page() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.cat === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Portfolio"
        sub="A measured archive of projects across Westchester, NYC, and the Tri-State."
        label="Hero project photo"
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
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-16 md:grid-cols-12">
          {filtered.map((p, i) => {
            // Editorial staggered span pattern
            const pattern = [
              "md:col-span-7",
              "md:col-span-5 md:mt-24",
              "md:col-span-5",
              "md:col-span-7 md:mt-12",
              "md:col-span-6",
              "md:col-span-6 md:mt-20",
            ];
            const span = pattern[i % pattern.length];
            return (
              <article key={p.title} className={`group cursor-pointer animate-fade-in ${span}`}>
                <Placeholder label={p.label} tone={p.tone} ratio="4/5" />
                <div className="pt-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{p.cat}</p>
                    <h3 className="font-serif text-2xl md:text-3xl">{p.title}</h3>
                    <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mt-2">
                      {p.loc} · {p.year}
                    </p>
                  </div>
                  <ArrowUpRight size={20} className="text-foreground/40 group-hover:text-gold transition-colors flex-shrink-0" />
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No projects in this category yet.</p>
        )}
      </section>

      <CtaSection />
    </>
  );
}
