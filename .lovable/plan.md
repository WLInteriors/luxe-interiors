This is a large, multi-system request (9 items). I want to align on scope and sequencing before writing code, because some items have meaningful cost/decision tradeoffs (real photography, CMS choice, email provider).

## Recommended phasing

### Phase 1 — Backend + foundation (do now)
1. **Contact form backend** — Enable Lovable Cloud, store submissions in a `contact_submissions` table, upload files to Lovable Cloud Storage, and send a notification email to `studio@westchesterluxury.com` using Lovable's built-in email (zero-config, no third-party API keys needed). Includes a confirmation email to the submitter and proper error handling.
2. **Image optimization pass** — Add `loading="lazy"`, `decoding="async"`, descriptive keyword-rich alt text, and width/height to the `Placeholder` component. Curate the best Unsplash architectural shots available now. (Real project photography is a content task for the client — flagged below.)
3. **Homepage "Who We Work With" snippet** — New section above Selected Work with 4 client types and CTA to `/who-we-work-with`.

### Phase 2 — Content architecture (do now)
4. **Individual case study pages** — New dynamic route `/portfolio/$slug` with hero, gallery, challenge/solution/features/outcome, testimonial, related projects, CTA. Update portfolio cards to link in.
5. **Before/After enhanced descriptions** — 2–3 sentence challenge/scope/result blurbs per entry.
6. **Commercial page expansion** — Detailed sector content (K–12/SCA, Hospitality, Developers) with examples, value props, mini case studies, targeted CTAs. Light expansion on other service pages.

### Phase 3 — New pages (do now)
7. `/about/certifications-affiliations`, `/about/our-process`, `/about/millwork-shop`, `/testimonials`, `/careers`, `/faqs`. Wire into header (About dropdown) + footer.

### Phase 4 — Blog (needs decision)
8. **Blog** — Listing page, post pages with social sharing, footer link. **Content source decision required** (see questions below).

## Decisions needed from you

**A. Email backend**: I'll use **Lovable's built-in email** (no API keys, no setup, queue + retries included). If you'd prefer Resend/SendGrid/Mailgun specifically, say so and I'll wire that instead.

**B. Blog content source**: Three options —
   - **Markdown files in repo** (simplest, edit via PRs, zero cost) — recommended for small blogs
   - **Sanity** (free tier, visual editor, requires you to create a Sanity account)
   - **Contentful** (similar, requires account)

**C. Real photography**: I cannot generate or source actual photos of *Westchester Luxury Interiors' real projects/shop/team* — those have to come from you. I'll keep using top-tier Unsplash architectural placeholders with proper alt text and a clear handoff list of which images to swap. OK?

**D. Scope confirmation**: All 9 items in one go is ~20+ new files and significant content. OK to proceed with everything, or do you want to ship in phases (1→2→3→4) so you can review between?

Once you confirm A, B, C, and D, I'll execute.