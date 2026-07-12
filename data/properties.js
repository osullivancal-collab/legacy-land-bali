// ============================================================
// DEWAYU UTAMA LAND — Property data
// ------------------------------------------------------------
// This file is the single source of truth for every listing.
// To add a new property: copy one of the objects below, edit the
// fields, then run `node build.js`. A new page is generated at
// /properties/<slug>/ automatically — no HTML editing required.
//
// IMAGES: replace the placeholder Unsplash URLs with your own
// photo URLs (or relative paths like /assets/img/villa-kodi/01.jpg
// after copying photos into assets/img/).
// ============================================================

const ph = require("./placeholders.js");

module.exports = [
  // ----------------------------------------------------------
  // 1. VILLA KODI — Kerobokan
  // ----------------------------------------------------------
  {
    slug: "villa-kodi",
    // The original landing page — kept exactly as-is; the portfolio links out to it.
    vercelUrl: "https://villa-kodi.vercel.app",
    type: "villa",
    status: "For Sale",
    featured: true,
    title: "Villa Kodi",
    locationShort: "Kedampang, Kerobokan",
    location: "Kedampang, Kerobokan, Bali",
    region: "Kerobokan",
    price: {
      display: "IDR 4,500,000,000",
      secondary: "≈ AUD $420,000",
      note: "Leasehold options available on request",
    },
    specs: {
      bedrooms: 3,
      bathrooms: 4,
      landSize: null,           // not disclosed — hidden automatically
      buildSize: null,
      title: "Freehold",
      titleNote: "Leasehold also available",
      yearBuilt: null,
      extra: [
        { label: "Rental Yield", value: "~9–10% p.a." },
        { label: "Rental Income", value: "AUD $25–30k / yr" },
        { label: "Highlight", value: "Rooftop Bar" },
      ],
    },
    tagline: "3 Bed · 4 Bath · Private Pool · Rooftop Bar",
    metaDescription:
      "Villa Kodi — 3-bedroom designer villa with private pool and rooftop bar in Kedampang, Kerobokan, Bali. Freehold, IDR 4.5B, generating ~9–10% rental yield.",
    description: [
      "Villa Kodi is a three-level designer villa in Kedampang — one of Kerobokan's most sought-after residential pockets. Ground floor pool and tropical garden, first-floor open-plan living, and an expansive rooftop bar above, built for entertaining under the open sky.",
      "This is an actively operating short-term rental generating consistent annual income in one of Bali's most in-demand corridors. With strong occupancy driven by its rooftop bar, private pool and proximity to Seminyak and Canggu, the property delivers genuine yield from day one — not speculation.",
      "Bali's property market continues to see sustained demand from digital nomads, expats and international investors, and Kerobokan remains one of the island's most resilient locations.",
    ],
    features: [
      { title: "Private Pool", text: "Crystal-clear pool with sun loungers, tropical garden and cactus wall — stunning day and night." },
      { title: "Rooftop Bar", text: "Expansive rooftop with concrete bar, built-in lounge seating, river stone gardens and open sky." },
      { title: "3 Ensuites", text: "Each bedroom has its own unique bathroom — exposed brick, terrazzo and tropical open-air designs." },
      { title: "Designer Kitchen", text: "Polished concrete island, black fixtures, brick feature wall, full appliances and dining area." },
      { title: "3-Level Living", text: "Ground floor pool and garden. First floor open-plan living. Rooftop bar and entertaining above." },
      { title: "Rental Ready", text: "Fully furnished, fast Wi-Fi, secure garage. Generating $25–30k AUD in annual rental income." },
    ],
    investment: {
      heading: "The numbers make sense",
      rows: [
        { label: "Purchase Price", value: "IDR 4.5B", note: "≈ AUD $420,000" },
        { label: "Annual Rental Income", value: "$25–30k", note: "AUD per year" },
        { label: "Gross Rental Yield", value: "~9–10% p.a.", note: "Based on current rental performance" },
        { label: "Title Options", value: "Freehold", note: "Leasehold also available" },
      ],
    },
    locationSection: {
      heading: "Quiet streets. Prime position.",
      text: "Tucked into a peaceful lane in Kedampang — one of Kerobokan's most sought-after pockets. Serene and private, yet minutes from Seminyak, Canggu and Batu Belig Beach.",
      distances: [
        { place: "Seminyak Hub", time: "4 min" },
        { place: "Batu Belig Beach", time: "8 min" },
        { place: "Canggu", time: "15 min" },
        { place: "Ngurah Rai Airport", time: "35 min" },
      ],
      nearby: {
        heading: "Walking distance",
        items: [
          "Premium gym (brand new)",
          "Elite CrossFit gym",
          "Boutique cafés & restaurants",
          "International schools",
          "Mookiland play park",
        ],
      },
      mapEmbed: "https://www.google.com/maps?q=Kedampang,+Kerobokan,+Bali&output=embed",
    },
    heroImage: {
      src: ph("Villa Kodi", "Pool & Rooftop Bar", "kodi", 1800, 1000),
      alt: "Villa Kodi — private pool and tropical garden at dusk",
    },
    gallery: [
      { src: "/assets/villas/villa-kodi/rooftop-terrace.jpg", alt: "Rooftop bar terrace with lounge seating and city views" },
      { src: "/assets/villas/villa-kodi/pool-night.jpg", alt: "Private pool illuminated at night with tropical garden" },
      { src: "/assets/villas/villa-kodi/bedroom-pool-view.jpg", alt: "Bedroom with brick feature wall opening to the pool" },
      { src: "/assets/villas/villa-kodi/living-room.jpg", alt: "Open-plan living area with green sofa" },
      { src: "/assets/villas/villa-kodi/kitchen.jpg", alt: "Kitchen with concrete island and exposed brick wall" },
      { src: "/assets/villas/villa-kodi/bedroom.jpg", alt: "Bedroom with rattan bed and concrete feature wall" },
      { src: "/assets/villas/villa-kodi/bathroom.jpg", alt: "Terrazzo ensuite bathroom with freestanding tub" },
    ],
    enquiryOptions: [
      "Purchase — Freehold",
      "Purchase — Leasehold",
      "Long-term Rental",
      "Book an Inspection",
      "General Enquiry",
    ],
  },

  // ----------------------------------------------------------
  // 2. KETEWEL PRIVATE VILLA — Ketewel, Gianyar
  // ----------------------------------------------------------
  {
    slug: "ketewel",
    // The original landing page — kept exactly as-is; the portfolio links out to it.
    vercelUrl: "https://ketewel.vercel.app",
    type: "villa",
    status: "For Sale",
    featured: true,
    title: "Ketewel Private Villa",
    locationShort: "Ketewel, Gianyar",
    location: "Ketewel, Gianyar, Bali",
    region: "Ketewel",
    price: {
      display: "IDR 10,000,000,000",
      secondary: "≈ USD $615,000",
      note: "Negotiable · Freehold or Leasehold",
    },
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      landSize: "12 are (1,200 m²)",
      buildSize: "630 m²",
      title: "Freehold or Leasehold",
      titleNote: "Full IMB building permit included",
      yearBuilt: 2024,
      extra: [
        { label: "Buildings", value: "2 independent" },
        { label: "Power", value: "Off-grid solar + PLN backup" },
      ],
    },
    tagline: "Two Buildings. One Extraordinary Compound.",
    metaDescription:
      "Ketewel Private Villa — newly built 5-bed, 6-bath compound on 12 are with rice field views, off-grid solar and full IMB permit. 15 minutes from Sanur. IDR 10B, freehold or leasehold.",
    description: [
      "Set on a private no-through road in Ketewel — 15 minutes from Sanur — this newly constructed compound sits on 12 are of tropical land with open rice field views and direct sightlines toward Mount Agung.",
      "Two independent buildings: a 430 m² main house across two floors with five bedrooms, marble floors, travertine columns and a full-width balcony — plus a 200 m² garage building with self-contained studio suite, ideal for guests, staff or rental income.",
      "The entire estate runs on a large off-grid solar system with LiFePO4 battery bank and PLN backup — near-zero electricity costs year-round. Semi-furnished as pictured, with a custom pool available by arrangement with the owner.",
    ],
    features: [
      { title: "Off-Grid Solar", text: "Huge solar array with LiFePO4 battery bank and PLN backup. Near-zero electricity costs year-round." },
      { title: "Two Buildings", text: "430 m² main house plus 200 m² studio/garage building. Independent living or multi-generational use." },
      { title: "Private & Secure", text: "Private no-through road, full CCTV, electric gate. Rice fields on three sides — complete seclusion." },
      { title: "Pool Option", text: "Custom pool can be added at buyer's specification. Ample space on the lawned terrace area." },
      { title: "Permit Included", text: "Full IMB building permit in place. Clean title, clear documentation, ready for transfer." },
      { title: "Rice Field Views", text: "Panoramic views over working rice fields from the balcony, living areas and master bedroom." },
    ],
    rooms: [
      {
        heading: "Main House · 430 m²",
        items: [
          "Grand entrance with glass-balustrade staircase",
          "Open-plan lounge — marble floors, travertine columns",
          "Full kitchen with island, gas hob, oven",
          "Kitchen dining area with rice field views",
          "Laundry & pantry · shared guest toilet",
          "Central balcony — panoramic rice field views",
          "Master bedroom with ensuite (glass shower)",
          "Bedrooms 2–5 including guest suite with ensuite",
          "Dedicated solar power room",
        ],
      },
      {
        heading: "Garage Building · 200 m²",
        items: [
          "Large garage with electric door",
          "Self-contained studio suite with kitchen & bathroom",
          "Studio living area — large format windows",
          "Independent entry — ideal for rental or staff",
        ],
      },
      {
        heading: "Grounds",
        items: [
          "Manicured lawn terrace",
          "Pebble-mosaic courtyard and driveway",
          "East & south entrance gates · CCTV throughout",
          "Rice fields directly bordering on 3 sides",
        ],
      },
    ],
    acquisition: {
      heading: "Choose your path",
      intro: "Three flexible structures — for investors, families and developers. All terms fully negotiable directly with the owner.",
      options: [
        { title: "Freehold Purchase", text: "Full outright purchase at IDR 10,000,000,000. Suited to Indonesian nationals or PT PMA structures. Clean permit and full documentation ready for transfer." },
        { title: "Lifetime Leasehold", text: "Long-term leasehold — typically 25–30 years with extension options. The preferred structure for foreign buyers seeking security and flexibility in Bali." },
        { title: "Long-Term Rental", text: "Multi-year rental agreement for those wanting a Bali base without full acquisition." },
      ],
    },
    locationSection: {
      heading: "Ketewel — connected yet private",
      text: "Between Sanur's beaches and Ubud's culture. A private rice-field setting with fast access to international schools, hospitals and the airport. Private road with two access points (East & South) and full CCTV.",
      distances: [
        { place: "Sanur Beach", time: "15 min" },
        { place: "Dyatmika International School", time: "10 min" },
        { place: "Hospital", time: "10 min" },
        { place: "Ngurah Rai Airport (DPS)", time: "30 min" },
        { place: "Seminyak / Canggu", time: "40 min" },
        { place: "Ubud", time: "40 min" },
      ],
      nearby: null,
      mapEmbed: "https://www.google.com/maps?q=Ketewel,+Gianyar,+Bali&output=embed",
    },
    heroImage: {
      src: ph("Ketewel Villa", "Rice Field Views", "ketewel", 1800, 1000),
      alt: "Open rice field views surrounding the Ketewel compound",
    },
    gallery: [
      { src: "/assets/villas/ketewel/exterior-day.jpg", alt: "Aerial view of Ketewel villa compound with rice fields and coastline" },
      { src: "/assets/villas/ketewel/aerial-ricefield.jpg", alt: "Aerial view of the villa bordered by working rice paddies" },
      { src: "/assets/villas/ketewel/lounge-interior.jpg", alt: "Open-plan lounge with marble floors and rice field views" },
      { src: "/assets/villas/ketewel/exterior-night.jpg", alt: "Villa driveway and garden terrace at night" },
    ],
    enquiryOptions: [
      "Freehold Purchase",
      "Lifetime Leasehold",
      "Long-Term Rental",
      "Book an Inspection",
      "General Enquiry",
    ],
  },

  // ----------------------------------------------------------
  // 3. ASRI JEWEL VILLAS & SPA — Ungasan, Badung
  // ----------------------------------------------------------
  {
    slug: "asri-jewel-villas",
    // The original landing page — kept exactly as-is; the portfolio links out to it.
    vercelUrl: "https://asri-jewel-villas.vercel.app",
    type: "villa",
    status: "Urgent Sale",
    featured: true,
    title: "Asri Jewel Villas & Spa",
    locationShort: "Ungasan, Badung",
    location: "Ungasan, Badung Regency, Bali",
    region: "Ungasan",
    price: {
      display: "AUD $2,735,000",
      secondary: "USD $1,988,000 · Rp 35,000,000,000",
      note: "Urgent sale · Freehold SHM",
    },
    specs: {
      bedrooms: null,
      bathrooms: null,
      landSize: "3,500 m²",
      buildSize: "2,870 m²",
      title: "Freehold (SHM)",
      titleNote: "Complete legal documentation",
      yearBuilt: null,
      extra: [
        { label: "Private Villas", value: "7" },
        { label: "Pools", value: "7" },
        { label: "Power", value: "200 KVA + backup generator" },
      ],
    },
    tagline: "7 Private Villas · Spa · Restaurant · Turn-key Estate",
    metaDescription:
      "Asri Jewel Villas & Spa — fully operational luxury estate in Ungasan, Bali: 7 private villas, on-site spa, two-level restaurant on 3,500 m² freehold SHM land. AUD 2,735,000. Urgent sale.",
    description: [
      "Nestled in the serene hills of Ungasan, Asri Jewel Villas & Spa is a fully operational luxury villa complex held under Freehold title (SHM) with complete legal documentation. Seven individually designed villas, a full-service spa, a two-level restaurant and commercial-grade infrastructure — all set within 3,500 m² of manicured grounds just minutes from Bali's finest beaches.",
      "This is a rare turn-key opportunity — fully furnished, operationally ready and perfectly positioned in one of Bali's most sought-after luxury precincts. Ideal as a boutique resort, villa rental portfolio or grand private estate.",
    ],
    features: [
      { title: "7 Exclusive Villas", text: "Six villas with private pools plus one main resort pool. Fully furnished with elegant Balinese and contemporary interiors throughout." },
      { title: "On-Site Spa", text: "Multiple private treatment rooms, fully equipped and operational — a premium amenity rarely found in a single-title estate." },
      { title: "Two-Level Restaurant", text: "Full commercial kitchen, professional-grade equipment and a stunning two-level dining space ready to operate from day one." },
      { title: "Full Commercial Power", text: "200 KVA on-site power supply with backup generator — commercial-grade infrastructure built for resort operations." },
      { title: "Freehold SHM Title", text: "Complete legal documentation with Freehold (SHM) — the strongest land ownership title available in Indonesia." },
      { title: "Professional Office", text: "Dedicated management office space on-site, supporting full operational control of the resort from the property itself." },
    ],
    investment: {
      heading: "The investment case",
      intro: "Why savvy buyers are looking at Ungasan:",
      bullets: [
        "Bali tourism at record highs — international arrivals growing year-on-year",
        "Ungasan is one of Bali's fastest-appreciating premium villa precincts",
        "Fully operational from day one — immediate rental income potential",
        "Ideal for boutique resort, villa rental portfolio, or private estate",
        "SHM freehold — strongest title available in Indonesia, complete documentation",
        "Rare all-in-one: 7 villas + spa + restaurant + office under a single title",
      ],
    },
    locationSection: {
      heading: "Prime position in Ungasan",
      text: "Peaceful and private in the Bukit hills, away from congestion — yet minutes from the Bukit Peninsula's finest beaches and resort areas.",
      distances: [
        { place: "Ngurah Rai International Airport", time: "20 min" },
        { place: "Jimbaran Beach", time: "10 min" },
        { place: "Pandawa Beach", time: "10 min" },
        { place: "Nusa Dua Resort Area", time: "10 min" },
      ],
      nearby: null,
      mapEmbed: "https://www.google.com/maps?q=Ungasan,+Badung,+Bali&output=embed",
    },
    externalGallery: {
      label: "View all photos →",
      url: "https://drive.google.com/drive/folders/1TRikJnVl0xsmovsGFOWAmuHC7t62dTrk?usp=sharing",
    },
    heroImage: {
      src: ph("Asri Jewel", "Resort Pool & Villas", "asri", 1800, 1000),
      alt: "Resort pool and villas at Asri Jewel Villas & Spa",
    },
    gallery: [
      { src: "/assets/villas/asri-jewel-villas/pool-garden.jpg", alt: "Private pool framed by tropical gardens" },
      { src: "/assets/villas/asri-jewel-villas/pool-gazebo.jpg", alt: "Poolside sun loungers and Balinese gazebo" },
      { src: "/assets/villas/asri-jewel-villas/grand-lobby.jpg", alt: "Grand entrance hall with traditional alang-alang roof" },
      { src: "/assets/villas/asri-jewel-villas/living-pavilion.jpg", alt: "Open-plan living pavilion opening to the pool" },
      { src: "/assets/villas/asri-jewel-villas/lounge-view.jpg", alt: "Living room with panoramic hillside view" },
      { src: "/assets/villas/asri-jewel-villas/lounge-marble.jpg", alt: "Marble-floored lounge and sitting area" },
    ],
    enquiryOptions: [
      "Private Viewing Request",
      "Investment Enquiry",
      "Pricing & Negotiation",
      "Buyer's Agent Enquiry",
      "General Information",
    ],
  },

  // ==========================================================
  // LAND LISTINGS
  // ==========================================================
  {
    slug: "pasut-beach",
    type: "land",
    status: "For Sale",
    featured: true,
    title: "Pasut Beachfront Land",
    locationShort: "Kerambitan, Tabanan",
    location: "Tibubiu, Kerambitan, Tabanan, Bali",
    region: "Tabanan",
    // No external Vercel page yet — build.js generates a full page on this domain at /land/pasut-beach/
    price: { display: "Price on Application", secondary: "", note: "Freehold (SHM)" },
    specs: {
      landSize: "30 are (3,000 m²)",
      title: "Freehold (SHM)",
    },
    tagline: "100m from Pasut's black-sand shoreline — Yellow Zone, suited to hotel or guesthouse development",
    metaDescription: "30 are of freehold (SHM) land 100m from Pasut Beach, Tabanan — Bali's black-sand coastline. Yellow Zone, suited to boutique hotel or guesthouse development.",
    description: [
      "A 30-are (3,000 m²) freehold parcel just 100 metres from the black-sand shoreline at Pasut Beach, Kerambitan — one of Tabanan's last quiet stretches of coast, roughly 45 minutes from Canggu and still largely undiscovered by the resort market.",
      "The land is Yellow Zone and held under a clean SHM freehold title, positioning it for hotel or guesthouse development. Surrounded by working rice paddies with no neighbouring commercial development, it offers a rare combination: genuine beach proximity at a pre-development price point.",
      "Buyers intending to build are advised to independently verify final coastal setback (sempadan pantai) and zoning permit requirements (KKPR) with the local Dinas PUPR before purchase — standard practice for any coastal development land in Bali, and something we're happy to help coordinate.",
    ],
    features: [
      "100m to Pasut black-sand beach",
      "Yellow Zone — tourism/mixed-use potential",
      "Clean freehold SHM title",
      "30 are (3,000 m²) total land",
      "Surrounded by working rice paddies — quiet, undeveloped coastline",
      "Suited to boutique hotel or guesthouse development, subject to permits",
    ],
    gallery: [
      { src: "/assets/land/pasut-beach/hero.jpg", alt: "Aerial view of Pasut land parcel with ocean and rice paddies" },
      { src: "/assets/land/pasut-beach/topdown.jpg", alt: "Top-down aerial view of the Pasut land boundary" },
      { src: "/assets/land/pasut-beach/context.jpg", alt: "Wide aerial view of Pasut land parcel among surrounding rice fields" },
    ],
    locationSection: {
      heading: "On Tabanan's quiet black-sand coast",
      text: "Pasut Beach is known locally for its dark volcanic sand and uncrowded shoreline — a contrast to the built-up beach clubs further south. The surrounding area remains largely agricultural, giving this parcel a rare undeveloped setting so close to the water.",
      distances: [
        { place: "Pasut Beach", time: "100m · 2 min walk" },
        { place: "Tanah Lot Temple", time: "~25 min drive" },
        { place: "Canggu", time: "~45 min drive" },
        { place: "Ubud", time: "~90 min drive" },
        { place: "Denpasar / Ngurah Rai Airport", time: "~45–60 min drive" },
      ],
    },
    enquiryOptions: [
      "Land Enquiry",
      "Investment / Development Partnership",
      "Pricing & Negotiation",
      "General Information",
    ],
  },
  {
    slug: "tibubeneng-canggu",
    type: "land",
    status: "For Sale",
    featured: true,
    title: "Tibubeneng Land — Canggu",
    locationShort: "Tibubeneng, Badung",
    location: "Tibubeneng, Badung, Bali",
    region: "Badung",
    // No external Vercel page yet — build.js generates a full page on this domain at /land/tibubeneng-canggu/
    price: { display: "IDR 9,647,500,000", secondary: "≈ USD $590,000", note: "Freehold (SHM)" },
    specs: {
      landSize: "1,135 m² (11.35 are)",
      title: "Freehold (SHM)",
    },
    tagline: "Strategic freehold parcel in the heart of Canggu's Tibubeneng — surrounded by established villas, ready to develop",
    metaDescription: "1,135 m² freehold (SHM) land for sale in Tibubeneng, Canggu, Bali. Strategic development parcel surrounded by established villa communities. IDR 9,647,500,000.",
    description: [
      "A 1,135 m² (11.35 are) freehold parcel in Tibubeneng — one of Canggu's most established and fast-appreciating neighbourhoods, minutes from Berawa, Echo Beach and the wider Canggu lifestyle hub.",
      "Held under a clean SHM freehold title and set among a mature pocket of villas, boutique developments and rice-field frontage, this is a rare mid-size development plot in an area where raw land rarely comes to market. Suited to a villa complex, boutique development, or private estate.",
      "Buyers intending to build are advised to independently verify zoning and permit requirements (KKPR / PBG) and confirm the SHM boundary via a licensed surveyor before purchase — standard practice for development land in Bali, and something we're happy to help coordinate.",
    ],
    features: [
      "1,135 m² (11.35 are) total land",
      "Clean freehold SHM title",
      "Prime Tibubeneng / Canggu location",
      "Surrounded by established villa communities",
      "Suited to villa complex or boutique development",
      "Rare mid-size development parcel in a tightly-held area",
    ],
    gallery: [
      { src: "/assets/land/tibubeneng/aerial-plot.jpg", alt: "Aerial view of the Tibubeneng land parcel among established villas" },
      { src: "/assets/land/tibubeneng/aerial-wide.jpg", alt: "Wide aerial view of the Tibubeneng plot and surrounding neighbourhood" },
      { src: "/assets/land/tibubeneng/aerial-context.jpg", alt: "Aerial context view showing rice fields and villa developments around the parcel" },
    ],
    locationSection: {
      heading: "In the heart of Canggu's Tibubeneng",
      text: "Tibubeneng sits at the centre of Canggu's growth — a blend of rice-field pockets and established villa communities, walking distance to cafés, beach clubs and Berawa's amenities. Land of this size rarely becomes available this close to the action.",
      distances: [
        { place: "Berawa Beach", time: "~10 min drive" },
        { place: "Echo Beach", time: "~12 min drive" },
        { place: "Canggu centre", time: "~10 min drive" },
        { place: "Seminyak", time: "~20 min drive" },
        { place: "Ngurah Rai Airport", time: "~35–45 min drive" },
      ],
    },
    enquiryOptions: [
      "Land Enquiry",
      "Investment / Development Partnership",
      "Pricing & Negotiation",
      "General Information",
    ],
  },

  // ==========================================================
  // VILLA + LAND PACKAGES
  // ==========================================================
  {
    slug: "dhara-living-kerobokan",
    type: "package",
    status: "For Sale",
    featured: true,
    title: "Dhara Living — Exclusive Villa",
    locationShort: "Kerobokan, Bali",
    location: "Kerobokan, Badung, Bali",
    region: "Kerobokan",
    // No external page yet — build.js generates a full page on this domain at /packages/dhara-living-kerobokan/
    price: { display: "IDR 1,600,000,000", secondary: "≈ USD $100,000", note: "30-year leasehold" },
    specs: {
      bedrooms: 1,
      bathrooms: 1,
      title: "Leasehold (30 years)",
      extra: ["Private Pool", "Fully Furnished"],
    },
    tagline: "Comfortable living, secure investment — a fully furnished exclusive villa in the heart of Kerobokan",
    metaDescription: "1-bedroom exclusive villa for sale in Kerobokan, Bali — private pool, modern design, fully furnished, 30-year leasehold. IDR 1.6 billion (≈ USD 100,000).",
    description: [
      "A modern, fully furnished 1-bedroom villa in Kerobokan, designed for comfortable living and secure investment. The private pool, clean architectural lines and elegant interior make this a turn-key opportunity — move in or rent out from day one.",
      "Held on a 30-year leasehold with legality fully arranged, the villa sits in a strategic, quiet corner of Kerobokan just minutes from Seminyak and Canggu's restaurants, cafés and beach clubs — genuine rental demand on your doorstep.",
    ],
    features: [
      "1 bedroom, 1 bathroom",
      "Private swimming pool",
      "Modern & elegant design",
      "Fully furnished",
      "Secure legality — 30-year leasehold",
      "High return potential",
      "5 minutes to Seminyak",
      "10 minutes to Batu Belig Beach",
      "Close to restaurants, cafés and beach clubs",
    ],
    gallery: [
      { src: "/assets/packages/dhara-living/brochure-full.jpg", alt: "Dhara Living exclusive villa — full project brochure" },
      { src: "/assets/packages/dhara-living/pool-exterior.jpg", alt: "Villa exterior with private pool and timber entrance door" },
      { src: "/assets/packages/dhara-living/living-room.jpg", alt: "Living room with built-in seating and entertainment unit" },
      { src: "/assets/packages/dhara-living/bedroom.jpg", alt: "Bedroom with modern minimalist styling" },
      { src: "/assets/packages/dhara-living/pool-detail.jpg", alt: "Private swimming pool detail" },
      { src: "/assets/packages/dhara-living/exterior-street.jpg", alt: "Street-facing exterior view" },
    ],
    locationSection: {
      heading: "Strategic Kerobokan location",
      text: "Premium location in the heart of Bali, close to Seminyak, Canggu, and all top amenities — easy access to popular tourist areas while sitting in a quiet residential pocket.",
      distances: [
        { place: "Seminyak", time: "5 min drive" },
        { place: "Batu Belig Beach", time: "10 min drive" },
        { place: "Canggu", time: "15 min drive" },
      ],
    },
    enquiryOptions: [
      "Request More Info",
      "Request Floor Plans",
      "Request Location Map",
      "Pricing & Negotiation",
      "General Enquiry",
    ],
  },
  // ==========================================================
  // VILLA RENTALS
  // ==========================================================
  {
    slug: "villa-kodi-rental",
    type: "rental",
    status: "For Rent",
    featured: true,
    title: "Villa Kodi",
    locationShort: "Kedampang, Kerobokan",
    location: "Kedampang, Kerobokan, Bali",
    region: "Kerobokan",
    // No external page — this is a rental listing on our own domain (the
    // Vercel page for this villa covers the sale listing only).
    price: { display: "IDR 30,000,000 / month", secondary: "≈ USD $1,850 / month", note: "Minimum 1-month stay" },
    specs: {
      bedrooms: 3,
      bathrooms: 4,
      title: "Fully Furnished",
      extra: ["Private Pool", "Rooftop Bar"],
    },
    tagline: "3 Bed · 4 Bath · Private Pool · Rooftop Bar — available now for monthly rental",
    metaDescription: "Villa Kodi for rent — 3-bedroom designer villa with private pool and rooftop bar in Kedampang, Kerobokan, Bali. IDR 30,000,000 per month, fully furnished.",
    description: [
      "The same three-level designer villa in Kedampang — Kerobokan's most sought-after residential pocket — now available for monthly rental. Ground floor pool and tropical garden, first-floor open-plan living, and an expansive rooftop bar above.",
      "Fully furnished and move-in ready, with fast Wi-Fi and a secure garage. Minutes from Seminyak, Canggu and Batu Belig Beach — ideal for a long-stay expat, digital nomad, or family wanting a genuine Kerobokan address without buying.",
    ],
    features: [
      "Private pool with sun loungers and tropical garden",
      "Rooftop bar with built-in lounge seating",
      "3 ensuite bathrooms",
      "Designer kitchen, fully equipped",
      "Fully furnished, fast Wi-Fi, secure garage",
      "Flexible monthly terms",
    ],
    gallery: [
      { src: "/assets/villas/villa-kodi/pool-night.jpg", alt: "Private pool illuminated at night with tropical garden" },
      { src: "/assets/villas/villa-kodi/rooftop-terrace.jpg", alt: "Rooftop bar terrace with lounge seating and city views" },
      { src: "/assets/villas/villa-kodi/bedroom-pool-view.jpg", alt: "Bedroom with brick feature wall opening to the pool" },
      { src: "/assets/villas/villa-kodi/living-room.jpg", alt: "Open-plan living area with green sofa" },
      { src: "/assets/villas/villa-kodi/kitchen.jpg", alt: "Kitchen with concrete island and exposed brick wall" },
      { src: "/assets/villas/villa-kodi/bedroom.jpg", alt: "Bedroom with rattan bed and concrete feature wall" },
      { src: "/assets/villas/villa-kodi/bathroom.jpg", alt: "Terrazzo ensuite bathroom with freestanding tub" },
    ],
    locationSection: {
      heading: "Quiet streets. Prime position.",
      text: "Tucked into a peaceful lane in Kedampang — one of Kerobokan's most sought-after pockets. Serene and private, yet minutes from Seminyak, Canggu and Batu Belig Beach.",
      distances: [
        { place: "Seminyak Hub", time: "4 min" },
        { place: "Batu Belig Beach", time: "8 min" },
        { place: "Canggu", time: "15 min" },
        { place: "Ngurah Rai Airport", time: "35 min" },
      ],
    },
    enquiryOptions: [
      "Rental Enquiry",
      "Availability & Dates",
      "Book an Inspection",
      "General Enquiry",
    ],
  },
];
