// ###################### STRINGS ###################### //
// STRING USING QUOTES - " " and ' '
    // NO MULTILINE STRING
    // NO MULTIPLE SINGLE OR DOUBLE QUOTES
    var str1 = "Hello"
    var str2 = 'World!'
    console.log(str1, str2)


// STRING USING STRING CONSTRUCTOR - String
    // NO MULTILINE STRING
    // NO MULTIPLE SINGLE OR DOUBLE QUOTES
    var str3 = String(524)
    console.log(str3)


// STRING USING TEMPLATE LITERALS - ``
    //  MULTILINE STRING
    //  MULTIPLE SINGLE OR DOUBLE QUOTES
    //  STRING INTERPOLATION ${}   // variables, expressionss, functions, objects
    var num = 4222
    var str = `This is Multi Line String
                Double "" and Single '' Quotes are Allowed
                And String Interpolation like ${num} is possible`
    console.log(str)


// STRING IMMUTABLE
    var st = "aocdocnwwcw0a"
    st[0] = 's'
    

// STRING IS ITERABLE
    var str = "appppppppppppppppple"
    for (i=0; i<str.length; i++){
        console.log(str[i])
    }



// ###################### //
// ### STRING METHODS ### //
// ###################### //
    // LENGTH
        // var st = "Hello World"
        // var str_length = st.length
        // console.log(str_length)

    // SLICING 
        // var st = "Hello World"
        // var st = "apple"
        // var str_slice1 = st.slice(0, 2) // START : STOP  -  NO STEP VALUE
        // var str_slice2 = st.slice(-2, -4)
        // var str_slice3 = st.slice(-3, 4)
        // var str_slice4 = st.slice(-1, 1) // EMPTY STRING
        // console.log(str_slice1, str_slice2, str_slice3, str_slice4)

    // SUBSTRING
        // var st = "apple"
        // var str_slice = st.substring(0, 2) 
        // var str_slice = st.substring(-3, 4) // NEGITIVE INDEX IS CONSIDERED AS 0
        // var str_slice = st.substring(5, -4) // NEGITIVE INDEX VALUES IS CONSIDERED AS START
        // console.log(str_slice)
    
    // SUBSTR
        // var st = "apple"
        // var str_slice = st.substr(0, 2) // START, NO. OF CHAR'S
        // var str_slice = st.substr(-3, 4) 
        // var str_slice = st.substr(5, -4) 
        // var str_slice = st.substr(-2, -4) // EMPTY STR (0, 0)
        // console.log(str_slice)

    // INDEX OF
        // var st = "apple mango banana"
        // var idx = st.indexOf('a')
        // var idx = st.indexOf('a', 8) // a AFTER INDEX 8
        // console.log(idx)

    // LAST INDEX OF
        // var st = "apple mango banana"
        // var idx = st.lastIndexOf('a')
        // console.log(idx)
    
    // REPLACE
        // var st = `she sells seashells by the seashore, The shells she sells are surely seashells,`
        // var str = st.replace("sells", "don't sells")
        // console.log(str)

        // ?? TASK ?? // REPLACE ONLY SECOND SELLS
        // var str = st.substring(0, st.indexOf('sells', 15)) + st.substring(st.indexOf('sells', 15)).replace('sells', 'dont sells')
        // var str = st.substring(0, st.indexOf('sells', st.indexOf('sells')+5)) + st.substring(st.indexOf('sells', st.indexOf('sells')+5)).replace('sells', 'dont sells')
        // console.log(str)
    
    // REPLACE ALL
        // var st = `she sells seashells by the seashore, The shells she sells are surely seashells`
        // var str = st.replaceAll("sells", "don't sells")
        // console.log(str)

    // TRIM
        // var st = "  apple  "
        // console.log(st, st.length)
        // var tstr = st.trim()
        // console.log(tstr, tstr.length)

    // TRIM START
        // var st = "  apple  "
        // console.log(st, st.length)
        // var tstr = st.trimStart()
        // console.log(tstr, tstr.length)

    // TRIM END
        // var st = "  apple  "
        // console.log(st, st.length)
        // var tstr = st.trimEnd()
        // console.log(tstr, tstr.length)

    // PAD START
        // var st = 'apple'
        // var pad = st.padStart(10, '$')
        // console.log(pad) // // NO.OF $ = 10 - STRING.LENGTH

    // PAD END
        // var st = 'apple'
        // var pad = st.padEnd(15, '$') // NO.OF $ = 15 - STRING.LENGTH
        // console.log(pad)

    // INCLUDE
        // var st = `she sells seashells by the seashore, The shells she sells are surely seashells,`
        // var inc = st.includes('sea');
        // console.log(inc) // RETURNS BOOLEAN VALUE

    // STARTS WITH
        // var st = `she sells seashells by the seashore, The shells she sells are surely seashells,`
        // var res = st.startsWith('she');
        // console.log(res) // RETURNS BOOLEAN VALUE

    // ENDS WITH 
        // var st = `she sells seashells by the seashore, The shells she sells are surely seashells,`
        // var res = st.endsWith('shells,'); 
        // console.log(res) // RETURNS BOOLEAN VALUE

    // SPLIT
        // var st = "Apple Mango Grapes Banana Pineapple"
        // var arr = st.split(" ")
        // console.log(arr)


    