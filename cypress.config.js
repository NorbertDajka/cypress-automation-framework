const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ez8s7m',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}" 
    //code to make modification to supported file extensions to js,jsx etc.
  },
});
