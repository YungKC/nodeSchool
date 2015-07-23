var http = require('http');
var urlPath = process.argv[2];

http.get(urlPath, function(res) {
	res.setEncoding("utf8");
	res.on('data', function(data) {
		console.log(data);
	})
	res.on('error', console.error);
});