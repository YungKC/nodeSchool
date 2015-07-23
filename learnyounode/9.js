var http = require('http')
var fullContent = ['', '', '']
var completeCount = 0

var worker = function(index, res) {
	res.setEncoding('utf8')
	res.on('error', console.error)
	res.on('data', function(data) {
		fullContent[index] += data
	})
	res.on('end', function() {
		completeCount++
		if (completeCount == 3) {
			console.log(fullContent[0])
			console.log(fullContent[1])
			console.log(fullContent[2])			
		}
	})
}

http.get(process.argv[2], function(res) {
	worker(0, res)
})

http.get(process.argv[3], function(res) {
	worker(1, res)
})

http.get(process.argv[4], function(res) {
	worker(2, res)
})