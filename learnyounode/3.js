var fs = require('fs');
var fileName = process.argv[2];
var buffer = fs.readFileSync(fileName);
var numNewlines = buffer.toString().split('\n').length-1;
console.log(numNewlines);