// 



// modules === multiple files
    // a class 
    // a library of functions for a specific purpose.


// export
// import


// web-page locally, via file:// protocol
    // import/export directives don’t work

// local web-server
    // static-server 
    // live server


// Always “use strict”


// MODULE

    // A module is just a file

    // 📁 sayHi.js
        // export function sayHi(user) {
        //     alert(`Hello, ${user}!`);
        // }

    // 📁 main.js
        // import {sayHi} from './sayHi.js';

        // alert(sayHi); // function...
        // sayHi('John'); // Hello, John!







// =================================================================================================== //


    // one-time evaluation

        // 📁 alert.js
            // alert("Module is evaluated!");

        // Import the same module from different files

        // 📁 1.js
            // import `./alert.js`; // Module is evaluated!

        // 📁 2.js
            // import `./alert.js`; // (shows nothing)

        // ---------------------------------------------------------------

        // rule: 
            // top-level module code should be used for initialization, 
            // creation of module-specific internal data structures. 
            // If we need to make something callable multiple times – we should export it as a function

        // ---------------------------------------------------------------

        // 📁 admin.js
            // export let admin = {
            //     name: "John"
            // };

        // 📁 1.js
            // import {admin} from './admin.js';
            // admin.name = "Pete";

        // 📁 2.js
            // import {admin} from './admin.js';
            // alert(admin.name); // Pete

        // Both 1.js and 2.js reference the same admin object
        // Changes made in 1.js are visible in 2.js

        // ---------------------------------------------------------------

        // 📁 admin.js
            // export let config = { };

            // export function sayHi() {
            // alert(`Ready to serve, ${config.user}!`);
            // }

        // 📁 init.js
            // import {config} from './admin.js';
            // config.user = "Pete";

        // 📁 another.js
            // import {sayHi} from './admin.js';

            // sayHi(); // Ready to serve, Pete!


//  =================================================================================================== //


// META

    // import.meta

        // <script type="module">
            // alert(import.meta.url); // script URL
            // // for an inline script - the URL of the current HTML-page
        // </script>

    // ---------------------------------------------------------------

    // In a module, “this” is undefined

        // <script>
            // alert(this); // window
        // </script>

        // <script type="module">
            // alert(this); // undefined
        // </script>

    // ---------------------------------------------------------------

    // Module scripts are deferred

        // <script type="module">
            // alert(typeof button); // object: the script can 'see' the button below
            // // as modules are deferred, the script runs after the whole page is loaded
        // </script>

        // Compare to regular script below:

        // <script>
            // alert(typeof button); // button is undefined, the script can't see elements below
            // // regular scripts run immediately, before the rest of the page is processed
        // </script>

        // <button id="button">Button</button>


        // When using modules, we should be aware that the HTML page shows up as it loads, and JavaScript modules run after that, 
        // so the user may see the page before the JavaScript application is ready.

    // ---------------------------------------------------------------

    // Async works on inline scripts

        // <!-- all dependencies are fetched (analytics.js), and the script runs -->
        // <!-- doesn't wait for the document or other <script> tags -->
        // <script async type="module">
        // import {counter} from './analytics.js';
        
        // counter.count();
        // </script>
    
    // ---------------------------------------------------------------

    // External scripts

        // <!-- the script my.js is fetched and executed only once -->
        // <script type="module" src="my.js"></script>
        // <script type="module" src="my.js"></script>


    // Fetch: Cross-Origin Requests - CORS

        // <!-- another-site.com must supply Access-Control-Allow-Origin -->
        // <!-- otherwise, the script won't execute -->
        // <script type="module" src="http://another-site.com/their.js"></script>

    // --------------------------------------------------------------------------

    // No “bare” modules allowed
        // Modules without any path

        import {sayHi} from 'sayHi'; // Error, "bare" module
        // the module must have a path, e.g. './sayHi.js' or wherever the module is

    // --------------------------------------------------------------------------

    // Compatibility, “nomodule”

        // <script type="module">
        //     alert("Runs in modern browsers");
        // </script>
        
        // <script nomodule>
        //     alert("Modern browsers know both type=module and nomodule, so skip this")
        //     alert("Old browsers ignore script with unknown type=module, but execute this.");
        // </script>

//  =================================================================================================== //

    // Build tools
        // Webpack

        // <!-- Assuming we got bundle.js from a tool like Webpack -->
        // <script src="bundle.js"></script>



//  =================================================================================================== //

    // Export before declarations

        // export an array
            export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // export a constant
            export const MODULES_BECAME_STANDARD_YEAR = 2015;

        // export a class
            export class User {
                constructor(name) {
                    this.name = name;
                }
            } // no ; at the end


        // 📁 say.js
            function sayHi(user) {
                alert(`Hello, ${user}!`);
            }
            
            function sayBye(user) {
                alert(`Bye, ${user}!`);
            }
            
            export {sayHi, sayBye}; // a list of exported variables

        
        // Export “as”

            // 📁 say.js
                // ...
                // export {sayHi as hi, sayBye as bye};

//  =================================================================================================== //

    // Import

        // 📁 main.js
            import {sayHi, sayBye} from './say.js';

            sayHi('John'); // Hello, John!
            sayBye('John'); // Bye, John!


        // 📁 main.js
            import * as say from './say.js';

            say.sayHi('John');
            say.sayBye('John');


        // Import “as”

            // 📁 main.js
                import {sayHi as hi, sayBye as bye} from './say.js';

                hi('John'); // Hello, John!
                bye('John'); // Bye, John!




//  =================================================================================================== //


// Export default

// 📁 user.js
export default class User { // just add "default"
    constructor(name) {
      this.name = name;
    }
  }


  // 📁 main.js
import User from './user.js'; // not {User}, just User

new User('John');