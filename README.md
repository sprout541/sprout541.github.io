# Ariele — Portfolio

The source for [Ariele’s portfolio](https://sprout541.github.io), a
single-page portfolio presenting her work as a full-stack developer and Nurse.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Validation

```bash
npm test
npm run lint
npm run build:pages
```

`npm run build:pages` creates the static GitHub Pages artifact in `out/`.
Pushes to `main` are deployed by the GitHub Actions Pages workflow.
