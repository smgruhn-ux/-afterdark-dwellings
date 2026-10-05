import { BRAND, DEFAULT_OG_IMAGE } from '../config/site';
import { guides } from './guides';
import { spaces } from './spaces';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

export const withBrand = (title: string) => (title === BRAND ? title : `${title} | ${BRAND}`);

export const routes: RouteMeta[] = [
  { path: '/', title: `${BRAND} | Dark Interiors, Objects & Atmosphere`, description: 'AFTERDARK DWELLINGS is an independent interiors publication: dark modern interiors, architectural lighting, material depth and considered home products.' },
  { path: '/guides', title: withBrand('Dark Interior Design Guides'), description: 'Practical dark interior design guides on lighting, materials, texture and room-by-room composition.' },
  ...guides.map((g) => ({ path: `/guides/${g.slug}`, title: withBrand(g.title), description: g.description, image: g.ogImage })),
  { path: '/spaces', title: withBrand('Dark Interior Ideas by Space'), description: 'Room-by-room dark interior ideas: living rooms, bedrooms, kitchens, bathrooms, home offices, entryways and small spaces.' },
  ...spaces.map((s) => ({ path: `/spaces/${s.slug}`, title: withBrand(`Dark ${s.name}`), description: s.description })),
  { path: '/curated-finds', title: withBrand('Curated Finds'), description: 'Editorially selected home products for dark interiors, listed only when verified with a real merchant link.' },
  { path: '/shop-the-look', title: withBrand('Shop the Look'), description: 'Visual room edits for dark interiors. Products appear only once verified merchant links are supplied.' },
  { path: '/about', title: withBrand('About'), description: 'AFTERDARK DWELLINGS is an independent interiors publication with original editorial content and transparent affiliate practices.' },
  { path: '/contact', title: withBrand('Contact'), description: 'Contact AFTERDARK DWELLINGS at afterdarkdwellings@gmail.com.' },
  { path: '/faq', title: withBrand('FAQ'), description: 'Answers about AFTERDARK DWELLINGS, product recommendations, affiliate links and pricing.' },
  { path: '/privacy-policy', title: withBrand('Privacy Policy'), description: 'How AFTERDARK DWELLINGS handles visitor data, cookies and third-party links.' },
  { path: '/terms-of-use', title: withBrand('Terms of Use'), description: 'Terms of use for the AFTERDARK DWELLINGS website.' },
  { path: '/affiliate-disclosure', title: withBrand('Affiliate Disclosure'), description: 'Some links on AFTERDARK DWELLINGS may become affiliate links. Read how we handle them.' },
  { path: '/editorial-policy', title: withBrand('Editorial Policy'), description: 'The editorial principles behind AFTERDARK DWELLINGS recommendations: real products, real merchants, no fabricated claims.' },
];

export const notFoundMeta: RouteMeta = {
  path: '/404',
  title: withBrand('Page Not Found'),
  description: 'The page you are looking for could not be found.',
  noindex: true,
};

export const defaultImage = DEFAULT_OG_IMAGE;
