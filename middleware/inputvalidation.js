const express = require("express");

const app = express();

app.use(express.json());

app.get("/health-checkup", function (req, res) {
  const kidney = req.body.kidney;
  const kidneyLength = req.body.length;

  res.send(' you have' + kidneyLength+ "kidney");
});

app.listen(3000);
