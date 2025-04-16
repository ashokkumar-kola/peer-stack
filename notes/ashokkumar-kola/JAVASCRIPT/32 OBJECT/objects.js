// JAVASCRIPT OBJECTS

    // COLLECTION OF KEYS AND VALUES (PROPERTIES, FUNCTIONS)


    // 2 TYPES

        // PREDEFINED OBJECT
            // DOCUMENT
            // CONSOLE
            // MATH
            // DATE
            // AUDIO

        // USER DEFINED OBJECT


    //  --------------------------------------------------------------------------


    // MATH OBJECT
        // console.log(Math)
        // console.log(Math.PI)
        // console.log(Math.cos(45))
        // console.log(Math.pow(4, 2))
        // console.log(Math.min(10, 20, 60, 5, 45, 35, 70))
        // console.log(Math.max(10, 20, 15, 35, 25, 30, 40))
        // console.log(Math.trunc(45.6))
        // console.log(Math.floor(45.8))
        // console.log(Math.round(87.6))
        // console.log(Math.random()*45)


    //  --------------------------------------------------------------------------


    // A primitive as an object
    // In order for that to work, a special “object wrapper” 
    // that provides the extra functionality is created, and then is destroyed.


        // For instance:
            alert( typeof 0 ); // "number"
            alert( typeof new Number(0) ); // "object"!

        // Objects are always truthy in if, so here the alert will show up:
            let zero = new Number(0);
            if (zero) { // zero is true, because it's an object
            alert( "zero is truthy!?!" );
            }

        // The most primitive
                // null
                // undefined

                let str = "Hello";

            // str.test = 5; // (*)

            // alert(str.test);

            // Depending on whether you have use strict or not, the result may be:

            //     undefined (no strict mode)
            //     An error (strict mode).


            // Why? Let’s replay what’s happening at line (*):

            //     When a property of str is accessed, a “wrapper object” is created.
            //     In strict mode, writing into it is an error.
            //     Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears, so in the last line str has no trace of the property.

            // This example clearly shows that primitives are not objects.

            // They can’t store additional data.


    //  --------------------------------------------------------------------------



// ======================================================================================== //



// OBJECTS

// An object is a standalone entity, with properties and type.

// An object is a collection of key-value pairs where each key is a string (or Symbol) 
// and each value can be any data type, including functions.

    // CREATE OBJECT

        // Object Literals - {}
            const person = {
                firstName: 'John',
                lastName: 'Doe',
                age: 30
            };


        // Constructor Functions:
            function Person(firstName, lastName, age) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
            }
            
            const person1 = new Person('Jane', 'Doe', 25);
        

        // ES6 Classes:
            class Person {
                constructor(firstName, lastName, age) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age;
                }
            }
            
            const person2 = new Person('Alice', 'Smith', 28);
        

        // Object.create():
            const personPrototype = {
                greet: function() {
                    console.log('Hello!');
                }
            };
            
            const person3 = Object.create(personPrototype);
            person3.firstName = 'Bob';
            person3.lastName = 'Brown';
        
        

    // CREATE OBJECT

        // let user = new Object();  // "object constructor" syntax
        // let user = {};            // "object literal" syntax

        // let user = {     // an object
        //     key: "value",  
        //     key: 'value'        
        // };

        // var student = {
        //     sFirstName: 'ashok',
        //     sLastName: 'kumar',
        //     sClass: '5th grade',
        //     sGrade: 'c-',
        //     arr: {
        //         a : "apple",
        //         b : "banana",
        //         c : "custard"
        //     },
        //     sFullName: function(){
        //         return this.sFirstName + " " + this.sLastName
        //     },
        //     24: "A number"
        //    "likes birds": true  // multiword property name must be quoted
        //    // “trailing” or “hanging” comma optional
        // }

        // console.log(student)
        // console.log(student.sLastName)
        // console.log(student.sFullName())
        // console.log(student[24])
        // console.log(student.arr)
        // console.log( user["likes birds"] ); // true

        // let user = {
        //     name: "John",
        //     age: 30
        // };
          
        // let key = prompt("What do you want to know about the user?", "name");
        
        // // access by variable
        // alert( user[key] ); // John (if enter "name")


        // let user = {
        //     name: "John",
        //     age: 30
        // }; 
          
        // let key = "name";
        // alert( user.key ) // undefined



// ARRAY OF OBJECTS
    // var arrObject = [
    //     {
    //         a : "apple"
    //     },
    //     {
    //         b : "banana"
    //     },
    //     {
    //         c : "custard"
    //     }
    // ]
    // console.log(arrObject)
    // console.log(arrObject[1].b)

// OBJECT CONSTRUCTOR
    // var student = new Object()
    // student.sFirstName = 'ashok'
    // student.sLastName = 'kumar'
    // student.sClass = '5th grade'
    // student.sGrade = 'c-'
    // student.arr = {
    //         a : "apple",
    //         b : "banana",
    //         c : "custard"
    //     }
    // student.sFullName = function(){
    //         return this.sFirstName + " " + this.sLastName
    //     }
    // // student.24 = "A number"

    
    // console.log(student)
    // console.log(student.sLastName)
    // console.log(student.sFullName())
    // // console.log(student[24])
    // console.log(student.arr)

// USER DEFINED OBJECTS
    // function EmpObj(fName, lName, age){
    //     this.fName = fName
    //     this.lName = lName
    //     this.age = age
    // }

    // EmpObj('ashok', 'kumar', 22)
    // console.log(EmpObj.fName)


// 
// var obj = {
//     uName : 'ramu',
//     upwd : '6465',
//     uGender : 'M',
//     uPhno : 6568846
// }
// console.log(obj)

// var arr = Object.entries(obj)
// console.log(arr)

// var arr = Object.keys(obj)
// console.log(arr)

// var arr = Object.values(obj)
// console.log(arr)

// console.log(obj)
// // Object.freeze(obj) // NO DELETE | NO REPLACE
// Object.seal(obj) // NO DELETE
// obj.uName = 'rama'
// delete obj.uName;
// console.log(obj)


    // -----------------------------------------------------------------------


    // PROPERTIES AND METHODS
            
        // Properties: Values associated with an object.
            const book = {
                title: '1984',
                author: 'George Orwell'
            };
            
            console.log(book.title); // '1984'


        // Methods: Functions stored as object properties.
            const calculator = {
                add: function(a, b) {
                return a + b;
                }
            };
            
            console.log(calculator.add(5, 3)); // 8
    
            
    // -----------------------------------------------------------------------


    // PROTOTYPES AND INHERITENCE

        // Prototype Chain:
            // JavaScript looks up the prototype chain 
            // until it finds the property/method or reaches the end of the chain.

            function Animal(name) {
                this.name = name;
            }
            
            Animal.prototype.speak = function() {
                console.log(`${this.name} makes a noise.`);
            };
            
            var dog = new Animal('Dog');
            dog.speak(); // 'Dog makes a noise.'
            

        // ES6 Class Inheritance - extends
            class Animal {
                constructor(name) {
                this.name = name;
                }
            
                speak() {
                console.log(`${this.name} makes a noise.`);
                }
            }
            
            class Dog extends Animal {
                speak() {
                console.log(`${this.name} barks.`);
                }
            }
            
            var dog = new Dog('Rex');
            dog.speak(); // 'Rex barks.'
        









