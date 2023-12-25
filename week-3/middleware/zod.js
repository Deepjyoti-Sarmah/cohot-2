const express = require("express");
const zod = require("zod")
const app = express();

const schemas= zod.array(zod.number());

const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("US")),
  age: zod.number().min(18),
  kidneys: zod.array(zod.number())
})
  
app.use(express.json());

app.post("/health-checkup",  function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body.kidneys;
  const response = schemas.safeParse(kidneys)
  if(! response.success) {
    res.status(411).json({
      msg: "input is invalid"
    })
  } else {
    res.send({
      response
    })
  }
});


