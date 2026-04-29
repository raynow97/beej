# Beej — Static Site

A multi-page, static HTML site for Beej. Drop on any host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, or even uploaded as Shopify custom pages).

## File structure

```
beej-site/
├── index.html          ← Homepage
├── shop.html           ← Product page (Starter Kit / Couple's Kit, sizes, tabs)
├── how-it-works.html   ← 4-step routine, day-in-the-life, mini-FAQ
├── science.html        ← Educational content + references (DMR Act–safe)
├── about.html          ← Brand story, principles, manufacturing
├── blog.html           ← Journal index with category filter
├── blog-post.html      ← Single article template (long-form)
├── faq.html            ← Full FAQ
├── styles.css          ← Shared design system
├── script.js           ← Shared interactions (nav, tabs, filters, cart)
└── images/             ← Image assets (see note below)
```

## ⚠️ Important — about the images

The image files in `/images/` are reused from Snowballs Underwear's marketing photos, **as placeholders only**. They are not licensed for production use. Before you launch:

1. **Replace `hero-product.webp`, `insert-action.webp`, `wedge-detail.webp`** — these contain visible Snowballs branding (logo on box, logo on wedge). Do not ship the site with these.
2. **Replace `box-clean.webp`, `lifestyle-1.webp`, `lifestyle-bedroom.webp`, `father-child.webp`** — no visible branding but still belong to Snowballs.
3. Keep the same filenames when you swap, and the layout will continue to work without code changes.

Step 15 of the whitepaper covers your own photography shoot (₹50K–1.5L for a one-day shoot). That's the moment to swap these out properly.

## Deployment

### Easiest: Netlify drop
1. Zip the `beej-site` folder.
2. Drag the zip to https://app.netlify.com/drop
3. Site is live in ~30 seconds with a `*.netlify.app` URL. Connect your domain from Settings.

### Cloudflare Pages
1. Push the folder to a GitHub repo.
2. Connect repo to Pages, no build command needed (it's pure static).

### Vercel
1. `vercel` from inside the folder, follow prompts.

### GitHub Pages
1. Push folder to a repo, enable Pages on main branch.

### Custom domain (e.g. beej.in)
Whichever host you pick, point your domain's A/CNAME records as their docs instruct. SSL is automatic on all four above.

## What's deliberately not included

- **No payment integration.** The "Add to cart" buttons are visual only. When you're ready to take orders, the right move is to either move this content into Shopify (the whitepaper plan), or wire up Razorpay + a backend. As a static site, this can't transact.
- **No CMS.** The blog posts are hand-written HTML. For 8–12 articles a quarter, that's fine. If you scale to 50+, move to a CMS-backed setup (Astro + Contentful/Sanity is the natural next step).
- **No analytics.** Add GA4 / Meta Pixel via GTM by inserting the GTM snippet into the `<head>` of each page. The whitepaper Step 6 covers this.

## Brand & copy notes

- All product/commerce copy is written within the DMR Act 1954 boundaries described in Section 4 of the whitepaper. No fertility, sperm, or testosterone claims appear on the home, shop, how-it-works, or FAQ pages.
- The science page is framed as general educational content, with references, and explicitly states Beej is not a medical device.
- The disclaimer block (`.disclaimer`) appears on the shop and science pages. Keep it there.
- The blog can discuss reproductive health more freely as editorial content, per the whitepaper rules.

## Design system, briefly

| Variable        | Value     | Purpose                                    |
|-----------------|-----------|--------------------------------------------|
| `--bone`        | `#F5F1EA` | Page background                            |
| `--paper`       | `#FBF8F2` | Cards, slightly raised surfaces            |
| `--bone-warm`   | `#EFE9DE` | Image fallback, accent backgrounds         |
| `--ink`         | `#1A2B4A` | Primary text, primary buttons              |
| `--ink-soft`    | `#3A4A66` | Body copy                                  |
| `--ink-mute`    | `#6B7791` | Meta, captions, eyebrows                   |
| `--accent`      | `#7BAEC4` | Soft accent — used sparingly               |
| `--accent-deep` | `#4E89A4` | Hover states, italic emphasis              |
| `--line`        | `#D9D2C4` | Borders, dividers                          |

Type: **Fraunces** (display serif) + **Inter** (body sans). Both loaded from Google Fonts.

The italic accent treatment on serif headlines (`<em>`) is intentional and consistent — that's a brand signal.
