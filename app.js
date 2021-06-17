//imported module
var express = require('express');
var todoController = require('./controllers/todoController');
//express fire function
var app = express();

//set up template engine
app.set('viw engine','ejs');

//middle-ware for assets management
app.use(express.static('./public'));

//Handle controllers
todoController(app);
//listen to port
app.listen(3000);
console.log('Your app is listenting to port 3000');
