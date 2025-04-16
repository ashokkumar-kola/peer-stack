
// ### JAVASCRIPT ASYNCHRONOUS PROGRAMMING ### //

    
// WHAT HAPPENS NORMALLY

    // SYNCHRONOUS 
    // One thread === One call stack === One thing at a time

    // Call Stack
        console.log('Hey');
        console.log('Hello');
        console.log('Programmers');

        function multiply(a, b){
            console.log('In Multiply')
            return a * b;
        }
        function square(n){
            console.log('In Square')
            return multiply(n, n);
        }
        function printSquare(n){
            console.log('In Print square')
            var squared = square(n);
            console.log(squared);
        }
        printSquare(4)


// =========================================================================== //


// WHY WE NEDD ASYNC

    // Blocking - Slowing down - Slow Rendering
    // Animations, Fetching Data, Database Operations

    var count = 0;

    for (let i = 0; i < 99999; i++){
      count = count + 1;
      console.log(count);
    }

    alert('Common show my alert, Finally..');

    // ------------------------------------------------------

    var count = 0;

    setTimeout(() => {                    // Asynchronously - API provided by browser
      for (let i = 0; i < 99999; i++){
        count = count + 1;
        console.log(count);
      }
    }, 2000);

    alert('Common show my alert, Finally..');

    // --------------------------------------------------------
    
    
// ================================================================================================= //


// JAVASCRIPT ASYNCHRONOUS
    // JAVASCRIPT Alone = SYNCHRONOUS
    // JAVASCRIPT + JavaScript host environments = ASYNCHRONOUS

    // Java script runtime do one thing at a time
    // But the browser can see other things => WEB APIs

    // JavaScript is single-threaded, meaning it can execute one task at a time.
    // However, when dealing with tasks like fetching data from an API, 
    // JavaScript doesn’t wait for the response—it continues executing other code.


    // A single-threaded non-blocking asynchronous concurrent language
        // single execution thread
        // not stop the execution
        // do not pause
        // progress at the same time - but not executed 


    // Asynchronous Programming in JavaScript 
    // To execute tasks without blocking the main thread, making it efficient for 
    // handling I/O operations, network requests, timers, and user interactions.



// WHAT IS API
    // API = Middleman between software applications
    // Helps apps fetch/send data without knowing internal details
    // Used everywhere: Web, Mobile, IoT, Payments, etc.
    // Works by sending a request & receiving a response (usually in JSON)
    // Stored on servers and accessed via URLs (endpoints)
    // Ex: DOM API, Geolocation API, Web Audio API



// WEB BROWSER COMPONENETS - window (Global Object)

    // JS ENGINE         → Executes JavaScript code inside the browser.
        // CALL STACK                         → Tracks function execution order (Last In, First Out).
        // HEAP MEMORY                        → Stores objects and variables dynamically.
        // WEC (Web Execution Context)        → Manages execution scopes and variables.

    // WEB API                                → Provides browser functionalities that JavaScript can use asynchronously.
        // DOM (Document Object Model)        → Represents and manipulates the webpage structure.
        // TIMER (setTimeout, setInterval)    → Delays or repeats function execution.
        // NAVIGATION (History API)           → Allows navigation through browser history.
        // LOCAL STORAGE (Web Storage API)    → Stores persistent key-value data in the browser.
        // SESSION STORAGE                    → Stores temporary key-value data cleared on page refresh.
        // URL (Location API)                 → Accesses and modifies the current URL.
        // BLUETOOTH (Web Bluetooth API)      → Connects web apps to Bluetooth devices.
        // SERVER (Fetch API, WebSockets)     → Handles network requests and real-time communication.
        // CLIPBOARD (Clipboard API)          → Copies and pastes content programmatically.
        // NOTIFICATIONS (Notification API)   → Displays browser notifications.
        // GEOLOCATION (Geolocation API)      → Retrieves user location.

    // EVENT LOOP                       → Manages asynchronous tasks by moving them from the queue to the stack.

    // CALLBACK QUEUE(MACROTASK QUEUE)  → Holds delayed callback functions waiting for execution.

    // MICROTASK QUEUE                  → Stores higher-priority async tasks like Promises and Mutation Observers.

    // RENDERING ENGINE  → Builds and shows the webpage on screen.
        // HTML PARSER                      → Reads HTML and creates the page structure (DOM).
        // CSS PARSER                       → Reads CSS and figures out how things should look.
        // JAVASCRIPT EXECUTION             → Runs your JavaScript code.
        // LAYOUT                           → Decides where each element goes on the page.
        // PAINT                            → Fills in colors, text, images, etc., on screen.
        // COMPOSITING                      → Combines everything into the final image you see.

    // GPU PROCESS        → Helps draw and render faster using the graphics chip.

    // MULTI-THREADING (For Parallel Processing)    → Lets the browser do many things at the same time.

    // RENDERING PIPELINE (Critical Rendering Path) → The full process of showing a webpage from code to screen.


