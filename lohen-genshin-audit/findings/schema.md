# Schema & Structured Data Findings — lohen-genshin.com

**Method:** Extracted all 7 `<script type="application/ld+json">` blocks from homepage HTML and the 404 page. Parsed and validated for correctness against Google's guidelines.

## Current Implementation (homepage)

| # | @type | Bytes | Status |
|---|---|---|---|
| 1 | WebPage | 840 | ✅ Valid — has `datePublished`, `dateModified`, `isPartOf`, `about` (VideoGame), `author`, `publisher`, `inLanguage` |
| 2 | VideoGame | 276 | ✅ Valid — "Genshin Impact" with HoYoverse publisher, platforms listed |
| 3 | Organization | 174 | ✅ Valid — site org with name, URL, logo |
| 4 | BreadcrumbList | 172 | ⚠️ Trivial — single item (just "Lohen Guide" → `https://www.lohen-genshin.com`). Valid but barely useful. |
| 5 | HowTo | 1,376 | ✅ Valid — 5-step combo rotation, `totalTime: PT20S`, clear step titles/text |
| 6 | **Game** | 528 | ❌ **CRITICAL** — `aggregateRating` with `ratingValue: 9.4, ratingCount: 78` + `review` authored by site's own editorial team. This is a **self-serving, fabricated rating**, which violates Google's structured data review guidelines. |
| 7 | FAQPage | 25,931 | ⚠️ Valid markup but 2 issues: (a) 1 duplicate question, (b) FAQ rich results are **restricted** since Aug 2023 (only authoritative health/gov sites). Still harmless for AI/search. |

## Critical Issue: Game + AggregateRating

**Severity: CRITICAL**

- The `Game` entity with `aggregateRating` `9.4/10` and `78` reviews is fabricated — there is no user-review system, no voting widget, no real rating aggregation on the page. The "78 votes" number has no basis.
- Google's guidelines explicitly prohibit: "Fake reviews or ratings," "Self-serving reviews," "Reviews that are not directly from users on the page."
- **Penalty risk:** If Google detects this, it can apply a manual action (site-wide or page-level) that removes all rich results and suppresses rankings. Even if not caught automatically, this is a ticking compliance bomb.
- **Action:** Remove the `Game` + `AggregateRating` block entirely. If you want to show a rating, implement a real user voting system (e.g., a simple thumbs-up/thumbs-down widget, store votes in a DB, and only then mark up the live aggregate rating).

## 404 Page Schema Pollution

**Severity: HIGH**

The 404 page emits the same 6 JSON-LD blocks (WebPage, VideoGame, Organization, BreadcrumbList, HowTo, Game). A 404 page is an error page — it should carry **zero** rich structured data. The `noindex` meta prevents indexing, but the markup is still emitted unnecessarily.

## Other Issues

| Issue | Severity | Detail |
|---|---|---|
| Duplicate FAQ question | Low | "What is Lohen's role in the Knights of Favonius?" appears twice (FAQ #17, #38) |
| BreadcrumbList single-item | Info | Valid but trivial — only the homepage. Acceptable for a single-page site. |
| Author inconsistency | Low | Schema says "Lohen Genshin Guide Editorial Team" (Organization), but page text says "active player" (individual). Align to one. |
| HowTo rich result eligibility | Info | Since Sep 2023, Google shows HowTo rich results only on desktop. Still valid markup. |

## Recommendations

1. **CRITICAL:** Remove `Game` + `aggregateRating` JSON-LD block immediately. If you want a rating, implement authentic user voting.
2. **High:** Strip all JSON-LD from the 404 page template.
3. **Low:** Remove duplicate FAQ question; align author identity.