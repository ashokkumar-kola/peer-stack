// ################# OPERATORS #################

    // ARITHMETIC OPERATORS
    // +, -, *, /, **


    // ASSIGNMENT OPERATORS
    // =, +=, -=, *=, /=


    // COMPARISON OPERATORS
    // <, >, <=, >=, ==, ===, !=, !==


    // LOGICAL OPERATORS
    // &&, ||, !


    // BITWISE OPERATORS
    // &, |, ^, ~, <<, >>, >>>


    // INCREMENT & DECREMENT
    // ++, --


// ################# ARITHMETIC OPERATORS #################
    var a = 10, b = 3;
    console.log(a + b); // 13
    console.log(a - b); // 7
    console.log(a * b); // 30
    console.log(a / b); // 3.33
    console.log(a ** b); // 1000 (10^3)


// ################# ASSIGNMENT OPERATORS #################
    var x = 5;
    x += 3; // x = x + 3
    console.log(x); // 8

    x *= 2; // x = x * 2
    console.log(x); // 16


// ################# COMPARISON OPERATORS #################
    console.log(5 > 3);     // true
    console.log(5 >= 5);    // true
    console.log(5 == "5");  // true (value check)
    console.log(5 === "5"); // false (type check)
    console.log(5 !== "5"); // true


// ################# LOGICAL OPERATORS #################
    console.log(true && false); // false
    console.log(true || false); // true
    console.log(!true);         // false


// ################# BITWISE OPERATORS #################
    console.log(5 & 1);  // 1 (AND: 101 & 001)
    // 5  =  101
    // 1  =  001
    // ----------------
    // &    =  001  (Result: 1)

    console.log(5 | 1);  // 5 (OR: 101 | 001)
    // 5  =  101
    // 1  =  001
    // ----------------
    // |    =  101  (Result: 5)

    console.log(5 ^ 1);  // 4 (XOR: 101 ^ 001)
    // 5  =  101
    // 1  =  001
    // ----------------
    // ^    =  100  (Result: 4)

    console.log(~5);     // -6 (NOT: Inverts bits)
    // 5   =  00000101
    // ~5  =  11111010  (Two’s complement: -6)

    console.log(5 << 1); // 10 (Left shift)
    // 5   =  00000101
    // <<1 =  00001010  (Result: 10)

    console.log(5 >> 1); // 2 (Right shift)
    // 5   =  00000101
    // >>1 =  00000010  (Result: 2)



// ################# INCREMENT & DECREMENT #################
    var count = 5;
    console.log(count++); // 5 (Post-increment: returns first, then increases)
    console.log(++count); // 7 (Pre-increment: increases first, then returns)
    console.log(count--); // 7 (Post-decrement)
    console.log(--count); // 5 (Pre-decrement)