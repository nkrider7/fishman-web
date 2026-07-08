const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  // GitHub Pages friendly paths (works for /<repo>/ and custom domains).
  base: "./",
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        docs: path.resolve(__dirname, "docs.html"),
        changelog: path.resolve(__dirname, "changelog.html"),
      },
    },
  },
});

