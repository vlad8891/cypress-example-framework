# cypress-example-framework

A simple framework demonstrating Cypress' capabilities with UI and API testing.

# Getting started Mac OS

### 💼 Prerequisites

- node.js

## 🧭 Quickstart

Clone the project and then run the following commands:

```
npm install --global yarn
yarn setup
```

## 📔 Notes

This repository has been integrated with `Cypress Dashboard` for framework metrics, and a `Github Actions` pipeline has been set to execute the tests on each repository pull request.

The `Cypress Dashboard` for this project is public, and can be accessed [here](https://dashboard.cypress.io/projects/piycoq/runs/3/overview?fbclid=IwAR2FyNKMU9NeO3mjZ17HhRc8qcG0eOQlxABo7fb7Fx_2_r1HI_5PwcsQXow).

### Commands to run tests

```
yarn cypress open
yarn cypress run --record --key ac727834-8cc8-4e00-a10a-7dbf7d5d3a85 --browser chrome
yarn test
```

Summary of command line arguments:

`yarn cypress open`-> opens the Cypress Test Runner. More info about the Test Runner [here](https://docs.cypress.io/guides/core-concepts/test-runner#Overview).

`yarn cypress run` -> the script used to run tests in headless mode, using the local config file, which is `cypress.config.js`

`yarn test` -> the script used to run tests via `Docker`, `Yarn package` or with `GitHub Actions`. It enscapsulates the `yarn cypress run` command and can also be used to run locally, in lieu of `yarn cypress run`.

`browser`-> specify which browser to use for the upcoming test session. For a comprehensive list of supported browsers, visit Cypress' [Docs page](https://docs.cypress.io/guides/guides/launching-browsers). Note that the browsers will have to be installed locally before Cypress can make use of them.

### Running inside a Docker container

```
docker build -t cypress-example-framework:1.0.0 .
```

### Running within a Yarn package

```
yarn add cypress-example-framework
yarn test
```
