# Full Website SEO Audit — lohen-genshin.com

**Audit date:** 2026-08-28
**Audit target:** Local Astro build of `D:\workspaces\website\lohen-ginshin` (served via `astro preview`, site not yet deployed)
**Method:** Full on-page/technical/content/schema/performance/geo analysis of rendered HTML, sitemap, robots.txt, llms.txt, 404. **No Google API credentials, no CrUX field data, no live crawl of a deployed origin, no Playwright screenshots** — CWV figures are lab estimates.

---

## Executive Summary

### Overall SEO Health Score: **75 / 100** (was 71 — re-audited 2026-08-28 after fixes)

| Category | Score | Weight |
|---|---|---|
| Technical SEO | 75 | 22% |
| Content Quality | 80 | 23% |
| On-Page SEO | 88 | 20% |
| Schema / Structured Data | 70 | 10% |
| Performance (CWV) | 70 | 10% |
| AI Search Readiness | 70 | 10% |
| Images | 65 | 5% |

### Fixes applied in this session
- ✅ Removed fabricated `Game` + `AggregateRating` JSON-LD and the visible "9.4/10 · 78 votes" rating
- ✅ Stripped all structured data from the 404 page
- ✅ Added `fetchpriority="high"` + preload for the hero image, preloaded both font files, added `decoding="async"`
- ✅ Added real outbound citations (Genshin Impact Official, HoYoLAB) to the Data Sources block
- ✅ Built the 2 missing SVG visualizations (Masterstroke state machine, Hexerei combo timeline)
- ✅ Added `<link rel="indexnow">` to `<head>`
- ✅ Removed the duplicate FAQ question (60 → 59)

### Remaining issues
- Medium: canonical (no-slash) vs sitemap (slash) homepage mismatch — needs 301 at Cloudflare deploy
- Medium: IndexNow submission pipeline (link tag added; ping `api.indexnow.org` at deploy)
- Low: author identity consistency (text "active player" vs schema "Editorial Team") — kept inline on the homepage (no `/about/` page by design, single-page site)
- Deploy-time: security headers (HSTS/CSP) once live

> **Scope confirmed:** single-page site only — no subpages and no `/about/` author page. Authority efforts concentrate on the homepage E-E-A-T block and community distribution.

### Business type detected
**Content / Fan Wiki & Strategy Guide** — single-character niche site targeting the keyword cluster `lohen genshin` (+ variants). Content-information site, not e-commerce or local service.

### Top 5 Critical / High issues
1. **CRITICAL — Fabricated `Game` + `AggregateRating` JSON-LD** (`9.4/10`, `78 votes`, self-authored review). Violates Google review guidelines; real risk of manual action.
2. **HIGH — Zero outbound citations.** "Data Sources: HoYoLAB, 6.6 beta" is text-only; no verifiable links. Hurts E-E-A-T vs Fandom/Game8/HoYoverse.
3. **HIGH — 2 of 3 mechanism visualizations missing.** Only the dual-resource flow SVG exists; the Masterstroke state machine and Hexerei combo timeline (the promised information-gain weapon) are not built — `llms.txt` overclaims them.
4. **HIGH — LCP hero not optimized.** No `fetchpriority`, no preload, 113 KB hero image → slowest-first-paint risk on mobile.
5. **HIGH — 404 page emits full rich structured data** (VideoGame/HowTo/Game/etc.) on an error page.

### Top 5 quick wins
1. Delete the `Game`+`AggregateRating` JSON-LD block (10 min, removes penalty risk).
2. Add `fetchpriority="high"` + preload to hero; preload fonts.
3. Strip JSON-LD from the 404 template.
4. Remove the duplicate FAQ question.
5. Wire IndexNow at deploy (key file already exists at root).

---

## 1. Technical SEO

**Score: 70/100**

### Crawlability
| Check | Status |
|---|---|
| robots.txt | ✅ `Allow: /` + sitemap reference |
| XML sitemap | ✅ `sitemap-index.xml` → `sitemap-0.xml` → `/` |
| 404 page | ✅ noindex + clear H1 + link home |
| Sitemap/canonical consistency | ⚠️ **Mismatch:** sitemap has `/`, canonical has no slash |

### Indexability
| Check | Status |
|---|---|
| Canonical | ✅ `https://www.lohen-genshin.com` |
| robots meta | ✅ `index, follow` |
| hreflang | ✅ n/a (single-language) |
| 404 schema pollution | ❌ All rich JSON-LD emitted on 404 |
| IndexNow | ⚠️ Key file present, submission not wired |

### Security
- ✅ Zero third-party scripts/fonts/analytics (all self-hosted).
- ⚠️ No live origin → SSL/headers unverifiable. Plan Cloudflare TLS + HSTS + CSP at deploy.

