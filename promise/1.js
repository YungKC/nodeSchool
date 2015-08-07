var q = require('q');

var defer = q.defer();

defer.promise.then(function(value) {
	console.log(value);
})

// setTimeout(callback, delay[, arg][, ...])
setTimeout(defer.resolve, 300, "RESOLVED!");
