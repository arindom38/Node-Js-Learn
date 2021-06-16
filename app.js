//return a function
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//for rendering dynamic data into view need ejs template engine
//view engine will automatically serach *.ejs file in views folder
app.set('view engine', 'ejs');
//middle ware used for loading static files like css/json etc
//the first paramter in use function indicating  the href link in ejs/html file .eg href="/resources/style.css"
//2nd paramtet indicating the actual path of the css file
// details : https://expressjs.com/en/guide/using-middleware.html#middleware.router
app.use('/resources',express.static('assets'));

//middle-ware for form submit post request ,request is pass through request body
var urlencodedParser = bodyParser.urlencoded({extended:false});

//request handling
app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/contact',(req,res)=>{
  res.render('contact',{qs: req.query}); //sending the query string like ..../contact?dept=IT&person=joye
});

app.post('/contact',urlencodedParser,(req,res)=>{
  console.log(req.body);
  res.render('contact-success',{data: req.body});
});

//id is a varaible ,can be used for dynamic routing
app.get('/profile/:id',(req,res)=>{
  var data = {age: 28, job: 'Developer',hobbies:['Travelling','Music','Drawing']};
  res.render('profile',{id: req.params.id,data:data});
});
//server need to listen to a port
app.listen(3000);
