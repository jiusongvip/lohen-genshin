# AI Search Readiness (GEO) Findings — lohen-genshin.com

**Method:** Reviewed `llms.txt`, FAQ structured data, content citability structure, and brand/authority signals. No AI-visibility measurements possible pre-deploy (no Profound/SERanking/DataForSEO credentials).

## Strengths

### 1. llms.txt — present and well-formed ✅
`https://www.lohen-genshin.com/llms.txt` exists with:
- A clear site description (what the page is about, character, version).
- A **Page Summary** paragraph (a strong, citable "about" block).
- **Key Sections** listing mechanics/build/teams/materials/tools/FAQ.
- A **Links** section pointing to the homepage.

This is exactly what AI crawlers (ChatGPT, Perplexity, Gemini) look for. Well done.

### 2. Citability — strong paragraph structure ✅
- 16 H2 sections, each with conclusion-first opening paragraphs.
- **60 FAQ questions, all with conclusion-first answers** (e.g., "Masterstroke lasts 12 seconds base and is extended to 16 seconds..."). AI Overviews and answer engines quote this pattern directly.
- Concrete numbers everywhere (120–130% ER, 9.4/10, 32% CRIT, 113 KB...), which answer engines reward.

### 3. Structured data for AI comprehension ✅
WebPage/VideoGame/HowTo/FAQPage markup gives AI crawlers machine-readable understanding of the entity (Lohen), his attributes, and Q&A.

### 4. No gating ✅
No login wall, no paywall, no JS-rendered content (all in initial HTML) — AI crawlers can read the full page.

## Weaknesses

### 1. Zero external citations / authority signals (HIGH)
- The page has **no outbound links at all** (only internal anchors + mailto). "Data Sources: HoYoLAB, 6.6 beta" is text-only.
- AI crawlers assess authority partly by outbound citations and inbound links. A DA-0 site with zero citations is unlikely to be cited by AI answer engines over Fandom/HoYoverse.
- **Fix:** link to HoYoLAB official pages, miHoYo 6.6 notices, and community tests; get 1–3 community backlinks (Reddit r/Genshin_Impact, HoYoLAB posts, Discord).

### 2. No brand mention signals (MEDIUM)
- No evidence of brand searches (`lohen genshin guide`) or external mentions pre-deploy. The 建站框架 rightly calls for community distribution to seed brand-search + backlinks; nothing live yet.

### 3. llms.txt not linked from HTML (LOW)
Not a requirement (it's a root-convention file), but a `<link rel="llms" href="/llms.txt">` hint is a cheap signal. Optional.

### 4. Single URL / limited surface (INFO)
Only `/` in the index. AI crawlers have one page to quote. The 5 planned subpages (build/mechanics/teams/materials/worth-pulling) would add citeable surface area.

## Recommendations

1. **High:** Add real outbound citations (HoYoLAB, official notices) to the Data Sources section.
2. **High:** Community distribution to earn 3–5 natural backlinks + brand searches (per 建站框架 §6.5.6).
3. **Medium:** Add the 2 missing visualizations so AI engines can cite unique mechanism content (state machine, combo timeline).
4. **Medium:** After deploy, run an AI-visibility check (e.g., ask ChatGPT/Perplexity "Who is Lohen in Genshin Impact?" and see if the site is cited).
5. **Low:** Add `<link rel="llms" href="/llms.txt">`.