function Emitter() {
  this.events = {};
}
Emitter.prototype.on = function (type, listener) {
  // common to use on when add listener to a event
  // upon this happening
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
  // invoker producer discharge
  if (this.events[type]) {
    this.events[type].forEach(listener => {
      listener();
    });
  }
}
// this file equal is to events of node js 
// actually in node js events lib do this for us consider that
module.exports = Emitter;