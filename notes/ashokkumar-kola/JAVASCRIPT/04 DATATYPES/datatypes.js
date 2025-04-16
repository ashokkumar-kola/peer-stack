// ################# DATATYPES ################# //

    // PRIMITIVE
        // Number()       -    NUMBER      
        // BigInt()       -    BIGINT - n
        // String()       -    STRING
        // Bool()         -    BOOLEAN
        // Null()         -    NULL
        // Undefined()    -    UNDEFINED
        // Symbol()       -    SYMBOL

    // NON-PRIMITIVE
        // Array()        -    ARRAY
        // function()     -    FUNCTION       
        // Object()       -    OBJECT


    // // ✅ PRIMITIVE TYPES (Immutable, Stored in Stack)
    // console.log(typeof 42);                // "number"
    // console.log(typeof 9007199254740991n); // "bigint"
    // console.log(typeof "Hello");           // "string"
    // console.log(typeof true);              // "boolean"
    // console.log(typeof null);              // "object" (JavaScript bug, should be "null")
    // console.log(typeof undefined);         // "undefined"
    // console.log(typeof Symbol("id"));      // "symbol"

    // // ✅ NON-PRIMITIVE TYPES (Mutable, Stored in Heap)
    // console.log(typeof [1, 2, 3]);         // "object" (Arrays are objects)
    // console.log(typeof function() {});     // "function" (special callable object)
    // console.log(typeof { key: "value" });  // "object"


    
// // ################# NUMBER ################# //
    // var a = 1000;
    // console.log(typeof a, a);  // ✅ "number" 1000

    // // Hex, binary and octal numbers
        // let a = 0xff            // hexadecimal form of 255  | 0xff === 0xFF
        // let b = 0b11111111      // binary form of 255
        // let c = 0o377           // octal form of 255
        // console.log(a == b, b == c)
    
    // num.toString(base) - base : 2 to 36
        // var num = 255;
        // alert( num.toString(2) );    // 11111111
        // alert( num.toString(8) );    // 
        // alert( num.toString(10) );   // 11111111
        // alert( num.toString(16) );   // ff

        // alert( 123456..toString(36) ); // 2n9c 
        // alert( (123456).toString(36) )

    // round the number to n-th digit after the decimal
        // toFixed returns a string - +num.toFixed(5) / Number()

        // let num = 12.34;
        // alert( num.toFixed(1) ); // "12.3"

        // let num = 12.36;
        // alert( num.toFixed(1) ); // "12.4"

    // Loss of precision
        // console.log(0.1 + 0.2 == 0.3) // 0.30000000000000004
        // alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
        // alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

        // Hello! I'm a self-increasing number!
        // alert( 9999999999999999 ); // shows 10000000000000000

    
        // 0 == -0

        // Infinity | -Infinity | NaN == Error
        // alert( isNaN(NaN) ); // true
        // alert( isNaN("str") ); // true
        // alert( NaN === NaN ); // false

        // alert( isFinite("15") ); // true
        // alert( isFinite("str") ); // false, because a special value: NaN
        // alert( isFinite(Infinity) ); // false, because a special value: Infinity






// // ################# BIGINT ################# //
    // var b = 100000000n;
    // console.log(typeof b, b);  // ✅ "bigint" 100000000n

    // let billion = 1_000_000_000;
    // let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
    // let mcs = 1e-6; // five zeroes to the left from 1



// // ################# STRING ################# //
    // let s = "ashoka";
    // let c = "a";
    // console.log(typeof s, s);  // ✅ "string" "ashoka"
    // console.log(typeof c, c);  // ✅ "string" "a"



// // ################# BOOLEAN ################# //
    // console.log(typeof true);  // ✅ "boolean"
    // console.log(typeof false); // ✅ "boolean"



// // ################# NULL ################# //
    // var x = null;
    // console.log(typeof x, x); // ❌ "object" (JavaScript bug) | ✅ null

// // ################# UNDEFINED ################# //
    // var y;
    // console.log(typeof y, y); // ✅ "undefined" undefined

// // ################# SYMBOL ################# //
    // var foo1 = Symbol("foo");
    // var foo2 = Symbol("foo");
    // console.log(typeof foo1, typeof foo2); // ✅ "symbol" "symbol"
    // console.log(foo1 == foo2); // ✅ false (Symbols are unique)

// // ################# ARRAY ################# //
    // let arr = [1, 2, 3];
    // console.log(typeof arr, Array.isArray(arr)); // ✅ "object" true (Arrays are objects)

// // ################# FUNCTION ################# //
    // function myFunc() {}
    // console.log(typeof myFunc); // ✅ "function" (Functions are special callable objects)
    // console.log(Array.isArray([1, 2, 3])); // true

// // ################# OBJECT ################# //
    // let obj = { name: "Ashoka", age: 25 };
    // console.log(typeof obj, obj); // ✅ "object" { name: "Ashoka", age: 25 }
    // console.log({} instanceof Object); // true




// ################# EXAMPLE: IMPLICIT TYPE CASTING ################# //
    // var a = 10;
    // console.log(typeof a, a); // ✅ "number", 10

    // var b = "10";
    // console.log(typeof b, b); // ✅ "string", "10"

    // // JavaScript automatically converts `a` (number) into a string and concatenates
    // var c = a + b;  
    // console.log(typeof c, c); // ✅ "string", "1010" (Number + String → String)

    // var c = b + a;  
    // console.log(typeof c, c); // ✅ "string", "1010" (Number + String → String)


    // // JavaScript automatically converts `b` (string) into a number for multiplication
    // var d = a * b;  
    // console.log(typeof d, d); // ✅ "number", 100 (String "10" → Number)

    // var d = b * a;  
    // console.log(typeof d, d); // ✅ "number", 100 (String "10" → Number)



