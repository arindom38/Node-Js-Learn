//dummy data
var data = [{item: 'Take Meal'},{item: 'Kick some Coding'},{item: 'Take a nap'}];
const Todo = require('../models/todo'); //.. require as it needs to get to the root directory one step
module.exports = (app) => {

app.get('/todo',(req,res)=>{
  Todo.find()
    .then((result)=>{
      res.render('todo',{todos: result});
    })
    .catch((err)=>{
      console.log(err);
    });
});

app.post('/todo',(req,res)=>{ //no need to urlencodeparsser the middleware is already using it
  const todos = new Todo({
    item: req.body.item
   });
  todos.save()
    .then((result)=>{
      console.log('Post :'+result);
      res.json(result);
    })
    .catch((err)=>{
      console.log(err);
    });
});

app.delete('/todo/:item',(req,res)=>{
  Todo.find({item: req.params.item.replace(/\-/g," ")}).remove()
    .then((result)=>{
      res.json(data);
    })
    .catch((err)=>{
      console.log(err);
    });

});

};
