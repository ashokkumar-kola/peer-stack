// ################# CONSOLE.LOG() ################# //
// ✅ console.log() 
    // used to print values in the console
    console.log("Hey Haii..");
    console.log(22 + 24); // Outputs: 46

    // ✅ Logging the console object itself (shows all available console methods)
    console.log(console);

    // ✅ Logging console.log as a function reference (doesn't execute, just logs its definition)
    console.log(console.log);

    console.clear()

// JS ERROR  //
    // ✅ Used to log errors in red (for debugging)
    console.error("My Error, My Wish");

// JS TIME  //

    // TIME  //
    // ✅ Starts a timer with a label (used for measuring execution time)
    console.time("myTimer");

    // Some execution (Example)
    for (let i = 0; i < 1000000; i++) {} // Simulating delay

    // ✅ Stops the timer and logs the elapsed time
    console.timeEnd("myTimer");

    // TIME STAMP //
    // ❌ console.timeStamp() does NOT work in the console output
    // ✅ It only works when Performance Profiler is active in DevTools
    console.timeStamp("Checkpoint 1"); // Visible in Performance tab, not in console



// ################# DOCUMENT.WRITE() ################# //
    // ⚠️ Not Asynchronous: It executes immediately unless called after page load
    // ❌ Does NOT support defer: Using defer does NOT affect document.write()
    // 🚨 Overwrites the entire document if called after page load
    // 🔻 Deprecated: Not recommended for modern development
    document.write("This is document.write text <br>");



// ################# DOCUMENT.WRITELN() ################# //
    // ❌ Not Asynchronous: Executes immediately
    // ❌ `defer` has NO effect (just like document.write())
    // ❌ Overwrites the document if called after page load

    document.writeln("This is writeln text 1 <br>");
    document.writeln("This is writeln text 2 <br>");

    // ✅ Equivalent to document.writeln() since `document` is a property of `window`
    window.document.writeln("This is writeln text 3"); // Same as document.writeln()



// ################# WINDOW.ALERT() ################# //
    // ✅ Functions under `window` can be called with or without `window`
    window.alert("Alert Box");  // Explicit usage
    alert("2nd Alert Box");     // Implicit usage (same as window.alert)



// ################# INNER_HTML ################# //
    // ✅ Returns and sets content as **HTML**
    document.getElementById("inner-html").innerHTML = "This is <b>Inner HTML</b> JS Text"; // Parses as HTML

// ################# INNER_TEXT ################# //
    // ✅ Returns and sets content as **plain text** (ignores HTML tags)
    document.getElementById("inner-text").innerText = "This is <b>Inner Text</b> JS Text"; // Displays plain text
