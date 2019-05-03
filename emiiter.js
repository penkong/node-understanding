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

module.exports = Emitter;