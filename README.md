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


A note about color.  The primary color will always be "digital blue".  A site may
choose a secondary color like "cardinal" or "digital green".

See <https://identity.stanford.edu/design-elements/color/web/>

## Linting
```
npm install
npx stylelint "**/*.css"
```


## Releasing

Currently we don't have a way to host these, so the best way to release is cut a release here and then unpack the styles directory into your Rails application `public/sul-components/<release_tag>/styles`. Then link to the primary style in the `<head>` of the HTML:
```html
<link rel="stylesheet" href="/sul-components/<release_tag>/styles/sul.css" />
```
