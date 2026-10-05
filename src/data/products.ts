import type { Product } from './types';

/**
 * VERIFIED PRODUCTS ONLY.
 *
 * Add an entry only after confirming the product exists and the merchant link works.
 * Never invent product names, merchants, prices or availability. Example shape:
 *
 * {
 *   id: 'merchant-product-name',
 *   productName: 'Exact name from the merchant page',
 *   merchant: 'Merchant name',
 *   image: '/images/products/merchant-product-name.jpg',
 *   imageAlt: 'Describe the product photo',
 *   destinationUrl: 'https://merchant.example/product-page',
 *   affiliateUrl: 'https://tracking.example/your-link', // optional, preferred when present
 *   editorialNote: 'Why it earns a place here.',
 *   category: 'Lighting',
 *   relatedGuide: 'layered-lighting-for-dark-interiors',
 *   relatedSpace: 'living-rooms',
 *   useCase: 'Living room task light',
 *   price: '$000', // optional, only if confirmed
 *   verified: true,
 *   disclosureRequired: true,
 * }
 */
export const products: Product[] = [];
