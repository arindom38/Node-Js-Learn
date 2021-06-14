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
.



//custom Readstream using fs module
var myReadSteam = fs.createReadStream(__dirname+'/readMe.txt');

//read file uing readFile method
fs.readFile('readMe.txt','utf8',(err,data)=>{
  console.log(data);
});

//create a event for reading the data in Stream
myReadSteam.on('data',(chunk)=>{
  console.log('chunk recieved:');
  console.log(chunk);
});
//The main difference is in file read we can't use the data untill fully reciecved
//but in Readstream the chunk data can be used while receiving other chunks
