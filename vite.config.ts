import { defineConfig, loadEnv, type Plugin } from 'vite';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import react from '@vitejs/plugin-react';
import { routes, notFoundMeta, type RouteMeta } from './src/data/seo';
import { BRAND, DEFAULT_OG_IMAGE } from './src/config/site';

const DEFAULT_SITE_URL = 'https://smgruhn-ux.github.io/-afterdark-dwellings';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function seoPlugin(siteUrl: string): Plugin {
  const join_ = (p: string) => `${siteUrl}${p === '/' ? '/' : p}`;
  const asset = (p: string) => (/^https?:\/\//.test(p) ? p : `${siteUrl}${p.startsWith('/') ? p : `/${p}`}`);

  const block = (r: RouteMeta) => {
    const image = esc(asset(r.image || DEFAULT_OG_IMAGE));
    const url = esc(join_(r.path));
    const isGuide = r.path.startsWith('/guides/');
    return [
      '<!--seo:start-->',
      `<title>${esc(r.title)}</title>`,
      `<meta name="description" content="${esc(r.description)}" />`,
      r.noindex ? '<meta name="robots" content="noindex" />' : '',
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:site_name" content="${BRAND}" />`,
      `<meta property="og:type" content="${isGuide ? 'article' : 'website'}" />`,
      `<meta property="og:title" content="${esc(r.title)}" />`,
      `<meta property="og:description" content="${esc(r.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${image}" />`,
      '<meta name="twitter:card" content="summary_large_image" />',
      `<meta name="twitter:title" content="${esc(r.title)}" />`,
      `<meta name="twitter:description" content="${esc(r.description)}" />`,
      `<meta name="twitter:image" content="${image}" />`,
      '<!--seo:end-->',
    ]
      .filter(Boolean)
      .join('\n    ');
  };

  const apply = (html: string, r: RouteMeta) =>
    html.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, block(r));

  return {
    name: 'afterdark-seo',
    transformIndexHtml: (html) => apply(html, routes[0]),
    writeBundle(options) {
      const dir = options.dir;
      if (!dir || !existsSync(join(dir, 'index.html'))) return;
      const source = readFileSync(join(dir, 'index.html'), 'utf8');
      const write = (file: string, content: string) => {
        mkdirSync(dirname(join(dir, file)), { recursive: true });
        writeFileSync(join(dir, file), content);
      };
      // Static HTML per route so direct URLs work on GitHub Pages / Cloudflare Pages with correct metadata.
      for (const r of routes.slice(1)) write(`${r.path.slice(1)}/index.html`, apply(source, r));
      write('404.html', apply(source, notFoundMeta));
      const urls = routes.map((r) => `  <url><loc>${join_(r.path)}</loc></url>`).join('\n');
      write(
        'sitemap.xml',
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
      write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
  const base = env.VITE_BASE_PATH || '/';
  return {
    base,
    define: { 'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl) },
    plugins: [react(), seoPlugin(siteUrl)],
  };
});
