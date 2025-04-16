
console.log('ASYNC EXAMPLE SCRIPT STARTS')


// greet();   // Function Not Defined


function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  }

var src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js'

loadScript(src, function(error, script) {
    if (error) {
        // handle error
        alert( "Error" ); // 
    } else {
        // script loaded successfully
        alert(`Cool, the script ${script.src} is loaded`);
        alert( _ ); // _ is a function declared in the loaded script
    }
});











console.log('ASYNC EXAMPLE SCRIPT ENDS')
