//dummy data
var data = [{item: 'Take Meal'},{item: 'Kick some Coding'},{item: 'Take a nap'}];
module.exports = (app) => {

app.get('/todo',(req,res)=>{
  res.render('todo',{todos: data});
});

app.post('/todo',(req,res)=>{ //no need to urlencodeparsser the middleware is already using it
  //adding the new item in the existing data
  data.push(req.body);
  res.json(data); //can also be send as res.json({todos: data})
});

app.delete('/todo/:item',(req,res)=>{
  data = data.filter((todo)=>{
    //filter function delete the data which will match the item in the data with the request item
    return todo.item.replace(/ /g,'-') !== req.params.item;
  });
  res.json(data);
});

};
