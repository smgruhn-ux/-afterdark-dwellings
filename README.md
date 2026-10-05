# AFTERDARK DWELLINGS

An independent interiors publication focused on dark modern interiors, architectural lighting, material depth, considered home products and practical design guidance.

Stack: React, TypeScript, Vite, React Router, plain CSS. Contact: afterdarkdwellings@gmail.com · Pinterest: https://www.pinterest.com/afterdarkdwellings/

## Install, develop, build

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

The build also writes `sitemap.xml`, `robots.txt`, a `404.html`, and a static `index.html` for every route (for example `dist/guides/layered-lighting-for-dark-interiors/index.html`) with its own title, description, canonical URL and Open Graph tags. Direct links to any page therefore work on GitHub Pages and Cloudflare Pages.

## Configuration (environment variables)

| Variable | Purpose | Default |
| --- | --- | --- |
| `VITE_SITE_URL` | Canonical base URL used for canonical links, Open Graph and the sitemap (no trailing slash) | `https://smgruhn-ux.github.io/-afterdark-dwellings` |
| `VITE_BASE_PATH` | Path the site is served from | `/` |

## Deploy to GitHub Pages

1. In the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` builds with `VITE_BASE_PATH=/<repo-name>/` and `VITE_SITE_URL=https://<owner>.github.io/<repo-name>` and publishes `dist/`.
3. Direct article URLs work because every route has its own generated HTML file, and unknown URLs get `404.html` (which also boots the React app).

## Custom domain (for example afterdarkdwellings.com)

1. Add repository variables under **Settings → Secrets and variables → Actions → Variables**: `SITE_URL` = `https://afterdarkdwellings.com` and `BASE_PATH` = `/`.
2. Add a file `public/CNAME` containing `afterdarkdwellings.com`, or set the domain under **Settings → Pages**.
3. Create DNS records as described in the GitHub Pages docs (an `A`/`ALIAS` set for the apex or a `CNAME` for `www`), and enable **Enforce HTTPS**.
4. Re-run the workflow. Canonicals, Open Graph URLs, the sitemap and `robots.txt` all follow `SITE_URL`.

For Cloudflare Pages use build command `npm run build`, output directory `dist`, and set `VITE_SITE_URL` to your production URL.

## Content

### Add a guide
Add an object to `src/data/guides.ts` (`slug`, `title`, `category`, `spaceSlug`, `deck`, `description`, `readTime`, `intro`, numbered `sections`, `related`). Routes, the archive, related guides, sitemap and SEO metadata update automatically. Add the guide to a space's `guides` list in `src/data/spaces.ts` if relevant.

### Add verified products
Add an entry to `src/data/products.ts` **only after confirming the product and merchant link are real**. Set `verified: true` and `disclosureRequired` appropriately. Products appear automatically in matching "Shop the Idea" blocks (matched by `relatedGuide` and `category`), on space pages (`relatedSpace`) and on Curated Finds. Anything unverified, or missing a name, merchant or URL, is never shown as purchasable; the site displays `VERIFIED RECOMMENDATION COMING SOON`. Never invent names, prices, merchants, ratings or availability. To make an item in Shop the Look purchasable, set its `productId` in `src/data/looks.ts`.

### Insert affiliate URLs
Set `affiliateUrl` on the product. The site prefers `affiliateUrl` and falls back to `destinationUrl`. Affiliate links are marked `rel="sponsored nofollow"`. Do not claim a specific affiliate programme until the relationship is verified.

### Add images and Pinterest images
Place files in `public/images/` and reference them by path, for example `heroImage: { src: '/images/guides/slug-hero.jpg', alt: 'Describe the photo' }`. Until set, obvious `IMAGE PLACEHOLDER` blocks are shown. Use only images you own or are licensed to use.

- Guide hero: `heroImage`; section images: `image` on a section.
- Vertical Pinterest image (2:3, e.g. 1000×1500): `pinImage` on the guide; used by the SAVE THIS GUIDE button.
- Social preview (1200×630 JPG/PNG recommended): `ogImage` on the guide. The default is `public/og-default.svg`; replace it with a PNG/JPG and update `DEFAULT_OG_IMAGE` in `src/config/site.ts` because many networks do not render SVG previews.
- Pinterest boards: set `boardUrl` on each space in `src/data/spaces.ts` (it falls back to the profile until set).

## Still needs real input

- Real photography (hero, section, room, space and Shop the Look images) and vertical Pinterest images.
- Verified products with real merchant links, and affiliate URLs once programme relationships are confirmed.
- Exact Pinterest board URLs per room.
- A PNG/JPG default Open Graph image.
