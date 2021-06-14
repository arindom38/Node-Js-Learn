//Buffer is temporary storage for stroing a chunk of data.\
//Stream is line where the data is loaded and passed
/*
Streams =>
1. Write able stream
2. Readbale Streams
3. Duplex
*/
var http = require('http');
var fs = require('fs');

//custom Readstream using fs module
var myReadSteam = fs.createReadStream(__dirname+'/readMe.txt');

//create a event for reading the data in Stream
myReadSteam.on('data',(chunk)=>{
  console.log('chunk recieved:');
  console.log(chunk);
});
