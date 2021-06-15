//return a function
var express = require('express');
var app = express();

app.get('/',(req,res)=>{
  res.send('This is my Website!!');
});

app.get('/contact',(req,res)=>{
  res.send('This is contact page');
});

//id is a varaible ,can be used for dynamic routing
app.get('/profile/:id',(req,res)=>{
  res.send('Your profile id: ' + req.params.id );
});
//server need to listen to a port
app.listen(3000);
