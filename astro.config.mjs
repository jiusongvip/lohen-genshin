import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.lohen-genshin.com",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: {
    // Inline all CSS to eliminate render-blocking stylesheet requests (improves LCP)
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
});
