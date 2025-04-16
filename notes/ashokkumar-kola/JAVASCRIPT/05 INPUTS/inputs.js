// CONFIRM
window.confirm("CONFIRM")

// PROMPT
window.prompt("Enter a Number :")



// ################# USER INPUT IN JAVASCRIPT #################

// ################# ALERT #################
// - Displays a message
// - No input, only an OK button
alert("This is an alert!");


// ################# CONFIRM #################
// - Displays a message with OK/Cancel
// - Returns true (OK) or false (Cancel)
var result = confirm("Do you want to proceed?");
console.log(result); // true or false


// ################# PROMPT #################
// - Displays a message with an input field
// - Returns user input as a string (null if canceled)
var input = prompt("Enter your name:");
console.log(input);


// ################# HTML INPUT (DOM) #################
// - User input using HTML elements
// - Non-blocking
/*
<input type="text" id="nameInput" placeholder="Enter your name">
<button onclick="getInput()">Submit</button>

<script>
function getInput() {
    var input = document.getElementById("nameInput").value;
    console.log("User Input:", input);
}
</script>
*/


// ################# EVENT LISTENER (REAL-TIME INPUT) #################
// - Detects input dynamically
/*
<input type="text" id="nameBox" placeholder="Type something">
<script>
document.getElementById("nameBox").addEventListener("input", function(event) {
    console.log("Typing:", event.target.value);
});
</script>
*/


// ################# NODE.JS (READLINE) #################
// - Works in Node.js (not browser)
/*
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter your name: ", (name) => {
    console.log(`Hello, ${name}!`);
    readline.close();
});
*/


// ################# FINAL SUMMARY #################
// | Method          | Blocking?| Returns     | Works In   |
// |-----------------|----------|-------------|------------|
// | alert()         | ✅ Yes   | Nothing     | Browser    |
// | confirm()       | ✅ Yes   | true/false  | Browser    |
// | prompt()        | ✅ Yes   | string/null | Browser    |
// | HTML <input>    | ❌ No    | string      | Browser    |
// | Event Listeners | ❌ No    | string      | Browser    |
// | readline()      | ✅ Yes   | string      | Node.js    |
