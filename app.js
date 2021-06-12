//core module for events(build in)
var events = require('events');
//event emitter using util module
var util = require('util');
/* Simple Event example
//customized event emitter constructor
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(mssg){
  console.log(mssg);
});

//Manualy emitting the event for test purpose
myEmitter.emit('someEvent','The event is emitted!'); */

//creating object with constructor
var Person = function(name){
  this.name = name;
};

//inheriting util for Person object
util.inherits(Person,events.EventEmitter);

//creating some Person object instances
var aro = new Person('aro');
var mahidul = new Person('mahidul');
var pijush = new Person('pijush');
//array of person instances
var people = [aro,mahidul,pijush];

//custom evenet for each person in the people array
people.forEach((Person) => {
  Person.on('speak',function(mssg){
    console.log(Person.name + ' said: '+ mssg);
  });
  Person.on('work',mssg =>{
    console.log(Person.name+' work: '+ mssg);
  });
});


//event calling
aro.emit('speak','Hey brossss!');
mahidul.emit('speak',"Let's Eat togehther!");
pijush.emit('speak','I have works to do, later !!');
pijush.emit('work','working for 2 hrs');
