# SEO Action Plan — lohen-genshin.com

**Priority:** Critical > High > Medium > Low
**Effort:** 🟢 Easy (< 1 hr) | 🟡 Medium (1-4 hrs) | 🔴 Hard (4+ hrs or creative)

---

## Phase 1: Critical Fixes (Week 1)

| # | Priority | Effort | Action | File(s) | Expected impact |
|---|---|---|---|---|---|
| 1 | CRITICAL | 🟢 15 min | ~~Delete the `Game`+`AggregateRating` JSON-LD block from schema markup. No replacement needed — there is no real user voting system.~~ ✅ DONE | `src/layouts/Layout.astro` | Removes manual-action risk; prevents potential ranking suppression |
| 2 | HIGH | 🟢 30 min | ~~Strip all JSON-LD from the 404 template. Only keep `noindex, follow` meta.~~ ✅ DONE | `src/pages/404.astro` (schema now gated by `!noindex` in `Layout.astro`) | Prevents schema pollution on error page |
| 3 | MEDIUM | 🟢 30 min | Align homepage canonical + sitemap URL. Pick one form (no-slash recommended per framework). Keep `trailingSlash: "always"` for subpages but ensure `/` redirects to no-slash via Cloudflare deploy config. ⚠️ Deploy-time | `astro.config.mjs` + Cloudflare Pages settings | Resolves indexation ambiguity |

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

| # | Priority | Effort | Action | File(s) | Expected impact |
|---|---|---|---|---|---|
| 4 | HIGH | 🟢 30 min | ~~Add `fetchpriority="high"` + `decoding="async"` to hero `<img>`. Add `<link rel="preload" as="image" href="/hero-visual.webp">` and preload 2 font woff2 files in `<head>`. Compress hero to ~70 KB.~~ ✅ DONE (preload/fetchpriority; compression optional) | `src/components/Hero.astro`, `src/layouts/Layout.astro` | LCP improvement of ~0.5–1s |
| 5 | HIGH | 🟡 2-3 hrs | ~~Build the 2 missing SVG visualizations: Masterstroke state machine (Joy/Will to Win state transitions) and Hexerei combo timeline (per-hit damage distribution, ICD windows).~~ ✅ DONE | `src/components/Mechanics.astro` | Fills the information-gain gap vs Game8/Icy-veins; delivers on the site strategy |
| 6 | HIGH | 🟢 1 hr | ~~Add real outbound citation links to the "Data Sources" block in the About section.~~ ✅ DONE (Genshin Impact Official + HoYoLAB; add deep links when live) | `src/components/Author.astro` | Verifiable E-E-A-T → stronger trust signal for Google + AI crawlers |
| 7 | MEDIUM | 🟢 30 min | ~~Add `<link rel="indexnow" href="/4e1f2c3d4a5b6789f0a1.txt">` in `<head>`.~~ ✅ DONE — next: use Cloudflare Pages IndexNow integration or a worker to ping `api.indexnow.org` on deploy. | `src/layouts/Layout.astro` + Cloudflare Pages config | Helps Google discover new pages instantly |
| 8 | MEDIUM | 🟢 30 min | ~~Preload Outfit variable fonts via `<link rel="preload" as="font" type="font/woff2" crossorigin>`; verify `font-display: swap` in emitted CSS.~~ ✅ DONE | `src/layouts/Layout.astro` | Faster text rendering, better LCP |

---

## Phase 3: Content & Authority (Month 2)

| # | Priority | Effort | Action | Expected impact |
|---|---|---|---|---|
| 9 | HIGH | 🟡 2 hrs | Deploy to Cloudflare Pages: configure www redirect, security headers (`_headers` with HSTS, `X-Content-Type-Options`, `Referrer-Policy`, CSP), and enable HTTPS. | Live site, security baseline |
| 10 | HIGH | 🟡 3 hrs | Community distribution: post the mechanism visualization + guide link to r/Genshin_Impact (Reddit), HoYoLAB, and Discord. Target: 3–5 natural backlinks + 50+ brand searches within 2 weeks. | Inbound links, brand-search signal, AI citability |
| 11 | MEDIUM | 🟢 30 min | Remove duplicate FAQ question; verify story-quest English name ("Cuniculus Chapter" vs "狡兔之章"). ✅ DONE | Cleaner FAQPage |
| 12 | LOW | 🟢 15 min | Add `<link rel="llms" href="/llms.txt">` in `<head>`. | Optional AI crawler hint |

> **Note:** Single-page strategy confirmed. No subpages (`/build/`, `/mechanics/`, etc.) and no `/about/` page — all content lives on one page. This keeps the "single page extreme" approach per 建站框架 §6.5. Focus authority efforts on community distribution (#10) and the existing E-E-A-T block on the homepage.

---

## Phase 4: Monitoring & Iteration (Ongoing)

| # | Priority | Effort | Action | Frequency |
|---|---|---|---|---|
| 14 | HIGH | 🟢 30 min | Submit sitemap to Google Search Console + Bing Webmaster Tools. Verify IndexNow pings work. | One-time at deploy |
| 15 | MEDIUM | 🟢 30 min | Run PageSpeed Insights + CrUX analysis to replace lab estimates with field data. | After deploy, then monthly |
| 16 | MEDIUM | 🟡 1 hr | Monitor GSC: track impressions/clicks/CTR for `lohen genshin` and long-tail variants. | Weekly for first month |
| 17 | MEDIUM | 🟢 30 min | Check AI visibility: ask ChatGPT and Perplexity "Who is Lohen in Genshin Impact?" and check if the site is cited. | After deploy + community distribution |
| 18 | LOW | 🟢 30 min | Add `theme-color` meta tag and `preconnect` hints if any external resources are added later. | One-time |

---

## Effort Summary

| Phase | Items | Est. total effort | Who |
|---|---|---|---|
| Phase 1: Critical | 3 | ~1.25 hrs | Dev |
| Phase 2: High-Impact | 5 | ~5.5 hrs | Dev + content creator |
| Phase 3: Authority | 3 | ~5.5 hrs | Dev + content creator + community manager |
| Phase 4: Monitoring | 5 | Ongoing | Dev + SEO |

**Total upfront:** ~12 hrs
**Ongoing:** ~1–2 hrs/week