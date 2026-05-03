import { Link } from "@tanstack/react-router";
import { Reveal } from "./reveal";
import { ArrowUpRight, Phone, Mail, Calendar } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-charcoal text-charcoal-foreground py-28 md:py-36">
      <div className="container-luxe">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6">Begin Your Project</p>
            <h2 className="display-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] mb-8">
              A single,<br />considered conversation.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
              Every project — a kitchen, a co-op, a 40-room hotel — begins
              the same way: an unhurried walkthrough with the principal who
              will see it through. No sales rep. No subcontractor handoff.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-[11px] tracking-[0.28em] uppercase font-medium hover:bg-white transition-colors"
              >
                <Calendar size={14} />
                Request Estimate
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="tel:+19145550100"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-[11px] tracking-[0.28em] uppercase font-medium hover:bg-white hover:text-charcoal transition-colors"
              >
                <Phone size={14} />
                (914) 555-0100
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-12">
            <p className="eyebrow text-white/60 mb-6">What to expect</p>
            <ul className="space-y-5">
              {[
                ["24 hrs", "Personal response from a principal — not a CRM auto-reply."],
                ["7–10 days", "Site visit, scope conversation, and ballpark range."],
                ["3–4 weeks", "Detailed proposal with shop drawings and a fixed price."],
              ].map(([t, b]) => (
                <li key={t} className="grid grid-cols-[auto_1fr] gap-5 pb-5 border-b border-white/10">
                  <span className="font-serif text-2xl text-gold leading-none whitespace-nowrap">{t}</span>
                  <span className="text-white/75 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:studio@westchesterluxury.com"
              className="mt-8 inline-flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
            >
              <Mail size={14} />
              studio@westchesterluxury.com
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