// ################# EXAMPLE: EXPLICIT TYPE CASTING ################# //

    // NUMBER   
        // Number()
        // parseInt()
        // parseFloat() 

    // STRING
        // String()     
        // toString() 
        

    // var x = "123";
    // var y = "3.14";
    // var z = true;

    // // ✅ Convert String to Number
    // console.log(Number(x), typeof Number(x));               // 123 "number"
    // console.log(parseInt(y), typeof parseInt(y));           // 3 "number" (Integer only)
    // console.log(parseFloat(y), typeof parseFloat(y));       // 3.14 "number" (Keeps decimals)

    // // ✅ Convert Boolean to Number
    // console.log(Number(z), typeof Number(z));               // 1 "number"

    // // ✅ Convert Number to String
    // console.log(String(123), typeof String(123));           // "123" "string"

    // var num = 123
    // console.log(num.toString(), typeof String(123));           // "123" "string"

    // // ✅ Convert Boolean to String
    // console.log(String(true), typeof String(true));         // "true" "string"

    // // ✅ Convert String to Boolean
    // console.log(Boolean("hello"), typeof Boolean("hello")); // true "boolean" (Non-empty strings → true)
    // console.log(Boolean(""), typeof Boolean(""));           // false "boolean" (Empty string → false)




// ################# 🔥 Edge Cases & Gotchas ################# //    

    // // parseInt() Special Cases
    // console.log(parseInt("10px"));  // 10  (Extracts number and ignores letters)
    // console.log(parseInt("10.99")); // 10  (Only extracts the integer part)
    // console.log(parseInt("px10"));  // NaN (Cannot start with letters)
    // console.log(parseInt("  12"));  // 12  (Ignores leading spaces)
    // console.log(parseInt("010"));   // 10  (Does NOT treat as octal in modern JS)
    // console.log(parseInt("0xF"));   // 15  (Recognizes hexadecimal "0xF" as 15)

    // console.log(Number("10px")); // NaN (Cannot convert "10px" to a number)
    // console.log(parseFloat("10.5px")); // 10.5 (Reads number before letters)


    // // Boolean Conversions
    // console.log(Boolean("0"));  // true  (Non-empty string is true)
    // console.log(Boolean(0));    // false (Only 0 is false)
    // console.log(Boolean(1));    // true
    // console.log(Boolean(""));   // false (Empty string is false)
    // console.log(Boolean(" "));  // true  (Space is a non-empty string)
    // console.log(Boolean([]));   // true  (Empty array is truthy)
    // console.log(Boolean({}));   // true  (Empty object is truthy)
    // console.log(Boolean(null)); // false
    // console.log(Boolean(undefined)); // false



    // // Strange Implicit Type Conversions
    // console.log(1 + "2" + 3);   // "123"  (1 is converted to string, then concatenation happens)
    // console.log("2" + 3 + 4);   // "234"  (Everything is treated as a string)
    // console.log(2 + 3 + "4");   // "54"   (2+3 → 5, then "5" + "4" → "54")


    // // null & undefined in Operations
    // console.log(null + 5);      // 5     (null is treated as 0)
    // console.log(undefined + 5); // NaN   (undefined becomes NaN)
    // console.log(null == 0);     // false (null is only equal to undefined, not 0)
    // console.log(null == undefined); // true (They are loosely equal)

    // // null behaves like 0 in arithmetic.
    // // undefined always becomes NaN in numeric operations.

    
    // // true and false in Math
    // console.log(true + 1);  // 2   (true is converted to 1)
    // console.log(false + 1); // 1   (false is converted to 0)
    // console.log(true * 10); // 10  (true → 1, multiplication works normally)
    // console.log(true - false); // 1 - 0 = 1

    
    // // Weird Division & Multiplication Cases
    // console.log(1 / "5");     // 0.2 (String "5" → Number 5)
    // console.log("5" / "2");   // 2.5 (Both strings are converted to numbers)
    // console.log("5px" / 2);   // NaN (Cannot convert "5px" to a number)
    // console.log("5" * "4");   // 20  (Both converted to numbers)
    // console.log("5" - "2");   // 3   (Both converted to numbers)
    // console.log("5" + "2");   // "52" (String concatenation, not addition)



    // // == vs === (Loose vs Strict Equality)
    // console.log(0 == false);     // true  (Because false → 0)
    // console.log(0 === false);    // false (Strict comparison checks types)
    // console.log("" == false);    // true  (Empty string → false)
    // console.log(" " == false);   // true  (Whitespace is treated as false)
    // console.log([] == false);    // true  (Empty array is treated as false)
    // console.log(null == undefined); // true
    // console.log(null === undefined); // false (Strict type check)


    // // + Operator as a Shortcut
    // console.log(+"123");   // 123  (String converted to number)
    // console.log(+"");      // 0    (Empty string → 0)
    // console.log(+true);    // 1    (true → 1)
    // console.log(+false);   // 0    (false → 0)
    // console.log(+null);    // 0    (null → 0)
    // console.log(+undefined); // NaN (undefined → NaN)



    // // Objects & Arrays in Math
    // console.log([] + []);       // "" (Empty string because arrays convert to strings)
    // console.log([] + {});       // "[object Object]" (Empty array is "", object becomes "[object Object]")
    // console.log({} + []);       // "[object Object]" (Object is treated as "[object Object]")
    // console.log({} + {});       // "[object Object][object Object]" (Two objects converted to strings)
    // console.log([] - 1);        // -1 (Empty array is converted to 0)
    // console.log([4] * 2);       // 8 (Array `[4]` is converted to number 4)
    // console.log([4,5] * 2);     // NaN (Array `[4,5]` cannot be converted to a number)




