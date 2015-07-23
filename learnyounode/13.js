var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res) {
	if (req.method != 'GET')
		return res.end('send me a GET\n')
	res.writeHead(200, {'content-type':'application/json'})
	var data = url.parse(req.url, true)
	var inDate = new Date(data['query']['iso'])
	var result = {};
	if (data['pathname'] == "/api/parsetime") {
		result['hour'] = inDate.getHours()
		result['minute'] = inDate.getMinutes()
		result['second'] = inDate.getSeconds()
		res.end(JSON.stringify(result))
	}
	else if (data['pathname'] == "/api/unixtime") {
		result['unixtime'] = inDate.getTime()
		res.end(JSON.stringify(result))
	}
	
})
server.listen(process.argv[2])

