//Normal function
function sayhi(){
  console.log("Hi bro");
};

sayhi();

//Fucntional expression
var saybye = function(){
  console.log("Bye");
};

saybye();

//calling a function as parameter from a function using funcational expression
function mycommonfun(fun){
  fun();
};

mycommonfun(sayhi);
mycommonfun(saybye);

//another example
function areaprint(fun){
  console.log(fun());
};
var sqr = function(){
  return 3.1416*4*4;
};
var rectangle = function(){
  return 10*20;
};

//calling functions
areaprint(sqr);
areaprint(rectangle);


/*
Syntax for Function Declaration:

function functionName(x, y) { statements... return (z) };
Syntax for Function Expression (anonymous) :

let variableName = function(x, y) { statements... return (z) };
Syntax for Function Expression (named) :

let variableName = function functionName(x, y)
{ statements... return (z) };
Syantax for Arrow Function:



let variableName = (x, y) => { statements... return (z) };
*/
