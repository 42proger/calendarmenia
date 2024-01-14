import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  includeAssets: ['**/*.{svg, png, jpg, jpeg, ico}'],
  manifest: {
    name: "Armenian Calendar",
    short_name: "Calendar",
    description: "A simple PWA for tracking state and religious holidays in Armenia",
    theme_color: "#082f49",
    background_color: "#f0eeed",
    display: "standalone",
    icons: [
      {
        src: "assets/images/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "assets/images/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "assets/images/pwa-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "assets/images/pwa-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
});

export default defineConfig({
  plugins: [vue(), vitePWA],
  base: '/calendarmenia/',
});
