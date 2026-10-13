# DLSS component style library

Reference implementation of CSS styles for design components in DLSS. A live version is hosted via
GitHub Pages at <https://sul-dlss.github.io/component-library/>.

A note about color. The primary color will always be "digital blue". A site may
choose a secondary color like "cardinal" or "digital green".

See <https://identity.stanford.edu/design-elements/color/web/>

## Component Styles

Each component has examples for Bootstrap 5 and Bootstrap 6 (currently
6.0.0-alpha.1). The markup differs between the two versions, so pick the
examples that match the version your application uses.

| Component | Bootstrap 5 | Bootstrap 6 |
|---|---|---|
| Alert | [Bootstrap 5](alerts/bootstrap5.html) | [Bootstrap 6](alerts/bootstrap6.html) |
| Banner | [Bootstrap 5](banners/bootstrap5.html) | [Bootstrap 6](banners/bootstrap6.html) |
| Button | [Bootstrap 5](button/bootstrap5.html) | [Bootstrap 6](button/bootstrap6.html) |
| Facet list | [Bootstrap 5](facets/bootstrap5.html) ([Blacklight 9](facets/bl9.html)) | [Bootstrap 6](facets/bootstrap6.html) |
| Footer | [Bootstrap 5](footer/bootstrap5.html) | [Bootstrap 6](footer/bootstrap6.html) |
| Forms | [Bootstrap 5](forms/bootstrap5.html) | [Bootstrap 6](forms/bootstrap6.html) |
| Header | [Bootstrap 5](header/bootstrap5.html) | [Bootstrap 6](header/bootstrap6.html) |
| Links | [Bootstrap 5](links/bootstrap5.html) | [Bootstrap 6](links/bootstrap6.html) |
| Pagination | [Bootstrap 5](pagination/bootstrap5.html) | [Bootstrap 6](pagination/bootstrap6.html) |
| Popovers | [Bootstrap 5](popovers/bootstrap5.html) | [Bootstrap 6](popovers/bootstrap6.html) |
| Selected Facet | [Bootstrap 5](selected_facet/bootstrap5.html) | [Bootstrap 6](selected_facet/bootstrap6.html) |
| Selected Item | [Bootstrap 5](selected_item/bootstrap5.html) | [Bootstrap 6](selected_item/bootstrap6.html) |
| Toast | [Bootstrap 5](toast/bootstrap5.html) | [Bootstrap 6](toast/bootstrap6.html) |
| Typography | [Bootstrap 5](typography/bootstrap5.html) | [Bootstrap 6](typography/bootstrap6.html) |


## In a css file

### Bootstrap 5
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

### Bootstrap 6
Use `sul-bs6.css` instead of `sul.css`. It is available in releases made after
Bootstrap 6 support was added, so replace `[version]` with one of those.
```CSS
@layer framework, components, local;
@import url(https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css)
layer(framework);
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css")
layer(framework);
@import url("https://cdn.jsdelivr.net/gh/sul-dlss/component-library@[version]/styles/sul-bs6.css")
layer(components);

@import url("my-local-file.css") layer(local);
```

Bootstrap 6's JavaScript is an ES module, so load it with `type="module"`:
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-1a/pXj49ZQ1aHEmrJ+gMw1otqoVsYwlEnlD8mIfY2TV03r20Y0CN7uqx1tQogjPL" crossorigin="anonymous"></script>
```

`sul-bs6.css` maps the Stanford colors onto Bootstrap 6's theme tokens (primary is digital blue,
secondary is cardinal), so use the `.theme-*` classes (e.g. `btn-solid theme-primary`). It also
sets `color-scheme: light`, because the SUL styles have no dark mode.

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

For Bootstrap 6, use `styles/sul-bs6.css` instead of `styles/sul.css`.

## Releasing

Currently these are hosted via jsDelivr which creates hosted versions of every release. Once you cut a github release the files will be available in jsdeliver at the following URL: `https://cdn.jsdelivr.net/gh/sul-dlss/component-library@[version]/styles/sul.css`
