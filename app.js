var Emitter = require('./emiiter');

var emtr = new Emitter();

emtr.on('greet', function () {
  console.log('somewhere');
});

emtr.on('greet', function () {
  console.log('else where');
});

console.log('hello');
emtr.emit('greet');