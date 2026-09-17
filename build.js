#!/usr/bin/env node
/* ============================================================
   DEWAYU UTAMA LAND — static site builder (bilingual: EN / ID)
   ------------------------------------------------------------
   Usage:  node build.js
   Reads   data/site.js (+ data/id.js overrides) + data/ui.js
           + data/properties.js
   Writes  English site at / and Indonesian site at /id/
   Every property in data/properties.js automatically gets its
   own section on both language versions — no HTML editing.
   ============================================================ */

const fs = require("fs");
const path = require("path");
const siteEn = require("./data/site.js");
const siteId = require("./data/id.js");
const uiStrings = require("./data/ui.js");
const properties = require("./data/properties.js");

const ROOT = __dirname;

/* ---------------- merge EN base config with ID overrides ---------------- */
function deepMerge(target, source) {
  for (const [key, val] of Object.entries(source)) {
    if (val && typeof val === "object" && !Array.isArray(val)) {
      target[key] = deepMerge(target[key] ? JSON.parse(JSON.stringify(target[key])) : {}, val);
    } else {
      target[key] = val;
    }
  }
  return target;
}
function configFor(lang) {
  if (lang === "en") return siteEn;
  return deepMerge(JSON.parse(JSON.stringify(siteEn)), siteId);
}

/* ---------------- helpers ---------------- */
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function write(lang, rel, html) {
  const file = path.join(ROOT, lang === "id" ? path.join("id", rel) : rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`✓ [${lang}]`, rel);
}

const waSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Zm5.36 14.12c-.24.66-1.38 1.28-1.9 1.32-.5.05-.98.24-3.3-.68-2.8-1.1-4.58-3.96-4.72-4.14-.14-.18-1.12-1.5-1.12-2.86 0-1.36.72-2.02.98-2.3.24-.28.54-.34.72-.34h.52c.16 0 .4-.06.6.46.24.56.78 1.94.84 2.08.06.14.1.3.02.48-.08.18-.12.3-.24.46l-.36.42c-.12.12-.24.26-.1.5.14.24.62 1.02 1.34 1.66.92.82 1.7 1.08 1.94 1.2.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.62-.18 1.28Z"/></svg>`;

/* ============================================================
   Everything below is generated once per language. `site` is the
   merged config (EN, or EN-with-ID-overrides); `ui` is the micro-
   copy dictionary (nav/footer/buttons/forms); `baseUrl` prefixes
   every internal link ("" for English, "/id" for Indonesian).
   ============================================================ */
