# DLSS design component library
Reference implementation of components for DLSS

* [Alert](alerts/)
* [Button](button/)
* [Footer](footer/)
* [Header](header/)
* [Links](links/)
* [Selected Item](selected_item/)
* [Selected Facet](selected_facet/)
* [Toast](toast/)
* [Facet list](facets/)
* [Dropdown](dropdown/)


A note about color.  The primary color will always be "digital blue".  A site may
choose a secondary color like "cardinal" or "digital green".

See <https://identity.stanford.edu/design-elements/color/web/>

## Linting
```
npm install
npx stylelint "**/*.css"
```


## Releasing

Currently these are hosted via jsDelivr which creates hosted versions of every release. The best way to update the component library is to cut a release here and then link to the primary style in the `<head>` of the HTML. `https://cdn.jsdelivr.net/gh/sul-dlss/component-library@[version]/styles/sul.css`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sul-dlss/component-library@v2024-09-04/styles/sul.css" />
```
