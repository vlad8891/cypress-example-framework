FROM cypress/included:10.3.0

WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.config.js ./cypress.config.js

RUN yarn cypress run --browser -chrome