import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { Placeholder } from "@/components/placeholder";
import { PageHero } from "./services.interior-renovations";

export const Route = createFileRoute("/about/millwork-shop")({
  head: () => ({
    meta: [
      { title: "The Millwork Shop — Westchester Luxury Interiors" },
      {
        name: "description",
        content:
          "Inside our 12,000 sq. ft. millwork shop in Rye, NY — the artisans, the equipment, and the standards behind every cabinet, wall, and built-in we deliver.",
      },
      { property: "og:title", content: "The Millwork Shop" },
      {
        property: "og:description",
        content: "Inside our 12,000 sq. ft. millwork shop in Rye, NY.",
      },
    ],
  }),
  component: Page,
});

const stats = [
  { v: "12,000", l: "Square feet of shop floor" },
  { v: "18", l: "Full-time craftsmen on payroll" },
  { v: "AWI", l: "Premium-grade shop certified" },
  { v: "1987", l: "Year the first lathe was set" },
];

const equipment = [
  { t: "5-Axis CNC", b: "Komo VR512 with auto tool change for compound profiles, joinery, and templating in a single setup." },
  { t: "Wide-belt Sander", b: "37-inch SCM Sandya with calibrating heads — the difference between 'flat' and *flat*." },
  { t: "Spray Booth", b: "Downdraft booth with 8,000 CFM filtration. Conversion varnish, post-cat lacquer, and milk paint." },
  { t: "Dust & Climate", b: "Whole-shop dust collection and seasonal humidity control to keep every panel stable." },
];

const trades = [
  "Cabinetmakers", "Finishers", "Carvers", "Drafters",
  "Installers", "Polishers", "Templaters", "Estimators",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Studio · Shop"
        title="The shop in Rye."
        sub="Twelve thousand square feet, eighteen craftsmen, and a thirty-year-old standard."
        label="Custom millwork shop photo"
        tone="dark"
      />

      <section className="container-wide py-24 md:py-32">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <Placeholder label="Shop floor wide" tone="dark" ratio="16/10" />
          </div>
          <div className="md:col-span-4 grid gap-6">
            <Placeholder label="Hands at work" tone="warm" ratio="1/1" />
            <Placeholder label="Craftsman portrait" tone="dark" ratio="1/1" />
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.l}>
              <div className="border-t-2 border-gold pt-5">
                <p className="font-serif text-5xl md:text-6xl">{s.v}</p>
                <p className="mt-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                  {s.l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="container-luxe">
          <Reveal className="max-w-3xl mb-16">
            <p className="eyebrow mb-4">Equipment</p>
            <h2 className="display-serif text-[clamp(2rem,4vw,3rem)]">
              The right machines. Treated like instruments.
            </h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2">
            {equipment.map((e, i) => (
              <Reveal key={e.t} delay={i * 70}>
                <div className="border-t-2 border-gold pt-6">
                  <h3 className="font-serif text-2xl mb-3">{e.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{e.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32">
        <Reveal className="max-w-3xl mb-12">
          <p className="eyebrow mb-4">The Crew</p>
          <h2 className="display-serif text-[clamp(2rem,4vw,3rem)]">Eight trades under one roof.</h2>
          <p className="mt-6 text-muted-foreground">
            Average tenure on the shop floor is fourteen years. Our installers and our cabinetmakers
            sit at the same lunch table — that's how we keep field problems from becoming shop
            problems.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trades.map((t) => (
            <div
              key={t}
              className="border border-border px-6 py-8 text-center text-[11px] tracking-[0.25em] uppercase text-foreground"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
