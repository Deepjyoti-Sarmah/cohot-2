const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors);
// body {
// title: string
// desc: string
// }


app.post("/todo", async function(req, res){
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload) {
    res.status(411).json({
      msg: "You have the wrong input"
    });
    return;
  }
  // put it in mongodb
  await todo.create({
    title: createPayload.title,
    desc: createPayload.desc,
    completed: false
  })

  res.json({
    msg: "Todo created"
  })
})

app.get("/todos", async function(req, res){
  const todos = await todo.find({});

  res.json({
    todos
  })
  
})

app.put("/completed", async function(req, res){
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload) {
    res.status(411).json({
      msg: "You have the wrong input"
    });
    return;
  }

  await todo.update({
    _id: req.body.id
  },{
      completed: true
  })
  
  res.json({
    msg: "Todo marked is completed"
  })

})

app.listen(3000);
