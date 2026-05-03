import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Home as HomeIcon } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container-luxe py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl">Westchester</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold mt-1">
                Luxury Interiors
              </span>
            </div>
            <p className="mt-6 text-sm text-white/70 max-w-md leading-relaxed">
              A luxury general contractor and custom millwork shop crafting bespoke
              interiors for the most discerning clients across Westchester, NYC, and
              the Tri-State area.
            </p>
            <div className="mt-8 flex gap-3">
              <SocialLink href="https://instagram.com" label="Instagram"><Instagram size={16} /></SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn"><Linkedin size={16} /></SocialLink>
              <SocialLink href="https://houzz.com" label="Houzz"><HomeIcon size={16} /></SocialLink>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5">Studio</h4>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              48 Purchase Street<br />
              Rye, NY 10580<br />
              <a href="tel:+19145550100" className="link-gold mt-3 inline-block">(914) 555-0100</a><br />
              <a href="mailto:studio@westchesterluxury.com" className="link-gold">studio@westchesterluxury.com</a>
            </address>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/services/interior-renovations" className="hover:text-gold transition-colors">Renovations</Link></li>
              <li><Link to="/services/custom-millwork" className="hover:text-gold transition-colors">Millwork</Link></li>
              <li><Link to="/services/commercial" className="hover:text-gold transition-colors">Commercial</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Westchester Luxury Interiors. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Licensed · Insured · MBE/DBE Certified</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 inline-flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-colors"
    >
      {children}
    </a>
  );
}
