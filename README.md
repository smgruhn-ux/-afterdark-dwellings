# Afterdark Dwellings

A standalone dark-interiors publication focused on architectural lighting, room-by-room design guidance, material depth, curated home finds, Pinterest discovery, and affiliate-ready editorial content.

## Brand

**Afterdark Dwellings** — exactly two words.

Public contact: `afterdarkdwellings@gmail.com`

Pinterest: https://www.pinterest.com/afterdarkdwellings/

## Stack

- React
- TypeScript
- Vite
- React Router
- Responsive custom CSS
- GitHub Pages deployment workflow

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Main routes

- `/`
- `/guides`
- `/guides/:slug`
- `/spaces`
- `/spaces/:slug`
- `/curated-finds`
- `/shop-the-look`
- `/about`
- `/contact`
- `/editorial-policy`
- `/affiliate-disclosure`
- `/privacy-policy`
- `/terms-of-use`
- `/faq`
- `/pinterest`

## Adding a guide

Guide content lives in `src/data.ts`.

Add a new object to the `guides` array with:

- `slug`
- `category`
- `title`
- `deck`
- `readTime`
- `image`
- `imageAlt`
- numbered `steps`
- optional `productId` on relevant steps
- `rule`
- `relatedSpaces`

## Adding a product

Product recommendations live in `src/data.ts`.

Each product supports:

- real product name
- merchant
- category
- editorial note
- normal destination URL
- optional affiliate URL
- verified flag
- related spaces

The UI automatically prefers `affiliateUrl` when one exists. Do not add fabricated products, prices, ratings, reviews, availability, or merchants.

## GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`.

GitHub Pages should be configured to use **GitHub Actions** as the deployment source. The Vite base path is derived from the repository name during GitHub Actions builds.

Direct article routes use `public/404.html` to restore SPA routes on GitHub Pages.

## Custom domain

Afterdark Dwellings can use a custom domain later, for example:

`afterdarkdwellings.com`

When the domain is purchased:

1. Add the custom domain in GitHub Pages settings.
2. Add the DNS records GitHub provides at the domain registrar/DNS host.
3. Add a `CNAME` file in `public/` containing the domain.
4. Update `public/sitemap.xml` and `public/robots.txt` from the temporary GitHub Pages URL to the final domain.
5. Re-check canonical/SEO URLs and Pinterest domain verification.
6. Update Pinterest, Amazon Associates, CJ, and other affiliate properties only after the new domain is live.

## Repository name note

The current GitHub repository name begins with a leading hyphen: `-afterdark-dwellings`.

The preferred repository name is:

`afterdark-dwellings`

Renaming the repository in GitHub settings is recommended before the public GitHub Pages URL is promoted. After a rename, also update the temporary GitHub Pages URLs in `public/sitemap.xml`, `public/robots.txt`, and the Pages fallback path in `public/404.html`.

## Editorial rules

Repository-wide Copilot instructions live in:

`.github/copilot-instructions.md`

Key rules include:

- Brand is always **Afterdark Dwellings**
- No GRVEZ branding
- No fabricated products or affiliate claims
- Mobile-first behavior
- Contextual product recommendations
- Build verification before significant changes
