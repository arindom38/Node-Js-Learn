//return a function
var express = require('express');
var app = express();

//for rendering dynamic data into view need ejs template engine
//view engine will automatically serach *.ejs file in views folder
app.set('view engine', 'ejs');
//middle ware used for loading static files like css
//the first paramter in use function indicating  the href link in ejs/html file .eg href="/resources/style.css"
//2nd paramtet indicating the actual path of the css file
// details : https://expressjs.com/en/guide/using-middleware.html#middleware.router
app.use('/resources',express.static('assets'));

app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/contact',(req,res)=>{
  res.render('contact');
});

//id is a varaible ,can be used for dynamic routing
app.get('/profile/:id',(req,res)=>{
  var data = {age: 28, job: 'Developer',hobbies:['Travelling','Music','Drawing']};
  res.render('profile',{id: req.params.id,data:data});
});
//server need to listen to a port
app.listen(3000);
