var express = require('express');
var net = require('net');

// Connect to TIVO box
var client = new net.Socket();
client.connect(31339, '192.168.0.159', function() {
	console.log('Connected to Tivo');
});
client.on('close', function() {
	console.log('Disconnected from Tivo');
});
client.on('data', function(data) {
	console.log('Received: ' + data);
});

// Create Web Server
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/remote.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/images/virgin_tivo_remote.png'));
});
app.post('/ircode/:code', function (req, res) {
   client.write('IRCODE ' + req.params.code + '\r\n');
   res.end();
})
app.post('/teleport/:code', function (req, res) {
   client.write('TELEPORT ' + req.params.code + '\r\n');
   res.end();
})

var server = app.listen(10001, function () {

  var port = server.address().port

  console.log("Listening on port", port)
})
server.on('close', function() {
    client.destroy();
})

// Trap Ctrl-C
//process.on('SIGINT', function() {
//    server.close();
//});
