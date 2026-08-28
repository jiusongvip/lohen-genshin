# Single Page Analysis — https://www.lohen-genshin.com/

**Analyzed:** Homepage `/` (single-page site). Local Astro build via preview server.
**Date:** 2026-08-28 | CWV = lab reference only (no field data; site not yet deployed)

---

## Page Score Card

```
Overall Score: 85/100  (was 83 — post-fix)

On-Page SEO:     92/100  █████████░
Content Quality: 86/100  █████████░
Technical:       88/100  █████████░░
Schema:          78/100  ████████░░
Images:          75/100  ████████░░
```

(Overall = weighted blend incl. Performance 75 and AI-readiness 82 from the full audit.)

---

## On-Page SEO (88/100)

| Element | Verdict | Detail |
|---|---|---|
| Title tag | ⚠️ 63 chars (rendered; 67 raw w/ `&amp;`) | `Lohen Genshin Impact Guide: Best Build, Mechanics & Teams (6.6)` — keyword-front, unique, brand implied. Slightly over the ~60-char truncation point. |
| Meta description | ⚠️ **222 chars** | Compelling, keyword-rich, but well over the 150–160 recommended. Google will truncate and may cut the CTA tail ("materials and release date"). |
| H1 | ✅ | Exactly one: "Lohen Genshin Impact Character Guide" — matches intent, contains keyword. |
| H2–H6 | ✅ | 16 H2 → 56 H3, logical hierarchy, no skipped levels, descriptive. |
| URL | ✅ | `https://www.lohen-genshin.com` — short, keyword-bearing, no parameters. |
| Internal links | ✅ | 21 in-page anchor links (nav + TOC + section cross-links). Appropriate for single-page architecture; no orphans. |
| External links | ✅ | 2 authoritative (Genshin Impact Official, HoYoLAB) with `target="_blank"`. Reasonable count. |

## Content Quality (86/100)

| Metric | Value | Gate | Verdict |
|---|---|---|---|
| Word count | 17,389 | Homepage floor 500 | ✅✅ Massively exceeded, dense not padded |
| Readability | Flesch **65.0** | 60–70 | ✅ In ideal band; avg sentence 18.1 words |
| Keyword density | `lohen` 1.66% | 1–3% natural | ✅ Semantic vars: Masterstroke 0.81, Hexerei 0.76, Cryo 0.93, Melt 0.73 |
| E-E-A-T | Named author **Eira Vanguard** + bio + Person schema + first-person + sourced | — | ✅ Strong; only Authoritativeness (backlinks) pending |
| Freshness | "Last Updated Aug 28, 2026" visible + schema dates | visible pub/updated | ✅ |

## Technical (88/100)

| Element | Verdict |
|---|---|
| Canonical | ✅ `https://www.lohen-genshin.com` (self-referencing, no-slash) |
| Meta robots | ✅ `index, follow` |
| Open Graph | ✅ og:title/description/image (1200×630)/url/site_name/type |
| Twitter Card | ✅ summary_large_image + title/description/image |
| Hreflang | ✅ n/a (single language) |
| Preloads / LCP | ✅ hero image preload + `fetchpriority="high"`; 2 font preloads |
| Deploy-time | ⚠️ canonical(no-slash) vs sitemap(slash); HTTPS/security headers pending Cloudflare |

## Schema (72/100)

**Detected:** WebPage, VideoGame, Organization, **Person**, BreadcrumbList, HowTo, FAQPage — all JSON-LD.

| Type | Valid? | Notes |
|---|---|---|
| WebPage | ✅ | datePublished/dateModified/inLanguage/about/author(Person)/publisher |
| VideoGame | ✅ | Genshin Impact entity, platforms, HoYoverse publisher |
| Organization | ✅ | Site entity with logo |
| Person | ✅ | Eira Vanguard, jobTitle, knowsAbout, description |
| BreadcrumbList | ⚠️ | Single item only — trivial but valid |
| HowTo | ⚠️ | **Deprecated** for rich results (desktop-only since Sep 2023; Google no longer generates them). Harmless but adds bloat — see recommendations |
| FAQPage | ✅ | 59 Q&A — **retired for rich results (May 2026)** but kept as AI-citation signal, correctly per guidance |
| aggregateRating / Game | ✅ removed | No fabricated ratings remain |

