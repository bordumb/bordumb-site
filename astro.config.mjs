import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { codeHighlightOptions } from "./src/utils/code-theme.mjs";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://bordumb.dev",
  output: "static",
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      ...codeHighlightOptions,
      wrap: true,
    },
  },
  vite: {
    build: {
      target: "es2022",
    },
  },
});
