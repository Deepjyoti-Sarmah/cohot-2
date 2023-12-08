// console.log("Hello World");
// console.log(a);
//

// let firstName = "Deep";
// let age = 22;
// let isMarried = true;

// if (isMarried === true) {
//   console.log(firstName + "is married");
// } else {
//   console.log(firstName + "is not married")
// }

// let ans = 0;

// for (let i = 0; i<= 100; i++) {
//   ans += i;
// }

// console.log(ans);
//

// const personArray = ["deep", "harkirat", "priya"];
// const genderArray = ["male", "male", "female"];

// for (let i =0; i< personArray.length; i++) {
//   if(genderArray[i] === "male") {
//     console.log(personArray[i]);
//   }
// }
//

// const allUser = [{
//     firstName: "Deep",
//     gender: "male"
// }, {  
//     firstName: "harkirat",
//     gender: "male"
// }, {
//     firstName: "priya",
//     gender: "female"
//   }]

// for(let i =0; i<= allUser.length; i++) {
//   if(allUser[i]["gender"] == "male") {
//     console.log(allUser[i]["firstName"]);
//   }
// }
//

// for (let i = 0; i<100000000000; i++) {
//   sum = sum + i;
//   
// }

// console.log(sum);

function sum(num1, num2, funToCall) {
    let result = num1 + num2;
    // return result;
  //
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
//
//
//
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}


function sumOfSomet(a, b , fn) {
  let val1 = fn(a);
  let val2 = fn(b);

  return val1 + val2;
}

console.log(sumOfSomet(1, 2, square));
console.log(sumOfSomet(1, 2, cube));

const ans = sumOfSomet(1, 2, function(n) {
  return n * n * n  * n;
})
console.log(ans);
