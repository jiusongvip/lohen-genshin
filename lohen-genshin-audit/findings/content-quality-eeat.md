# Content Quality & E-E-A-T Analysis — lohen-genshin.com

**Analyzed:** Homepage `/` (single-page site — the only content page).
**Date:** 2026-08-28 | **Reference:** Sept 2025 QRG + Dec 2025 core update (E-E-A-T applies to ALL competitive queries now)

---

## Google's "Who / How / Why" Test

| Question | Verdict | Evidence |
|---|---|---|
| **Who** created it? | ⚠️ WEAK | Author is described ("active player, AR 60, 1,800+ hours, tested C0/C1") but **anonymous** — no name, no avatar, no byline identity. Dec 2025 core update penalizes anonymous/generic authorship even for non-YMYL. |
| **How** was it created? | ✅ STRONG | Process disclosed: "tested at C0 with White Tassel, at C1 with Disaster and Remorse, across Melt/Freeze/Mono Cryo"; "verified against the 6.6 beta kit and cross-checked with community tests on HoYoLAB"; now with 2 outbound citation links (Genshin Impact Official, HoYoLAB). First-hand methodology visible. |
| **Why** does it exist? | ✅ STRONG | "One page. Every answer. No ten tabs, no login wall, no top-up ads." People-first intent, no affiliate/paywall, no word-count padding (content is dense tables/FAQ/SVG). |

**Bottom line:** 2 of 3 strong, 1 weak (author identity). Under the core system's helpfulness signals the page is in good shape, but the anonymous byline is the main "Who" gap to close.

---

## E-E-A-T Breakdown

| Factor | Score | Key Signals |
|---|---|---|
| Experience | **22/25** (was 20) | AR 60, 1,800+ hrs; tested C0 (White Tassel) & C1 (Disaster and Remorse) in Melt/Freeze/Mono Cryo; original frame data table, elemental-gauge math, specific multipliers; 3 original SVG visualizations; 4 interactive tools; **first-person voice now in Author block + Core Principle**. **Missing:** real gameplay screenshots/video. |
| Expertise | **23/25** (was 22) | Exceptional technical depth — ICD (2.5s/3-hit rule), melt gauge math, energy economy, frame data, C0–C6 DPS% values; correct specialized vocabulary; current to v6.6 (2026-05-20); claims sourced with outbound links; **named author (Eira Vanguard) + bio + Person schema**. |
| Authoritativeness | **6/25** | Brand-new DA-0 site — no inbound backlinks, not cited by other sources, no recognition/brand mentions yet. Expected for launch; the #1 gap to close via community distribution (off-site). |
| Trustworthiness | **20/25** (was 18) | Email contact present; transparent authorship + "independent fan guide, not affiliated with HoYoverse"; no-cookies/no-trackers claim + **corrections policy** now in footer; visible "Last Updated"; removed the fabricated rating (good). **Missing:** physical address, separate ToS (out of single-page scope), HTTPS not yet live. |

**Total E-E-A-T: 71/100** (post-fix; was 66 — Moderate/Strong boundary). Drag factors remain Authoritativeness (off-site) and missing screenshots.

### ✅ Fixes applied (2026-08-28, per recommendations)
- **Author identity:** Added stable pseudonym **Eira Vanguard** (@eiravanguard) + avatar (EV monogram + AR60 badge) + one-line bio in the Author block. Added `Person` schema (`jobTitle`, `knowsAbout`, `description`) and linked `WebPage.author` + `meta name="author"` to the Person. (Fixes the "Who" weakness + Expertise gap.)
- **First-person experience:** Rewrote the Author block in first person ("I'm an active player… I tested Lohen… I verified…") and added "In my testing across Melt, Freeze, and Mono Cryo…" to the Core Principle callout. (Strengthens Experience.)
- **Trust/transparency (inline, single-page):** Footer now carries an expanded no-cookies/no-trackers statement + corrections policy ("Email to correct, changelog note"). (Strengthens Trustworthiness without adding pages.)

### ⏳ Still open (cannot be done in code)
- **Authoritativeness / backlinks:** community distribution (Reddit r/Genshin_Impact, HoYoLAB, Discord) — off-site action, per 建站框架 §6.5.6. Target 3–5 natural backlinks + brand searches.
- **Real in-game screenshots:** cannot fabricate (would violate the honesty we restored). Add real screenshots (panel, damage numbers, combo in action) when available; swap the stylized hero for an original licensed visual if desired.
- **HTTPS / security headers:** applies at Cloudflare deploy.

---

## Content Metrics

