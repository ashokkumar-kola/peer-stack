// CREATE ELEMENTS
document.createElement('div')


// ADD & DELETE ATTRIBUTES
var inp = document.querySelector('input')
inp.removeAttribute('disabled')
inp.setAttribute('placeholder', "Enter the value")



// LOGIN CONDITION
function loginFun(){
    var pwd = document.getElementById('pwd').value
    console.log(pwd)
    if (pwd.length >= 5){
        var login = document.getElementById('login')
        login.removeAttribute('disabled')
    }
    else {
        login.setAttribute('disabled', true)
    }
}

// VIDEO HOVER
    // ALSO DONE BY ADDING AND CHANGING SOURCE ATTRIBUTE
var video = document.getElementById('vid')
function playVid(){
    // video.setAttribute('controls', true)
    // video.setAttribute('muted', true)
    // video.setAttribute("autoplay", true)
    video.play()
    document.body.style.backgroundColor = 'black'
}
function stopVid(){
    // video.removeAttribute('controls')
    // video.removeAttribute('muted')
    // video.removeAttribute("autoplay")
    video.pause()   
    document.body.style.backgroundColor = 'white'
}

// TASK CIRCLES
var cir11 = document.getElementById('cir11')
var cir22 = document.getElementById('cir22')
var cir33 = document.getElementById('cir33')
var cir1 = document.getElementById('circle1')
var cir2 = document.getElementById('circle2')
var cir3 = document.getElementById('circle3')

function move(num){
    console.log(1)
    if (num == 1){
        cir1.style.transform = 'translateX(-1015px)'
        cir11.style.backgroundColor = 'green'

        cir2.style.transform = 'translateX(0)'
        cir3.style.transform = 'translateX(0)'

        cir22.style.backgroundColor = 'blue'
        cir33.style.backgroundColor = 'blue'
    }
    else if (num == 2){
        cir2.style.transform = 'translateX(-1015px)'
        cir22.style.backgroundColor = 'green'

        cir1.style.transform = 'translateX(0)'
        cir3.style.transform = 'translateX(0)'

        cir11.style.backgroundColor = 'blue'
        cir33.style.backgroundColor = 'blue'
    }
    else if (num == 3){
        cir3.style.transform = 'translateX(-1015px)'
        cir33.style.backgroundColor = 'green'

        cir1.style.transform = 'translateX(0)'
        cir2.style.transform = 'translateX(0)'

        cir11.style.backgroundColor = 'blue'
        cir22.style.backgroundColor = 'blue'
    }
}
function reset(){
    cir1.style.transform = 'translateX(0)'
    cir2.style.transform = 'translateX(0)'
    cir3.style.transform = 'translateX(0)'

    cir11.style.backgroundColor = 'blue'
    cir22.style.backgroundColor = 'blue'
    cir33.style.backgroundColor = 'blue'
}

// 

