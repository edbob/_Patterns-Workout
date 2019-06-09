var co = require('co');
var redisClient = require('redis').createClient();
var wrapper = require('co-redis');
var redisCo = wrapper(redisClient);
co(function* () {
  yield redisCo.set('test', 33);
  console.log(yield redisCo.get('test')); // logs 33
});