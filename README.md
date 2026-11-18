# Dhiya Labs — website (Next.js)

Next.js 16 (App Router) site. Every page is prerendered as static HTML; the only server code is the contact form's API route. Built for Vercel.

## Run
```
bun install
bun run dev        # http://localhost:3000
bun run build      # production build in .next/
bun run start      # serve the production build
```
Copy `.env.example` to `.env` to send mail from the contact form locally.

## Where things live
- `src/app/(site)/` — routes for the homepage, `/about`, `/privacy`, `/terms`, `/security`. Each `page.tsx` only sets the head tags (`pageMeta()` in `src/lib/meta.ts`) and renders a component.
- `src/app/(product)/[slug]/` — DIL, Ayana, Neev, Vitana, Aire. It has its own root layout so `<body data-p="…">` can carry the product's colour theme. **All copy for these pages is data:** `src/data/products.ts`; the template is `src/components/ProductPage.tsx`.
- `src/app/api/contact/route.ts` — receives the form (JSON) and emails every submission to dhiya@dhiya.ai over SMTP (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, optional `MAIL_FROM`), plus a branded acknowledgement to the visitor. Templates are in `src/lib/email.ts`.
- `src/app/sitemap.ts` — `/sitemap.xml`. `/sitemap-index.xml` (the old address) redirects to it.
- `src/components/pages/HomePage.tsx` — homepage, assembled from `src/components/home/*` (hero video stage, five lines, chaos→calm bento, the DIL heart, architecture, use cases) + the shared CTA/form. `AboutPage.tsx` — About + investor block.
- `src/components/Base.tsx` — the frame around every page: launch curtain (home only), announcement bar, nav, footer, structured data. `src/components/Html.tsx` — the `<html>` shell and font links.
- `src/components/LegalPage.tsx` — legal pages. Copy is in `src/data/legal.ts`; company name, address, jurisdiction and last-updated date are in `site.legal` (`src/data/site.ts`).
- `src/components/ContactForm.tsx` — the basic-details form. `kind="partner"` → dhiya@dhiya.ai, `kind="investor"` → founders@dhiya.ai (addresses in `src/data/site.ts`).
- `src/styles/global.css` (tokens, nav, footer, product pages, forms), `home.css` (homepage only), `products.css` (product pages), `accordion.css` (Tailwind utilities for the use-case accordion).
- `public/media` — video, stills, logos, OG image. `public/llms.txt`, `public/robots.txt`.

## How the pieces fit
- **Styles.** Each component has a `.css` file beside it. Its rules are scoped with a data attribute that every element of that component carries (`Nav.tsx` → `[data-s-nav]`), so component styles cannot leak. New elements inside a component need the same attribute to pick up its styles.
- **Scripts.** Animation and interaction code is plain JavaScript in `public/` (`public/js/*`, `public/iso.js`, `public/forms.js`). Components load it with `<PageScript src="…" />`, which runs each script once, in order, after React has hydrated the page. The launch curtain's script is the one exception: it is a normal `<script>` so the curtain is up before first paint.
- **Links are plain `<a>` tags**, not `next/link`. Every navigation is a full page load, which is what the scripts above expect. Switch to `next/link` only together with making those scripts re-runnable.
- **Server components by default.** Only `PageScript` and the accordion (`src/components/ui`) are client components.

## Deploy (Vercel)
Import the repo. `vercel.json` sets the framework to Next.js. Add the `SMTP_*` variables (and optional `MAIL_FROM`) in Project → Environment Variables, then redeploy. The contact route runs as a serverless function; everything else is static.

## Launch intro
- The homepage shows a launch curtain for its first 10 appearances in the same browser profile (counted in local storage; no tracking). Reloading counts as another appearance.
- Click the Mandala or press Enter: its eight rays unfold, the curtain lifts and a short welcome shows. "Skip intro" or Escape closes it at once.
- During local development, `/?launch-preview=1` previews it without consuming an appearance. This override is disabled in production builds.

## Conventions
- Racks are 52U. Figures are USD. No case studies, no "watch the film".
- Product accents: Ayana Ember `#B03729`, Neev Engine cyan `#3EC6E8`, Vitana Hyperspace `#315ADE`, Aire Sky `#6CA9CB`; page tints are each accent's lightest shade. Brand lilac `#9B5DE5`, ink `#221A21`, page `#EAE0F0`.
