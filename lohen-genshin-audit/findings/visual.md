# Visual & Image Findings — lohen-genshin.com

**Method:** Image inventory from built HTML + asset sizes. No browser screenshots (Playwright not available in this environment); mobile layout assumed from Tailwind responsive classes.

## Image Inventory

| Asset | Size | Format | Usage | Alt text |
|---|---|---|---|---|
| hero-visual.webp | 113 KB | WebP | Hero, LCP element | ✅ "Stylized artwork of Lohen, a young knight with a polearm surrounded by cyan Cryo frost on a deep navy background" |
| og.webp | 96 KB | WebP | OG/Twitter card | n/a |
| favicon.png | 2.9 KB | PNG | favicon | n/a |
| apple-touch-icon.png | 72 KB | PNG | iOS home screen | n/a |
| (1 inline SVG) | — | SVG | Dual-resource flow diagram | ✅ `role="img"` + `aria-label` |

## Findings

### 1. Only one `<img>` on the whole page (MEDIUM)
A 17,000-word character guide renders a single raster image. The framework plan calls for **3+ visualizations** (dual-resource flow + Masterstroke state machine + Hexerei combo timeline) as the core information-gain weapon. Only the dual-resource flow SVG is implemented. This undercuts the "mechanism depth" differentiation the entire site strategy is built on.

### 2. Missing SVG visualizations (HIGH — content/visual overlap)
- ✅ Dual-resource flow diagram — present
- ❌ Masterstroke state machine — missing
- ❌ Hexerei combo timeline / damage distribution — missing (only the interactive ComboPlayer exists)

### 3. Hero image LCP optimization (HIGH)
No `fetchpriority="high"`, no `preload`, no `decoding="async"`. 113 KB for the LCP slot is heavy (see performance findings).

### 4. Alt text — good
- Hero alt is descriptive and keyword-rich ("Lohen ... Cryo frost") — natural keyword use, not keyword-stuffed.
- No decorative images; the SVG has proper `aria-label`.

### 5. Dimension hints — good
- Hero has explicit `width="768" height="1152"` → no layout shift (CLS-safe).
- OG card is WebP with reasonable weight.

### 6. No screenshots available
No browser automation (Playwright/Chrome DevTools) in this environment. Desktop/mobile captures should be produced after deployment (Cloudflare Pages + PageSpeed).

## Recommendations

1. **High:** Add `fetchpriority="high"` + preload + `decoding="async"` to hero.
2. **High:** Build the 2 missing SVG visualizations (Masterstroke state machine, Hexerei combo timeline) — they are the promised differentiator vs Game8/Icy-veins.
3. **Medium:** Compress hero to ~70 KB; consider AVIF.
4. **Low:** Add Open Graph `og:image` for social sharing is present; verify after deploy with the URL inspector.