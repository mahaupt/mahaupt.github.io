import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

export default function (eleventyConfig) {
  // Vite als Dev-Server und Build-Tool
  eleventyConfig.addPlugin(EleventyVitePlugin);

  // JSX-Templates über tsx (esbuild-basiert, kein Babel)
  eleventyConfig.addExtension(["11ty.jsx", "11ty.tsx"], {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        let content = await this.defaultRenderer(data);
        return renderToStaticMarkup(content);
      };
    },
  });
  eleventyConfig.addTemplateFormats(["11ty.jsx", "11ty.tsx"]);

  // Collections
  eleventyConfig.addCollection("projekte", (api) =>
    api.getFilteredByGlob("src/projekte/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("flying", (api) =>
    api.getFilteredByGlob("src/flying/*.md").sort((a, b) => b.date - a.date)
  );

  // Statische Assets durchreichen
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
}
