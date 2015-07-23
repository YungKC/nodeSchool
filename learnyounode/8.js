var http = require('http');
var urlPath = process.argv[2];
var fullContent = '';

http.get(urlPath, function(res) {
	res.setEncoding("utf8");
	res.on('data', function(data) {
		fullContent += data;
	})
	res.on('error', console.error);
	res.on('end', function() {
		console.log(fullContent.length);
		console.log(fullContent);
	})
});