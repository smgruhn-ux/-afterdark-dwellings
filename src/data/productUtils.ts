import { products } from './products';
import type { Product, ProductCategory } from './types';

export const getProductUrl = (p: Product): string => p.affiliateUrl || p.destinationUrl;

/** A product is purchasable only when verified and every required field is present. */
export const isPurchasable = (p: Product): boolean =>
  p.verified &&
  Boolean(p.productName.trim()) &&
  Boolean(p.merchant.trim()) &&
  /^https?:\/\//.test(getProductUrl(p) || '');

export const verifiedProducts = (): Product[] => products.filter(isPurchasable);

export const productsFor = (filter: {
  guide?: string;
  space?: string;
  category?: ProductCategory;
}): Product[] =>
  verifiedProducts().filter(
    (p) =>
      (!filter.guide || p.relatedGuide === filter.guide) &&
      (!filter.space || p.relatedSpace === filter.space) &&
      (!filter.category || p.category === filter.category),
  );

export const productById = (id: string): Product | undefined =>
  verifiedProducts().find((p) => p.id === id);

export const categories: { name: ProductCategory; blurb: string }[] = [
  { name: 'Lighting', blurb: 'Sconces, task lamps and low-glare sources that build depth.' },
  { name: 'Furniture', blurb: 'Low, solid forms with a quiet silhouette.' },
  { name: 'Mirrors', blurb: 'Reflective surfaces that move light through a dark room.' },
  { name: 'Stone + Material', blurb: 'Stone, metal, glass and timber with real surface depth.' },
  { name: 'Textiles', blurb: 'Heavy weaves, linen and wool that soften without brightening.' },
  { name: 'Storage', blurb: 'Concealed order that keeps the composition calm.' },
  { name: 'Kitchen', blurb: 'Hardware, lighting and surfaces for black kitchens.' },
  { name: 'Bath', blurb: 'Fixtures and accessories for dark, spa-like bathrooms.' },
  { name: 'Objects', blurb: 'Single, sculptural pieces that anchor a shelf or table.' },
];
