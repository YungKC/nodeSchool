var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var extName = '.'+process.argv[3];

fs.readdir(dirPath, function callback(err, list) {
	list.forEach(function(file) {
    	if (path.extname(file) === extName) {
    		console.log(file);
    	}
    });
});

