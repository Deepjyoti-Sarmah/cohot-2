const express = require("express");

const app = express();
app.use(express.json());

app.post("/health-checkup", function (req, res) {
  // kidney = [1,2]
  const kidney = req.body.kidney;
  let kidneyLength;

  if(!kidney) {
    res.json({
      msg: "wrong input"
    })
  } else {
      kidneyLength = kidney.length;
  }

  res.send(' you have ' + kidneyLength + " kidney");
});

// global catches
app.use(function(err, req, res, next){
  res.json({
    msg: "Sorry something is wrong"
  });
});

app.listen(3000);
