const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({

  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "**/*.feature",
  },
});

// cypress.config.js
