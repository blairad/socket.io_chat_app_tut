var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
})

// /////////////////////////////
// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
// We define a route handler / that gets called when we hit our website home.
// We make the http server listen on port 3000.