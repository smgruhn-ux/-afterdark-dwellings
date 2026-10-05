import type { Space } from './types';

export const spaces: Space[] = [
  {
    slug: 'living-rooms',
    name: 'Living Rooms',
    description: 'Dark living room ideas: layered lighting, stone, texture and confident, edited furniture.',
    intro: [
      'The living room is where a dark scheme is most visible and most easily overloaded. Anchor it with one substantial piece, light it from lamps and keep surfaces edited.',
    ],
    guides: ['dark-living-room-feel-expensive', 'layered-lighting-for-dark-interiors', '7-ways-to-make-a-dark-room-feel-expensive', 'black-and-stone-interiors'],
    productCategories: ['Lighting', 'Furniture', 'Textiles', 'Objects'],
    boardName: 'Living Rooms',
  },
  {
    slug: 'bedrooms',
    name: 'Bedrooms',
    description: 'Dark bedroom ideas that feel calm and restful: low light, soft texture and clear surfaces.',
    intro: ['A dark bedroom should feel enclosed and restful. Keep light low and warm, vary the darks and protect clear surfaces.'],
    guides: ['dark-bedroom-without-feeling-heavy', 'layered-lighting-for-dark-interiors'],
    productCategories: ['Lighting', 'Textiles', 'Storage'],
    boardName: 'Bedrooms',
  },
  {
    slug: 'kitchens',
    name: 'Kitchens',
    description: 'Black kitchen ideas with depth: mixed finishes, layered lighting, stone and considered hardware.',
    intro: ['Black kitchens succeed through variation: different finishes, light at several heights and one counterpoint to the mass of black.'],
    guides: ['black-kitchen-without-feeling-flat', 'black-and-stone-interiors'],
    productCategories: ['Kitchen', 'Lighting', 'Stone + Material'],
    boardName: 'Kitchens',
  },
  {
    slug: 'bathrooms',
    name: 'Bathrooms',
    description: 'Dark bathroom ideas: stone surfaces, mirror lighting and a consistent fixture finish.',
    intro: ['Small, hard-working and well suited to dark finishes. Light the face, choose honed surfaces and keep metal finishes consistent.'],
    guides: ['dark-bathroom-that-feels-expensive', 'small-dark-spaces-that-still-feel-open'],
    productCategories: ['Bath', 'Mirrors', 'Lighting', 'Stone + Material'],
    boardName: 'Bathrooms',
  },
  {
    slug: 'home-offices',
    name: 'Home Offices',
    description: 'Dark home office ideas that stay open and comfortable: task light, glare control and hidden storage.',
    intro: ['Dark walls help focus when the desk is well lit and the screen sits against soft indirect light.'],
    guides: ['dark-home-office-without-feeling-closed-in', 'layered-lighting-for-dark-interiors'],
    productCategories: ['Lighting', 'Furniture', 'Storage'],
    boardName: 'Home Offices',
  },
  {
    slug: 'entryways',
    name: 'Entryways',
    description: 'Dark entryway ideas: wall lights, a statement mirror and a clear console for a deliberate arrival.',
    intro: ['Entries set the tone. Light at eye level, a mirror and a clear surface turn a dark threshold into a considered arrival.'],
    guides: ['dark-entryway-lighting-mirrors-contrast', 'small-dark-spaces-that-still-feel-open'],
    productCategories: ['Mirrors', 'Lighting', 'Furniture'],
    boardName: 'Entryways',
  },
  {
    slug: 'small-spaces',
    name: 'Small Spaces',
    description: 'Small dark space ideas: colour-drenching, edge lighting, large mirrors and low-profile furniture.',
    intro: ['Dark colour can dissolve the edges of a small room. Keep it uncluttered, light the perimeter and use one large mirror.'],
    guides: ['small-dark-spaces-that-still-feel-open', 'dark-entryway-lighting-mirrors-contrast', 'dark-bathroom-that-feels-expensive'],
    productCategories: ['Mirrors', 'Lighting', 'Storage', 'Furniture'],
    boardName: 'Small Spaces',
  },
];

export const spaceBySlug = (slug: string): Space | undefined => spaces.find((s) => s.slug === slug);
