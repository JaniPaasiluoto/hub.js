---
title: Using @esri/hub.js in Node
navTitle: Node.js
description: Learn how to integrate the @esri/hub.js library in a Node.js app.
order: 30
group: 1-get-started
---

# Get Started with Node.js

Make sure you have polyfills for [`fetch`](https://github.com/matthew-andrews/isomorphic-fetch) and [`FormData`](https://github.com/form-data/isomorphic-form-data) installed before using @esri/hub.js. You can find `npm install` commands for all packages in the [API reference](../../api).

```bash
npm install @esri/hub-initiatives @esri/arcgis-rest-request @esri/arcgis-rest-portal isomorphic-fetch isomorphic-form-data
```

Require the `isomorphic-fetch` and `isomorphic-form-data` modules before using any of the @esri/hub.js methods.

```js
require("isomorphic-fetch");
require("isomorphic-form-data");

const { fetchInitiative } = require("@esri/hub-initiatives");

getInitiative("abc123").then(response => {
  console.log(response);  // Initiative item with data
});
```