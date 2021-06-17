const mongoose = require('mongoose');

//Schema define the strute of the data
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  item: { //properties and validations can be added here
    type: String,
    required: true
  }
},{timestamps: true}); //automatically create timestamps of the data

//Model : wrap the schema and act as a interface for db
//model() first parameter is the name of the collection in singular form .mongoose will create collection if none exists
const Todo = mongoose.model('todo-db',todoSchema);
module.exports = Todo;
