
// ================================================================================================ //
                                        // DOM //
// ================================================================================================ //

// -------------------------- //
        // DOCUMENT //
// -------------------------- //

// DOCUMENT OBJECT MODEl

    // Global Object - Root Object

        // WINDOW 
            console.dir(window)
            

    // DOM TREE

        // ROOT

            // HEAD 
                // TITLE

            // BODY
                // 1: Element
                // 3: Text
                // 8: Comment
                // 9: Document Object

    // -----------------------------------------------------------------------

    // NODE NAVIGATION

        // DOCUMENT
        document                        // Entire document object 
        document.documentElement        // <html>...</html>
        document.head                   // <head>...</head>
        document.body                   // <body>...</body>

    // NODE RELATIONSHIPS
        childNodes
        firstChild
        lastChild
        previousSibling
        nextSibling
        parentNode

// -----------------------------------------------------------------------

// ELEMENT NAVIGATION

    // DOCUMENT
        document
        document.documentElement
        document.head
        document.body

    // ELEMENT RELATIONSHIPS
        children
        firstElementChild
        lastElementChild
        previousElementSibling
        nextElementSibling
        parentElement

// -----------------------------------------------------------------------

// DESCRIPTION
    nodeType
    nodeName
    tagName
    hasChildNodes
    cloneNode
    appendChild

    // Node properties: type, tag and contents
        // elem.nodeType == 1 for element nodes
        // elem.nodeType == 3 for text nodes
        // elem.nodeType == 9 for the document object

// -----------------------------------------------------------------------

// DOM collection - Not a array
    allBodyNodes = document.body.childNodes 
    for (let node of document.body.childNodes) {
        console.log(node);
    }

    // change collection to array
    console.log(Array.from(allBodyNodes))

// -----------------------------------------------------------------------
        
// TABLE NAVIGATION
    table
    table.caption/tHead/tFoot
    table.tBodies
    tbody.rows
    table.rows
    tr.cells
    tr.sectionRowIndex
    tr.rowIndex
    td.cellIndex
    
// -----------------------------------------------------------------------

// SEARCHING
    id
    window['elem-content']

    document.getElementById("id")
    document.getElementsByTagName("tag") // *
    document.getElementsByName(name)
    document.getElementsByClassName("className")
    document.querySelector('id/tagName/name/className/')
    document.querySelectorAll('id/tagName/name/className/')

// -----------------------------------------------------------------------

// MATCHES
    elem.matches(css)

// CLOSEST
    elem.closest(css)

// CHILD - PARENT RELATIONSHIP
    elemA.contains(elemB)

// instance of
    console.log( document.body instanceof HTMLBodyElement ); // true



// -----------------------------------------------------------------------

// CONTENT

    nodeType
    nodeName / tagName
    nodeValue / data

    textContent
    type

    innerHTML
    outerHTML

// ATTRIBUTES

    value
    hidden
    
    id
    href

    elem.attributes
    elem.hasAttribute('name')
    elem.getAttribute('name')
    elem.setAttribute('name', 'value')
    elem.removeAttribute('name')
    elem.attributesall 

// -----------------------------------------------------------------------

// Modifying the document

    document.createElement
    document.createTextNode

    document.body.append(div);


    node.append('...nodes or strings')
    node.prepend('...nodes or strings')
    node.before('...nodes or strings')
    node.after('...nodes or strings')
    node.replaceWith('...nodes or strings')

    elem.insertAdjacentText(where, text)
    elem.insertAdjacentElement(where, elem)
    elem.insertAdjacentHTML(where, html)

    // "beforebegin" - insert html immediately before elem,
    // "afterbegin" - insert html into elem, at the beginning,
    // "beforeend" - insert html into elem, at the end,
    // "afterend" - insert html immediately after elem.


    node.remove()


    elem.cloneNode(true)
    elem.cloneNode(false)


// -----------------------------------------------------------------------


// ------------------ //
// Styles and classes //
// ------------------ //

    elem.style 
    elem.style.['style property'] = 'value'
    elem.style.removeProperty('style property')
    elem.style.cssText = `css style properties`

    elem.className

    elem.classList.add("class") 
    elem.classList.remove("class") 
    elem.classList.toggle("class") 
    elem.classList.contains("class") - true/false

    getComputedStyle(element, [pseudo])


// -------------------------- //
// Element size and scrolling //
// -------------------------- //
    
    offsetParent
    offsetLeft
    offsetTop

    offsetWidth
    offsetHeight

    clientTop
    clientLeft

    clientWidth
    clientHeight

    scrollHeight
    scrollWidth
    scrollLeft
    scrollTop
    
