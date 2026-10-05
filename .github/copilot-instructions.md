# AFTERDARK DWELLINGS repository rules

1. The brand name is ALWAYS "AFTERDARK DWELLINGS".
2. It is exactly two words.
3. Never change it to "After Dark Dwellings" (or any other variant).
4. Never add GRVEZ VAULT branding, music content or references to the old parent site.
5. Never fabricate products, prices, reviews, ratings, merchants, or affiliate relationships. Unverified recommendations display "VERIFIED RECOMMENDATION COMING SOON".
6. Preserve the dark architectural editorial aesthetic (true black, graphite, steel, silver; Cinzel headings, Inter body; sharp corners; no beige, pastel, red or orange).
7. Prioritize mobile responsiveness. No horizontal scrolling.
8. Keep product recommendations contextual to editorial content.
9. Run `npm run build` before completing significant changes.
10. Do not knowingly leave broken routes or links.

Data lives in `src/data/` (`guides.ts`, `spaces.ts`, `products.ts`, `looks.ts`). Only add products to `products.ts` once verified. The canonical base URL is configured via `VITE_SITE_URL`, never hard-coded.
