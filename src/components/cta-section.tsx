import { Link } from "@tanstack/react-router";
import { Reveal } from "./reveal";

export function CtaSection() {
  return (
    <section className="bg-charcoal text-charcoal-foreground py-28 md:py-36">
      <div className="container-luxe text-center max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-6">Begin Your Project</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6">
            Ready to elevate your space?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Schedule a private consultation with our principal designers. Every project
            begins with a single, considered conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold/90 transition-colors"
          >
            Schedule Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
