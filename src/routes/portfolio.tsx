import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "./services.interior-renovations";

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

const projects: { title: string; loc: string; cat: Exclude<Cat, "All">; img: string }[] = [
  { title: "Modern Penthouse", loc: "Manhattan, NY", cat: "Residential", img: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1200&q=80" },
  { title: "Colonial Revival", loc: "Rye, NY", cat: "Residential", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" },
  { title: "Hudson Estate Kitchen", loc: "Bronxville, NY", cat: "Residential", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80" },
  { title: "Tribeca Loft", loc: "New York, NY", cat: "Residential", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80" },
  { title: "Greenwich Master Bath", loc: "Greenwich, CT", cat: "Residential", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80" },
  { title: "Westchester Library", loc: "Scarsdale, NY", cat: "Millwork", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" },
  { title: "Hotel Lobby Refresh", loc: "Stamford, CT", cat: "Commercial", img: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1200&q=80" },
  { title: "Boutique Office Build-out", loc: "Midtown, NYC", cat: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" },
  { title: "Walnut Wine Room", loc: "Larchmont, NY", cat: "Millwork", img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80" },
  { title: "Fluted Oak Foyer", loc: "Mamaroneck, NY", cat: "Millwork", img: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1200&q=80" },
  { title: "Charter School Atrium", loc: "Bronx, NY", cat: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" },
  { title: "Lakeside Retreat", loc: "Pound Ridge, NY", cat: "Residential", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80" },
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
        img="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="container-luxe py-20">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-3 text-[11px] tracking-[0.25em] uppercase font-medium border transition-all ${
                active === f
                  ? "bg-charcoal text-charcoal-foreground border-charcoal"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.title} className="group cursor-pointer animate-fade-in">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 text-[10px] tracking-[0.25em] uppercase">
                  {p.cat}
                </div>
              </div>
              <div className="pt-5">
                <h3 className="font-serif text-xl">{p.title}</h3>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{p.loc}</p>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No projects in this category yet.</p>
        )}
      </section>

      <CtaSection />
    </>
  );
}
