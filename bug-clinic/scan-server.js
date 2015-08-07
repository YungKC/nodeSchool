//  scan-server.js
// kai - set environment variable with
// set NODE_DEBUG=http node scan-server.js

console.log(process.env.NODE_DEBUG);

var createServer = require("http").createServer;
var server = createServer(function (req, res) {
  res.end("hello");
});
server.listen(9876, function () {
  console.log("listening");
});	