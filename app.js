//return a function
var express = require('express');
var app = express();

app.get('/',(req,res)=>{
  res.send('This is my Website!!');
});

app.get('/contact',(req,res)=>{
  res.send('This is contact page');
});

//server need to listen to a port
app.listen(3000);
