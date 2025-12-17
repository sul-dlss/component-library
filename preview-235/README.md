# DLSS design style library

Reference implementation of CSS styles for design components in DLSS. A live version is hosted via
GitHub Pages at <https://sul-dlss.github.io/component-library/>.

A note about color. The primary color will always be "digital blue". A site may
choose a secondary color like "cardinal" or "digital green".

See <https://identity.stanford.edu/design-elements/color/web/>

## Components

- [Alert](alerts/)
- [Banner](banners/)
- [Button](button/)
- [Facet list](facets/)
- [Footer](footer/)
- [Forms](forms/)
- [Header](header/)
- [Links](links/)
- [Pagination](pagination/)
- [Popovers](popovers/)
- [Selected Facet](selected_facet/)
- [Selected Item](selected_item/)
- [Toast](toast/)
- [Typography](typography/)


## In a css file
```CSS
@layer framework, components, local;
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)
layer(framework);
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css")
layer(framework);
@import url("https://cdn.jsdelivr.net/gh/sul-dlss/component-library@v2025-09-11/styles/sul.css")
layer(components);

@import url("my-local-file.css") layer(local);
```
## HTML head link

```html
  <link rel="icon" href="https://cdn.jsdelivr.net/gh/sul-dlss/component-library@v2025-09-11/styles/icon.png" type="image/png">
  <link rel="icon" href="https://cdn.jsdelivr.net/gh/sul-dlss/component-library@v2025-09-11/styles/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="https://cdn.jsdelivr.net/gh/sul-dlss/component-library@v2025-09-11/styles/icon.png">
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

## Deploying

The site is built and deployed to GitHub Pages automatically on every push to
`main`, by a workflow that merges changes into the `gh-pages` branch.

When PRs are opened, the `pages-preview` workflow will commit a preview of the
site to a subdirectory on the `gh-pages` branch so that it is available to
view on the web. The URL for the preview will be:

```
https://sul-dlss.github.io/component-library/preview-[PR-number]
```

When the PR is merged, the subdirectory will be cleaned up via another commit
to the `gh-pages` branch.

## Testing latest styles locally
If you want to test everything that is currently in main, without having to cut a release, you can update your stylesheet to point to [https://sul-dlss.github.io/component-library/styles/sul.css](https://sul-dlss.github.io/component-library/styles/sul.css)
```
<link rel="stylesheet" href="https://sul-dlss.github.io/component-library/styles/sul.css" />
```
or
```html
<style>
  @layer framework, component;
  @import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css)
  layer(framework);
  @import url(https://sul-dlss.github.io/component-library/styles/sul.css) layer(component);
</style>
```

## Releasing

Currently these are hosted via jsDelivr which creates hosted versions of every release. Once you cut a github release the files will be available in jsdeliver at the following URL: `https://cdn.jsdelivr.net/gh/sul-dlss/component-library@[version]/styles/sul.css`
