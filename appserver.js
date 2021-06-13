var http = require('http');

var server = http.createServer((req,res)=>{
  console.log('request is made: '+req.url);
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('<h2>Hello Galaxy!</h2>');
});

server.listen(3000,'127.0.0.1');
console.log('Server is lisenting to port : 3000');
