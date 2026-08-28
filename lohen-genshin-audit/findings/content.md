# Content Quality Findings — lohen-genshin.com

**Method:** Extracted visible text (17,347 words), heading structure, FAQ JSON-LD, and interactive-tool markup from the built `index.html`.

## Depth & Intent Coverage — EXCELLENT

- **17,347 visible words** (target 5,000–7,000). Deep, not padded — high information density.
- **All 6 search intents covered** on one page in the right order:
  1. Identity → character card + lore at top
  2. Pull decision → verdict + pull decider tool near top
  3. Mechanics → dual-resource flow SVG + combo player
  4. Build → weapons/artifacts/constellations tables
  5. Teams → 6 comps incl. 6.6 Melt trio (Durin + Nicole)
  6. Materials → ascension/talent checklist + material calculator
- **16 H2 sections, 56 H3 subsections** — logical hierarchy.
- **15 data tables** (stats-per-ascension, multipliers, weapons, artifacts, teams, materials, constellations).
- **60 FAQ questions** (avg 54 words/answer, conclusion-first, keyword-rich).
- **4 interactive tools** (pull decider, material calculator, pull-cost calculator, Hexerei combo player) — all static-HTML-backed with `<details>` fallbacks so Googlebot can read everything.
- **60 `<details>` blocks, all with real text content** — collapsible content is present in initial HTML (SEO-safe).

## E-E-A-T Assessment — GOOD but improvable

| Signal | Status | Detail |
|---|---|---|
| Real experience | ✅ | "Active player with Adventure Rank 60 and 1,800+ hours," "tested at C0 with White Tassel and at C1 with Disaster and Remorse." |
| Specifics/tangibles | ✅ | Exact gear, teams, teams tested, version. |
| Data provenance | ⚠️ | Mentions "Data Sources: HoYoLAB, 6.6 beta" but **zero external links** to HoYoLAB/official/community sources. Unverifiable at a glance. |
| Author identity | ⚠️ | Anonymous "active player" — no name or avatar, no `/about/` page. Schema says "Lohen Genshin Guide Editorial Team" (Organization), text says individual. Inconsistent. |
| Freshness | ✅ | "Last Updated August 28, 2026." |
| Disclosure | ✅ | Clear "independent fan guide, not affiliated with HoYoverse" disclaimer + no cookies/privacy note. |
| No paywall/ads | ✅ | None — directly counters Game8's paid wall. |

**Key E-E-A-T gap:** no outbound citations and no named author entity. This is the single biggest credibility risk for a DA-0 site competing against Fandom/Game8/HoYoverse.

## Duplicate / Thin Content

- ❌ **1 duplicate FAQ question:** "What is Lohen's role in the Knights of Favonius?" appears twice (FAQ #17 and #38) with near-identical answers. Consolidate.
- ✅ No other thin or duplicate sections found.
- ⚠️ FAQ contains "Cuniculus Chapter" question, but the 建站框架 mentions "狡兔之章" (Cunning Rabbit Chapter) — verify the correct official English story-quest name to avoid factual drift (minor).

## Readability

- Large text volume with strong scannability (tables, H2/H3, TOC anchors, callouts). FAQ answers are short conclusion-first sentences — highly snippet- and AI-friendly.
- Technical gaming jargon expected by the audience; no need to dumb down.

## Visual Content (information-gain weapon)

- ⚠️ **Only 1 inline SVG** (dual-resource flow diagram, `viewBox 0 0 800 200`, has `role="img"` + `aria-label`). The framework plan calls for **3 SVGs** (dual-resource flow + Masterstroke state machine + Hexerei combo timeline). `llms.txt` also claims state machine + combo timeline, which are **not** present as SVGs. Two visualizations are missing → biggest content-gain differentiator is only 1/3 built.

## Recommendations

1. **High:** Add outbound citation links (HoYoLAB official Lohen page, miHoYo official 6.6 notice, community tests) — turns "Data Sources" claims into verifiable E-E-A-T evidence.
2. **High:** Add the 2 missing SVG visualizations (Masterstroke state machine, Hexerei combo timeline) to actually deliver the promised information-gain advantage.
3. **Medium:** Give the author a stable pseudonym + avatar and add a dedicated `/about/` page (author entity). Align text author with schema author.
4. **Low:** Remove the duplicate FAQ question; verify story-quest English name.
