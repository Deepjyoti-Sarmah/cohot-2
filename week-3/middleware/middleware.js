const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if(!(username === "deep" && password === "pass")) {
    // do something 
    res.status(400).json({"msg": "Something is wrong"});
    return;
  }

  if(!(kidneyId == 1 || kidneyId == 2)){
    res.status(400).json({"msg": "Something is wrong"});
    return;
  }
  
  res.status(200).json({msg: "Your kidney is fine"});
  
});

app.listen(3000);
