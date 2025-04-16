
// ================================================================================================ //
                                        // ERROR HANDLING //
// ================================================================================================ //



// ERROR HANDLING 

    // - Only for Run Time Errors
    // - Works synchronously


    // TRY - try

    // CATCH - catch
 
    // FINALLY - finally

    // THROW - throw


    // -------------------------------------------------------- 


    try {

        // code...

        throw new SyntaxError("Incomplete data: no name"); // <error object>
    
    } catch (err) {          // (err) is optional binding
    
        // error handling

        alert(err.name);     // Error name
        alert(err.message);  // Textual message about error details.
        alert(err.stack);    // Current call stack

        
    } finally {
        // execute always ...


    }

    // --------------------------------------------------------


    // Rethrowing
    try {
        let user = JSON.parse(json);

        if (!user.name) {
            throw new SyntaxError("Incomplete data: no name");
        } 

    } catch (err) {

        if (err instanceof SyntaxError) {          // err instanceof ReferenceError
        alert( "JSON Error: " + err.message );
        } else {
        throw err; // rethrow (*)
        }
    
    }

    // --------------------------------------------------------


// ====================================================================================================== //


// CUSTOM ERRORS - EXTENDING ERRORS

    // The "pseudocode" for the built-in Error class defined by JavaScript itself
        class Error {
            constructor(message) {
            this.message = message;
            this.name = "Error"; // (different names for different built-in error classes)
            this.stack =` <call stack>`; // non-standard, but most environments support it
            }
        }

    // --------------------------------------------------------

        class ValidationError extends Error {
            constructor(message) {
              super(message); // (1)
              this.name = "ValidationError"; // (2)
            }
          }
          
          function test() {
            throw new ValidationError("Whoops!");
          }
          
          try {
            test();
          } catch(err) {
            alert(err.message); // Whoops!
            alert(err.name); // ValidationError
            alert(err.stack); // a list of nested calls with line numbers for each
          }


    
    // instead of (err instanceof SyntaxError)
    // } else if (err.name == "SyntaxError") { // (*)
    // ...