## Images (75/100)

| Image | Size | Alt | Format | Dims | Lazy | Verdict |
|---|---|---|---|---|---|---|
| hero-visual.webp | 113 KB | ✅ 108 chars, descriptive, keyword-natural | WebP | 768×1152 ✅ | none (correct — LCP, eager) | ✅ Under 200 KB, CLS-safe |
| SVGs ×3 | inline | ✅ role="img" + aria-label | SVG | — | — | ✅ Original visualizations |

**Findings:** only 1 `<img>` on a 17k-word page — no in-game evidence screenshots (would strengthen Experience). No lazy-loading needed (single above-fold image).

## Core Web Vitals (reference only)

| Metric | Risk | Note |
|---|---|---|
| LCP | 🟡 low-moderate | Hero 113 KB now `fetchpriority=high` + preloaded; compressing to ~70 KB would tighten |
| INP | 🟢 low | No third-party JS; ~9 KB inline tool scripts |
| CLS | 🟢 low | Explicit width/height; font swap |

---

## Issues Found (by priority)

**Medium — ✅ FIXED**
1. ~~Meta description 222 chars~~ — trimmed to **155 chars** ("…is he worth pulling, his Cryo Polearm build, Joy & Will to Win mechanics, and Melt teams with Durin & Nicole."), keyword + CTA retained.
2. ~~Title 63 chars~~ — trimmed to **57 chars** ("Lohen Genshin Impact Guide: Best Build, Mechanics & Teams"), aligns with 建站框架 §5.1 spec.

**Low — ✅ FIXED**
3. ~~HowTo schema deprecated~~ — removed from JSON-LD. FAQPage retained as AI-citation signal.

**Low — open**
4. Only 1 `<img>` — add 2–3 real in-game screenshots as Experience evidence when available (do not fabricate).
5. Hero 113 KB — optional; q60–q45 ffmpeg re-encode yields only 8–27% savings with quality risk on the centerpiece visual. LCP already mitigated via `fetchpriority="high"` + preload. **Recommendation: skip.**

**Info (deploy-time)**
6. Canonical(no-slash) vs sitemap(slash) — 301 at Cloudflare.
7. HTTPS + security headers at deploy.

---

## Recommendations

1. **Medium:** Trim meta description to ~150–160 chars, keeping keyword + CTA ("worth pulling? Cryo build, Joy/Will to Win mechanics, Melt teams with Durin & Nicole. Release 6.6.").
2. **Medium:** Trim title to ≤60 chars (e.g., "Lohen Genshin Impact Guide: Build, Mechanics & Teams").
3. **Low:** Remove the `HowTo` JSON-LD block.
4. **Low:** Add in-game screenshots when available (Experience evidence).
5. **Deploy:** 301 `/` ↔ no-slash; HTTPS; HSTS/CSP.

---

## Schema Suggestions (ready-to-use)

**Optional — tighten `mainEntity` on the existing WebPage** (helps AI entity resolution for "who is Lohen"):
```json
{
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Genshin Impact",
  "character": {
    "@type": "Thing",
    "name": "Lohen",
    "alternateName": "The Aggressive Vanguard",
    "description": "5-star Cryo polearm character in Genshin Impact Version 6.6, Vice Captain of the Knights of Favonius Fifth Company.",
    "url": "https://www.lohen-genshin.com/"
  }
}
```
Merge the `character` node into the existing `videoGameSchema` and reference it from `WebPage.about` for clearer entity linking.

No other high-value schema opportunities exist on a single-page fan guide — FAQPage is already the AI-citation workhorse and aggregateRating must stay removed (no real voting system).
