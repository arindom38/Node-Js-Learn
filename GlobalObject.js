//These objects are available in all modules. The following variables may appear to be global but are not. They exist only in the scope of modules,
// console.log("Hey Coders!!");
console.log(__dirname);
console.log(__filename);
var time = 0;
var timer = setInterval(function(){
  time += 2;
  console.log(time+" second has passed");
  if(time > 6)
    clearInterval(timer);
},3000);

//it will print after 2 second pass though this function is written in lower order of the previosu funcntion
setTimeout(function(){
  console.log("printing after 2 seconds");
},2000);

//other important global objects
/*
require,
module,
etc
*/
