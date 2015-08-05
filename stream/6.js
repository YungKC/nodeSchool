var concat = require('concat-stream')

function reverse(inString) {
	var o=''
	for (var i=inString.length-1; i>=0; o+=inString[i--]) {}
	return o
}

process.stdin.pipe(concat(function(body) {
	process.stdout.write(reverse(body.toString()))
//	process.stdout.write(body.toString().split('').reverse().join(''))
}))