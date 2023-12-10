// const fs = require('fs');

// //my own asynchronous function
// //
// function deepsReadFile() {
//   console.log("inside deepreadfile");
//   let p = new Promise(function(resolve) {
//     console.log("inside promise");
//     fs.readFile("a.txt", "utf-8", function(err, data){
//       console.log("before resolve");
//       resolve(data);
//     });
//   });

//   return p;
// }

// //callback function to call 
// function onDone(data) {
//   console.log(data);
// }

// // deepsReadFile().then(onDone);
// let a = deepsReadFile();
// // console.log(a);
// a.then(onDone);
//
//
function deepAsyncFunction() {
  let p = new Promise(function(resolve){
    setTimeout(resolve,2000);
  });
  return p;
}

const value = deepAsyncFunction();
value.then(function(){
  console.log("hi there");
});

