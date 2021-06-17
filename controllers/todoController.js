//dummy data
var data = [{item: 'Take Meal'},{item: 'Kick some Coding'},{item: 'Take a nap'},];
module.exports = (app) => {

app.get('/todo',(req,res)=>{
  res.render('todo',{todos: data});
});

app.post('/todo',(req,res)=>{

});

app.delete('/todo',(req,res)=>{

});

};
