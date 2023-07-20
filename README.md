# Credit Card Validator

## About

This project implements a simple credit card validator. It is organized as a monorepo with several apps and internal packages.

In the `/apps` folder you will find:

- `cc-validator-web` a React application and primary UI
- `cc-validator-api` an Express server and primary API
- `cc-validator-e2e` a set of end-to-end tests

The API consumes the internal `luhn-checksum` package which can be found in the `packages` folder.

## Getting started

### Install node modules

This project uses a .nvmrc file to indicate the required version of NodeJS. If you use nvm you can run `nvm use` to load the correct version of NodeJS.

To get started please install node modules:

```
npm i
```

### Local development

Once you have installed node modules you can start local development on all applications with:

```
npm run dev
```

By default the React app will run at `http://localhost:5173` and the API will run at `http://localhost:8080`

## Tests

This project uses `*.test.ts` file names to indicate unit tests and `*.spec.ts` file names to indicate integration/e2e tests.

That is purely a matter of personal preference.

### Unit and Integration tests

You can run all unit and integration tests with:

```
npm run test
```

### E2E tests

Running end-to-end tests requires both the React app and the API to be running.

First start the dev server for both:

```
npm run dev
```

Then open a new terminal window and run the tests:

```
npm run test:e2e
```

## App scripts

You can navigate to any of the applications in the `/apps` folder and run the scripts in the `package.json` files found there for more fine grained control.

## Common questions

### Why use a monorepo?

A monorepo can be a good choice when you have multiple related application because it allows you to easily share configuration, scripts, and code.

### Why use Express?

If you are familiar with [TechEmpower Web Framework Benchmarks](https://www.techempower.com/benchmarks/) you know that Express is slower than other frameworks like Fastify (in synthetic benchmarks at least). But this code is meant to be easily read by other developers and does not focus purely on performance.

Given that Express has been a staple of the NodeJS ecosystem for many years there is a good chance that any developer reading this will be familiar with it. So it makes sense to use Express to help others get up to speed quickly.

### Why not use an npm package for Luhn checksum?

Often using a _well tested_ external library is preferable to writing everything yourself. The Luhn checksum algorithm is simple enough, and our use case is simple enough, that writing it by hand is a viable option. Plus we can demonstrate some interesting monorepo and testing features by doing so.

### Why not use Redux, Zustand, or Jotai?

The application doesn't have a requirement for any authorization and there aren't many features so a global state management solution seems unnecessary.

### Why not use React Query, RTK Query, or SWR?

For a production application you would certainly want to use something like React Query for data fetching and loading/error state management. And particularly if you're already using Redux and Redux Toolkit then RTK Query makes sense.

At the very least you'd probably want some custom hooks to help make some of the code more reusable across multiple components.

These are all valid points but this application only has one component that needs to fetch data and the built in browser APIs and React hooks are more than sufficient for the job.

### Why not use React Hook Form? Why use browser APIs?

For complicated forms React Hook Form offers a great experience. But given that there is only one input element and no requirement for handing input as the user types it seems like overkill.

Input elements already maintain their own internal state and they have validation options that can be written into the HTML. We can leverage these things to reduce the need for custom React code.

### Why use an alert?

Similar to the point on HTML input elements above, the alert can function as a modal so why not leverage that fact rather than recreate the functionality with React components?

Some people don't like the built in alert. Some people want modals that fit a particular UI theme. Those are valid considerations. I always aim to give the stakeholders what they want/need so if I was asked to use a custom modal I would.

### Why not use Tailwind?

Tailwind is a great CSS/styling solution for applications large and small. I decided to use a more conventional component library out of convenience and personal preference.
