//return a function
var express = require('express');
var app = express();

//for rendering dynamic data into view need ejs template engine
//view engine will automatically serach *.ejs file in views folder
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html');
});

app.get('/contact',(req,res)=>{
  res.sendFile(__dirname+'/contact.html');
});

//id is a varaible ,can be used for dynamic routing
app.get('/profile/:id',(req,res)=>{
  var data = {age: 28, job: 'Developer',hobbies:['Travelling','Music','Drawing']};
  res.render('profile',{id: req.params.id,data:data});
});
//server need to listen to a port
app.listen(3000);
