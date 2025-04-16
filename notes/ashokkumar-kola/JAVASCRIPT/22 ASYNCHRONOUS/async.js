// 
// setTimeout(fun1, 1000)
// setTimeout(fun2, 1000)

// var fun1 = () => {
//     console.log("Fun 1")
// }
// var fun2 = () => {
//     console.log("Fun 2")
// }

// fun1()
// fun2()



// 
var circle = document.getElementById("circle")

function moveRight() {
    circle.style.transform = 'translate(89vw, 0)'

    // setTimeout(moveDown, 500)
}
// setTimeout(moveRight, 500)
// setInterval(moveRight, 500)

function moveDown() {
    circle.style.transform = 'translate(89vw, 76.3vh)'

    // setTimeout(moveLeft, 500)
}
// setTimeout(moveDown, 1500)
// setInterval(moveDown, 1500)

function moveLeft() {
    circle.style.transform = 'translate(0, 76.3vh)'

    // setTimeout(moveUp, 500)
}
// setTimeout(moveLeft, 2500)
// setInterval(moveLeft, 2500)

function moveUp() {
    circle.style.transform = 'translate(0, 0)'

    // setTimeout(moveRight, 500)
}
// setTimeout(moveUp, 3500)
// setInterval(moveUp, 3500)



// TIMER
// var num = 60
// var timer = document.querySelector("#timer")

// function timerStart(){
//     num--
//     timer.value = num

//     if (num > 0){
//         setTimeout(timerStart, 500)
//     }
// }



// TIME

var hrs = document.querySelector("#hrs")
var mns = document.querySelector("#mns")
var secs = document.querySelector("#secs")
var msecs = document.querySelector("#msecs")

// console.log(hrs.value)

let hour = 0, min = 0, sec = 0, msec = 0;
let timerInterval;

function startTimer() {
    console.log("Time Started");
    timerInterval = setInterval(updateTime, 1); // Start the timer with 1 ms interval
}

function updateTime() {
    msec++;

    if (msec >= 1000) {
        sec++;
        msec = 0;

        if (sec >= 60) {
            min++;
            sec = 0;

            if (min >= 60) {
                hour++;
                min = 0;

                if (hour >= 24) {
                    hour = 0;
                }
            }
        }
    }

    // Update the display elements
    hrs.value = hour;
    mns.value = min;
    secs.value = sec;
    msecs.value = msec;
}
function stopTimer() {
    console.log("Time Stopped");
    clearInterval(timerInterval); // Stop the timer
}
function resetTimer() {
    console.log("Time Reset");
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;

    // Update the display elements
    hrs.value = 0;
    mns.value = 0;
    secs.value = 0;
    msecs.value = 0;

    clearInterval(timerInterval); // Stop the timer if it's running
}


// console.log(hour, min, sec, msec)
// console.log(hrs.value, mns.value, secs.value, msecs.value)



















    // loading scripts and performing simple document manipulations.



    function loadScript(src) {
        // creates a <script> tag and append it to the page
        // this causes the script with given src to start loading and run when complete
        let script = document.createElement('script');
        script.src = src;
        
        document.head.append(script);
    }
    
    // load and execute the script at the given path
    loadScript('/my/script.js');
    // the code below loadScript doesn't wait for the script loading to finish ...
    
    
    
    function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;
      
        script.onload = () => callback(script);
      
        document.head.append(script);
      }
    
    
    
    
    
    
    
      function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => callback(script);
        document.head.append(script);
      }
      
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
        alert(`Cool, the script ${script.src} is loaded`);
        alert( _ ); // _ is a function declared in the loaded script
      });
    
    
    
    
    
    
    
    
      loadScript('/my/script.js', function(script) {
    
        loadScript('/my/script2.js', function(script) {
      
          loadScript('/my/script3.js', function(script) {
            // ...continue after all scripts are loaded
          });
      
        });
      
      });
    
    
    
    
    
    
    
    
    
    
    
    // Handling errors
    
    
      function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;
      
        script.onload = () => callback(null, script);
        script.onerror = () => callback(new Error(`Script load error for ${src}`));
      
        document.head.append(script);
      }
      loadScript('/my/script.js', function(error, script) {
        if (error) {
          // handle error
        } else {
          // script loaded successfully
        }
      });
    
    
    
    // Pyramid of Doom
      loadScript('1.js', function(error, script) {
    
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('2.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // ...
              loadScript('3.js', function(error, script) {
                if (error) {
                  handleError(error);
                } else {
                  // ...continue after all scripts are loaded (*)
                }
              });
      
            }
          });
        }
      });
    
    
      // “callback hell” or “pyramid of doom.”
      loadScript('/my/script.js', function(error, script) {
        if (error) {
          // handle error
        } else {
          // script loaded successfully
          loadScript('/my/script.js', function(error, script) {
            if (error) {
              // handle error
            } else {
              // script loaded successfully
              loadScript('/my/script.js', function(error, script) {
                if (error) {
                  // handle error
                } else {
                  // script loaded successfully
                }
              });
            
            }
          });
        
        }
      });
    
    
    
      // standalone function
      loadScript('1.js', step1);
    
    function step1(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('2.js', step2);
      }
    }
    
    function step2(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', step3);
      }
    }
    
    function step3(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...continue after all scripts are loaded (*)
      }
    }
    // single use, no reuse, namespace cluttering, inconvenient
    
    // promises