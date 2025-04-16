// ################# LOOPS #################

// ################# WHILE LOOP #################
// var i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }


// ################# DO-WHILE LOOP #################
// var pin = 2224;
// let userPin;
// do {
//     userPin = prompt("Enter user pin:");
// } while (userPin != pin);
// console.log("PIN VERIFIED : ACCESS GRANTED");


// ################# FOR LOOP #################
// for (var i = 0; i <= 5; i++) {
//     console.log(i);
// }


// ################# FOR-IN LOOP (INDEX VALUES) #################
var arr = [12, 24, 22, 5, 3, 11, 23, 20];
var arr = 'Hello World'
var arr = { a:'10', b:'20', c:'30' }
for (var i in arr) {
    console.log(i); // To print index values
}


// ################# FOR-OF LOOP (VALUES) #################
var arr = [12, 24, 22, 5, 3, 11, 23, 20];
var arr = 'Hello World'
var arr = { a:'10', b:'20', c:'30' }
for (var n of arr) {
    console.log(n); // To print actual values
}