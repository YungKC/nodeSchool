var mymodule = require('./mymodule.js');
var dirPath = process.argv[2];
var extName = process.argv[3];

mymodule(dirPath, extName, function callback(err, list) {
	if (err) {
		console.log(err);
		return;
	}

	list.forEach(function(file) {
    	console.log(file);
    });
});