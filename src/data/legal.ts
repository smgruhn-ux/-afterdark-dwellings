import { BRAND, CONTACT_EMAIL } from '../config/site';

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalPageData {
  path: string;
  title: string;
  deck: string;
  updated: string;
  sections: LegalSection[];
}

const updated = 'Last updated: October 2026';

export const legalPages = {
  'privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    deck: `How ${BRAND} treats visitor information.`,
    updated,
    sections: [
      { heading: 'Information we collect', body: [`${BRAND} is a static publication. We do not require accounts and do not collect personal information through the site itself. If you email us, we receive the address and message you send.`] },
      { heading: 'Analytics and cookies', body: ['The site does not currently set advertising cookies. If analytics or advertising tools are added in future, this policy will be updated to describe them.'] },
      { heading: 'Third-party services and links', body: ['The site loads fonts from Google Fonts. Links to Pinterest and merchants lead to third-party sites with their own privacy practices. Merchants and affiliate networks may set cookies once you leave this site.'] },
      { heading: 'Contact', body: [`Questions about privacy can be sent to ${CONTACT_EMAIL}.`] },
    ],
  },
  'terms-of-use': {
    path: '/terms-of-use',
    title: 'Terms of Use',
    deck: `The terms for using ${BRAND}.`,
    updated,
    sections: [
      { heading: 'Use of content', body: [`All editorial content on ${BRAND} is original and protected. You may share links and short quotations with attribution. Do not republish articles or images without permission.`] },
      { heading: 'Information only', body: ['Design guidance is general and for inspiration. Check building, electrical and safety requirements before making changes to your home, and use qualified professionals where required.'] },
      { heading: 'Third-party sites', body: ['We link to merchants and other sites we do not control. Merchant pages are the final source for price, availability and purchase terms.'] },
      { heading: 'Changes', body: ['We may update the site and these terms at any time.'] },
    ],
  },
  'affiliate-disclosure': {
    path: '/affiliate-disclosure',
    title: 'Affiliate Disclosure',
    deck: 'How links on this site may support the publication.',
    updated,
    sections: [
      { heading: 'Affiliate links', body: [`Some links on ${BRAND} may become affiliate links. If you buy through one, ${BRAND} may earn a commission at no additional cost to you.`] },
      { heading: 'Program participation', body: ['We do not claim participation in any specific affiliate program unless that relationship has been verified. Where a relationship exists, it is disclosed next to the relevant recommendations.'] },
      { heading: 'Editorial independence', body: ['Affiliate relationships do not guarantee inclusion. Products are chosen for editorial fit. See the Editorial Policy for details.'] },
    ],
  },
  'editorial-policy': {
    path: '/editorial-policy',
    title: 'Editorial Policy',
    deck: 'The principles every recommendation follows.',
    updated,
    sections: [
      { heading: 'Real products only', body: ['Every recommended product must correspond to a real product, and every shopping link must point to a real merchant destination. Until a product is verified, the site shows “VERIFIED RECOMMENDATION COMING SOON” instead of a placeholder purchase link.'] },
      { heading: 'No fabricated claims', body: ['We do not publish fabricated reviews, invented ratings, fake prices or invented availability.'] },
      { heading: 'Prices and inventory', body: ['Pricing and inventory can change. Merchant pages are the final source for current purchase information.'] },
      { heading: 'Independence', body: ['Affiliate eligibility does not determine editorial inclusion. Editorial content is original.'] },
    ],
  },
} satisfies Record<string, LegalPageData>;

export const faqs = [
  { q: `What is ${BRAND}?`, a: 'An independent interiors publication covering dark modern interiors, architectural lighting, material depth and considered home products.' },
  { q: 'Are the products on the site real?', a: 'Only verified, real products with real merchant links are shown as recommendations. Where a recommendation is not yet verified, the site says “VERIFIED RECOMMENDATION COMING SOON”.' },
  { q: 'Do you earn money from links?', a: `Some links may become affiliate links, and ${BRAND} may earn a commission at no additional cost to you. Affiliate relationships never guarantee inclusion.` },
  { q: 'Are prices shown?', a: 'Prices are shown only when confirmed, and they can change. The merchant page is the final source for current price and availability.' },
  { q: 'Do you publish reviews or ratings?', a: 'No. We do not use fabricated reviews or invented ratings.' },
  { q: 'Do you offer interior design services?', a: `No. ${BRAND} is an editorial publication, not a design service.` },
  { q: 'How can I contact you?', a: `Email ${CONTACT_EMAIL}.` },
];
