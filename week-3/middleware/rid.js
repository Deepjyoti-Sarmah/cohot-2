const express = require("express");
const app = express();

// function isOldEnough(age) {
//   if (age >= 14) {
//     return true;
//   }else {
//     return false;
//   }
// }

function isOldEnoughMiddleware(req, res, next) {
  let age = req.query.age;
  if (age >= 14) {
    next(); 
  }else {
    res.status(400).json({
      msg: "sorry you are not at age yet"
    });
  }
}

app.use(isOldEnoughMiddleware)

app.get("/ride2", function(req, res) {
  // if (isOldEnough(req.query.age)) {
    res.json({
      msg: "you have successfully riden the ride 1"
    });
  // }else {
    // res.status(400).json({
      // msg: "sorry you are not at age yet"
    // });
  // }
});

app.get("/ride", function(req, res) {
  // if (isOldEnough(req.query.age)) {
    res.json({
      msg: "you have successfully riden the ride 1"
    });
  // }else {
  //   res.status(400).json({
  //     msg: "sorry you are not at age yet"
  //   });
  // }
});


// app.get("/ride2", isOldEnoughMiddleware, function(req, res) {
//   // if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "you have successfully riden the ride 1"
//     });
//   // }else {
//     // res.status(400).json({
//       // msg: "sorry you are not at age yet"
//     // });
//   // }
// });

// app.get("/ride", isOldEnoughMiddleware, function(req, res) {
//   // if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "you have successfully riden the ride 1"
//     });
//   // }else {
//   //   res.status(400).json({
//   //     msg: "sorry you are not at age yet"
//   //   });
//   // }
// });

app.listen(3000);
