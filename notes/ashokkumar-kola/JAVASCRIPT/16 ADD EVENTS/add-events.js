// ON CLICK

var allInp = document.querySelectorAll("input")

allInp[0].addEventListener('click', redCol)
function redCol(){
    document.body.style.backgroundColor = "red"
}

allInp[1].addEventListener('click', function() {
    document.body.style.backgroundColor = "green"
})

allInp[2].addEventListener('click', () => {
    document.body.style.backgroundColor = "blue"
})

// GAME 

var bird = document.getElementById("angry-bird")
var horMove = 0
var verMove = 0

var gameArea = document.getElementById("game")
console.log(gameArea.style.width)

document.addEventListener('keydown', function(val) {
    if (val.key.toLowerCase() == 'd'){
        horMove += 6
        if (horMove > 1300 + 140) {
            horMove = 0
            bird.style.transition = "all 0s"
        }
        bird.style.transform = `translate(${horMove}px, ${verMove}px)` 
    }
})
document.addEventListener('keydown', function(val) {
    if (val.key.toLowerCase() == 'a'){
        horMove -= 6
        if (horMove < 0) {
            horMove = 1300
            bird.style.transition = "all 0s"
        }
        bird.style.transform = `translate(${horMove}px, ${verMove}px) rotate(180deg)`
    }
})
document.addEventListener('keydown', function(val) {
    if (val.key.toLowerCase() == 'w'){
        verMove -= 6
        if (verMove < 0 - 180) {
            verMove = 600
            bird.style.transition = "all 0s"
        }
        bird.style.transform = `translate(${horMove}px, ${verMove}px) rotate(-90deg)`
    }
})
document.addEventListener('keydown', function(val) {
    if (val.key.toLowerCase() == 's'){
        verMove += 6
        if(verMove > 600 + 133){
            verMove = 0
            bird.style.transition = "all 0s"
        }
        bird.style.transform = `translate(${horMove}px, ${verMove}px) rotate(90deg)`
    }
})

// INC - DEC
var controller = document.getElementById("inc-dec-controller")
var volume = 0

document.addEventListener("keydown", function(val){
    if (val.key == '+'){
        volume += 1
        controller.value = volume 
    }
})
document.addEventListener("keydown", function(val){
    if (val.key == '-'){
        volume -= 1
        controller.value = volume 
    }
})