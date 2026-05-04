import type { CSSProperties } from "react";

interface PlaceholderProps {
  label: string;
  className?: string;
  tone?: "light" | "mid" | "dark" | "warm";
  ratio?: string; // e.g. "4/5", "16/10"
  src?: string;   // optional real image override
  alt?: string;
  fill?: boolean; // absolutely fill nearest positioned ancestor
  showTag?: boolean; // show the small label tag on top of the image
}

/**
 * Curated high-end architectural photography (Unsplash) keyed by the same
 * descriptive label strings used throughout the site. Adding a new label
 * here automatically lights up real imagery in every section that requests it.
 */
const LABEL_IMAGES: Record<string, string> = {
  // Hero — sweeping luxury living space
  "Hero project photo":
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80",

  // Interior renovations — finished luxury kitchen with marble + custom cabinetry
  "Kitchen/casework detail":
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80",

  // Custom millwork — finished paneled interior (warm wood)
  "Custom millwork shop photo":
    "https://images.unsplash.com/photo-1600573472556-e636c2acda88?auto=format&fit=crop&w=2000&q=80",

  // Tour the Shop — actual woodworking shop / craftsman at bench
  "Workshop interior":
    "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=2000&q=80",

  // Library — built-in floor-to-ceiling library / study
  "Library millwork":
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80",

  // Before / after
  "Before renovation photo":
    "https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=2000&q=80",
  "After renovation photo":
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=80",

  // Bath
  "Bathroom vanity/millwork detail":
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=2000&q=80",

  // Commercial / hospitality / institutional
  "Commercial interior photo":
    "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=2000&q=80",
  "Hotel interior photo":
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80",
  "Boutique hotel lobby":
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=80",
  "School interior photo":
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=80",
  "Office interior":
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=2000&q=80",

  // Covers
  "Radiator cover photo":
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80",
  "AC cover photo":
    "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=2000&q=80",

  // Process / team
  "Team/shop/process photo":
    "https://images.unsplash.com/photo-1572297794755-a1cd34dcfd9b?auto=format&fit=crop&w=2000&q=80",
  "Architect drawings":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",

  // Detail / interiors
  "Wood paneling detail":
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80",
  "Marble kitchen":
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2000&q=80",
  "Living room interior":
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80",
};

const toneStyles: Record<NonNullable<PlaceholderProps["tone"]>, CSSProperties> = {
  light: {
    background:
      "radial-gradient(140% 90% at 20% 10%, oklch(0.96 0.005 80) 0%, oklch(0.9 0.005 80) 60%, oklch(0.84 0.006 80) 100%)",
  },
  mid: {
    background:
      "radial-gradient(120% 90% at 80% 0%, oklch(0.78 0.01 80) 0%, oklch(0.62 0.012 70) 70%, oklch(0.48 0.012 60) 100%)",
  },
  dark: {
    background:
      "radial-gradient(120% 100% at 30% 10%, oklch(0.32 0.008 60) 0%, oklch(0.22 0.006 60) 60%, oklch(0.14 0.005 60) 100%)",
  },
  warm: {
    background:
      "radial-gradient(120% 90% at 70% 10%, oklch(0.82 0.04 70) 0%, oklch(0.62 0.06 60) 60%, oklch(0.38 0.04 50) 100%)",
  },
};

/**
 * An architectural placeholder block. Always renders the placeholder type label
 * (e.g. "Hero project photo", "Custom millwork shop photo") so the asset slot
 * is obvious. If `src` is provided the image is shown and the label becomes a
 * subtle corner tag for the design team.
 */
export function Placeholder({
  label,
  className = "",
  tone = "mid",
  ratio,
  src,
  alt,
  fill = false,
  showTag = false,
}: PlaceholderProps) {
  const resolvedSrc = src ?? LABEL_IMAGES[label];

  const style: CSSProperties = {
    ...(ratio && !fill ? { aspectRatio: ratio.replace("/", " / ") } : {}),
    ...(resolvedSrc ? {} : toneStyles[tone]),
  };

  const isDark = tone === "dark" || tone === "mid" || !!resolvedSrc;
  const positionClass = fill ? "absolute inset-0 w-full h-full" : "relative w-full";

  return (
    <div
      className={`${positionClass} overflow-hidden ${className}`}
      style={style}
      role="img"
      aria-label={alt ?? label}
    >
      {resolvedSrc ? (
        <img
          src={resolvedSrc}
          alt={alt ?? label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
      ) : (
        <>
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.08]"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M10 0H0V10" fill="none" stroke="currentColor" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" className="text-white" />
          </svg>
          <div className="absolute inset-6 border border-white/15" aria-hidden />
        </>
      )}

      {showTag && (
        <div
          className={`absolute left-4 top-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 backdrop-blur-md text-[9px] tracking-[0.28em] uppercase font-medium ${
            isDark
              ? "bg-black/45 text-white/90 border border-white/15"
              : "bg-white/80 text-foreground border border-black/10"
          }`}
        >
          <span className="w-1 h-1 bg-gold rounded-full" />
          {label}
        </div>
      )}
    </div>
  );
}