### Core Web Vitals (lab estimates)
| Metric | Estimate | Risk |
|---|---|---|
| LCP | 1.5–2.5s | ❌ hero image unoptimized |
| INP | Low | ✅ no third-party JS |
| CLS | Low | ✅ explicit image dims |

*See `findings/technical.md` and `findings/performance.md`.*

---

## 2. Content Quality

**Score: 78/100**

- **17,347 words** of dense, non-padded content (target 5–7k) — the deepest single-character page in the niche.
- **All 6 intents covered** in user-journey order: identity → pull decision → mechanics → build → teams → materials → FAQ.
- **16 H2 / 56 H3**, **15 tables**, **60 FAQ** (conclusion-first, avg 54 words), **4 interactive tools**, **60 SEO-safe `<details>` blocks**.
- **E-E-A-T block:** AR 60 player, 1,800+ hrs, tested C0/C1, explicit "Last Updated", independent-guide disclaimer, no paywall/ads (directly counters Game8).

**Gaps:** no outbound citations; anonymous author + no `/about/`; only 1 of 3 SVGs; one duplicate FAQ.

*See `findings/content.md`.*

---

## 3. On-Page SEO

**Score: 85/100**

| Element | Verdict |
|---|---|
| Title (63 chars) | ✅ `Lohen Genshin Impact Guide: Best Build, Mechanics & Teams (6.6)` |
| Meta description | ✅ keyword-rich, covers pull/build/mechanics/teams |
| H1 | ✅ exactly one: `Lohen Genshin Impact Character Guide` |
| H2s | ✅ 16, strong keyword coverage |
| OG / Twitter | ✅ complete set with `og:image` |
| Alt text | ✅ descriptive + keyword-natural |
| TOC internal anchors | ✅ |

*See `findings/visual.md` for image-specific issues.*

---

## 4. Schema & Structured Data

**Score: 50/100**

7 blocks present: WebPage, VideoGame, Organization, BreadcrumbList, HowTo, Game, FAQPage.

**❌ CRITICAL — `Game` + `AggregateRating` (9.4/10, 78 votes) is fabricated.**
There is no user voting system on the page; the review is authored by the site's own editorial team. Google explicitly forbids self-serving/fake reviews in markup. **Remove the block.** If you want a rating, build a real voting widget and mark up live data only.

**❌ HIGH — 404 page carries VideoGame/Organization/BreadcrumbList/HowTo/Game JSON-LD.**
**⚠️ LOW —** duplicate FAQ question; trivial 1-item BreadcrumbList; author identity mismatch (Organization vs "active player").

**Note:** FAQ rich results are restricted since Aug 2023 (authoritative sites only) — markup is still harmless/helpful, just won't render for a fan site. HowTo shows desktop-only since Sep 2023.

*See `findings/schema.md`.*

---

## 5. Performance (CWV)

**Score: 60/100** — lab-only.

**What's good:** zero third-party requests; ~9 KB inline JS; 28 KB CSS; CLS-safe image dims; WebP hero.

**What to fix:**
1. `fetchpriority="high"` + `<link rel="preload">` + `decoding="async"` on the hero image; compress 113 KB → ~70 KB.
2. Preload the two Outfit `woff2` files; verify `font-display: swap`.
3. Re-measure with PSI/CrUX after deploy.

*See `findings/performance.md`.*

---

## 6. AI Search Readiness (GEO)

**Score: 65/100**

**Strengths:** excellent `llms.txt` (summary + sections + links); 60 conclusion-first FAQ answers; full content in initial HTML; structured data.

**Weaknesses:** zero outbound citations → low citability against Fandom/HoYoverse; no inbound links/brand mentions pre-deploy; llms.txt overclaims 2 missing visualizations.

*See `findings/geo.md`.*

---

## 7. Images

**Score: 55/100**

- ✅ Hero alt (descriptive, keyword-natural), explicit dims, WebP, favicon/apple-touch/OG present.
- ❌ Only 1 `<img>` + 1 SVG on a 17k-word page. The 3-visualization plan is 1/3 built.
- ❌ Hero not LCP-optimized.

*See `findings/visual.md`.*

---

## Recommendations Priority Summary

| Priority | Item |
|---|---|
| **Critical** | Remove fabricated `Game`+`AggregateRating` JSON-LD |
| **High** | Add outbound citations (E-E-A-T) |
| **High** | Build 2 missing mechanism SVGs |
| **High** | Optimize LCP (fetchpriority + preload + compress hero) |
| **High** | Strip JSON-LD from 404 |
| **Medium** | Align canonical/sitemap URL; wire IndexNow; create `/about/` + author; security headers at deploy |
| **Low** | Remove duplicate FAQ; add llms link hint |

Full roadmap: see **ACTION-PLAN.md**.
