import { useEffect } from 'react';
import { absoluteUrl } from '../config/url';
import { BRAND, DEFAULT_OG_IMAGE } from '../config/site';
import { routes, notFoundMeta, type RouteMeta } from '../data/seo';

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
};

export function useSeo(path: string | 'notfound') {
  useEffect(() => {
    const meta: RouteMeta | undefined = path === 'notfound' ? notFoundMeta : routes.find((r) => r.path === path);
    const title = meta?.title ?? BRAND;
    const description = meta?.description ?? '';
    const url = absoluteUrl(path === 'notfound' ? '/' : path);
    const image = absoluteUrl(meta?.image || DEFAULT_OG_IMAGE);
    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:image"]', 'property', 'og:image', image);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
  }, [path]);
}
