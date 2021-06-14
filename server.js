
var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
  var myReadSteam = fs.createReadStream(__dirname+'/index.html','utf8');
  myReadSteam.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('Server is lisenting to port : 3000');
