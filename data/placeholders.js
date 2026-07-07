// ============================================================
// Branded image placeholders — embedded as base64 data URIs so
// they ALWAYS display (no external requests, works offline and
// inside the preview). Replace with your real photos by editing
// the src values in data/properties.js.
// ============================================================

const variants = {
  kodi:    { a: "#2b2620", b: "#4d4234", accent: "#d9c294" }, // dusk charcoal
  ketewel: { a: "#3a3d2e", b: "#5a5c42", accent: "#e2d3a8" }, // rice-field olive
  asri:    { a: "#221d18", b: "#41372a", accent: "#d9c294" }, // deep resort night
  sand:    { a: "#e8dfcf", b: "#f7f2ea", accent: "#8f6c30" }, // light interior
};

const xesc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function ph(property, label, variant = "sand", w = 1400, h = 1050) {
  property = xesc(property); label = xesc(label);
  const v = variants[variant] || variants.sand;
  const dark = variant !== "sand";
  const text = dark ? "#f4efe6" : "#201c17";
  const sub = dark ? "rgba(244,239,230,0.65)" : "rgba(32,28,23,0.55)";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${v.a}"/><stop offset="1" stop-color="${v.b}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect x="28" y="28" width="${w - 56}" height="${h - 56}" fill="none" stroke="${v.accent}" stroke-opacity="0.45" stroke-width="2"/>
  <g transform="translate(${w / 2} ${h / 2 - 110})">
    <rect x="-26" y="-26" width="52" height="52" transform="rotate(45)" fill="none" stroke="${v.accent}" stroke-width="2.5"/>
    <rect x="-11" y="-11" width="22" height="22" transform="rotate(45)" fill="${v.accent}"/>
  </g>
  <text x="${w / 2}" y="${h / 2 + 10}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="58" letter-spacing="10" fill="${text}">${property.toUpperCase()}</text>
  <text x="${w / 2}" y="${h / 2 + 78}" text-anchor="middle" font-family="Georgia, serif" font-size="34" letter-spacing="6" fill="${v.accent}">${label}</text>
  <text x="${w / 2}" y="${h - 70}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="4" fill="${sub}">PHOTO PLACEHOLDER — REPLACE IN data/properties.js</text>
</svg>`;
  return "data:image/svg+xml;base64," + Buffer.from(svg).toString("base64");
}

module.exports = ph;
