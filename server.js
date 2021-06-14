
var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'application/json'}); //type must be json
  var myObj = {
    name: 'Arindom',
    Job: 'Programmer',
    Salary : '444000.00',
    country: 'Bangladesh'
  };
  res.end(JSON.stringify(myObj)); //sending obj as a json
});

server.listen(3000,'127.0.0.1');
console.log('Server is lisenting to port : 3000');
