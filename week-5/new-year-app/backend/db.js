// todo{
//  title: string,
//  desc: string,
//  completed: boolean
// }
//
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://deepjyotisarmah:adminDeepjyoti@cluster0.u5ztc33.mongodb.net/")
const TodoSchema = mongoose.Schema({
  title: String,
  desc: String,
  completed: Boolean
});

const todo =  mongoose.model('todo', TodoSchema);

module.exports = {
  todo
}
