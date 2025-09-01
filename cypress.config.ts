import { defineConfig } from "cypress";

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // add e2e plugins here if needed
    },
  },
});
