export type ProjectCategory = "Residential" | "Commercial" | "Millwork";
export type Tone = "light" | "mid" | "dark" | "warm";

export interface Project {
  slug: string;
  title: string;
  loc: string;
  year: string;
  cat: ProjectCategory;
  hero: string;
  heroAlt: string;
  tone: Tone;
  clientType: string;
  challenge: string;
  solution: string;
  features: string[];
  outcome: string;
  testimonial: { quote: string; author: string; role: string };
  gallery: { label: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "modern-penthouse",
    title: "Modern Penthouse",
    loc: "Manhattan, NY",
    year: "2024",
    cat: "Residential",
    hero: "Hero project photo",
    heroAlt: "Modern Manhattan penthouse living room with floor-to-ceiling windows",
    tone: "dark",
    clientType: "Private residence · Architect-led",
    challenge:
      "A trophy penthouse with three previous failed renovations. Beam-and-column constraints, a private elevator vestibule, and an architect demanding millimeter tolerances.",
    solution:
      "We took on full GC and millwork scope, modeled every casework run in 3D against a fresh laser scan, and pre-fabricated the kitchen, library, and bar in our Rye shop. Install was choreographed around building freight windows.",
    features: [
      "Rift-cut white oak library wall with integrated lighting",
      "Calacatta Borghini waterfall island, single slab",
      "Brass-inlay reveals throughout casework",
      "Custom radiator covers with operable grilles",
      "Concealed pocket doors at every transition",
    ],
    outcome:
      "Delivered three weeks ahead of schedule. Featured in two national shelter publications. Became the architect's referenced standard for future Manhattan work.",
    testimonial: {
      quote:
        "They protected our design intent through every RFI. The millwork came out exactly as drawn — which almost never happens.",
      author: "Principal Architect",
      role: "AIA-member firm, NYC",
    },
    gallery: [
      { label: "Living room interior", alt: "Penthouse living room with custom millwork wall" },
      { label: "Marble kitchen", alt: "White marble waterfall kitchen island" },
      { label: "Library millwork", alt: "Rift oak built-in library wall" },
      { label: "Wood paneling detail", alt: "Detail of brass-inlay wood paneling" },
    ],
  },
  {
    slug: "hudson-estate-kitchen",
    title: "Hudson Estate Kitchen",
    loc: "Bronxville, NY",
    year: "2023",
    cat: "Residential",
    hero: "Marble kitchen",
    heroAlt: "Bronxville estate kitchen with marble island and custom cabinetry",
    tone: "warm",
    clientType: "Private homeowner · Whole-home renovation",
    challenge:
      "1920s estate kitchen with low ceilings, structural piers, and a client who entertained for 40 weekly. Needed to feel period-appropriate but cook like a restaurant line.",
    solution:
      "Reframed the ceiling 14 inches higher by re-routing mechanicals into an adjacent service core. Built inset cabinetry with hand-applied finishes in our shop. Engineered a hidden scullery and butler's pantry.",
    features: [
      "Inset painted cabinetry, six-coat hand finish",
      "Calacatta Gold island with integrated drainboard",
      "Hidden scullery with second dishwasher and ice program",
      "La Cornue range with custom plaster hood",
      "Reclaimed oak flooring laid in herringbone",
    ],
    outcome:
      "Project delivered on a fixed price with zero change orders. Homeowner has since referred four neighbors.",
    testimonial: {
      quote:
        "Fixed price held. Schedule held. Our neighbors never complained once. That alone is worth the premium.",
      author: "Homeowner",
      role: "Bronxville, NY",
    },
    gallery: [
      { label: "Marble kitchen", alt: "Marble island kitchen with brass fixtures" },
      { label: "Kitchen/casework detail", alt: "Detail of inset painted cabinetry" },
      { label: "Wood paneling detail", alt: "Reclaimed oak herringbone flooring" },
      { label: "Library millwork", alt: "Adjacent butler's pantry millwork" },
    ],
  },
  {
    slug: "westchester-library",
    title: "Westchester Library",
    loc: "Scarsdale, NY",
    year: "2023",
    cat: "Millwork",
    hero: "Library millwork",
    heroAlt: "Floor-to-ceiling custom library millwork in Scarsdale residence",
    tone: "dark",
    clientType: "Private residence · Millwork-only commission",
    challenge:
      "Two-story library with non-square walls, a reading mezzanine, and a 4,000-volume rare-book collection requiring climate-aware shelving.",
    solution:
      "Hand-measured the entire room, modeled every shelf as a unique part, and prefinished all casework in our spray booth. Installed in two phases to allow the client's archivist to relocate books in measured stages.",
    features: [
      "Quarter-sawn walnut, book-matched stiles",
      "Adjustable shelving with concealed pin pattern",
      "Integrated rolling library ladder, brass hardware",
      "Climate-buffered cabinetry for archival storage",
      "Concealed bar and beverage station",
    ],
    outcome:
      "Six-week install delivered with zero punch list at handover. Now used as a portfolio reference for two design firms.",
    testimonial: {
      quote:
        "Every joint is perfect. They worked around our archivist's pace without ever losing their schedule.",
      author: "Homeowner",
      role: "Scarsdale, NY",
    },
    gallery: [
      { label: "Library millwork", alt: "Two-story walnut library wall" },
      { label: "Wood paneling detail", alt: "Detail of book-matched walnut stiles" },
      { label: "Custom millwork shop photo", alt: "Library cabinetry being assembled in shop" },
    ],
  },
  {
    slug: "greenwich-master-bath",
    title: "Greenwich Master Bath",
    loc: "Greenwich, CT",
    year: "2023",
    cat: "Residential",
    hero: "Bathroom vanity/millwork detail",
    heroAlt: "Greenwich master bathroom with marble vanity and brass fixtures",
    tone: "warm",
    clientType: "Private residence · Primary suite",
    challenge:
      "A primary bath cantilevered over a porte-cochère with a slab waterproofing failure, an undersized footprint, and zero structural latitude for fixture relocation.",
    solution:
      "Coordinated a full slab tear-down and re-waterproofing with the structural engineer. Custom millwork concealed all fixture relocations within the existing wet wall, and a single-slab shower added apparent volume.",
    features: [
      "Honed Calacatta Vagli double vanity",
      "Radiant heated floors with zoned controls",
      "Single-slab shower surround with linear drain",
      "Brushed brass plumbing throughout",
      "Concealed steam generator and dehumidifier",
    ],
    outcome:
      "Delivered on time despite engineering surprise. Five-year warranty active, zero callbacks to date.",
    testimonial: {
      quote:
        "They told us the truth about the slab and gave us a fixed plan to fix it. No theatrics.",
      author: "Homeowner",
      role: "Greenwich, CT",
    },
    gallery: [
      { label: "Bathroom vanity/millwork detail", alt: "Calacatta marble vanity with brass" },
      { label: "Marble kitchen", alt: "Detail of Calacatta Vagli marble" },
      { label: "Wood paneling detail", alt: "Adjacent dressing room millwork" },
    ],
  },
  {
    slug: "boutique-office-buildout",
    title: "Boutique Office Buildout",
    loc: "Midtown, NYC",
    year: "2024",
    cat: "Commercial",
    hero: "Office interior",
    heroAlt: "Boutique investment office with glass walls and oak millwork in Midtown NYC",
    tone: "mid",
    clientType: "Investment firm · 14,000 sq. ft. tenant fit-out",
    challenge:
      "A class-A tenant fit-out on a 16-week clock with after-hours-only freight access and a Landmarks-protected lobby that couldn't be touched during construction.",
    solution:
      "We pre-built every glass-walled office partition and millwork wall in our Rye shop, delivered overnight, and snapped into place. Daily protected paths kept the lobby intact.",
    features: [
      "Floor-to-ceiling glass office fronts",
      "Acoustic-rated rift oak boardroom paneling",
      "Custom reception desk with stone front",
      "Concealed AV in every conference room",
      "Pantry millwork with integrated coffee program",
    ],
    outcome:
      "Delivered on schedule and on budget. Building management requested intro to other tenants.",
    testimonial: {
      quote:
        "Their schedule was the same on day one and day 112. Our brokers now use them as a reference.",
      author: "Director of Real Estate",
      role: "Investment firm, NYC",
    },
    gallery: [
      { label: "Office interior", alt: "Glass-walled boardroom" },
      { label: "Commercial interior photo", alt: "Reception desk with stone front" },
      { label: "Custom millwork shop photo", alt: "Office partitions assembled in shop" },
    ],
  },
  {
    slug: "hotel-lobby-refresh",
    title: "Hotel Lobby Refresh",
    loc: "Stamford, CT",
    year: "2022",
    cat: "Commercial",
    hero: "Boutique hotel lobby",
    heroAlt: "Refreshed boutique hotel lobby with custom reception desk and warm wood",
    tone: "warm",
    clientType: "Boutique hotel · 86 keys",
    challenge:
      "Full lobby, bar, and restaurant refresh while maintaining 70%+ occupancy. Every phase had to be guest-invisible by 7am.",
    solution:
      "Phased the project into seven micro-stages with overnight protected paths and silent-build standards. All millwork pre-finished in shop and dropped in during 4-hour windows.",
    features: [
      "Custom walnut reception desk with integrated lighting",
      "Bar back wall with bronze inlay",
      "Restaurant banquettes upholstered in shop",
      "Acoustic ceiling baffles concealed as architecture",
      "Operations training for housekeeping handoff",
    ],
    outcome:
      "Hotel exceeded RevPAR projections by 12% in the quarter following reopening. Owner re-engaged us for a second property.",
    testimonial: {
      quote:
        "Our front desk never noticed they were here. Our guests only noticed the new lobby.",
      author: "General Manager",
      role: "Boutique hotel, CT",
    },
    gallery: [
      { label: "Boutique hotel lobby", alt: "Hotel lobby with walnut reception desk" },
      { label: "Hotel interior photo", alt: "Hotel bar with bronze-inlay back wall" },
      { label: "Wood paneling detail", alt: "Detail of bar millwork" },
    ],
  },
  {
    slug: "charter-school-atrium",
    title: "Charter School Atrium",
    loc: "Bronx, NY",
    year: "2022",
    cat: "Commercial",
    hero: "School interior photo",
    heroAlt: "Charter school atrium with daylighting and custom seating millwork",
    tone: "light",
    clientType: "K–12 charter school · SCA-funded",
    challenge:
      "Atrium and library refresh on an SCA-funded project with a hard summer-shutdown window and strict prevailing-wage compliance.",
    solution:
      "Mobilized full crew and shop priority for an 8-week summer build. SCA-prequalified team handled all compliance documentation in-house.",
    features: [
      "Daylight-tuned LED ceiling system",
      "Tiered seating with concealed power",
      "ADA-accessible reading nooks",
      "Custom signage millwork",
      "Acoustic treatment integrated into bulkheads",
    ],
    outcome:
      "Delivered before first day of school. School expanded scope mid-project; we absorbed without delay.",
    testimonial: {
      quote:
        "They understood SCA paperwork better than our own consultants. That alone saved us weeks.",
      author: "Director of Facilities",
      role: "Charter school, NYC",
    },
    gallery: [
      { label: "School interior photo", alt: "Charter school atrium" },
      { label: "Commercial interior photo", alt: "Library reading area" },
      { label: "Wood paneling detail", alt: "Custom signage and millwork" },
    ],
  },
  {
    slug: "tribeca-loft",
    title: "Tribeca Loft",
    loc: "New York, NY",
    year: "2024",
    cat: "Residential",
    hero: "Living room interior",
    heroAlt: "Tribeca loft renovation with raw concrete and custom oak millwork",
    tone: "mid",
    clientType: "Private residence · Loft conversion",
    challenge:
      "Raw 4,200 sq. ft. loft with structural columns, exposed mechanicals, and a client who wanted warmth without losing the industrial soul.",
    solution:
      "Designed a series of freestanding millwork volumes that organized program without touching the perimeter walls. Concealed all mechanicals in floating ceiling rafts.",
    features: [
      "Freestanding rift oak kitchen volume",
      "Sliding wall system for primary suite privacy",
      "Floating ceiling rafts concealing mechanicals",
      "Steel-and-glass interior partitions",
      "Custom dining banquette with brass detailing",
    ],
    outcome: "Featured in two design publications. Client retained us for a Hamptons follow-up.",
    testimonial: {
      quote:
        "They got the vocabulary immediately. Every detail feels intentional, never decorated.",
      author: "Homeowner",
      role: "Tribeca, NY",
    },
    gallery: [
      { label: "Living room interior", alt: "Loft living area with oak volume" },
      { label: "Marble kitchen", alt: "Loft kitchen detail" },
      { label: "Wood paneling detail", alt: "Steel and glass partition detail" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, count = 3) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, count);
  const sameCat = projects.filter((p) => p.slug !== slug && p.cat === current.cat);
  const others = projects.filter((p) => p.slug !== slug && p.cat !== current.cat);
  return [...sameCat, ...others].slice(0, count);
}
