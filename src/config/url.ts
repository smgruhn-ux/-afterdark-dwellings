/** Canonical base URL, injected at build time from VITE_SITE_URL (see vite.config.ts and README). */
export const SITE_URL: string = (import.meta.env.VITE_SITE_URL as string).replace(/\/+$/, '');

export const absoluteUrl = (path: string): string => {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`}`;
};
