// EVENTS


// MOUSE HOVER IN AND MOUSE HOVER OUT
// onmousehover() | onmouseout()
var num = 0
var dragonImg = document.getElementById("container")
console.log(dragonImg)


function onMouseOverOut(){
    num++;
    if (num == 1){
        dragonImg.style.backgroundImage = "url(../../../../24_ASSETS/IMAGES/DRAGON_IMAGES/dragon_1.jpg)"
        dragonImg.style.backgroundPosition = "-500px 200px"
    }
    else if (num = 2){
        dragonImg.style.backgroundImage = "url(../../../../24_ASSETS/IMAGES/DRAGON_IMAGES/dragon_2.jpg)"
        dragonImg.style.backgroundPosition = "-2000px 200px"
    }
    else if (num == 3){
        dragonImg.style.backgroundImage = "url(../../../../24_ASSETS/IMAGES/DRAGON_IMAGES/dragon_3.jpg)"
        dragonImg.style.backgroundPosition = "-5000px 200px"
    }   
    else if (num == 4){
        dragonImg.style.backgroundImage = "url(../../../../24_ASSETS/IMAGES/DRAGON_IMAGES/dragon_4.jpg)"
        dragonImg.style.backgroundPosition = "-200px 2000px"
    }
    else {
        dragonImg.style.backgroundImage = "url(../../../../24_ASSETS/IMAGES/DRAGON_IMAGES/dragon_5.jpg)"
        dragonImg.style.backgroundPosition = "300px 300px"

        num = 0
    }
}


// onfocus() | onblur()
var bgImg = document.getElementById("focus-blur")
function focused(){
    bgImg.style.backgroundImage = "radial-gradient(circle 1300px at top left, rgb(119, 69, 167), rgb(168, 21, 21))"
}
function blured(){
    bgImg.style.backgroundImage = "none"
}

// onchange()
function onChangeOpt(){
    var opt = document.getElementById("select").value
    document.getElementById("selectedContent").innerHTML = `I like ${opt} color`
}

// oninput() vs onchange()
function onInputColor(){
    var red = document.getElementById("red1").value
    var green = document.getElementById("green1").value
    var blue = document.getElementById("blue1").value

    document.getElementById("oniput-vs-onchange-conatiner").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}
function onChangeColor(){
    var red = document.getElementById("red2").value
    var green = document.getElementById("green2").value
    var blue = document.getElementById("blue2").value

    document.getElementById("oniput-vs-onchange-conatiner").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

// BALL GAME
var ball = document.getElementById("ball")

function moveBall(side) {
    if (side == 'up') {
        console.log(side)
        ball.style.transform += "translateY(-50px)"
    }
    else if (side == 'left') {
        console.log(side)
        ball.style.transform += "translateX(-50px)"
    }
    else if (side == 'right') {
        console.log(side)
        ball.style.transform += "translateX(50px)"
    }
    else if (side == 'down') {
        console.log(side)
        ball.style.transform += "translateY(50px)"
    }
}


// 