// -----------------------------------------------------------------------

// WINDOW OBJECT
    window.alert(['Message'])
    window.confirm('Message')
    window.prompt('Message')

    document.documentElement.clientWidth
    document.documentElement.clientHeight

    window.innerWidth
    window.innerHeight

    window.pageXOffset / window.scrollX
    window.pageYOffset / window.scrollY

    window.location.href
    window.location.hostname
    window.location.pathname

    window.open([URL])
    window.close()
    window.print()


// Window sizes and scrolling
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    
    scrollTop/scrollLeft
    scrollTo(0,0)
    elem.scrollIntoView(top)

    window.scrollTo(pageX,pageY) // - absolute coordinates,
    window.scrollBy(x,y) // - scroll relative the current place,
    elem.scrollIntoView(top) // - scroll to make elem visible (align with the top/bottom of the window).


// ////////////////////////// ADD EVENT LISTENER ///////////////////////////// //
    // var element
    // element.addEventListener('click', functionName, [useCapture - true/false])


// ////////////////////////// KEY PRESS ///////////////////////////// //

    'keyup'
    'keydown'

    'ArrowUp'
    'ArrowDown'
    'ArrowLeft'
    'ArrowRight'
    



// ///////////////////////////////////////// CANVAS //////////////////////////////////// //

    let canvas = document.getElementById('myCanvas')
    let context = canvas.getContext('2d')

    CANVAS_WIDTH = canvas.width
    CANVAS_HEIGHT = canvas.height

    context.fillStyle = 'blue'
    context.strokeStyle = 'red'
    context.lineWidth = 10
    
    // LINE
    context.beginPath()
    context.moveTo(0,0)
    context.lineTo(250, 250)
    context.lineTo(250, 500)
    context.stroke()

    // TRIANGLE
    context.beginPath()
    context.moveTo(250,0)
    context.lineTo(0, 250)
    context.lineTo(500, 250)
    context.lineTo(250,0)
    context.stroke()
    context.fill()

    // RECTANGLE
    context.strokeRect(0, 0, 250, 250)
    context.fillRect(0, 0, 250, 250)
    context.strokeStyle = 'black'
    context.fillStyle = 'red'

    // ARC
    context.beginPath()
    context.arc(x, y, r, sAngle, eAngle, counterclockwise)
    context.stroke()

    // DRAW TEXT
    context.font = '50px MV Boli'
    context.fillText("Hello World!", 100, 100)
    context.textAlign = 'center'











// ========================================================================================= //



// -------------------------- //
// BROWSER ENVIRONMENT, SPECS //
// -------------------------- //

// BROWSER OBJECT MODEL
// The BOM allows JavaScript to interact with the browser beyond the document (DOM).

    // navigator
    // screen
    // location
    // frames
    // history
    // XMLHttprequest


    // -------------------------------------------------------------------------


// WINDOW OBJECT

    // WINDOW
        console.log(window) 
        console.dir(window)


    // 🔹 Dialogs
        window.alert("This is an alert!");        // Show alert
        window.confirm("Are you sure?");          // OK / Cancel
        window.prompt("Enter your name:");        // Input dialog


    // 🔹 Window size
        console.log(window.innerWidth);           // Viewport width
        console.log(window.innerHeight);          // Viewport height
        

    // 🔹 Global functions are part of window
        function sayHi() {
            alert("Hello");
        }
        window.sayHi(); // Same as just sayHi();


    // APPLY STYLES
        document.body.style.background = "white";


    // 
        // setTimeout()
        // setInterval()


    // -------------------------------------------------------------------------


    // 🔹 navigator: Provides information about the browser.
        console.log(navigator.userAgent);         // Info about browser and OS
        console.log(navigator.language);          // Preferred language
        console.log(navigator.platform);          // OS platform (Deprecated)


    // 🔹 screen: Info about the user's screen
        console.log(screen.width, screen.height); // Screen resolution
        console.log(screen.availWidth);           // Width excluding system UI


    // 🔹 location: Provides current URL info and can be used to redirect
        console.log(location.href);               // Full URL
        location.assign("https://example.com");   // Redirects to a new URL

        
    // 🔹 frames: Refers to the window.frames object (used for iframes)
        console.log(window.frames);               // List of iframes in the window


    // 🔹 history: Access the session history
        console.log(history.length);              // Number of pages in session history
        history.back();                           // Go one step back
        history.forward();                        // Go one step forward


    // 🔹 XMLHttpRequest: Enables sending HTTP requests in the background
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
        xhr.onload = () => console.log(xhr.responseText);
        xhr.send();

    
    // -------------------------------------------------------------------------