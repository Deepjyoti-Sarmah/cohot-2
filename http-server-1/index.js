const express = require('express')
const app = express()
const port = 3000

// create a todo app that lets users store todos on the server
// try to create a http server from scratch in c
// creaate an http server in rust using actix-web 
// create an http server in golang using the gorrila framework
// spring boot java
app.get('/', function(req, res) {
  //db call
  res.send('Hello World!')
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})

