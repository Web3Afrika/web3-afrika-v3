# Web3 Afrika — SEO & AI Discoverability

This site is optimized for both search engines and AI answer engines
(ChatGPT, Claude, Perplexity, Google AI Overviews).

## What was done

**Prerendering (the foundation).** The site is a Vite + React SPA. It now uses
[`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg) to generate
real static HTML for every route at build time. Previously, crawlers and AI bots
(which don't run JavaScript) saw an empty page; now they see full content.

- Entry/routes: [src/main.tsx](src/main.tsx), [src/App.tsx](src/App.tsx)
- React Router pinned to v6 (vite-react-ssg requirement; app uses only v6-compatible APIs)
- Vercel serves per-page HTML with clean URLs: [vercel.json](vercel.json)

**Per-page metadata.** Unique title, description, canonical URL, Open Graph and
Twitter tags per route.

- Reusable component: [src/components/Seo.tsx](src/components/Seo.tsx)
- Shared constants: [src/lib/site.ts](src/lib/site.ts)
- Social image: [public/og-image.png](public/og-image.png) (1200×630)

**Structured data (JSON-LD).** Injected per page:

- Site-wide: `Organization` + `WebSite` + `Person` (founder Idris Olubisi, so the
  `Organization.founder` reference always resolves) — in [src/App.tsx](src/App.tsx)
- About: `FAQPage`
- Blog & Events: `ItemList`
- Every page: `BreadcrumbList`
- Builders: [src/lib/schema.ts](src/lib/schema.ts) (data-driven from [src/constants.ts](src/constants.ts))

**Answer-shaped content (for AI).**

- FAQ section: [src/components/Faq.tsx](src/components/Faq.tsx) + [src/data/faqs.ts](src/data/faqs.ts)
- Founder + impact section: [src/components/FounderImpact.tsx](src/components/FounderImpact.tsx)

**Crawler / AI files** (in `public/`, served at the domain root):

- [public/robots.txt](public/robots.txt) — welcomes AI bots, references the sitemap
- `public/sitemap.xml` — generated at build with fresh `lastmod`
- [public/llms.txt](public/llms.txt) — AI-readable site summary

**Blog visibility.** [scripts/fetch-blog-feed.mjs](scripts/fetch-blog-feed.mjs)
snapshots the Hashnode RSS feed at build time into
[src/data/blog-feed.json](src/data/blog-feed.json), so `/blog` and the home page
render real posts in static HTML. The client still refreshes from `/api/rss`, and
falls back to the snapshot if that call fails.

## How the build works

`npm run build` runs, in order:

1. `scripts/fetch-blog-feed.mjs` — refresh blog snapshot
2. `scripts/generate-sitemap.mjs` — regenerate `public/sitemap.xml`
3. `tsc -b` — type-check
4. `vite-react-ssg build` — prerender all routes to `dist/`

`npm run dev` uses `vite-react-ssg dev`. `npm run preview` serves the built `dist/`.
(Note: the `/api/rss` function runs in dev and on Vercel, not in `vite preview`.)

---

## ✅ Go-live checklist (manual steps — only you can do these)

0. **Set `VITE_DISCORD_URL`** in the Vercel project's build environment (see `.env.example`).
   It is inlined at build time; if it's missing, `/discord` shows a fallback link instead of
   redirecting. Rebuild after setting it.

1. **Deploy** to Vercel (push to `main`). Confirm these resolve after deploy:

   - `https://www.web3afrika.com/robots.txt`
   - `https://www.web3afrika.com/sitemap.xml`
   - `https://www.web3afrika.com/llms.txt`
   - View-source on `/about` should show the founder text + FAQ in raw HTML.

2. **Google Search Console** (search.google.com/search-console)

   - Add & verify the domain property.
   - Submit `https://www.web3afrika.com/sitemap.xml`.
   - Use "URL Inspection" → "Request indexing" for `/`, `/about`, `/events`, `/blog`.

3. **Bing Webmaster Tools** (bing.com/webmasters) — verify + submit the sitemap.
   (Bing also powers ChatGPT search.)

4. **Validate structured data** at
   [Rich Results Test](https://search.google.com/test/rich-results) and
   [Schema Markup Validator](https://validator.schema.org/) for each page.

5. **Confirm / correct the facts** used in content & schema:

   - Community numbers (currently 12,500+ members, 2,100+ developers, 7K+ at events —
     from [src/components/stat-data.tsx](src/components/stat-data.tsx) and [src/data/faqs.ts](src/data/faqs.ts)).
   - Founding year (not yet stated — add if you want it in the Organization schema).
   - Any partner/ecosystem names claimed in [src/data/faqs.ts](src/data/faqs.ts) and [src/components/FounderImpact.tsx](src/components/FounderImpact.tsx), backed by the partner list in [src/constants.ts](src/constants.ts).

6. **Verify social profiles link back** to `web3afrika.com` (X, LinkedIn company page,
   YouTube, Discord, Hashnode). Bidirectional links strengthen entity trust. Update
   `ORG_SAME_AS` in [src/lib/site.ts](src/lib/site.ts) if any handle/URL differs
   (LinkedIn company page and YouTube URLs are best-guesses — confirm them).

7. **Optional, high-leverage:** create a **Wikidata** entry for Web3 Afrika and for
   Idris Olubisi. AI models and Google's knowledge graph lean heavily on Wikidata for
   entity recognition.

8. **Design polish (optional):** [public/og-image.png](public/og-image.png) is the
   logo centered on black. For a richer social card (headline + tagline), have the
   design team export a 1200×630 PNG and replace the file — no code change needed.
