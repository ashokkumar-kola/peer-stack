// ################# CONDITIONAL STATEMENTS #################

// ################# IF STATEMENT #################
    // var age = 20;
    // if (age >= 18) {
    //     console.log("You are an adult.");
    // }


// ################# IF-ELSE STATEMENT #################
    // var num = 10;
    // if (num % 2 === 0) {
    //     console.log("Even Number");
    // } else {
    //     console.log("Odd Number");
    // }


// ################# ELSE-IF LADDER #################
    var marks = 85;
    if (marks >= 90) {
        console.log("Grade: A");
    } else if (marks >= 75) {
        console.log("Grade: B");
    } else if (marks >= 50) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }


// ################# SWITCH STATEMENT #################
    var day = 2;
    switch (day) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day");
    }


// ################# TERNARY OPERATOR #################
    var result = (age >= 18) ? "Adult" : "Minor";
    console.log(result);


// ################# SHORT-CIRCUIT EVALUATION #################
    var isLoggedIn = true;
    isLoggedIn && console.log("Welcome User!"); // Executes only if true

    var user = "";
    user || console.log("No user found!"); // Executes if false or empty value