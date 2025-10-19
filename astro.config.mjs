// @ts-check
import { defineConfig } from "astro/config";
import playformCompress from "@playform/compress";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://printing.clouditsolution.in",
  base: "/",
  integrations: [
    sitemap(),
    playformCompress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    react(),
  ],
});
