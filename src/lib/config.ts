import { type VitePWAOptions } from 'vite-plugin-pwa';

export const PWAConfig: Partial<VitePWAOptions> = {
  includeAssets: ['favicon.ico'],
  manifest: {
    name: '2DC Exam',
    short_name: 'exam',
    description: 'Exam with React, Typescript, Zustand, Tailwind, and Vite',
    theme_color: '#ffffff',
    start_url: '/',
    scope: '/',
  },
  devOptions: {
    enabled: true,
  },
  workbox: {
    sourcemap: true,
  },
};
