function visible() {
    document.querySelector("input").type = "text"
    document.querySelector("img").src = "../../../../24_ASSETS/SVG/eye-solid.svg"
}
function invisible() {
    document.querySelector("input").type = "password"
    document.querySelector("img").src = "../../../../24_ASSETS/SVG/eye-slash-solid.svg"
}

function pwdStrengthStatus(){
    var pwdElem = document.querySelector("input") 
    var pwdValue = pwdElem.value

    var statusElem = document.querySelector("span")
    var pwdLength = pwdValue.length

    if (pwdLength < 8){
        statusElem.textContent = "WEAK"
        statusElem.style.color = "red"
    }
    else if (pwdLength >= 8 && pwdLength <= 11){
        statusElem.textContent = "GOOD"
        statusElem.style.color = "yellow"
    }
    else if (pwdLength > 12) {
        statusElem.textContent = "STRONG"
        statusElem.style.color = "green"
    }

}