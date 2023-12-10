function deepAsyncFun() {
  let p = new Promise(function(resolve) {
    //do some async function here
    setTimeout(function() {
      resolve("hi there");
    }, 2000);
  });
  return p;
}

async function main() {
  // no callbacks, no then syntax
  // deepAsyncFun().then(function(value){
    // console.log(value);
  // });
  let value = await deepAsyncFun();
  console.log("hi there 1");
  console.log(value);
}

main();
console.log("after main");
