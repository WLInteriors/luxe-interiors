# Westchester Luxury Interiors — Build Plan

A premium multi-page marketing site with a modern luxury architectural aesthetic, built on TanStack Start + Tailwind v4, using semantic design tokens, Playfair Display + Inter, and tasteful scroll/hover animations.

## Design System (src/styles.css)
- Colors (oklch equivalents):
  - `--background` warm off-white (#F9F9F9)
  - `--foreground` deep charcoal (#1A1A1A)
  - `--primary` charcoal; `--accent` muted gold/champagne (#C5A059)
  - `--muted`, `--border` subtle warm grays
  - Dark inverse tokens for footer/CTA sections
- Fonts: Playfair Display (serif headings) + Inter (sans body) via Google Fonts in `__root.tsx`
- Custom utilities: `.font-serif`, `.font-sans`, `.fade-in-up` (IntersectionObserver-driven), `.hover-lift`, gold underline link
- Tokens for shadows and gradient overlays (image scrims)

## Routes (src/routes/)
- `__root.tsx` — Header (sticky transparent → solid on scroll, dropdowns for Services/Portfolio, mobile drawer), Footer (Rye NY address, socials, careers), Outlet, Google Fonts link
- `index.tsx` — Home: Hero, Trust Bar, Service Pillars, The Difference (split), Featured Projects grid, Dark CTA
- `services.interior-renovations.tsx` — Kitchens/Baths/Additions + vertical timeline "Our Process"
- `services.custom-millwork.tsx` — Vanities/Closets/Radiator Covers/Paneling + Shop Capabilities
- `services.commercial.tsx` — Schools (SCA), Hospitality, Developers + MBE/DBE/SCA badges
- `portfolio.tsx` — Filterable grid (All/Residential/Commercial/Millwork) with state-driven filters
- `portfolio.before-after.tsx` — 3 working drag image-comparison sliders (touch + mouse)
- `who-we-work-with.tsx` — Sections for Homeowners / Architects / Property Managers / Schools (anchor scroll)
- `about.tsx` — Story, values, team placeholders
- `contact.tsx` — Multi-step form (3 steps): contact info → project details (type, location, budget) → file upload + submit. Client-side Zod validation, progress bar, success state

## Reusable Components (src/components/)
- `site-header.tsx` (with `nav-dropdown.tsx`, `mobile-nav.tsx`)
- `site-footer.tsx`
- `hero.tsx`, `trust-bar.tsx`, `service-pillar-card.tsx`, `featured-project-card.tsx`, `cta-section.tsx`
- `before-after-slider.tsx` — pointer/touch draggable comparison
- `portfolio-grid.tsx` with filter chips
- `multi-step-contact-form.tsx`
- `trust-badge.tsx` (SVG seal placeholders for MBE / SCA / Licensed)
- `reveal.tsx` — IntersectionObserver fade-in wrapper

## Interactive Behavior
- Header: scroll listener swaps from transparent (over hero) to solid; mobile uses Sheet
- Dropdowns: hover on desktop, click on mobile
- Portfolio filter: `useState` filter; smooth transitions
- Before/After slider: pointer events, keyboard arrow support, works on touch
- Multi-step form: step state, Zod schemas per step, file input with size/type validation, no real upload (toast success)
- Reveal animation: shared `Reveal` component using `IntersectionObserver`

## Imagery
- Use Unsplash hot-link URLs for high-end interiors (marble kitchens, wood paneling, modern offices) — no generation needed, keeps build fast
- Trust badges: inline SVG seals styled with gold/charcoal

## SEO
- Each route exports `head()` with unique title, description, og:title, og:description
- Single H1 per page, H2/H3 hierarchy, semantic `<section>`, `<article>`, alt text everywhere

## Out of Scope (v1)
- Real backend / form submission (toast only)
- CMS, blog, auth, payments
- Light/dark toggle (single refined palette)

After approval I'll implement the design tokens first, then shared layout (header/footer), then pages and interactive components in parallel.