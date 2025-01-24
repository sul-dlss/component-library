# DLSS design component library

Reference implementation of components for DLSS

- [Alert](alerts/)
- [Button](button/)
- [Footer](footer/)
- [Header](header/)
- [Links](links/)
- [Selected Item](selected_item/)
- [Selected Facet](selected_facet/)
- [Toast](toast/)
- [Facet list](facets/)

A note about color. The primary color will always be "digital blue". A site may
choose a secondary color like "cardinal" or "digital green".

See <https://identity.stanford.edu/design-elements/color/web/>

## HTML head link

```html
  <link rel="icon" href="https://cdn.jsdelivr.net/gh/sul-dlss/component-library@v2025-01-24/styles/icon.png" type="image/png">
  <link rel="icon" href="https://cdn.jsdelivr.net/gh/sul-dlss/component-library@v2025-01-24/styles/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="https://cdn.jsdelivr.net/gh/sul-dlss/component-library@v2025-01-24/styles/icon.png">
```

# For developers

## Setup

```sh
npm install
```

All dependencies are for local development only.

## Dev server

Run a simple HTTP server:

```sh
npm start
```

Note that this is required to resolve some paths in development, e.g. `url()` references to files in CSS will not resolve unless the server is running to serve them.

## Linting

Lint the styles with `stylelint`:

```sh
npm run lint
```

This also runs in CI.

## Releasing

Currently these are hosted via jsDelivr which creates hosted versions of every release. The best way to update the component library is to cut a release here and then link to the primary style in the `<head>` of the HTML. `https://cdn.jsdelivr.net/gh/sul-dlss/component-library@[version]/styles/sul.css`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/sul-dlss/component-library@v2025-01-24/styles/sul.css"
/>
```
