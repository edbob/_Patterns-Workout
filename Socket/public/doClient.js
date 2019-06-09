var socket = io.connect('http://localhost:3000/index.html');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});