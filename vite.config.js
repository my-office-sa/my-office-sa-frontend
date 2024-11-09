import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
 plugins: [
   react(),
   VitePWA({
     registerType: 'autoUpdate',
     includeAssets: [
       'favicon.svg',
       'favicon.ico',
       'robots.txt',
       'apple-touch-icon.png',
     ],
     manifest: {
       name: 'My Office',
       short_name: 'My Office',
       description: 'É um projeto para aluguel de salas',
       theme_color: '#ffffff',
       background_color: '#ffffff',
       display: 'standalone',
       icons: [
         {
           src: 'icons/icon-192x192.png',
           sizes: '192x192',
           type: 'image/png',
         },
         {
           src: 'icons/icon-512x512.png',
           sizes: '512x512',
           type: 'image/png',
         },
       ],
     },
   }),
 ],
});
