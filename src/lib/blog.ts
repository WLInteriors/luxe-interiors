export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  category: string;
  cover: string; // Placeholder label
  coverAlt: string;
  author: string;
  body: string; // markdown-lite (paragraphs separated by \n\n; ## for h2)
}

export const posts: BlogPost[] = [
  {
    slug: "why-in-house-millwork-matters",
    title: "Why In-House Millwork Changes Everything",
    excerpt:
      "Subcontracted millwork is the single biggest source of schedule slip and quality compromise in luxury construction. Here's what owning the shop changes.",
    date: "2025-09-12",
    readMinutes: 6,
    category: "Craft",
    cover: "Custom millwork shop photo",
    coverAlt: "Craftsman planing white oak in custom millwork shop",
    author: "Westchester Luxury Interiors",
    body: `Most luxury contractors call themselves "custom" but quietly subcontract every casework run to two or three regional shops. The shops are good. The math, though, is brutal: an extra hand-off, a separate schedule, and a quality bar that nobody owns end-to-end.

## The schedule cost

A subcontracted shop is one of fifty active orders. Your six-week lead time becomes ten weeks the moment something upstream slips. We've absorbed that variance into our own walls — when our shop is the bottleneck, our principal is the one negotiating tradeoffs in real time, not waiting for a callback.

## The quality cost

A drawing that says "1/8\" reveal" means six different things to six different shops. Owning fabrication means a single foreman defines what a 1/8\" reveal actually looks like across every project we ship. The standard is the same on a $40,000 vanity as on a $400,000 library.

## The accountability cost

When something goes wrong on site — and it will — there is exactly one number to call. No finger-pointing between GC and shop. The same crew that built it shows up to fix it.

That's why our 12,000 sq. ft. shop in Rye is the most important asset on our balance sheet. It's not a convenience. It's the entire promise.`,
  },
  {
    slug: "what-to-budget-luxury-kitchen-westchester",
    title: "What to Budget for a Luxury Kitchen in Westchester",
    excerpt:
      "Real numbers, real assumptions, no padding. A frank look at what high-end kitchens actually cost in 2025.",
    date: "2025-08-04",
    readMinutes: 8,
    category: "Planning",
    cover: "Kitchen/casework detail",
    coverAlt: "Custom marble kitchen with painted inset cabinetry",
    author: "Westchester Luxury Interiors",
    body: `Pricing a kitchen at the high end is more about *clarity* than precision. Here's how we think about it.

## The four levers

Cabinetry, stone, appliances, and labor. In a $250k–$500k project, cabinetry will be 35–45% of cost, stone 8–15%, appliances 10–18%, and the balance is everything else — demolition, plumbing, electrical, finishes, and contingency.

## What actually moves price

Custom inset cabinetry with hand-applied finishes runs roughly 2.5x factory inset. A single slab of Calacatta Borghini can be more than the entire run of cabinetry. La Cornue is a different category entirely.

## The honest range

A true gut renovation of a 250 sq. ft. kitchen with custom inset cabinetry, premium stone, and pro-grade appliances starts around $325,000 in Westchester today. Adding a butler's pantry and a hidden scullery — common in our market — pushes that to $475,000+.

## How we work

We give a fixed price after design development, not a "ballpark." If a number changes, you'll know why before you sign.`,
  },
  {
    slug: "designing-with-architects",
    title: "How We Work With Architects",
    excerpt:
      "AIA A201 literacy, shop-drawing precision, and a single point of contact. The mechanics of an architect-led project at our studio.",
    date: "2025-06-22",
    readMinutes: 5,
    category: "Practice",
    cover: "Architect drawings",
    coverAlt: "Architectural drawings and material samples on workshop bench",
    author: "Westchester Luxury Interiors",
    body: `Architects don't need another contractor who promises to "execute the vision." They need one who reads drawings as carefully as they were drawn.

## Document literacy

We work in AIA A201 contracts as a default. RFIs are tracked, ASIs are logged, and our shop drawings come back inside a week — not three.

## Shop drawings as design conversation

Our drafting room redraws every casework run before fabrication. We're not asking the architect to design our shop drawings; we're asking them to confirm intent. Markups come back the same day.

## One principal

Whoever sits in your first meeting is the same person who will be on site at install. No project-manager telephone game.`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function renderBody(body: string) {
  return body.split(/\n\n+/).map((block) => {
    if (block.startsWith("## ")) {
      return { type: "h2" as const, text: block.replace(/^##\s+/, "") };
    }
    return { type: "p" as const, text: block };
  });
}
