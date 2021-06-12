//core module for events(build in)
var events = require('events');

//customized event emitter constructor
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(mssg){
  console.log(mssg);
});

//Manualy emitting the event for test purpose
myEmitter.emit('someEvent','The event is emitted!');
