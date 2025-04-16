// ################# VARIABLES ################# //
    // ✅ VAR    → No restrictions (allows re-declaration & re-assignment)
    // ✅ LET    → No re-declaration (allows re-assignment)
    // ✅ CONST  → Must be initialized when declared (no re-declaration, no re-assignment)


// ################# DECLARATION AND INITIALIZATION ################# //
    // var a = 10;
    // console.log(a);  // ✅ Works

    // let b = 20;
    // console.log(b);  // ✅ Works

    // const c = 30;
    // console.log(c);  // ✅ Works


// ################# ONLY DECLARATION ################# //
    // var x;
    // console.log(x);  // ✅ Works (undefined)

    // let y;
    // console.log(y);  // ✅ Works (undefined)

    // const z;  
    // console.log(z);  // ❌ SyntaxError: Missing initializer in const declaration


// ################# DECLARATION THEN INITIALIZATION ################# //
    // var p;
    // p = 10;
    // console.log(p);  // ✅ Works

    // let q;
    // q = 20;
    // console.log(q);  // ✅ Works

    // const r;  
    // r = 30;          // ❌ SyntaxError: Missing initializer in const declaration
    // console.log(r);


// ################# RE-INITIALIZATION ################# //
    // var m = 10;
    // console.log(m);
    // m = 100;         // ✅ Works
    // console.log(m);

    // let n = 20;
    // console.log(n);
    // n = 200;         // ✅ Works
    // console.log(n);

    // const o = 30;
    // console.log(o);
    // o = 300;         // ❌ TypeError: Assignment to constant variable
    // console.log(o);


// ################# RE-DECLARATION ################# //
    // var v = 10;
    // console.log(v);
    // var v = 100;         // ✅ Works (Re-declared & Overwritten)
    // console.log(v);

    // let w = 20;
    // console.log(w);
    // let w = 200;         // ❌ SyntaxError: Identifier 'w' has already been declared
    // console.log(w);

    // const u = 30;
    // console.log(u);
    // const u = 300;       // ❌ SyntaxError: Identifier 'u' has already been declared
    // console.log(u);


// ################# HOISTING (USING BEFORE DECLARING) ################# //
    // // ✅ var is hoisted but initialized as undefined
    // console.log(hoistVar);    // ✅ Undefined (Not Error)
    // var hoistVar = 10;

    // // ❌ let is hoisted but not initialized (Reference Error)
    // console.log(hoistLet);    // ❌ ReferenceError: Cannot access 'hoistLet' before initialization
    // let hoistLet = 20;

    // // ❌ const is hoisted but not initialized (Reference Error)
    // console.log(hoistConst);  // ❌ ReferenceError: Cannot access 'hoistConst' before initialization
    // const hoistConst = 30;



// ################# VARIABLES SCOPES ################# //
    // ✅ var   → FUNCTION scope (not block-scoped)
    // ✅ let   → BLOCK scope (also global if declared outside a block)
    // ✅ const → BLOCK scope (also global if declared outside a block)

    // {
    //     var a = 10;   // ✅ Accessible OUTSIDE the block (not block-scoped)
    //     let b = 20;   // ❌ NOT accessible outside (block-scoped)
    //     const c = 30; // ❌ NOT accessible outside (block-scoped)

    //     console.log('INSIDE BLOCK :', a, b, c)
    // }
    // console.log('OUTSIDE BLOCK :')
    // console.log(a);  // ✅ Works (var is function-scoped, NOT block-scoped)
    // console.log(b);  // ❌ ReferenceError: b is not defined (block-scoped)
    // console.log(c);  // ❌ ReferenceError: c is not defined (block-scoped)


// ################# FUNCTION SCOPE ################# //
    function fun() {
        var d = 100;  // Function-scoped (only accessible inside fun())
        var e = 200;  // Function-scoped (only accessible inside fun())
        var f = 300;  // Function-scoped (only accessible inside fun())
        console.log('INSIDE BLOCK :', d, e, f)
    }
    fun();
    // console.log('OUTSIDE BLOCK :')
    console.log(d);  // ❌ ReferenceError: d is not defined (Function-scoped)
    console.log(e);  // ❌ ReferenceError: e is not defined (Function-scoped)
    console.log(f);  // ❌ ReferenceError: f is not defined (Function-scoped)


// ################# IDENTIFIERS ################# //
    // ✅ Cannot be a JavaScript keyword (e.g., `var`, `let`, `function`, `if`, etc.)
    // ✅ Must start with: `$`, `_`, A-Z, or a-z (Cannot start with a number)
    // ✅ Can contain letters, numbers, `_`, and `$` (Alpha-numeric + `_` `$`)
    // ✅ Case-sensitive (`name` and `Name` are different)
    // ✅ camelCase is used by convention in JavaScript


