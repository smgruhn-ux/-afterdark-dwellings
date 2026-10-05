import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const hasCustomDomain = process.env.AFTERDARK_CUSTOM_DOMAIN === 'true';
const pagesBase = hasCustomDomain ? '/' : (process.env.GITHUB_ACTIONS && repoName ? `/${repoName}/` : '/');

export default defineConfig({
  plugins: [react()],
  base: pagesBase,
  build: {
    sourcemap: true,
  },
});
