// ============================================================
// LEGACY LAND BALI — Site configuration
// Edit this file to change brand-wide settings, then run:
//   node build.js
// ============================================================

const ph = require("./placeholders.js");
const logo = require("./logo.js");

module.exports = {
  brand: {
    name: "Legacy Land Bali",
    tagline: "Premium Bali Real Estate",
    footerDesc: "luxury villas, land sales and villa-and-land packages across Bali, guided through a clear and legal process.",
    logo: logo,       // real brand badge, embedded as base64
    logoLight: logo,  // same badge works on dark backgrounds
  },

  // The production domain — used for canonical URLs, sitemap and Open Graph.
  // Change this to your final domain before deploying.
  domain: "https://dewayu-utama-land.vercel.app",

  contact: {
    whatsapp: "+62 859 6704 2230",
    whatsappLink: "https://wa.me/6285967042230",
    email: "",   // ← add your real enquiry email here when you have one; left blank shows WhatsApp only
    // Formspree endpoint for the enquiry forms.
    // Create a form at https://formspree.io and paste its endpoint here:
    formspreeEndpoint: "https://formspree.io/f/xdarbbnj",
    location: "Bali, Indonesia",
  },

  seo: {
    defaultTitle: "Legacy Land Bali — Premium Bali Villas, Land & Investment Packages",
    defaultDescription:
      "Curated real estate opportunities in Bali — private villas, strategic land holdings and complete villa-and-land packages, guided through a clear and legal process.",
    ogImage:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop",
  },

  hero: {
    // Homepage hero background — replace with your best real photo
    image: ph("Legacy Land Bali", "Premium Bali Real Estate", "asri", 1920, 1080),
    kicker: "Premium Bali Real Estate",
    headline: "Premium Bali Villas, Land & Investment Packages",
    subheadline:
      "Curated real estate opportunities in Bali — from private villas to strategic land holdings and complete villa-and-land packages, guided through a clear and legal process.",
  },

  about: {
    heading: "A land company built on clarity",
    body: [
      "Legacy Land Bali is a Bali-based real estate company specialising in premium villas, strategic land parcels and complete villa-and-land packages across the island's most resilient locations.",
      "We work a deliberately small, curated portfolio. Every listing we represent is inspected, documented and priced honestly — so what you see is what you buy. From first enquiry to notarised handover, we guide the entire process in plain language, with full legal transparency at every step.",
      "Whether you are an investor seeking genuine rental yield, a family looking for a Bali base, or a developer securing land — we respond personally, and we respond fast.",
    ],
    pillars: [
      { title: "Curated, not crowded", text: "A small portfolio of inspected properties — never a marketplace of unverified listings." },
      { title: "Legal first", text: "Title checks, due diligence and notaris/PPAT coordination are built into every transaction." },
      { title: "Direct & discreet", text: "You deal with us directly. All enquiries are handled personally and confidentially." },
      { title: "End-to-end", text: "From inspection to handover — one point of contact through the whole process." },
    ],
  },

  process: {
    kicker: "Legal & Easy Process",
    heading: "A clear, legal, guided process",
    intro:
      "Buying property in Bali is straightforward when it is done properly. We manage every stage with licensed professionals, so you always know exactly where you stand.",
    steps: [
      {
        title: "Enquire & shortlist",
        text: "Tell us what you are looking for — villa, land or a complete package. We share full details, documents and honest guidance on each option.",
      },
      {
        title: "Inspect the property",
        text: "Private inspections arranged at your convenience, in person or by live video walkthrough if you are overseas.",
      },
      {
        title: "Due diligence & legal",
        text: "Independent title verification (SHM freehold, HGB or leasehold), permit checks and contract preparation through a licensed notaris / PPAT.",
      },
      {
        title: "Sign & handover",
        text: "Transparent payment structure, notarised signing and a clean handover — keys, documents and titles transferred correctly.",
      },
    ],
    assurances: [
      "Certified freehold (SHM) and structured leasehold options",
      "Licensed notaris / PPAT on every transaction",
      "Foreign-buyer structures explained clearly (leasehold, PT PMA)",
      "No hidden fees — costs itemised before you commit",
    ],
  },


  // Section copy per property type — drives home sections, nav and the Properties page.
  typeSections: {
    rental: {
      nav: "Rentals",
      kicker: "Villa Rentals",
      heading: "Villas available for rent",
      intro: "Fully furnished villas for monthly and yearly rental across Bali's most liveable corridors — managed directly, no booking-platform markup.",
      emptyLine: "Rental listings are updated regularly. Tell us your dates, budget and preferred area and we'll send matches first.",
    },
    villa: {
      nav: "Villas",
      kicker: "Villa Sales",
      heading: "Luxury villas for sale",
      intro: "Architect-designed private villas in Bali's most liveable corridors — fully documented, many with proven rental income from day one.",
      emptyLine: "Villa listings are updated regularly. Tell us what you're after and we'll send matches first.",
    },
    land: {
      nav: "Land",
      kicker: "Land Sales",
      heading: "Strategic land parcels",
      intro: "Freehold and leasehold land in appreciating locations — from quiet rice-field frontage to development-ready plots near the coast. Zoning and title verified before we list.",
      emptyLine: "Looking for land in Bali? Tell us your budget, area and intended use — we'll source verified parcels and send them to you directly.",
    },
    package: {
      nav: "Villa + Land Packages",
      kicker: "Villa + Land Packages",
      heading: "Complete villa-and-land packages",
      intro: "Secure the land and the build in one guided transaction. We coordinate design, permits (PBG/IMB) and construction so your villa is delivered turn-key.",
      emptyLine: "Want a complete villa-and-land package? Share your budget and preferred area and we'll put options together for you.",
    },
  },

  // "List your property with us" — paid listing service.
  listWithUs: {
    kicker: "Sell With Us",
    heading: "List your Bali property with Legacy Land Bali",
    intro: "Have a villa or land parcel to sell? We market a small, curated set of properties to serious, qualified buyers — presented to the same premium standard you see across this site.",
    body: [
      "Your listing gets a dedicated, SEO-ready page, professional presentation, and direct exposure to our enquiry pipeline — with every lead handled personally and confidentially.",
      "Listing is offered as a paid placement. We keep the portfolio deliberately small so each property gets real attention, not a spot in an endless marketplace.",
    ],
    included: [
      "Dedicated listing page with photo gallery and full details",
      "Premium presentation consistent with the Legacy Land Bali brand",
      "Featured placement on the homepage and portfolio",
      "Direct WhatsApp and enquiry-form leads sent straight to you",
      "Honest guidance on pricing, title and legal readiness",
    ],
    ctaNote: "Fees depend on property type and placement. Send the details below and we'll reply with options.",
    formOptions: [
      "Villa — for sale",
      "Land — for sale",
      "Villa + land package",
      "Not sure yet — need advice",
    ],
  },

  categories: [
    {
      id: "villas",
      title: "Villa Sales",
      kicker: "Move-in ready",
      text: "Architect-designed private villas in Bali's most liveable corridors — Kerobokan, Ketewel, Ungasan and beyond. Fully documented, many with proven rental income from day one.",
      cta: "View villa listings",
      href: "/properties/?type=villa",
    },
    {
      id: "land",
      title: "Land Sales",
      kicker: "Strategic parcels",
      text: "Freehold and leasehold land in appreciating locations — from quiet rice-field frontage to development-ready plots near the coast. Zoning and title verified before listing.",
      cta: "Enquire about land",
      href: "/contact/?interest=land",
    },
    {
      id: "packages",
      title: "Villa + Land Packages",
      kicker: "Build complete",
      text: "Secure the land and the build in one guided transaction. We coordinate design, permits (PBG/IMB) and construction partners so your villa is delivered turn-key.",
      cta: "Explore packages",
      href: "/contact/?interest=package",
    },
  ],

  pages: {
    home: {
      villaSection: "Every property we represent is inspected, documented and priced honestly. A selection of what's currently available — architect-designed private villas across Bali's most liveable corridors.",
      viewAllVillas: "View all villas →",
      portfolio: "Portfolio",
      portfolioDesc: "A small, curated portfolio — every listing inspected and documented before it reaches you. Villas, land and packages across Bali's most resilient locations.",
      featured: "Featured villas for sale",
      getInTouch: "Get in Touch",
      startConversation: "Start the conversation",
      tellUs: "Tell us what you're looking for — a villa, a land parcel or a complete package. We respond to every enquiry personally, usually within 24 hours. Fastest response via WhatsApp.",
      browseProperties: "Browse Properties",
      allEnquiries: "All enquiries handled directly and confidentially.",
    },
    properties: {
      title: "Properties",
      lookingFor: "Looking for something specific?",
      lookingForDesc: "We also source off-market villas and land parcels on request — tell us your brief and we'll do the searching.",
      sendBrief: "Send a Brief",
    },
    type: {
      notQuite: "Not quite what you're after?",
      tellUsLooking: "Tell us what you're looking for",
    },
    about: {
      seeAvailable: "See what's currently available",
      viewPortfolio: "View the Portfolio",
      handledPersonally: "premium Bali real estate, handled personally.",
    },
    legal: {
      ownership: "Ownership in Bali",
      titlesExplained: "Titles, explained simply",
      indonesianLaw: "Indonesian property law offers several secure structures. We'll recommend the right one for your situation — these are the ones you'll encounter most.",
      freehold: "Freehold — SHM",
      freeholdDesc: "Sertifikat Hak Milik: the strongest ownership title in Indonesia. Held by Indonesian nationals, or via a PT PMA company structure for foreign investors.",
      leasehold: "Leasehold — Hak Sewa",
      leaseholdDesc: "Long-term registered lease, typically 25–30 years with extension options. The most common and flexible structure for foreign buyers in Bali.",
      hgb: "HGB / Right to Build",
      hgbDesc: "Hak Guna Bangunan: a building-rights title suited to companies and developments, renewable and convertible in many cases.",
      haveQuestion: "Have a question about the process?",
      askWhatsApp: "Ask on WhatsApp",
    },
    contact: {
      startConversation: "Start the conversation",
      tellUsLooking: "Tell us what you're looking for — a villa, a land parcel or a complete villa-and-land package. We respond personally, usually within 24 hours.",
      enquiries: "Enquiries",
      fastestResponse: "Fastest response via WhatsApp. All enquiries are handled directly and confidentially — no call centres, no pressure.",
      messageWhatsApp: "Message on WhatsApp",
    },
    listWithUs: {
      submitProperty: "Submit Your Property",
      tellUsAbout: "Tell us about it",
      shareDetails: "Share a few details and we'll reply with listing options and pricing. Prefer to talk first? Message us on WhatsApp.",
      whatsIncluded: "What's included",
      paidListing: "Paid Listing",
      simpleCurated: "Simple, curated, effective",
    },
  },
};
