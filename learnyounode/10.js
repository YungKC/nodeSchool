var net = require('net')
var server = net.createServer(function(socket) {
	function zeroFill(i) {
		return i<10 ? '0' + i : i
	}
	var curDate = new Date()
	var curMonth = curDate.getMonth()+1
	var curMonthString = curMonth < 10 ? '0'+curMonth : curMonth
	var result = curDate.getFullYear()+'-'+zeroFill(curDate.getMonth()+1)+'-'+zeroFill(curDate.getDate())+' '+zeroFill(curDate.getHours())+':'+zeroFill(curDate.getMinutes()) + '\n'
	socket.end(result)
})
server.listen(process.argv[2])
