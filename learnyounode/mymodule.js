var fs = require('fs');
var path = require('path');

module.exports = function getFiles(dirPath, extName, callback) {
	var searchExtName = '.' + extName;
	fs.readdir(dirPath, function _callback(err, list) {
		if (err)
			return callback(err);
		var result = [];
		list.forEach(function(file) {
	    	if (path.extname(file) === searchExtName) {
//	    		console.log(file);
	    		result.push(file);
	    	}
	    });
	    callback(null, result);
	});
}

