const express = require('express'),
  http = require('http'),
  path = require('path'),
  io = require('socket.io'),
  redis = require('redis'),
  co = require('co'),
  uuid = require('node-uuid'),
  favicon = require('serve-favicon'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),

  client = redis.createClient({ host: 'localhost' }),
  wrapper = require('co-redis'),
  redisCo = wrapper(client);

const app = express();
app.use(morgan('dev'));

app.set('port', process.env.PORT || 8080);
//app.set('view', __dirname + '/views');
app.use(favicon(path.join(__dirname, 'views/img', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'views')));
app.set("view engine", 'html');


let server = http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});

app.use(bodyParser.json({
  limit: "10kb"
}));

app.use(bodyParser.urlencoded({ extended: false }));

let sio = io.listen(server);

sio.sockets.on('connection', function (socket) {
 
  /* Handles 'all' namespace
  function: list all todos
  response: all todos, json format
  */
  co(function* () {
    var todos = [];
    var keys = yield redisCo.keys('addword-*');

    var i, id;
    for (i = 0; id = keys[i++];) {
      var item = yield redisCo.hgetall(id);
      todos.push({
        _id: id,
        title: item.title,
        complete: item.complete
      });
    }

    socket.emit('all', todos);
  });

  /* Handles 'add' namespace
  function: add a todo 
  Response: Todo object
  */
  socket.on('add', function (data) {
    var todo = {
      id: uuid.v1(),
      title: data.title,
      complete: 0
    };
    client.hmset('addword-' + todo.id, 'title', todo.title, 'complete', todo.complete, function () {
      socket.emit('added', todo);
      socket.broadcast.emit('added', todo);
    });
  });

  /* Handles 'delete' namespace
  function: delete a todo
  response: the delete todo id, json object
  */
  socket.on('delete', function (data) {
    client.del(data.id, function () {
      socket.emit('deleted', data);
      socket.broadcast.emit('deleted', data);
    });
  });

  /* Handles 'edit' namespace
  function: edit a todo
  response: edited todo, json object
  */
  socket.on('edit', function (data) {
    co(function* () {
      yield redisCo.hset(data.id, 'title', data.title);
      socket.emit('edited', data);
      socket.broadcast.emit('edited', data);
    });
  });

  /* Handles 'changestatus' namespace
  function: change the status of a todo
  response: the todo that was edited, json object
  */
  socket.on('changestatus', function (data) {
    co(function* () {
      var status = data.status === 'complete' ? 1 : 0;
      yield redisCo.hset(data.id, 'complete', status);
      socket.emit('statuschanged', data);
      socket.broadcast.emit('statuschanged', data);
    });
  });

  /* Handles 'allchangestatus' namespace
  function: change the status of all todos
  response: the status, json object
  */
  socket.on('allchangestatus', function (data) {
    co(function* () {
      var status = data.status === 'complete' ? 1 : 0;
      var keys = yield redisCo.keys('addword-*');

      var i, id;
      for (i = 0; id = keys[i++];) {
        yield redisCo.hset(id, 'complete', status);
      }

      socket.emit('allstatuschanged', data);
      socket.broadcast.emit('allstatuschanged', data);
    });
  });
});