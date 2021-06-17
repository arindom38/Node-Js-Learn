//dummy data
var data = [{item: 'Take Meal'},{item: 'Kick some Coding'},{item: 'Take a nap'}];
var urlencodeParser = require('express').urlencoded({extended:true});
module.exports = (app) => {

app.get('/todo',(req,res)=>{
  res.render('todo',{todos: data});
});

app.post('/todo',urlencodeParser,(req,res)=>{
  //adding the new item in the existing data
  data.push(req.body);
  res.json(data); //can also be send as res.json({todos: data})
});

app.delete('/todo',(req,res)=>{

});

};
