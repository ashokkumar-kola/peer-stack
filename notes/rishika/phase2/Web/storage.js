// localStorage.setItem("user", "Alice"); // Store data
// localStorage.setItem("place", "Blr"); 

// console.log(localStorage.getItem("username")); // Retrieve data

// localStorage.removeItem("user"); // Remove data

// localStorage.clear() //clear data






// sessionStorage.setItem("username", "John"); // Store data
// sessionStorage.setItem("place", "Hyd"); 

// console.log(sessionStorage.getItem("username")); // Retrieve data

// sessionStorage.removeItem("username"); // Remove data

// sessionStorage.clear() //clear data







// Set a cookie with expiration and path
// document.cookie = "user=JohnDoe; expires=" + new Date(2025, 11, 31).toUTCString() + "; path=/";
// document.cookie = "loggedIn=true; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Retrieve cookies
// console.log(document.cookie); 

// Delete a cookie (set an expiration date in the past)
// document.cookie = "user=JohnDoe; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";




















// // Open (or create) a database
// let request = indexedDB.open("MyDatabase", 1);

// // Handle success or error
// request.onsuccess = function(event) {
//     let db = event.target.result;
//     console.log("Database opened successfully");
// };

// request.onerror = function(event) {
//     console.log("Error opening database:", event.target.errorCode);
// };

// // Create an object store if it doesn’t exist
// request.onupgradeneeded = function(event) {
//     let db = event.target.result;
//     let objectStore = db.createObjectStore("users", { keyPath: "id" });
//     console.log("Object store created");
// };