// =================================================================================================== //


// ASYNCHRONOUS JS
    // Java script runtime do one thing at a time
    // But the browser can see other things => WEB APIs

    // setTimeout() delays execution but doesn’t block the next lines of code.

    setTimeout(function Timeout(){                       // asynchronously
        console.log('What a Wonderful Day!')
    }, 1000)
    console.log('Hey Team!')

    // ----------------------------------------------------

    console.log("Start"); 

    setTimeout(() => {                                    // asynchronously
        console.log("Async Task (setTimeout) done!");
    }, 2000);

    console.log("End"); 

    // ----------------------------------------------------

    // HOW IT WORKS?
        // JavaScript Execution Flow (Step-by-Step)
            // Call Stack       → Executes synchronous code line by line.
            // Web APIs         → Handles asynchronous functions like setTimeout(), fetch(), etc.
            // Callback Queue   → Stores completed async tasks.
            // Event Loop       → Moves tasks from the queue back to the call stack when it’s empty.

            // Render


// ================================================================================================== //


// ACHIEVE ASYNCHRONOUS JAVASCRIPT

// CALLBACK FUNCTIONS

    // A callback function is a function passed as an argument to another function, 
    // which will execute it later when needed.

    // They allow asynchronous execution.
    // Used in functions like setTimeout(), event listeners, and API requests.
    // Help prevent blocking the execution of other code.


    // Basic Example of a Callback Function
        function greet(name, callback) {
            console.log("Hello, " + name);
            callback();
        }
        
        function sayGoodbye() {
            console.log("Goodbye!");
        }

        greet("John", sayGoodbye); // Passing sayGoodbye as a callback
    
    // --------------------------------------------------------------

    //  Without Callback And With Callback
        function fetchData() {
            setTimeout(() => {
                return "Data"; // This won't work — returns too late!
            }, 1000);
        }
        
        const data = fetchData();  // Won't work as expected
        console.log(data);         // undefined

        // --------------------------------------------------------------

        function fetchData(callback) {
            setTimeout(() => {
                const data = "Data from server";
                callback(data);    // Send data to the callback
            }, 1000);
        }
        
        fetchData((result) => {
            console.log("Received:", result);
        });
          
    // --------------------------------------------------------------

    // Callback with setTimeout()
        console.log("Start");

        setTimeout(() => {                                                    // asynchronously
            console.log("Callback executed after 2 seconds!");
        }, 2000);

        console.log("End");

    // --------------------------------------------------------------

    // Callback with addEventListener()
        document.getElementById("btn").addEventListener("click", function() {   // asynchronously
            console.log("Button clicked!");
        });

    // --------------------------------------------------------------
    
    // Callback Function for Data Fetching (Simulated API Call)
        function fetchData(callback) {
            console.log("Fetching data...");
        
            setTimeout(() => {                                                  // asynchronously
                let data = { user: "John Doe", age: 25 };
                callback(data);
            }, 2000);
        }
        
        function displayData(data) {
            console.log("User Data:", data);
        }
    
    // --------------------------------------------------------------

    // WHY WE NEED CALLBACK
        // Fetching data and using a callback to process it
            fetchData(displayData);

        // Handling user actions, Waiting, Animations, File loading, 

        // Async control - Reusability -  Non-blocking


    // Drawback of Callbacks – Callback Hell
        function step1(callback) {
            setTimeout(() => {
                console.log("Step 1 complete");
                callback();
            }, 1000);
        }
        
        function step2(callback) {
            setTimeout(() => {
                console.log("Step 2 complete");
                callback();
            }, 1000);
        }
        
        function step3() {
            setTimeout(() => {
                console.log("Step 3 complete");
            }, 1000);
        }
    
        // Nested callbacks (Callback Hell)
        step1(() => {
            step2(() => {
                step3();
            });
        });

    
// ================================================================================================== //


// PROMISES
    // A Promise in JavaScript is an alternative to callbacks for handling asynchronous operations 
    // like API calls, database queries, and timers.

    // Built on the idea of deferred execution :
    // "Run this later, but only after the current work (call stack) is done."

    // A Promise represents a future value—it can either:
        // ✔ Fulfill (resolve) → Success 
        // ✔ Reject → Failure 
        // ✔ Remain pending → Still waiting 

        // Fulfilled	The operation was successful, and .then() runs.
        // Rejected	    The operation failed, and .catch() runs.
        // Pending	    The promise is still in progress (waiting).


    // Example of Promise States:

        let myPromise = new Promise((resolve, reject) => {
            let serverAvailable = true;  // false to see rejection
        
            setTimeout(() => {
                if (serverAvailable) {
                    const user = {
                        id: 1,
                        name: "John Doe",
                        email: "john@example.com"
                    };
                    resolve(user);
                    console.log('hello')
                } else {
                    reject("Error: Unable to reach server.");
                }
            }, 2000);
        });
        
        // Handling the Promise
            myPromise
            .then(result => console.log(result))               // Runs if resolved
            .catch(error => console.log(error))                // Runs if rejected
            .finally(() => console.log("Promise completed!")); // Always runs
        
    // -----------------------------------------------------------------------------------------

            function fetchData() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        let data = { user: "John", age: 30 };
                        resolve(data);  // Successful response
                    }, 1500);
                });
            }
            
            // Using .then() and .catch()
                fetchData()
                    .then(data => console.log("User Data:", data))
                    .catch(error => console.log("Error:", error));

            // No more callback hell!
            // Makes async code easier to read.
            // Supports chaining with .then().


        // Using V8 engine directly (no Node.js, no browser, no platform)
            Promise.resolve().then(() => console.log("Hello"));
            console.log("Done");

    // -----------------------------------------------------------------------------------------

    // Handling Errors with .catch()
        function fetchData() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let success = false; // Change to true to see success case
                    if (success) {
                        resolve("Data fetched successfully!");
                    } else {
                        reject("Error fetching data!");
                    }
                }, 1000);
            });
        }
        
        // Handling errors
        fetchData()
            .then(response => console.log(response))
            .catch(error => console.log(error));  // Handles rejection
        
    // -----------------------------------------------------------------------------------------

    // Chaining Multiple Promises
        function step1() {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log("Step 1 completed");
                    resolve();
                }, 1000);
            });
        }
        
        function step2() {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log("Step 2 completed");
                    resolve();
                }, 1000);
            });
        }
        
        function step3() {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log("Step 3 completed");
                    resolve();
                }, 1000);
            });
        }
        
        // Chaining Promises
        step1()
            .then(step2)
            .then(step3)
            .then(() => console.log("All steps completed!"));


        // Why chain promises?
            // ✔ No nested callbacks (cleaner code).
            // ✔ Each step executes in order.

    // -----------------------------------------------------------------------------------------
    
    // Promise.all() – Run Multiple Promises in Parallel
        let promise1 = new Promise(resolve => setTimeout(() => resolve("Task 1"), 2000));
        let promise2 = new Promise(resolve => setTimeout(() => resolve("Task 2"), 1000));

        Promise.all([promise1, promise2])
            .then(results => console.log(results))
            .catch(error => console.log("Error:", error));

        // Why use Promise.all()?
            // ✔ Runs tasks in parallel (faster execution).
            // ✔ Returns results only when all are done.

    // -----------------------------------------------------------------------------------------

    // Promise.race() – Get the First Resolved Promise
        let fastPromise = new Promise(resolve => setTimeout(() => resolve("Fast Task Done"), 1000));
        let slowPromise = new Promise(resolve => setTimeout(() => resolve("Slow Task Done"), 3000));
        
        Promise.race([fastPromise, slowPromise])
            .then(result => console.log(result)); // Logs the fastest one
            
        // Why use Promise.race()?
            // ✔ Useful for setting timeouts on API calls.
            // ✔ Returns the fastest response.

    // -----------------------------------------------------------------------------------------

    // Example in JavaScript (Simulating Photo Upload as a Promise)
        function uploadPhoto(photo) {
            return new Promise((resolve, reject) => {
                console.log("Uploading...");
            
                setTimeout(() => {
                let success = Math.random() > 0.2; // 80% chance of success
                if (success) {
                    resolve("Upload successful!");
                } else {
                    reject("Upload failed. Try again.");
                }
                }, 2000); // Simulating upload delay
            });
            }
            
        uploadPhoto("photo.jpg")
            .then((message) => console.log(message))  // If resolved
            .catch((error) => console.error(error)); // If rejected
              

// ================================================================================================== //


// ASYNC AND AWAIT

    // Async/Await is a simpler and cleaner way to handle Promises in JavaScript. 
    // It makes asynchronous code look and behave more like synchronous code, 
    // making it easier to read and understand.


    // Built on the idea of deferred execution :
    // "Run this later, but only after the current work (call stack) is done."


    // async Functions – Always Return a Promise
        async function greet() {
            return "Hello, Async!";
        }
        
        greet().then(result => console.log(result));  // Output: Hello, Async!
        
        // Equivalent to:
        function greet() {
            return Promise.resolve("Hello, Async!");
        }
    
    // -----------------------------------------------------------------------------------------

    // await – Pause Execution Until the Promise Resolves
        async function fetchData() {
            console.log("Fetching data...");
        
            let response = await new Promise(resolve => {
                setTimeout(() => resolve("Data loaded!"), 2000);
            });
        
            console.log(response);
        }
        
        fetchData();
        console.log("End of script");

        
        // await vs setTimeout
            // await - pause
            // setTimeout - delay

            console.log('Start');
            var count = 0;

            async function fetchData() {
                console.log("Fetching data...");

                let response1 = await new Promise(resolve => {
                    setTimeout(() => {                    
                        for (let i = 0; i < 9; i++) {
                            count = count + 1;
                            console.log(count);
                        }
                        resolve("Data loaded!"); 
                    }, 2000);
                });

                console.log(response1);

                let response2 = await new Promise(resolve => {
                    setTimeout(() => {                    
                        for (let i = 0; i < 9; i++) {
                            count = count + 1;
                            console.log(count);
                        }
                        resolve("Data loaded!"); 
                    }, 2000);
                });

                console.log(response2);
            }

            fetchData(); 
            console.log('Common show my alert, Finally..');

    // -----------------------------------------------------------------------------------------

    // Async/Await vs. .then() with Promises

        // Using Promises with .then()
        function fetchData() {
            return new Promise(resolve => {
                setTimeout(() => resolve("Data received!"), 2000);
            });
        }
        fetchData().then(response => console.log(response));
        
        // Using async/await (Better Readability)
        async function fetchData() {
            let response = await new Promise(resolve => {
                setTimeout(() => resolve("Data received!"), 2000);
            });
            console.log(response);
        }
        fetchData()


        // Why is Async/Await better?
            // ✔ No .then() nesting → Cleaner & easier to read.
            // ✔ Looks synchronous but runs asynchronously.

    // -----------------------------------------------------------------------------------------

    // Handling Errors with try...catch
        async function fetchData() {
            try {
                let response = await new Promise((resolve, reject) => {
                    let success = false; // Change to true to see success
                    setTimeout(() => success ? resolve("Data fetched!") : reject("Failed to fetch data!"), 1500);
                });
        
                console.log(response);
            } catch (error) {
                console.log("Error:", error);
            }
        }
        
        fetchData();
    
        // Why use try...catch?
            // ✔ Catches errors inside async functions.
            // ✔ Avoids using .catch() multiple times.



    // Async/Await with API Calls (Real-World Example)
        async function getUserData() {
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                let user = await response.json(); // Convert response to JSON
                console.log(user);
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
        }
        
        getUserData();

    // Running Multiple Async Tasks with Promise.all()
        async function fetchAllData() {
            let [user, posts] = await Promise.all([
                fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
                fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json())
            ]);
        
            console.log("User:", user);
            console.log("Posts:", posts);
        }
        
        fetchAllData();
    
    
    // await Outside Async Function? (Not Yet in JS)
        // modern environments (like Node.js 14+ & Browsers with top-level await)
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let user = await response.json();
        console.log(user);
    



// =================================================================================================== //



    // ASYNCHRONOUS JAVASCRIPT

        // Callbacks
        function fetchData(callback) {
            setTimeout(() => {
                console.log("Data fetched");
                callback();
            }, 2000);
            }
            fetchData(() => console.log("Processing data..."));
        

        // Promises
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("Data loaded!"), 2000);
            });
            promise.then(console.log).catch(console.error);
        

        // async/await
            async function fetchData() {
                let response = await new Promise((res) => setTimeout(() => res("Fetched!"), 2000));
                console.log(response);
            }
            fetchData();
        

        // setTimeout & setInterval (Timers)
            setTimeout(() => console.log("Runs after 2 seconds"), 2000);
            setInterval(() => console.log("Repeats every 3 seconds"), 3000);
        

        // AJAX (XMLHttpRequest / Fetch API)
            fetch("https://api.example.com/data")
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch(console.error);


        // Event Listeners
            document.getElementById("btn").addEventListener("click", () => {
                console.log("Button clicked!");
            });
        

        // Web APIs (e.g., Geolocation, WebSockets)
            navigator.geolocation.getCurrentPosition((pos) => console.log(pos));


        // Worker Threads (Web Workers)
            let worker = new Worker("worker.js");
            worker.postMessage("Start processing");    




    // WEB APIs in JAVASCRIPT

        // setTimeout()
        // setInterval()
        // clearTimeout()
        // clearInterval()


        // fetch()
            fetch("https://api.example.com/data")
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch(console.error);
    

        // XMLHttpRequest
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.example.com/data", true);
            xhr.onload = () => console.log(xhr.responseText);
            xhr.send();
        

        // DOM API
            document.getElementById("btn").addEventListener("click", () => {
                console.log("Button clicked!");
            });
        

        // Geolocation API
            navigator.geolocation.getCurrentPosition((pos) => console.log(pos));


        // Web Storage API (Local & Session Storage)
            localStorage.setItem("user", "John");
            console.log(localStorage.getItem("user"));
        

        // WebSockets API (Real-time Communication)
            let socket = new WebSocket("wss://example.com/socket");
            socket.onmessage = (event) => console.log(event.data);
        

        // Clipboard API (Copy/Paste)
            navigator.clipboard.writeText("Hello, world!");


        // Notification API (Push Notifications)
            new Notification("Hello! This is a notification.");


        // Web Workers API (Background Threads)
            let worker2 = new Worker("worker.js");
            worker2.postMessage("Start processing");
    

// ==================================================================================================== //


// Interactive Event Loop Links

    // loupe
    // http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

    // JS Visualizer
    // https://www.jsv9000.app/

