import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  includeAssets: ['**/*.{svg,png,jpg,jpeg,ico}'],
  manifest: {
    id: "/calendarmenia/",
    name: "Armenian Calendar",
    short_name: "Calendar",
    description: "A simple PWA for tracking state and religious holidays in Armenia",
    theme_color: "#f1f5f9",
    background_color: "#f1f5f9",
    display: "standalone",
    categories: ["lifestyle", "utilities"],
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
  build: {
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(woff2?|ttf|otf|eot)$/i.test(name ?? "")) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          if (/\.(png|jpe?g|svg|gif|webp|ico)$/i.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  base: '/calendarmenia/',
});
