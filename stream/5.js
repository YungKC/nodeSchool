var through = require('through2')
var split = require('split')
var stream = through(write, end)
var lineNum = 1

function write (buffer, encoding, next) {
	if (lineNum%2 === 0)
		this.push(buffer.toString().toUpperCase())
	else
		this.push(buffer.toString().toLowerCase())
	this.push('\n')
	lineNum++
	next()
}

function end (done) {
	done()
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout)