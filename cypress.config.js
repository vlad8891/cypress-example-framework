const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "piycoq",
  e2e: {
    baseUrl: "http://automationpractice.com",
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    numTestsKeptInMemory: 0,
  },
  env: {
    apiUrl: "https://dummy.restapiexample.com/api/v1",
  },
});
