const path = require("path");
const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");

module.exports = defineConfig({
  // GitHub Pages friendly paths (works for /<repo>/ and custom domains).
  base: "./",
  publicDir: "public",
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        changelog: path.resolve(__dirname, "changelog.html"),
      },
    },
  },
});
