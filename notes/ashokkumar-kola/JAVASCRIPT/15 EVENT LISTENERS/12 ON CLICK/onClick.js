var num = 1

function inc(){
    if ( num >= 1 && num <10 ){
        document.getElementById("result").value = ++num
    }
}

function dec(){
    if ( num >1 && num <=10 ){
        document.getElementById("result").value = --num
    }
}