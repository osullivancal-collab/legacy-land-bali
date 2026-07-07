# Dewayu Utama Land — Portfolio Website

Premium Bali real estate portfolio site. Static HTML output (fast, SEO-friendly, deploys anywhere) generated from reusable data files.

## Structure

```
index.html                     Home
properties/                    Portfolio page
properties/villa-kodi/         Individual listing pages (auto-generated)
properties/ketewel/
properties/asri-jewel-villas/
about/                         About Dewayu Utama Land
legal-process/                 Legal & process
contact/                       Contact / enquiry
assets/                        CSS, JS, logo
data/site.js                   Brand, contact, copy — edit here
data/properties.js             ALL listing data — edit here
build.js                       Generator (node build.js)
sitemap.xml · robots.txt       SEO
```

## Deploy to Vercel

The generated HTML is already in the folder — just drag the whole folder into Vercel (or `vercel deploy`). No build step needed on Vercel; it serves the static files as-is. Clean URLs work automatically (`/properties/ketewel/`).

## Before going live — 4 quick edits

1. **Logo** — replace `assets/logo.svg` and `assets/logo-light.svg` with your real logo (light version is used on dark backgrounds/hero).
2. **Formspree** — in `data/site.js`, set `formspreeEndpoint` to your real endpoint (e.g. `https://formspree.io/f/abcd1234`). Until then, forms show a friendly "not configured" message and point people to WhatsApp.
3. **Photos** — in `data/properties.js`, replace the placeholder Unsplash URLs in each property's `heroImage` and `gallery` with your real photos (URLs, or copy files into `assets/img/<slug>/` and use paths like `/assets/img/ketewel/01.jpg`).
4. **Domain & email** — in `data/site.js`, set `domain` to your final URL (used for canonical links, sitemap, Open Graph) and `email` to your enquiry address.

After any data edit, regenerate the pages:

```
node build.js
```

(Requires Node.js — no dependencies to install.)

## How listings work

Your three existing Vercel pages stay exactly as they are — they ARE the individual listing pages. The portfolio site is the hub: each property shows as a showcase row with a 4-photo carousel, key details, and buttons that open the original full listing (`villa-kodi.vercel.app`, etc.) in a new tab. Nothing about the Vercel pages is touched or duplicated.

## Adding a new listing

Open `data/properties.js`, copy an existing property object, change the fields (slug, title, price, specs, gallery, `vercelUrl`), run `node build.js`. It automatically appears as a showcase on the Home and Properties pages, linking out to whatever URL you put in `vercelUrl`.

- `gallery` — the first 4 images feed the carousel. Swap the base64 placeholders for real photo URLs (or `/assets/img/<slug>/01.jpg` paths).
- `vercelUrl` — the full listing page this card links to.
- Set `landSize`, `buildSize`, `bedrooms` etc. to `null` to hide them.
- `type: "villa" | "land" | "package"` — the Properties page filters via `/properties/?type=land`.

## Logo & images

The real Dewayu Utama Land badge is embedded as base64 (`data/logo.js`) so it always shows — header, hero, footer, favicon. Property photos are currently branded base64 placeholders; replace the `gallery` URLs in `data/properties.js` with your real photos and rebuild.
