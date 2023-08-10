// Create web server
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

// Serve static files
app.use(express.static(__dirname + '/public'));

// Listen for HTTP connections on port 3000
var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('Listening on port ' + port + '...');
});

// socket.io server
var io = require('socket.io').listen(server);

// In-memory store for comments
var comments = [];

// Listen for incoming connections from clients
io.sockets.on('connection', function (socket) {
  console.log('New client connected!');

  // Emit comments event to client
  socket.emit('comments', comments);

  // Listen for addComment event from client
  socket.on('addComment', function (data) {
    console.log('addComment event:', data);

    // Add comment to in-memory store
    comments.push(data);

    // Emit updated comments event to all clients
    io.sockets.emit('comments', comments);
  });
});
