var http = require('http');
var fs = require('fs');


var myReadSteam = fs.createReadStream(__dirname+'/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeMePipe.txt');


/*
myReadSteam.on('data',(chunk)=>{
  console.log('chunk recieved:');
  myWriteStream.write(chunk);
});
*/
//using pipe we don't need to write manual event
//pipe is one way , from read stream to write Stream
myReadSteam.pipe(myWriteStream);
