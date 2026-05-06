import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { to: "/services/interior-renovations", label: "Interior Renovations" },
  { to: "/services/custom-millwork", label: "Custom Millwork" },
  { to: "/services/commercial", label: "Commercial Services" },
] as const;

const portfolio = [
  { to: "/portfolio", label: "Residential & Commercial" },
  { to: "/portfolio/before-after", label: "Before & After" },
  { to: "/testimonials", label: "Client Testimonials" },
] as const;

const studio = [
  { to: "/about", label: "About the Studio" },
  { to: "/about/our-process", label: "Our Process" },
  { to: "/about/millwork-shop", label: "The Millwork Shop" },
  { to: "/about/certifications-affiliations", label: "Certifications" },
  { to: "/blog", label: "Journal" },
  { to: "/careers", label: "Careers" },
  { to: "/faqs", label: "FAQs" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/92 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-3 group">
          <span className={`w-2 h-2 rounded-full ${solid ? "bg-gold" : "bg-gold"}`} />
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-lg md:text-xl tracking-tight ${
                solid ? "text-foreground" : "text-white"
              }`}
            >
              Westchester
            </span>
            <span className="text-[9px] tracking-[0.32em] uppercase mt-1 text-gold">
              Luxury Interiors
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          <NavDropdown label="Services" items={services} solid={solid} />
          <NavDropdown label="Portfolio" items={portfolio} solid={solid} />
          <NavLink to="/who-we-work-with" solid={solid}>Clients</NavLink>
          <NavDropdown label="Studio" items={studio} solid={solid} />
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-charcoal text-[10px] tracking-[0.28em] uppercase font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Request Estimate
          </Link>
        </nav>

        <button
          className={`lg:hidden p-2 -mr-2 ${solid ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-luxe py-6 flex flex-col gap-1">
            <MobileLink to="/">Home</MobileLink>
            <MobileGroup label="Services" items={services} />
            <MobileGroup label="Portfolio" items={portfolio} />
            <MobileLink to="/who-we-work-with">Who We Work With</MobileLink>
            <MobileGroup label="Studio" items={studio} />
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-gold text-charcoal text-xs tracking-[0.2em] uppercase font-medium"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children, solid }: { to: string; children: React.ReactNode; solid: boolean }) {
  return (
    <Link
      to={to}
      className={`text-xs tracking-[0.2em] uppercase font-medium transition-colors link-gold ${
        solid ? "text-foreground hover:text-gold" : "text-white hover:text-gold"
      }`}
      activeProps={{ className: "text-gold" }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function NavDropdown({
  label,
  items,
  solid,
}: {
  label: string;
  items: ReadonlyArray<{ to: string; label: string }>;
  solid: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 text-xs tracking-[0.2em] uppercase font-medium transition-colors ${
          solid ? "text-foreground hover:text-gold" : "text-white hover:text-gold"
        }`}
      >
        {label}
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
          <div className="min-w-[260px] bg-card border border-border shadow-elegant py-2">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-gold transition-colors"
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="py-3 text-sm tracking-[0.2em] uppercase font-medium text-foreground border-b border-border"
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  label,
  items,
}: {
  label: string;
  items: ReadonlyArray<{ to: string; label: string }>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        className="w-full py-3 flex items-center justify-between text-sm tracking-[0.2em] uppercase font-medium text-foreground"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 pl-4 flex flex-col gap-2">
          {items.map((it) => (
            <Link key={it.to} to={it.to} className="py-2 text-sm text-muted-foreground">
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
