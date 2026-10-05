export type ProductCategory =
  | 'Lighting'
  | 'Furniture'
  | 'Mirrors'
  | 'Stone + Material'
  | 'Textiles'
  | 'Storage'
  | 'Kitchen'
  | 'Bath'
  | 'Objects';

export interface Product {
  id: string;
  productName: string;
  merchant: string;
  /** Path under /public (e.g. /images/products/x.jpg) or an https URL you have rights to use. */
  image?: string;
  imageAlt?: string;
  destinationUrl: string;
  /** When present, always preferred over destinationUrl. */
  affiliateUrl?: string;
  editorialNote: string;
  category: ProductCategory;
  /** Guide slug this product belongs to. */
  relatedGuide?: string;
  /** Space slug this product belongs to. */
  relatedSpace?: string;
  /** Room or use-case label shown on cards. */
  useCase?: string;
  /** Optional, only if confirmed on the merchant page, e.g. "$129". */
  price?: string;
  /** Must be true only after a human has confirmed the product and merchant link are real. */
  verified: boolean;
  disclosureRequired: boolean;
}

export interface ImageRef {
  src?: string;
  alt: string;
}

export interface GuideSection {
  heading: string;
  body: string[];
  image?: ImageRef;
  imageLabel?: string;
  shop?: {
    /** Product types this advice calls for. Shown as slots until verified products exist. */
    types: string[];
    category: ProductCategory;
  };
}

export interface Guide {
  slug: string;
  title: string;
  category: string;
  spaceSlug: string;
  deck: string;
  description: string;
  readTime: string;
  intro: string[];
  sections: GuideSection[];
  related: string[];
  heroImage?: ImageRef;
  /** Vertical (2:3) Pinterest image path, e.g. /images/pins/slug.jpg */
  pinImage?: string;
  /** 1200x630 social preview image path. Falls back to the site default. */
  ogImage?: string;
}

export interface Space {
  slug: string;
  name: string;
  intro: string[];
  guides: string[];
  productCategories: ProductCategory[];
  /** Exact Pinterest board URL. Falls back to the profile until set. */
  boardUrl?: string;
  boardName: string;
  image?: ImageRef;
  description: string;
}
