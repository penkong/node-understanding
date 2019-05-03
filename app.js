// var Emitter = require('events');
// var eventConfig = require('./config').events;

// var emtr = new Emitter();

// emtr.on(eventConfig.GREET, function () {
//   console.log('somewhere');
// });

// emtr.on(eventConfig.GREET, function () {
//   console.log('else where');
// });

// console.log('hello');
// emtr.emit(eventConfig.GREET);
// ===========================================
// inheritance from events module of nodejs
var Emitter = require('events');

var util = require('util');

function Greeter() {
  // for adding new inheritance directly from events module
  // or basically means can do it not necessary or forcefully
  // ensure new obj created has everything of events module as inheritance
  Emitter.call(this);
  // util.inherits(PoliceMan,Person);
  // must call in policeman Person.call(this);
  this.greeting = 'hello';
}
//means every obj created from greeter must have access to emitter
// use util for inheritance
util.inherits(Greeter, Emitter);
// functionality
Greeter.prototype.greet = function (data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
}
// making player here
var greeter1 = new Greeter();
greeter1.on('greet', function (data) {
  console.log('someone greeted!' + data);
})

greeter1.greet('mkz');

// var obj = {
//   name: 'john',
//   greet: function () {
//     console.log(`hello ${this.name}`);
//   }
// }

// obj.greet();
// // call method with new args instead of arg of this.
// obj.greet.call({
//   name: 'ahmad'
// });
// //if method has param call accept as sec arg 
// // but apply take array of params [[][][][][]]
// obj.greet.apply({
//   name: 'ahmad'
// }); 