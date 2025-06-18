const { defineConfig } = require("cypress");

module.exports = defineConfig({
   
  e2e: {
    
    baseUrl: 'https://example.cypress.io', 
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    videosFolder: 'cypress/videos',       
    screenshotsFolder: 'cypress/screenshots', 
    viewportWidth: 1280,                 
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 60000,
    video: false,
    screenshots: true,  
                  
  setupNodeEvents(on, config) {

      return config;
    },
  },
});