var fs = require('fs');
var fileName = process.argv[2];
var numNewlines = undefined;

function getNumLines() {
	fs.readFile(fileName, function doneReading(err, fileContents) {
//		console.log(fileContents.toString());
	    numNewlines = fileContents.toString().split('\n').length-1;
	    console.log(numNewlines);
	})
}

getNumLines();

