# Performance Findings — lohen-genshin.com (lab-only)

**Method:** Static analysis of built assets. **No CrUX field data** (site not deployed, no GSC/PSI credentials). Metrics below are lab estimates, not field measurements.

## Asset Inventory

| Asset | Size | Notes |
|---|---|---|
| index.html | 280 KB | Single page, 17,347 words, 7 JSON-LD blocks, 4 inline tool scripts |
| Layout.C1T2YTol.css | 28 KB | Single render-blocking CSS |
| hero-visual.webp | 113 KB | 768×1152 portrait — likely LCP element |
| og.webp | 96 KB | Social share image |
| apple-touch-icon.png | 72 KB | Fine |
| favicon.png | 2.9 KB | Fine |
| outfit-latin.woff2 / latin-ext.woff2 | 47 KB total | Variable font, not preloaded |
| Inline JS (4 tool scripts) | ~9 KB | Pull decider, combo player, material calc, cost calc |

**Key positive:** ZERO third-party requests (no analytics, no CDN, no external fonts, no ad scripts). This is rare and excellent — it keeps INP naturally low and removes a whole class of render-blocking dependencies.

## Core Web Vitals — Lab Estimates

| Metric | Estimate | Assessment |
|---|---|---|
| **LCP** | ~1.5–2.5s (mobile) | ❌ RISK. Hero image is large (113 KB), not preloaded, and has **no `fetchpriority="high"`**. LCP waits for CSS + image discovery. |
| **INP** | Low | ✅ Good. All tool scripts are small and event-driven; no long main-thread tasks, no third-party. |
| **CLS** | Low | ✅ Good. Hero has explicit `width`/`height` (768×1152). Fonts via fontsource variable (verify `font-display: swap` in emitted CSS). |
| **TTFB** | N/A (local) | Expect fast on Cloudflare Pages (static file, edge cache). |

## Specific Findings

### 1. LCP hero not optimized (HIGH)
- `<img src="/hero-visual.webp" width="768" height="1152">` has **no `fetchpriority="high"`**, no `preload`, and no `decoding="async"`.
- 113 KB is large for a decorative hero; consider a smaller/simplified version for the LCP slot (e.g., 600–700 px wide, ~60–80 KB) or an AVIF fallback.
- **Fix:** add `fetchpriority="high"` + `<link rel="preload" as="image" href="/hero-visual.webp">` in `<head>`.

### 2. No font preload (MEDIUM)
- 47 KB of variable Outfit font is render-blocking-adjacent; without preload, text swaps late.
- **Fix:** add `preload` for the two `woff2` files, confirm `font-display: swap`.

### 3. Single 280 KB HTML document (MEDIUM)
- Everything is inline in one file. Great for zero-request economy but heavy to parse on low-end mobile.
- **Fix (optional):** acceptable as-is for a content page; keep an eye on mobile LCP after launch. Could defer the 4 tool scripts with `defer` (they don't affect first paint).

### 4. No lazy loading (LOW)
- Only one `<img>`; it is above-the-fold so lazy loading would be wrong here. Correct as-is.

## Recommendations

1. **High:** `fetchpriority="high"` + preload on hero image; add `decoding="async"`.
2. **High:** Preload the two font files; confirm `font-display: swap`.
3. **Medium:** Consider compressing the hero to ~70 KB.
4. **Medium:** After deployment, run PageSpeed Insights / CrUX to replace lab estimates with field data.
