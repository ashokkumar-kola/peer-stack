function linearGradient() {
    var color = document.getElementById("color").value
    var deg = document.getElementById("deg").value
    document.body.style.backgroundSize = `100% 100vh`
    document.body.style.backgroundImage = `linear-gradient(${deg}deg, ${color})`
}