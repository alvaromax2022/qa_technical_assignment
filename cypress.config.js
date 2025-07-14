const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '',
  e2e: {
    supportFile: false,
    specPattern: 'frontend-cypress/specs/*.js',
  },
  chromeWebSecurity: false,
  browser: "chrome",
  chromeBinary: "/usr/bin/google-chrome"
});
