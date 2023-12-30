const jwt = require("jsonwebtoken");

// decode, verify, generate 
//
const value = {
  name: "deep",
  accountNumber: 12345
}

// sign and not genrate 
// const token = jwt.sign(value, "secret");
// console.log(token);

const jwtValue = {
  "name": "deep",
  "accountNumber": 12345,
  "iat": 1703933681
}

// const faketoken = jwt.sign(jwtValue, "secret");
// console.log(faketoken);


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVlcCIsImFjY291bnROdW1iZXIiOjEyMzQ1LCJpYXQiOjE3MDM5MzM2ODF9.ogEH3pcLq3GFlV8PDTEtse9U20_KUND-B3hsswxG6y4
//
const real = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVlcCIsImFjY291bnROdW1iZXIiOjEyMzQ1LCJpYXQiOjE3MDM5MzM2ODF9.ogEH3pcLq3GFlV8PDTEtse9U20_KUND-B3hsswxG6y4"

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVlcCIsImFjY291bnROdW1iZXIiOjEyMzQ1LCJpYXQiOjE3MDM5MzM2ODF9._gSl1CRIRHC7ueIA0zEocnMQt2wjtvvlWKJ9UV8NDFA
//
const fake = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVlcCIsImFjY291bnROdW1iZXIiOjEyMzQ1LCJpYXQiOjE3MDM5MzM2ODF9._gSl1CRIRHC7ueIA0zEocnMQt2wjtvvlWKJ9UV8NDFA" 

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVlcCIsImFjY291bnROdW1iZXIiOjEyMzQ1LCJpYXQiOjE3MDM5MzM2ODF9.ogEH3pcLq3GFlV8PDTEtse9U20_KUND-B3hsswxG6y4

const fake2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVlcCIsImFjY291bnROdW1iZXIiOjEyMzQ1LCJpYXQiOjE3MDM5MzM2ODF9.ogEH3pcLq3GFlV8PDTEtse9U20_KUND-B3hsswxG6y4"

// if (real === fake2) {
//   console.log("true");
//   return true;
// } else {
//   console.log("false");
//   return false;
// }

//
const finalvalue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVlcCIsImFjY291bnROdW1iZXIiOjEyMzQ1LCJpYXQiOjE3MDM5MzM2ODF9.ogEH3pcLq3GFlV8PDTEtse9U20_KUND-B3hsswxG6y4", "secret");
console.log(finalvalue);


