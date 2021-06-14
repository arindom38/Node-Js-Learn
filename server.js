
var http = require('http');
var fs = require('fs');
//var pipeStream = require('./pipeStream').myReadSteam;

var server = http.createServer((req,res)=>{
  console.log('request is made: '+req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  //this callback function will execute everytime a request is send
  // if we use it by exporting from another module (pipeStream.js) with reload it can't read file
  var myReadSteam = fs.createReadStream(__dirname+'/readMe.txt','utf8');
  myReadSteam.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('Server is lisenting to port : 3000');
