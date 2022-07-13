function scatter(){
    for(i in Array.from(document.getElementsByClassName('bubbles'))){
        document.getElementsByClassName('bubbles')[i].animate({transform:'translate('+Math.floor(Math.random() * (+600 - +1)) + +1+'px,'+Math.floor(Math.random() * (+300 - +1)) + +1+'px)'},6000)
        document.getElementsByClassName('bubbles')[i].animate({transform:'translate('+0+'px,'+0+'px)'},6000)
    }
}
function call(){
    scatter()
    setTimeout(call,6000)
}
call()