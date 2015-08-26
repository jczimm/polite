var polite = require('../');

function makeCall(url) {
	console.log("making call to " + url + "...");

	// [make request]
}

function makeCalls() {
	var urls = ["url1", "url2", "url3", "url4", "url5"]; // etc.
	
	for (var i = 0; i < urls.length; i++) {

		// pass `urls` and `i` so that they will be accessible when the call is actually made
		polite.whenAlright([urls, i], function(urls, i) {
			makeCall(urls[i]);
		});

	}
}

makeCalls();