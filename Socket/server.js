const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(3000);

