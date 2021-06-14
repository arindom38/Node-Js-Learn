
var http = require('http');
var pipeStream = require('./pipeStream').myReadSteam;

var server = http.createServer((req,res)=>{
  console.log('request is made: '+req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  pipeStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('Server is lisenting to port : 3000');
