# vrionides.com

The landing page for **vrionides.com** — a simple hub that points visitors to my other projects, each hosted on its own subdomain.

## About

This is intentionally minimal: a hero title and a set of links out to other projects (e.g. `leaderboards.vrionides.com`). There's no routing, backend, or state — just a single page.

## Adding a new project link

Projects live in the `projects` array at the top of [`src/Title/Title.js`](src/Title/Title.js). Add an entry and it gets its own link and connector line:

```js
const projects = [
  { name: "leaderboards", url: "https://leaderboards.vrionides.com" },
  { name: "newproject", url: "https://newproject.vrionides.com" },
];
```

Styling for the links and hero lives in [`src/Title/Title.css`](src/Title/Title.css).

## Tech stack

- [React](https://react.dev/) 19
- [Create React App](https://create-react-app.dev/) (`react-scripts`)

## Getting started

```bash
npm install
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm start` — run the app in development mode with live reload
- `npm test` — run the test suite in watch mode
- `npm run build` — create an optimized production build in `build/`
- `npm run eject` — copy CRA's build config into the project (one-way, rarely needed)

## Deployment

`npm run build` outputs a static site to `build/`, which can be deployed to any static host (Vercel, Netlify, GitHub Pages, S3, etc.).
