FROM cypress/included:10.3.0

WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.config.js ./cypress.config.js
COPY ./package.json ./package.json

RUN yarn clean
RUN yarn test