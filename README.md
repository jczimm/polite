# polite

[![NPM](https://nodei.co/npm/polite.png?compact=true)](https://nodei.co/npm/polite/)

Ensure that a length of time has passed between calls (e.g. requests to a service)

## Usage

```javascript
var polite = require('polite');

polite.whenAlright([], function() {
	makeCall();
});
```

**Polite** can be used as a local.

```javascript
var Polite = require('polite').Polite;
var polite = new Polite();

polite.whenAlright([], function() {
	makeCall();
});
```
