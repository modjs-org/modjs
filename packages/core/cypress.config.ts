import { defineConfig } from "cypress";

export default defineConfig({
  //CAUTION: A lot of tests that depends on viewport size will fail if this is changed. Modify this in each test cases/suite instead whenever necessary
  viewportWidth: 769,

  viewportHeight: 600,

  component: {
    specPattern: "src/**/*.spec.{ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