function buildLang(lang) {
  const site = configFor(lang);
  const ui = uiStrings[lang];
  const baseUrl = lang === "id" ? "/id" : "";
  const other = lang === "id" ? "en" : "id";
  const otherBase = other === "id" ? "/id" : "";

  function ctaWhatsApp(cls = "btn btn-wa", label = ui.buttons.whatsapp) {
    return `<a class="${cls}" href="${site.contact.whatsappLink}" target="_blank" rel="noopener">${waSvg} ${label}</a>`;
  }

  function layout({ title, description, canonical, ogImage, body, darkHeader = false, active = "" }) {
    const url = site.domain + baseUrl + canonical;
    const navItems = [
      [baseUrl + "/", ui.nav.home],
      [baseUrl + "/villas/", ui.nav.villas],
      [baseUrl + "/rentals/", ui.nav.rentals],
      [baseUrl + "/land/", ui.nav.land],
      [baseUrl + "/packages/", ui.nav.packages],
      [baseUrl + "/about/", ui.nav.about],
      [baseUrl + "/list-with-us/", ui.nav.listWithUs],
      [baseUrl + "/contact/", ui.nav.contact],
    ];
    const nav = navItems
      .map(([href, label]) => `<a href="${href}"${active === href ? ' aria-current="page"' : ""}>${esc(label)}</a>`)
      .join("\n        ");

    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="en" href="${site.domain}${canonical}">
  <link rel="alternate" hreflang="id" href="${site.domain}/id${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(site.brand.name)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${esc(ogImage || site.seo.ogImage)}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/png" href="/assets/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Figtree:wght@300;400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/styles.css">
</head>
<body>
  <header class="site-header${darkHeader ? " on-dark" : ""}">
    <div class="container bar">
      <a class="logo-link" href="${baseUrl}/" aria-label="${esc(site.brand.name)} — home">
        <img src="${darkHeader ? site.brand.logoLight : site.brand.logo}" alt="${esc(site.brand.name)}" data-logo>
        <span class="logo-wordmark">${esc(site.brand.name)}</span>
      </a>
      <button class="nav-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="nav" aria-label="Main">
        ${nav}
        <a class="lang-toggle" href="${otherBase}${canonical}" title="${lang === "en" ? "Switch to Bahasa Indonesia" : "Switch to English"}">EN / ID</a>
        <a class="btn btn-gold" href="${baseUrl}/contact/">${esc(ui.nav.enquire)}</a>
      </nav>
    </div>
  </header>

${body}

  <footer class="site-footer">
    <div class="container">
      <div class="cols">
        <div>
          <img src="${site.brand.logoLight}" alt="${esc(site.brand.name)}">
          <p>${esc(site.brand.tagline)} — ${esc(site.brand.footerDesc)}</p>
        </div>
        <div>
          <h3>${esc(ui.footer.explore)}</h3>
          <ul>
            <li><a href="${baseUrl}/villas/">${esc(ui.nav.villas)}</a></li>
            <li><a href="${baseUrl}/rentals/">${esc(ui.nav.rentals)}</a></li>
            <li><a href="${baseUrl}/land/">${esc(ui.nav.land)}</a></li>
            <li><a href="${baseUrl}/packages/">${esc(ui.nav.packages)}</a></li>
            <li><a href="${baseUrl}/about/">${esc(ui.nav.about)}</a></li>
            <li><a href="${baseUrl}/legal-process/">${esc(ui.footer.legalProcess)}</a></li>
            <li><a href="${baseUrl}/list-with-us/">${esc(ui.nav.listWithUs)}</a></li>
            <li><a href="${baseUrl}/contact/">${esc(ui.nav.contact)}</a></li>
          </ul>
        </div>
        <div>
          <h3>${esc(ui.footer.contact)}</h3>
          <ul>
            <li><a href="${site.contact.whatsappLink}" target="_blank" rel="noopener">WhatsApp ${esc(site.contact.whatsapp)}</a></li>
            ${site.contact.email ? `<li><a href="mailto:${site.contact.email}">${esc(site.contact.email)}</a></li>` : ""}
            <li>${esc(site.contact.location)}</li>
          </ul>
        </div>
      </div>
      <div class="legal">
        <span>© ${new Date().getFullYear()} ${esc(site.brand.name)}. ${esc(ui.footer.rights)}</span>
        <span>${esc(ui.footer.confidential)}</span>
      </div>
    </div>
  </footer>

  <a class="wa-float" href="${site.contact.whatsappLink}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Zm5.36 14.12c-.24.66-1.38 1.28-1.9 1.32-.5.05-.98.24-3.3-.68-2.8-1.1-4.58-3.96-4.72-4.14-.14-.18-1.12-1.5-1.12-2.86 0-1.36.72-2.02.98-2.3.24-.28.54-.34.72-.34h.52c.16 0 .4-.06.6.46.24.56.78 1.94.84 2.08.06.14.1.3.02.48-.08.18-.12.3-.24.46l-.36.42c-.12.12-.24.26-.1.5.14.24.62 1.02 1.34 1.66.92.82 1.7 1.08 1.94 1.2.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.62-.18 1.28Z"/></svg>
  </a>

  <script src="/assets/js/main.js" defer></script>
</body>
</html>`;
  }

  /* ---------------- components ---------------- */
  function kori(text, center = false) {
    return `<div class="kori${center ? " center" : ""}"><span class="diamond"></span><span class="kicker">${esc(text)}</span></div>`;
  }

  function byType(type) {
    return properties.filter((p) => p.type === type);
  }

  const typeSlug = { rental: "rentals", villa: "villas", land: "land", package: "packages" };
  function detailUrl(p) {
    return p.vercelUrl || `${baseUrl}/${typeSlug[p.type]}/${p.slug}/`;
  }

  function quickSpecs(p) {
    const s = p.specs;
    const q = [];
    if (s.bedrooms) q.push(`<span><b>${s.bedrooms}</b> ${esc(ui.specs.bed)}</span>`);
    if (s.bathrooms) q.push(`<span><b>${s.bathrooms}</b> ${esc(ui.specs.bath)}</span>`);
    if (s.landSize) q.push(`<span><b>${esc(s.landSize)}</b> ${esc(ui.specs.land)}</span>`);
    if (s.buildSize) q.push(`<span><b>${esc(s.buildSize)}</b> ${esc(ui.specs.build)}</span>`);
    if (s.title) q.push(`<span><b>${esc(s.title)}</b></span>`);
    return q.slice(0, 4).join("\n        ");
  }

  function showcase(p, flip) {
    const urgent = /urgent/i.test(p.status);
    const slides = p.gallery;
    return `<article class="showcase reveal${flip ? " flip" : ""}">
    <div class="carousel" aria-label="${esc(p.title)} photos">
      <span class="status-flag${urgent ? " urgent" : ""}">${esc(p.status)}</span>
      <span class="count">1 / ${slides.length}</span>
      <div class="track">
        ${slides.map((g) => `<div class="slide"><img src="${g.src}" alt="${esc(g.alt)}" loading="lazy"></div>`).join("\n        ")}
      </div>
      <button class="c-btn c-prev" aria-label="${esc(ui.prev)}">←</button>
      <button class="c-btn c-next" aria-label="${esc(ui.next)}">→</button>
      <div class="c-dots">${slides.map((_, i) => `<button aria-label="${esc(ui.photo)} ${i + 1}"></button>`).join("")}</div>
    </div>
    <div class="info">
      <span class="loc">${esc(p.locationShort)}</span>
      <h3>${esc(p.title)}</h3>
      <p class="tagline">${esc(p.tagline)}</p>
      <div class="price">${esc(p.price.display)}</div>
      <div class="price-sub">${esc(p.price.secondary || "")}${p.price.note ? " · " + esc(p.price.note) : ""}</div>
      <div class="quick">
        ${quickSpecs(p)}
      </div>
      <div class="cta-row">
        <a class="btn btn-gold" href="${detailUrl(p)}"${p.vercelUrl ? ' target="_blank" rel="noopener"' : ""}>${esc(ui.buttons.viewFullListing)}</a>
        ${ctaWhatsApp("btn btn-wa", ui.buttons.whatsapp)}
      </div>
    </div>
  </article>`;
  }

  function typeSection(type, { sand = false, bare = false } = {}) {
    const meta = site.typeSections[type];
    const list = byType(type);
    const anchor = typeSlug[type];
    const interest = type === "rental" ? "rental" : type === "villa" ? "villa" : type === "land" ? "land" : "package";
    const inner = list.length
      ? list.map((p, i) => showcase(p, i % 2 === 1)).join("\n      ")
      : `<div class="empty-card reveal">
          <span class="kicker">${esc(ui.nav.enquire)}</span>
          <p>${esc(meta.emptyLine)}</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="${baseUrl}/contact/?interest=${interest}">${esc(ui.buttons.makeEnquiry)}</a>
            ${ctaWhatsApp("btn btn-outline", ui.buttons.whatsapp)}
          </div>
        </div>`;
    const head = bare
      ? ""
      : `<div class="section-head reveal">
          ${kori(meta.kicker)}
          <h2><a href="${baseUrl}/${anchor}/" style="text-decoration:none;color:inherit">${esc(meta.heading)}</a></h2>
          <p>${esc(meta.intro)}</p>
        </div>`;
    return `<section class="section${sand ? " sand" : ""}" id="${anchor}">
    <div class="container">
      ${head}
      ${inner}
      ${bare ? "" : `<div class="section-more reveal"><a href="${baseUrl}/${anchor}/" class="more-link">${esc(ui.buttons.viewAll)} ${esc(meta.nav.toLowerCase())} →</a></div>`}
    </div>
  </section>`;
  }

  function listWithUsBand() {
    const l = site.listWithUs;
    return `<section class="section dark" id="list-with-us">
    <div class="container">
      <div class="section-head reveal">
        ${kori(l.kicker)}
        <h2>${esc(l.heading)}</h2>
        <p>${esc(l.intro)}</p>
      </div>
      <div class="cta-row reveal">
        <a class="btn btn-gold" href="${baseUrl}/list-with-us/">${esc(ui.buttons.listYourProperty)}</a>
        ${ctaWhatsApp("btn btn-outline on-dark", ui.buttons.askQuestion)}
      </div>
    </div>
  </section>`;
  }

  function enquiryForm({ subjectLine, options, propertySlug }) {
    const opts = options.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join("\n          ");
    const uid = propertySlug || "gen";
    return `<form class="form reveal" data-formspree action="${site.contact.formspreeEndpoint}" method="POST">
    <input type="hidden" name="_subject" value="${esc(subjectLine)}">
    ${propertySlug ? `<input type="hidden" name="property" value="${esc(propertySlug)}">` : ""}
    <div class="field"><label for="fn-${uid}">${esc(ui.form.firstName)}</label><input id="fn-${uid}" name="first_name" required autocomplete="given-name"></div>
    <div class="field"><label for="ln-${uid}">${esc(ui.form.lastName)}</label><input id="ln-${uid}" name="last_name" required autocomplete="family-name"></div>
    <div class="field"><label for="em-${uid}">${esc(ui.form.email)}</label><input id="em-${uid}" type="email" name="email" required autocomplete="email"></div>
    <div class="field"><label for="ph-${uid}">${esc(ui.form.phone)}</label><input id="ph-${uid}" name="phone" autocomplete="tel"></div>
    <div class="field full"><label for="in-${uid}">${esc(ui.form.interestedIn)}</label>
      <select id="in-${uid}" name="interest" required>
        <option value="" disabled selected>${esc(ui.form.select)}</option>
        ${opts}
      </select>
    </div>
    <div class="field full"><label for="ms-${uid}">${esc(ui.form.message)}</label><textarea id="ms-${uid}" name="message"></textarea></div>
    <p class="form-status" role="status"></p>
    <button class="btn btn-gold" type="submit">${esc(ui.form.send)}</button>
  </form>`;
  }

  function distancesList(distances) {
    return `<div class="distances">
      ${distances.map((d) => `<div class="d"><span>${esc(d.place)}</span><span class="t">${esc(d.time)}</span></div>`).join("\n      ")}
    </div>`;
  }

  function processSteps() {
    return `<div class="steps">
      ${site.process.steps.map((s) => `<div class="step reveal"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("\n      ")}
    </div>
    <ul class="assurances reveal">
      ${site.process.assurances.map((a) => `<li>${esc(a)}</li>`).join("\n      ")}
    </ul>`;
  }

  const formOptionsGeneral = lang === "id"
    ? [ui.form.rentalEnquiry, ui.form.villaEnquiry, ui.form.landEnquiry, ui.form.packageEnquiry, ui.form.bookInspection, ui.form.generalEnquiry]
    : ["Rental Enquiry", "Villa Enquiry", "Land Enquiry", "Villa + Land Package", "Book an Inspection", "General Enquiry"];
  const formOptionsContact = lang === "id"
    ? [ui.form.rentalEnquiry, ui.form.villaEnquiry, ui.form.landEnquiry, ui.form.packageEnquiry, ui.form.bookInspection, ui.form.sellingProperty, ui.form.generalEnquiry]
    : ["Rental Enquiry", "Villa Enquiry", "Land Enquiry", "Villa + Land Package", "Book an Inspection", "Selling a Property", "General Enquiry"];
  const enquirySubject = lang === "id" ? "Pertanyaan baru — situs Legacy Land Bali" : "New enquiry — Legacy Land Bali website";

  /* ---------------- HOME PAGE ---------------- */
  function homePage() {
    const villas = byType("villa").filter((p) => p.featured !== false).slice(0, 4);
    const body = `
  <section class="hero">
    <div class="bg" style="background-image:url('/assets/villas/asri-jewel-villas/pool-gazebo.jpg')" aria-hidden="true"></div>
    <div class="frame"></div>
    <div class="container hero-inner">
      <p class="hero-collab">${lang === "id" ? "Bekerja sama dengan" : "In collaboration with"} <strong>Dewayu Future Investments</strong></p>
      ${kori(site.hero.kicker)}
      <h1>${esc(site.hero.headline)}</h1>
      <p class="sub">${esc(site.hero.subheadline)}</p>
      <div class="cta-row">
        <a class="btn btn-gold" href="${baseUrl}/villas/">${esc(ui.buttons.viewPortfolio)}</a>
        ${ctaWhatsApp("btn btn-outline on-dark", ui.buttons.whatsappUs)}
      </div>
      <nav class="hero-jump" aria-label="Jump to section">
        <span class="hero-jump-label">${lang === "id" ? "Lompat ke bagian" : "Jump to a section"}</span>
        <div class="hero-jump-grid">
          <a href="#villas">${esc(ui.nav.villas)}</a>
          <a href="#land">${esc(ui.nav.land)}</a>
          <a href="#rentals">${esc(ui.nav.rentals)}</a>
          <a href="#packages">${esc(ui.nav.packages)}</a>
        </div>
      </nav>
    </div>
  </section>

  <section class="section" id="villas">
    <div class="container">
      <div class="section-head reveal">
        ${kori(site.typeSections.villa.kicker)}
        <h2><a href="${baseUrl}/villas/" style="text-decoration:none;color:inherit">${esc(site.pages.home.featured)}</a></h2>
        <p>${esc(site.pages.home.villaSection)}</p>
      </div>
      ${villas.map((p, i) => showcase(p, i % 2 === 1)).join("\n      ")}
      <div class="section-more reveal"><a href="${baseUrl}/villas/" class="more-link">${esc(site.pages.home.viewAllVillas)}</a></div>
    </div>
  </section>

  ${typeSection("land", { sand: true })}
  ${typeSection("rental")}
  ${typeSection("package", { sand: true })}
  ${listWithUsBand()}

  <section class="section dark" id="process">
    <div class="container">
      <div class="section-head reveal">
        ${kori(site.process.kicker)}
        <h2>${esc(site.process.heading)}</h2>
        <p>${esc(site.process.intro)}</p>
      </div>
      ${processSteps()}
    </div>
  </section>

  <section class="section" id="about">
    <div class="container about-grid">
      <div class="prose reveal">
        ${kori(ui.nav.about + " " + site.brand.name)}
        <h2>${esc(site.about.heading)}</h2>
        <div class="mt-2">
          ${site.about.body.map((p) => `<p>${esc(p)}</p>`).join("\n          ")}
        </div>
      </div>
      <div class="pillars reveal">
        ${site.about.pillars.map((pl) => `<div class="pillar"><h3>${esc(pl.title)}</h3><p>${esc(pl.text)}</p></div>`).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section dark" id="contact">
    <div class="container contact-grid">
      <div class="contact-info reveal">
        ${kori(site.pages.home.getInTouch)}
        <h2>${esc(site.pages.home.startConversation)}</h2>
        <p class="mt-2" style="color:rgba(244,239,230,.78)">${esc(site.pages.home.tellUs)}</p>
        <div class="cta-row">
          ${ctaWhatsApp("btn btn-wa", ui.buttons.messageWhatsapp)}
          <a class="btn btn-outline on-dark" href="${baseUrl}/villas/">${esc(ui.buttons.browseProperties)}</a>
        </div>
        <p class="meta">WhatsApp ${esc(site.contact.whatsapp)}${site.contact.email ? " · " + esc(site.contact.email) : ""}<br>${esc(site.pages.home.allEnquiries)}</p>
      </div>
      ${enquiryForm({ subjectLine: enquirySubject, options: formOptionsGeneral, propertySlug: "" })}
    </div>
  </section>`;

    return layout({
      title: site.seo.defaultTitle,
      description: site.seo.defaultDescription,
      canonical: "/",
      darkHeader: true,
      active: baseUrl + "/",
      body,
    });
  }

  /* ---------------- PROPERTIES INDEX ---------------- */
  function propertiesPage() {
    const body = `
  <section class="page-hero">
    <div class="container">
      ${kori(site.pages.home.portfolio)}
      <h1>${esc(site.pages.properties.title)}</h1>
      <p>${esc(site.pages.home.portfolioDesc)}</p>
    </div>
  </section>
  ${typeSection("villa", { sand: true })}
  ${typeSection("rental")}
  ${typeSection("land", { sand: true })}
  ${typeSection("package")}
  <section class="section">
    <div class="container cta-band">
      <h2 class="reveal">${esc(site.pages.properties.lookingFor)}</h2>
      <p class="reveal" style="color:var(--stone);max-width:560px;margin:0.8rem auto 0">${esc(site.pages.properties.lookingForDesc)}</p>
      <div class="cta-row reveal">
        ${ctaWhatsApp()}
        <a class="btn btn-dark" href="${baseUrl}/contact/">${esc(site.pages.properties.sendBrief)}</a>
      </div>
    </div>
  </section>`;

    return layout({
      title: (lang === "id" ? "Properti — " : "Properties — ") + site.brand.name,
      description: site.pages.home.portfolioDesc,
      canonical: "/properties/",
      darkHeader: true,
      active: baseUrl + "/properties/",
      body,
    });
  }

  /* ---------------- DEDICATED TYPE PAGE ---------------- */
  function typePage(type) {
    const meta = site.typeSections[type];
    const list = byType(type);
    const slug = typeSlug[type];
    const sourceLabel =
      type === "rental"
        ? lang === "id" ? "villa sewa" : "rental villas"
        : type === "villa"
        ? lang === "id" ? "villa" : "villas"
        : type === "land"
        ? lang === "id" ? "bidang tanah" : "land parcels"
        : lang === "id" ? "paket villa-dan-tanah" : "villa-and-land packages";
    const body = `
  <section class="page-hero">
    <div class="container">
      ${kori(meta.kicker)}
      <h1>${esc(meta.heading)}</h1>
      <p>${esc(meta.intro)}</p>
    </div>
  </section>
  ${typeSection(type, { sand: true, bare: true })}
  <section class="section dark">
    <div class="container cta-band">
      <h2 class="reveal">${list.length ? esc(site.pages.type.notQuite) : esc(site.pages.type.tellUsLooking)}</h2>
      <p class="reveal" style="color:rgba(244,239,230,.75);max-width:560px;margin:.8rem auto 0">${lang === "id" ? `Kami bersumber ${sourceLabel} off-market atas permintaan — bagikan ringkasan Anda dan kami akan melakukan pencarian.` : `We source off-market ${sourceLabel} on request — share your brief and we'll do the searching.`}</p>
      <div class="cta-row reveal">
        ${ctaWhatsApp("btn btn-wa", ui.buttons.whatsappUs)}
        <a class="btn btn-outline on-dark" href="${baseUrl}/contact/?interest=${type}">${esc(ui.buttons.sendBrief)}</a>
      </div>
    </div>
  </section>`;

    return layout({
      title: `${meta.nav} — ${site.brand.name}`,
      description: `${meta.heading} — ${site.brand.name}. ${meta.intro}`,
      canonical: `/${slug}/`,
      darkHeader: true,
      active: `${baseUrl}/${slug}/`,
      body,
    });
  }

  /* ---------------- ABOUT PAGE ---------------- */
  function aboutPage() {
    const body = `
  <section class="page-hero">
    <div class="container">
      ${kori(ui.nav.about)}
      <h1>${esc(site.brand.name)}</h1>
      <p>${esc(site.about.heading)} — ${esc(site.pages.about.handledPersonally)}</p>
    </div>
  </section>
  <section class="section">
    <div class="container about-grid">
      <div class="prose reveal">
        ${site.about.body.map((p) => `<p>${esc(p)}</p>`).join("\n        ")}
      </div>
      <div class="pillars reveal">
        ${site.about.pillars.map((pl) => `<div class="pillar"><h3>${esc(pl.title)}</h3><p>${esc(pl.text)}</p></div>`).join("\n        ")}
      </div>
    </div>
  </section>
  <section class="section dark">
    <div class="container cta-band">
      <h2 class="reveal">${esc(site.pages.about.seeAvailable)}</h2>
      <div class="cta-row reveal">
        <a class="btn btn-gold" href="${baseUrl}/villas/">${esc(site.pages.about.viewPortfolio)}</a>
        ${ctaWhatsApp()}
      </div>
    </div>
  </section>`;

    return layout({
      title: (lang === "id" ? "Tentang — " : "About — ") + site.brand.name,
      description: site.about.heading,
      canonical: "/about/",
      darkHeader: true,
      active: baseUrl + "/about/",
      body,
    });
  }

  /* ---------------- LEGAL / PROCESS PAGE ---------------- */
  function legalPage() {
    const L = site.pages.legal;
    const body = `
  <section class="page-hero">
    <div class="container">
      ${kori(site.process.kicker)}
      <h1>${esc(site.process.heading)}</h1>
      <p>${esc(site.process.intro)}</p>
    </div>
  </section>
  <section class="section dark" style="padding-top:3rem">
    <div class="container">
      ${processSteps()}
    </div>
  </section>
  <section class="section sand">
    <div class="container">
      <div class="section-head reveal">
        ${kori(L.ownership)}
        <h2>${esc(L.titlesExplained)}</h2>
        <p>${esc(L.indonesianLaw)}</p>
      </div>
      <div class="acq-grid">
        <div class="acq reveal"><h3>${esc(L.freehold)}</h3><p>${esc(L.freeholdDesc)}</p></div>
        <div class="acq reveal"><h3>${esc(L.leasehold)}</h3><p>${esc(L.leaseholdDesc)}</p></div>
        <div class="acq reveal"><h3>${esc(L.hgb)}</h3><p>${esc(L.hgbDesc)}</p></div>
      </div>
      <p class="reveal" style="margin-top:2rem;color:var(--stone);font-size:.9rem">${lang === "id" ? "Setiap transaksi yang kami tangani dilaksanakan melalui notaris / PPAT berlisensi dengan verifikasi judul independen. Halaman ini adalah informasi umum, bukan nasihat hukum — kami akan menghubungkan Anda dengan profesional yang berkualifikasi untuk situasi spesifik Anda." : "Every transaction we handle is executed through a licensed notaris / PPAT with independent title verification. This page is general information, not legal advice — we'll connect you with qualified professionals for your specific situation."}</p>
    </div>
  </section>
  <section class="section">
    <div class="container cta-band">
      <h2 class="reveal">${esc(L.haveQuestion)}</h2>
      <div class="cta-row reveal">
        ${ctaWhatsApp("btn btn-wa", L.askWhatsApp)}
        <a class="btn btn-dark" href="${baseUrl}/contact/">${esc(ui.buttons.makeEnquiry)}</a>
      </div>
    </div>
  </section>`;

    return layout({
      title: (lang === "id" ? "Hukum & Proses — " : "Legal & Process — ") + site.brand.name,
      description: site.process.intro,
      canonical: "/legal-process/",
      darkHeader: true,
      active: baseUrl + "/legal-process/",
      body,
    });
  }

  /* ---------------- CONTACT PAGE ---------------- */
  function contactPage() {
    const C = site.pages.contact;
    const body = `
  <section class="page-hero">
    <div class="container">
      ${kori(ui.nav.contact)}
      <h1>${esc(C.startConversation)}</h1>
      <p>${esc(C.tellUsLooking)}</p>
    </div>
  </section>
  <section class="section dark" style="padding-top:3rem">
    <div class="container contact-grid">
      <div class="contact-info reveal">
        <h2>${esc(C.enquiries)}</h2>
        <p class="mt-2" style="color:rgba(244,239,230,.78)">${esc(C.fastestResponse)}</p>
        <div class="cta-row">
          ${ctaWhatsApp("btn btn-wa", C.messageWhatsApp)}
        </div>
        <p class="meta">WhatsApp ${esc(site.contact.whatsapp)}${site.contact.email ? "<br>" + esc(site.contact.email) : ""}<br>${esc(site.contact.location)}</p>
      </div>
      ${enquiryForm({ subjectLine: enquirySubject, options: formOptionsContact, propertySlug: "" })}
    </div>
  </section>`;

    return layout({
      title: (lang === "id" ? "Hubungi — " : "Contact — ") + site.brand.name,
      description: C.tellUsLooking,
      canonical: "/contact/",
      darkHeader: true,
      active: baseUrl + "/contact/",
      body,
    });
  }

  /* ---------------- LIST WITH US PAGE ---------------- */
  function listWithUsPage() {
    const l = site.listWithUs;
    const LW = site.pages.listWithUs;
    const body = `
  <section class="page-hero">
    <div class="container">
      ${kori(l.kicker)}
      <h1>${esc(l.heading)}</h1>
      <p>${esc(l.intro)}</p>
    </div>
  </section>
  <section class="section">
    <div class="container about-grid">
      <div class="prose reveal">
        ${l.body.map((t) => `<p>${esc(t)}</p>`).join("\n        ")}
        <h3 style="margin:1.6rem 0 0.8rem;color:var(--gold-deep)">${esc(LW.whatsIncluded)}</h3>
        <ul class="bullet-list">
          ${l.included.map((x) => `<li>${esc(x)}</li>`).join("\n          ")}
        </ul>
      </div>
      <div class="reveal">
        <div class="acq" style="border-top-width:3px">
          <span class="kicker">${esc(LW.paidListing)}</span>
          <h3 style="margin:.5rem 0">${esc(LW.simpleCurated)}</h3>
          <p style="color:var(--stone)">${esc(l.ctaNote)}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section dark" id="submit">
    <div class="container contact-grid">
      <div class="contact-info reveal">
        ${kori(LW.submitProperty)}
        <h2>${esc(LW.tellUsAbout)}</h2>
        <p class="mt-2" style="color:rgba(244,239,230,.78)">${esc(LW.shareDetails)}</p>
        <div class="cta-row">
          ${ctaWhatsApp("btn btn-wa", ui.buttons.messageWhatsapp)}
        </div>
        <p class="meta">WhatsApp ${esc(site.contact.whatsapp)}${site.contact.email ? " · " + esc(site.contact.email) : ""}</p>
      </div>
      ${enquiryForm({ subjectLine: lang === "id" ? "Jual bersama kami — pengajuan properti" : "List with us — property submission", options: l.formOptions, propertySlug: "list-with-us" })}
    </div>
  </section>`;

    return layout({
      title: (lang === "id" ? "Daftarkan Properti Anda — " : "List Your Property — ") + site.brand.name,
      description: l.intro,
      canonical: "/list-with-us/",
      darkHeader: true,
      active: baseUrl + "/list-with-us/",
      body,
    });
  }

  /* ---------------- INDIVIDUAL PROPERTY DETAIL PAGE ---------------- */
  /* Generated for any property with no external vercelUrl — real,
     SEO-indexed page hosted on this domain at /<type>/<slug>/. */
  function propertyDetailPage(p) {
    const urgent = /urgent/i.test(p.status);
    const body = `
  <section class="page-hero">
    <div class="container">
      ${kori(p.locationShort)}
      <h1>${esc(p.title)}</h1>
      <p>${esc(p.tagline)}</p>
    </div>
  </section>
  <section class="section" style="padding-top:2rem">
    <div class="container">
      <div class="carousel" aria-label="${esc(p.title)} photos" style="margin-bottom:2.5rem">
        <span class="status-flag${urgent ? " urgent" : ""}">${esc(p.status)}</span>
        <span class="count">1 / ${p.gallery.length}</span>
        <div class="track">
          ${p.gallery.map((g) => `<div class="slide"><img src="${g.src}" alt="${esc(g.alt)}" loading="lazy"></div>`).join("\n          ")}
        </div>
        <button class="c-btn c-prev" aria-label="${esc(ui.prev)}">←</button>
        <button class="c-btn c-next" aria-label="${esc(ui.next)}">→</button>
        <div class="c-dots">${p.gallery.map((_, i) => `<button aria-label="${esc(ui.photo)} ${i + 1}"></button>`).join("")}</div>
      </div>
      <div class="about-grid">
        <div class="prose reveal">
          <div style="font-family:var(--font-serif,serif);font-size:1.6rem;color:var(--gold-deep);margin-bottom:.3rem">${esc(p.price.display)}</div>
          ${p.price.note ? `<div style="color:var(--stone);margin-bottom:1.2rem">${esc(p.price.note)}</div>` : ""}
          <div class="quick" style="margin-bottom:1.5rem">${quickSpecs(p)}</div>
          ${p.description.map((t) => `<p>${esc(t)}</p>`).join("\n          ")}
          <h3 style="margin:1.6rem 0 0.8rem;color:var(--gold-deep)">${lang === "id" ? "Fitur" : "Features"}</h3>
          <ul class="bullet-list">
            ${p.features.map((f) => `<li>${esc(f)}</li>`).join("\n            ")}
          </ul>
        </div>
        <div class="reveal">
          <div class="acq" style="border-top-width:3px">
            <span class="kicker">${esc(ui.nav.enquire)}</span>
            <h3 style="margin:.5rem 0">${esc(p.title)}</h3>
            <div class="cta-row" style="margin-top:1rem">
              ${ctaWhatsApp("btn btn-wa", ui.buttons.whatsapp)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  ${p.projectFacts ? `
  <section class="section sand">
    <div class="container">
      <div class="section-head reveal">
        ${kori(lang === "id" ? "Ikhtisar Proyek" : "Project Overview")}
        <h2>${esc(p.projectFacts.heading)}</h2>
        ${p.projectFacts.text ? `<p>${esc(p.projectFacts.text)}</p>` : ""}
      </div>
      ${distancesList(p.projectFacts.facts)}
    </div>
  </section>` : ""}
  ${p.floorPlan ? `
  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        ${kori(lang === "id" ? "Denah" : "Floor Plan")}
        <h2>${esc(p.floorPlan.heading)}</h2>
        ${p.floorPlan.text ? `<p>${esc(p.floorPlan.text)}</p>` : ""}
      </div>
      <img class="reveal" src="${p.floorPlan.image}" alt="${esc(p.floorPlan.heading)}" loading="lazy" style="width:100%;height:auto;border:1px solid var(--line)">
    </div>
  </section>` : ""}
  ${p.locationSection ? `
  <section class="section sand">
    <div class="container">
      <div class="section-head reveal">
        ${kori(lang === "id" ? "Lokasi" : "Location")}
        <h2>${esc(p.locationSection.heading)}</h2>
        <p>${esc(p.locationSection.text)}</p>
      </div>
      ${distancesList(p.locationSection.distances)}
    </div>
  </section>` : ""}
  <section class="section dark">
    <div class="container contact-grid">
      <div class="contact-info reveal">
        ${kori(ui.nav.enquire)}
        <h2>${esc(p.title)}</h2>
        <p class="mt-2" style="color:rgba(244,239,230,.78)">${lang === "id" ? "Tertarik dengan properti ini? Kirimkan detail Anda dan kami akan membalas dalam 24 jam." : "Interested in this property? Send your details and we'll reply within 24 hours."}</p>
        <p class="meta">WhatsApp ${esc(site.contact.whatsapp)}</p>
      </div>
      ${enquiryForm({
        subjectLine: (lang === "id" ? "Pertanyaan properti — " : "Property enquiry — ") + p.title,
        options: p.enquiryOptions && p.enquiryOptions.length ? p.enquiryOptions : formOptionsGeneral,
        propertySlug: p.slug,
      })}
    </div>
  </section>`;

    return layout({
      title: `${p.title} — ${site.brand.name}`,
      description: p.metaDescription || p.tagline,
      canonical: `/${typeSlug[p.type]}/${p.slug}/`,
      darkHeader: true,
      active: "",
      body,
    });
  }

  write(lang, "index.html", homePage());
  properties.filter((p) => !p.vercelUrl).forEach((p) => {
    write(lang, `${typeSlug[p.type]}/${p.slug}/index.html`, propertyDetailPage(p));
  });
  write(lang, "properties/index.html", propertiesPage());
  write(lang, "rentals/index.html", typePage("rental"));
  write(lang, "villas/index.html", typePage("villa"));
  write(lang, "land/index.html", typePage("land"));
  write(lang, "packages/index.html", typePage("package"));
  write(lang, "about/index.html", aboutPage());
  write(lang, "legal-process/index.html", legalPage());
  write(lang, "list-with-us/index.html", listWithUsPage());
  write(lang, "contact/index.html", contactPage());
}

/* ---------------- sitemap & robots (both languages) ---------------- */
function sitemap() {
  const routes = ["/", "/rentals/", "/villas/", "/land/", "/packages/", "/properties/", "/about/", "/legal-process/", "/list-with-us/", "/contact/"];
  const slugMap = { villa: "villas", land: "land", package: "packages" };
  properties.filter((p) => !p.vercelUrl).forEach((p) => routes.push(`/${slugMap[p.type]}/${p.slug}/`));
  const urls = [];
  for (const u of routes) {
    urls.push(`  <url><loc>${siteEn.domain}${u}</loc></url>`);
    urls.push(`  <url><loc>${siteEn.domain}/id${u}</loc></url>`);
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}

/* ---------------- build both languages ---------------- */
buildLang("en");
buildLang("id");
write("en", "sitemap.xml", sitemap());
write("en", "robots.txt", `User-agent: *\nAllow: /\nSitemap: ${siteEn.domain}/sitemap.xml\n`);
console.log(`\nBuilt English (/) and Indonesian (/id/) — 9 pages each, listings link out to the original Vercel pages.`);
