// FUNCTIONS
// BLOCK OF CODE
// CODE REUSABILITY
// FUNCTION HOISTING IS POSSIBLE  --  CALLING BEFORE DECLARATION

// FUNCTION EXPRESSION

// ================== //
// ANONYMOUS FUNCTION //
// ================== //

// FUNCTION HOISTING WILL NOT WORK  --  CALLING BEFORE DECLARATION

var add = function (a, b) {
  // console.log(a+b)
  return a + b;
};
var res = add(10, 20);
// console.log(res)
// console.log(add)   --  // RETURNS THE WHOLE FUNCTION

// ============================================ //
// IIFE - IMMUTABLE INVOKES FUNCTION EXPRESSION //
// ============================================ //

// ( <ANONYMOUS FUNCTION> ) ( <FUNCTION CALLING> ) ;
// AUTOMATICALLY GETS CALLED WITH THE USE OF ()
// ONLY ONCE WE CAN CALL

// (function(){
//     console.log(`This is IIFE`)
// })();



// ============== //
// ARROW FUNCTION //
// ============== //

//

var arrow = () => {
  console.log("This is Actual Arrow Function");
};
// arrow()

var arrow = () => console.log("This is One Statement Arrow Function");
// arrow()

var arrow = (a) => {
  console.log("This is One Parameter Arrow Function", a);
};
// arrow(24)

var arrow = (a, b) => {
  console.log("This is Multiple Parameter Arrow Function", a, b);
};
// arrow(24, 22)

// ============================================ //
// HIGHER ORDER FUNCTION and CALL BACK FUNCTION //
// ============================================ //

// CALL BACK FUNCTION
// function callBackFun(){
//     console.log("This is callback function")
// }
// HIGHER ORDER FUNCTION
// function higherOrderFun(callBackFun){
//     callBackFun()
//     console.log("This is Higher Order Fun")
// }
// higherOrderFun(callBackFun)

// ANONYMOUS FUNCTION AS CALLBACK FUNCTION TO HIGHER ORDER FUNCTION
// function higherOrderFun(callBackFun){
//     callBackFun()
//     console.log("This is Higher Order Fun")
// }
// higherOrderFun(function(){
//     console.log("This is Anonymous Callback Function")
// })

// =============== //
// NESTED FUNCTION //
// =============== //

// function parentFun(){
//     console.log("Start of Parent Function")
//     function childFun(){
//         console.log("Child Function")
//     }
//     childFun()
//     console.log("End of Parent Function")
// }parentFun()

function parentFun() {
  console.log("Parent Function");
  function childFun() {
    console.log("Child Function");
  }
  return childFun;
}
var childFunction = parentFun();
childFunction();

// RESULT DOM OBJECT
var res = document.getElementById("result");

function wedding() {
  console.log("End of Boys Life!!!");
}
// wedding()

function add() {
  var a = prompt("Enter value of a");
  var b = prompt("Enter value of b");
  console.log(`Addition btw ${a} and ${b} is ${Number(a) + Number(b)}`);

  res.innerHTML = `Addition btw ${a} and ${b} is ${Number(a) + Number(b)}`;
}
// add()

function multiply() {
  var a = prompt("Enter value of a");
  var b = prompt("Enter value of b");
  console.log(`Multiplication of ${a} and ${b} is ${Number(a) * Number(b)}`);

  res.innerHTML = `Multiplication of ${a} and ${b} is ${Number(a) * Number(b)}`;
}
// multiply()

function areaOfCircle() {
  var r = prompt("Enter value of radius");
  console.log(
    `Area of Circle with radius ${r} is ${2 * 3.14 * Number(r) * Number(r)}`
  );

  res.innerHTML = `Area of Circle with radius ${r} is ${
    2 * 3.14 * Number(r) * Number(r)
  }`;
}
// areaOfCircle()

function user(uName, uId, uEmail, uGender) {
  console.log(uName);
  console.log(uId);
  console.log(uEmail);
  console.log(uGender);
}
// user("Sai", 24, "ashoka@gmail.com", "Male")

function addition(num1, num2) {
  // console.log(num1 + num2)
  return num1 + num2;
}
// var res = addition(22, 24)
// console.log(res)

function simpleInterest(principle, time, rateOfInterest) {
  var SI = (principle * time * rateOfInterest) / 100;
  var TMoney = principle + SI;
  var monthlyEMI = TMoney / (time * 12);

  console.log(`TOTAL MONEY : ${TMoney} \nMONTHLY EMI : ${monthlyEMI}`);

  return TMoney, monthlyEMI;
}
// var icic, EMI = simpleInterest(2400000, 5, 10)
// console.log(icic, EMI)
// simpleInterest(2400000, 2, 10)

function areaOfTriangle(b, h) {
  var b = Number(prompt("Enter base value"));
  var h = Number(prompt("Enter Height value"));

  console.log(`Area of trianlge is : ${0.5 * b * h}`);

  res.innerHTML = `Area of trianlge is : ${0.5 * b * h}`;
}
// areaOfTriangle(b, h)

// IIFE EXAMPLE
(function(){
    console.log(`This is IIFE`)
})();
console.log("I am in middle of IIFE")
(function(){
    console.log(`This is 2nd IIFE`)
})();

// ANONYMOUS VS IIFE
// var fun1 = function(){
//     console.log("This is ann. fun.")

//     return 24
// }

// var fun2 = (function(a, b){
//     console.log("This is IIFE")

//     return a+b
// })(22, 24);

// console.log(fun1, fun1())
// console.log(fun2)  // RETURNS VALUE
// console.log(fun2)

var areaOfSquare = (sqSide) => {
  var areaS = sqSide * sqSide;
  return areaS;
};
var areaOfRectangle = (w, h) => {
  var areaR = w * h;
  return areaR;
};
var areaOfTriangle = (tBase, tHeight) => {
  var areaT = 0.5 * tBase * tHeight;
  return areaT;
};
var shaded = (sqBig, rHeight, tBase, tHeight) => {
  var rWidth = sqBig - tBase;

  var areaT = areaOfTriangle(tBase, tHeight);
  var areaS = areaOfSquare(sqBig);
  var areas = areaOfRectangle(rWidth, rHeight);

  var areaShaded = areaS - (areaT + areas);

  console.log(areaShaded);
};
// shaded(10, 3, 3, 10)
