import type { CSSProperties } from "react";

interface PlaceholderProps {
  label: string;
  className?: string;
  tone?: "light" | "mid" | "dark" | "warm";
  ratio?: string; // e.g. "4/5", "16/10"
  src?: string;   // optional real image; label still overlays as a corner tag
  alt?: string;
}

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
}: PlaceholderProps) {
  const style: CSSProperties = {
    ...(ratio ? { aspectRatio: ratio.replace("/", " / ") } : {}),
    ...(src ? {} : toneStyles[tone]),
  };

  const isDark = tone === "dark" || tone === "mid" || !!src;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={style}
      role="img"
      aria-label={alt ?? label}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
      ) : (
        <>
          {/* Architectural cross-hairs */}
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

      {/* Label tag */}
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
    </div>
  );
}
