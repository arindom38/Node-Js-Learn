//imported module
var express = require('express');
var todoController = require('./controllers/todoController');
const mongoose = require('mongoose');
//express fire function
var app = express();

//connect to database
const dbURI = 'mongodb+srv://ninjaAdmin:test1234@node-db.gwy3t.mongodb.net/nodedb?retryWrites=true&w=majority'
//asynchronous method for db connection
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
  .then((result) => app.listen(3000)) // when db is connected only then server start
  .catch((err)=> console.log(err));
//set up template engine
app.set('view engine','ejs');

//middle-ware for assets management
app.use(express.static('./public'));
//middle-ware for post method handling urlencodeparsser
app.use(express.urlencoded({extended:true}));

//Handle controllers
todoController(app);
//listen to port

console.log('Your app is listenting to port 3000');