| Metric | Value | Assessment |
|---|---|---|
| Word count | 17,389 (floor: 500) | ✅ Massively exceeds floor — but dense, not padded (tables/FAQ/SVG) |
| Flesch Reading Ease | **65.0** (target 60–70) | ✅ In the ideal band |
| Avg sentence length | 18.1 words (target 15–20) | ✅ |
| Avg paragraph length | 24.9 words (~2–3 sentences) | ✅ |
| Keyword density (`lohen`) | 1.66% (1–3% natural) | ✅ |
| Semantic variations | Masterstroke 0.81%, Hexerei 0.76%, Joy 0.79%, Cryo 0.93%, Melt 0.73% | ✅ Rich natural coverage |
| Primary kw in first 100 words | Yes | ✅ |
| Heading hierarchy | H1 ×1 → H2 ×16 → H3 ×56 | ✅ Clean, descriptive |
| Multimedia | 1 img + 3 SVGs + 15 tables | ✅ (SVGs = the differentiator) |
| Internal links | 21 anchor links (in-page TOC/sections) | ✅ For single-page arch |
| External links | 2 citations | ⚠️ Works, could add more |
| Freshness | "Last Updated Aug 28, 2026" visible + datePublished/dateModified schema | ✅ |
| FAQ | 59 questions, conclusion-first, avg 54 words | ✅ AI/snippet friendly |

**Content Quality Score: 84/100**

---

## AI Content Assessment (Sept 2025 QRG)

**Verdict: passes the low-quality-AI marker screen.**

- ✅ Highly specific, data-dense (real numbers everywhere) — not generic phrasing
- ✅ Original assets: 3 unique SVG visualizations, 4 interactive tools, frame-data table (not copyable from competitors)
- ✅ No repetitive cross-page structure (single page, unique sections)
- ✅ Human process evidence ("tested at C0/C1...", beta-verified, HoYoLAB cross-check)
- ⚠️ No named author attribution — the single marker that is not fully addressed

No scaled-content-abuse, no site-reputation-abuse, no expired-domain risk.

---

## AI Citation Readiness: 82/100

### Strengths (high-citation signals)
- `llms.txt` present and well-structured (summary + sections + links)
- 59 conclusion-first FAQ answers with concrete numbers — highly quotable
- Clean H1→H2→H3 flow; tables for comparative data (weapons, teams, constellations)
- Structured data: WebPage, VideoGame, Organization, HowTo, FAQPage (FAQ *rich results* retired May 2026, but markup still aids AI parsing/entity resolution)
- Original first-party data: frame timings, DPS% by constellation, melt math — first-party data is the most-cited signal

### Weaknesses
- Single page → no content cluster / topical-authority breadth (AI prefers depth + related coverage)
- Anonymous author → no clear Person entity for attribution
- Only 2 outbound citations; no inbound links/brand mentions yet
- No live presence to be crawled by AI engines (pre-deploy)

### GEO note
Google AI Mode (Gemini) now has zero organic blue links — citation is the only visibility. This page's first-party data + llms.txt + FAQ structure make it a strong candidate once it has a live domain and 1–3 community backlinks to seed trust.

---

## Issues Found

1. ~~**Anonymous author identity** (High)~~ ✅ **DONE** — pseudonym Eira Vanguard + avatar + bio + `Person` schema + `meta author` updated.
2. **No authoritativeness signals** (High) — DA-0, zero backlinks, no brand mentions. **Open** — requires community distribution (off-site).
3. **Missing trust pages** (Medium) — privacy/corrections statement now **inline in footer** ✅; physical address & separate ToS still absent (acceptable for hobby fan site).
4. ~~**No first-person voice** (Medium)~~ ✅ **DONE** — Author block + Core Principle callout rewritten in first person.
5. **No real screenshots/video** (Medium) — **Open** — cannot fabricate; add real in-game evidence when available.
6. **External citations thin** (Low) — 2 links remain; add HoYoLAB thread / official version-notice deep links only with verified URLs.
7. **HTTPS not live** (Low) — pending Cloudflare deploy.

---

## Recommendations (by E-E-A-T weight)

### 1. Trustworthiness (weight 30%) — trust signals
- ✅ **DONE (inline):** expanded no-cookies/no-trackers statement + corrections policy in footer.
- **Remaining:** physical address optional; separate ToS page would conflict with single-page scope (skip).

### 2. Expertise (weight 25%) — name the author
- ✅ **DONE:** stable pseudonym **Eira Vanguard** + one-line bio + avatar (EV monogram + AR60 badge) in the Author block; `Person` schema (`jobTitle`, `knowsAbout`, `description`); `WebPage.author` and `meta name="author"` now point to the Person.

### 3. Experience (weight 20%) — first-person + evidence
- ✅ **DONE:** Author block ("I'm an active Genshin Impact player… I tested Lohen… I verified…") + "In my testing across Melt, Freeze, and Mono Cryo…" in the Core Principle callout.
- ⏳ **Open:** add 2–3 real in-game screenshots (panel, damage numbers, combo in action) — December 2025 update rewards original screenshots; do not fabricate.

### 4. Authoritativeness (weight 25%) — community distribution
- ⏳ **Open (off-site):** per 建站框架 plan — post mechanism SVG + guide link to r/Genshin_Impact, HoYoLAB, Discord; target 3–5 natural backlinks + brand searches within 2 weeks. Only path to move this factor off 6/25.

### 5. Content freshness
- Keep monthly "Last Updated" cadence; after 6.6 live launch, add a "verified in production" line for beta-sourced numbers.

---
