export interface LookItem {
  label: string;
  /** Set to a verified product id from products.ts once a merchant link is confirmed. */
  productId?: string;
}

export interface Look {
  slug: string;
  title: string;
  description: string;
  imageLabel: string;
  image?: { src: string; alt: string };
  items: LookItem[];
}

export const looks: Look[] = [
  {
    slug: 'black-stone-living-room',
    title: 'Black Stone Living Room',
    description: 'A stone-led living room in layered black, lit by a single arc lamp and low accents.',
    imageLabel: 'Black stone living room',
    items: [
      { label: 'Arc floor lamp' },
      { label: 'Black side table' },
      { label: 'Stone tray' },
      { label: 'Textured throw' },
      { label: 'Sculptural mirror' },
    ],
  },
];
