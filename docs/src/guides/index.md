---
title: Get Started
description: Get started with @esri/hub.js.
---

## Getting started

@esri/hub.js can be deployed with a variety of build tools:

* [Using a CDN](./from-a-cdn/)
* [Using Node.js](./node/)
* [Work with an annotation service](./work-with-annotations/)
* [What's New in `v2.0.0`?](./whats-new-v2-0/)

<!-- * [Using ES6 modules](./using-es6/) -->

## Requirements

@esri/hub.js takes advantage of web standards that are supported in all modern desktop browsers and most mobile browsers.

* [`Fetch` Support](https://caniuse.com/#feat=fetch)
* [`Promises` Support](https://caniuse.com/#feat=promises)
* [`FormData` Support](https://caniuse.com/#feat=xhr2)
* [`ECMAScript 5` Support](https://caniuse.com/#feat=es5)

## Browser Support

@esri/hub.js is supported in the same browsers as the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/guide/system-requirements/index.html#supported-browsers).

* Chrome
* Edge
* Firefox
* Safari 9 and later
* iOS Safari
* IE11

IE11 and older mobile browsers require polyfills.

* [`Promise` polyfill](https://github.com/stefanpenner/es6-promise)
* [`Fetch` polyfill](https://github.com/matthew-andrews/isomorphic-fetch)

## Node.js Support

@esri/hub.js is supported in Node.js 6.x and above. It requires additional packages to polyfill `Fetch` and `FormData`.

We recommend the ones below:

* [`isomorphic-fetch`](https://www.npmjs.com/package/isomorphic-fetch) - to polyfill ['Fetch'](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [`isomorphic-form-data`](https://github.com/form-data/isomorphic-form-data) - to polyfill ['FormData'](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

Other versions of Node.js may also work with appropriate polyfills but we cannot guarantee support.