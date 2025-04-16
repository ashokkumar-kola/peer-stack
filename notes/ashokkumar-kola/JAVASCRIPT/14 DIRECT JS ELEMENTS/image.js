function imagesFun (){
    var allImages = document.images
    // console.log(allImages)

    // allImages[1].src = "./ZENITSU AGATSUMA/zenitsuma (1).jpeg"

    for (var i = 0; i<=allImages.length-1; i++){
        // allImages[i].src = `./ZENITSU AGATSUMA/zenitsuma (${i+1}).jpeg`
        allImages[i].src = `./zenitsu-agatsuma-kimetsu-no-yaiba-4K-44.jpg`
    }
}
imagesFun()

// ############# FORMS #############
var allForms = document.forms
console.log(allForms)

allForms[0].elements[0].type = "radio"
allForms[0].elements[1].type = "checkbox"
allForms[0].elements[2].type = "color"

allForms[1].elements[0].type = "email"
allForms[1].elements[0].placeholder = "Enter the email"

allForms[1].elements[1].type = "password"
allForms[1].elements[1].placeholder = "Enter the password"

allForms[1].elements[2].type = "submit"

allForms[1].action = "https://www.tesla.com"


// ############# ANCHORS #############
var anchs = document.anchors
// console.log(anchs)

anchs[0].innerHTML = "Facebook"
anchs[0].href = "https://www.facebook.com"
anchs[0].target = "_blank"

// TITLE OF THE WEBPAGE
// document.title = "Facebook"
// document.domain
// document.title

anchs[1].innerHTML = "Instagram"
anchs[1].href = "https://www.instagram.com"
anchs[1].target = "_blank"


// BACKGROUND COLOR
function bgColorFun(){
    var bgColor = document.getElementById("bg-color").value
    document.body.style.backgroundColor = bgColor;
}








// 

// document.body.style.

// document.querySelector()
// document.querySelectorAll()
