FROM node:18

FROM mcr.microsoft.com/playwright:v1.36.0-jammy

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN npm i

COPY tests/ /app/tests/
COPY playwright.config.ts /app/
