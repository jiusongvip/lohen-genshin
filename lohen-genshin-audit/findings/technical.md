# Technical SEO Findings — lohen-genshin.com

**Method:** Static analysis of the local Astro build (output: `dist/`) served via `astro preview`. No Google API credentials, no CrUX field data, no live crawl of a deployed origin. Site is not yet deployed.

## Crawlability

| Check | Status | Detail |
|---|---|---|
| robots.txt | ✅ PASS | Serves `User-agent: *` / `Allow: /`, references `Sitemap: https://www.lohen-genshin.com/sitemap-index.xml`. No accidentally blocked paths. |
| XML sitemap | ✅ PASS | `sitemap-index.xml` → `sitemap-0.xml` contains `https://www.lohen-genshin.com/`. Both well-formed. |
| Sitemap/canonical consistency | ⚠️ WARN | Sitemap lists `/` (with trailing slash, `trailingSlash: "always"` in `astro.config.mjs`) but the page canonical is `https://www.lohen-genshin.com` (no slash). Two representations of the same homepage → indexation ambiguity. Pick one (recommend no-slash per framework spec) and enforce with a 301 from the other. |
| Crawl depth / internal links | ⚠️ WARN | Only 2 routes exist (`/`, `/404`). All 22 homepage links are in-page anchors (`#...`) or `mailto:`. Zero outbound links and zero cross-page internal links. No deep site to crawl, but also no authority/source outlinks (see E-E-A-T). |
| 404 handling | ✅ PASS | `404.html` exists, returns 200 in preview, has `robots: noindex, follow`, a clear H1, and a link back to `/`. |

## Indexability

| Check | Status | Detail |
|---|---|---|
| Canonical tag | ✅ PASS | Present: `https://www.lohen-genshin.com` (no slash). |
| robots meta | ✅ PASS | `index, follow` on homepage. |
| Duplicate content | ✅ PASS | Single content page; one duplicate FAQ question (see content). |
| 404 structured data pollution | ❌ FAIL | The 404 page emits `WebPage`, `VideoGame`, `Organization`, `BreadcrumbList`, `HowTo`, and `Game` JSON-LD — rich entities on an error page. Noindex prevents indexing, but it is sloppy and inconsistent with the noindex intent. Strip all structured data from the 404 template. |
| IndexNow | ⚠️ WARN | Key file `4e1f2c3d4a5b6789f0a1.txt` exists at root, but there is **no** `<link rel="indexnow">` tag and no submission pipeline to `api.indexnow.org`. The key file alone does nothing. Wire IndexNow (Cloudflare has first-class support) before/at launch. |
| hreflang | ✅ PASS | English-only site; no hreflang needed. |

## Security & Headers (lab-only, static review of built assets)

| Check | Status | Detail |
|---|---|---|
| No third-party scripts | ✅ PASS | Zero external JS/CSS/font origins. All assets self-hosted. Excellent for security, privacy, and INP. |
| No analytics/tracker | ✅ PASS | Page states "uses no cookies and collects no personal data." GDPR-friendly. |
| SSL / HSTS | ⚠️ NOT VERIFIED | No deployed origin to check. Plan Cloudflare-managed TLS + HSTS at deploy. |
| Security headers | ⚠️ NOT VERIFIED | No server headers available pre-deploy. Add `X-Content-Type-Options`, `Referrer-Policy`, and a CSP when deploying. |

## Core Web Vitals — lab estimate (no CrUX field data available)

| Metric | Lab estimate | Risk |
|---|---|---|
| LCP | ~1.5–2.5s | Hero `hero-visual.webp` (113 KB) is the likely LCP element; **no `fetchpriority="high"`** and no preload → LCP is delayed until CSS is parsed. |
| INP | Low risk | No third-party JS. ~9 KB inline tool scripts (pull decider, calculators, combo player) run on button interaction; keep them dependency-free. |
| CLS | Low risk | Hero has explicit `width`/`height` (768×1152). Fonts from `@fontsource-variable`; confirm `font-display: swap` (no preload present). |
| HTML size | ⚠️ | Single 280 KB HTML document (17,347 words inline). Acceptable for a content page but watch render cost on slow mobile CPUs. |

## Recommendations

1. **Critical:** Align canonical and sitemap (single URL form) and add a 301 between `/` and no-slash forms.
2. **High:** Add `fetchpriority="high"` to the hero image and `<link rel="preload" as="image">`; preload the Outfit font files.
3. **High:** Strip JSON-LD from the 404 template.
4. **Medium:** Wire IndexNow submission at deploy (Cloudflare Pages + IndexNow plugin or worker).
5. **Medium:** Add security headers + HSTS via Cloudflare Pages `_headers`.
