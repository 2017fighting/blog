import { SITE } from "./src/config";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap, { type SitemapOptions } from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeFigure from "@microflash/rehype-figure";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeRewrite, { type RehypeRewriteOptions } from "rehype-rewrite";
import rehypeWrapAll from "rehype-wrap-all";
import rehypeExternalLinks from "rehype-external-links";
import rehypeImgSizeCache from "@ziteh/rehype-img-size-cache";
import { rehypeMermaid } from "@beoe/rehype-mermaid";
import expressiveCode, {
  type AstroExpressiveCodeOptions,
} from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import compressor from "astro-compressor";
import { minify } from "@zokki/astro-minify";
import react from "@astrojs/react";

// Expressive Code syntax highlighting, https://expressive-code.com/reference/configuration/
const expressiveCodeOption: AstroExpressiveCodeOptions = {
  plugins: [pluginLineNumbers()],
  themes: ["catppuccin-mocha", "catppuccin-latte"],
  themeCssSelector: theme => {
    if (theme.name === "catppuccin-mocha") {
      return "[data-theme='dark']";
    }
    return "[data-theme='light']";
  },
  defaultProps: {
    wrap: false,
    showLineNumbers: true,
    overridesByLang: {
      "bash,cmd,powershell,ps,sh,shell,zsh": { frame: "terminal" },
    },
  },
  styleOverrides: {
    codeFontFamily: "var(--font-mono), var(--font-emoji)",
    uiFontFamily: "var(--font-sans), var(--font-emoji)",
    borderWidth: "0",
    codeBackground: "var(--mantle)",
    textMarkers: {
      insBackground: "var(--ins-background)",
      insBorderColor: "var(--surface0)",
      delBackground: "var(--del-background)",
      delBorderColor: "var(--surface0)",
    },
    frames: {
      tooltipSuccessBackground: "var(--green)",
      tooltipSuccessForeground: "var(--base)",
    },
  },
};

// Rehype rewrite options, https://github.com/jaywcjlove/rehype-rewrite
const rehypeRewriteOption: RehypeRewriteOptions = {
  rewrite: node => {
    // Also look for Astro's Responsive Images
    if (node.type === "element" && node.tagName === "img") {
      node.properties = {
        ...node.properties,
        loading: "lazy",
        decoding: "async",
        // fetchpriority: "auto",
      };
    }
    // Use rehype-external-links instead
    // if (
    //   node.type === "element" &&
    //   node.tagName === "a" &&
    //   node.properties?.href
    // ) {
    //   const href = node.properties.href;
    //   if (
    //     typeof href === "string" &&
    //     !href.startsWith("/") &&
    //     !href.startsWith(SITE.website)
    //   ) {
    //     // Add target="_blank" (open in new tab)
    //     // and rel="noopener noreferrer" (security and privacy)
    //     node.properties = {
    //       ...node.properties,
    //       target: "_blank",
    //       rel: "noopener noreferrer",
    //     };
    //   }
    // }
  },
};

// Sitemap options, https://docs.astro.build/en/guides/integrations-guide/sitemap/
const sitemapOption: SitemapOptions = {
  serialize(item) {
    if (/\/(tags|categories|archives|page|search)/.test(item.url)) {
      item.priority = 0.2;
    } else if (/\/posts\/\d+\/?$/.test(item.url)) {
      item.priority = 0.3;
    } else if (/\/posts\//.test(item.url)) {
      // Main blog page
      item.priority = 0.8;
    } else {
      // Default priority for all other pages
      item.priority = 0.5;
    }

    return item;
  },
};

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    sitemap(sitemapOption),
    expressiveCode(expressiveCodeOption),
    minify(),
    compressor({ gzip: true, brotli: true }),
    react(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      rehypeFigure,
      rehypeImgSizeCache,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          headingProperties: {
            className: ["rehype-heading"],
          },
          properties: {
            className: ["rehype-heading-link"],
          },
        },
      ],
      [rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }],
      [
        rehypeWrapAll,
        {
          selector: "table",
          wrapper: "div.responsive-table",
        },
      ],
      [rehypeRewrite, rehypeRewriteOption],
      [
        rehypeMermaid,
        {
          strategy: "data-url", // alternatively use "data-url"
          fsPath: "public/beoe", // add this to gitignore
          webPath: "/beoe",
          darkScheme: "class",
        },
      ],
    ],
    // Use ExpressiveCode instead of shiki
    syntaxHighlight: false,
    // shikiConfig: {
    //   // For more themes, visit https://shiki.style/themes
    //   themes: { light: "min-light", dark: "night-owl" },
    //   wrap: true,
    // },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  trailingSlash: "never",
  build: {
    format: "file", // generate `page.html` instead of `page/index.html`
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
  },
  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: "constrained",
  },
  experimental: {
    responsiveImages: true,
    preserveScriptOrder: true,
  },
});
