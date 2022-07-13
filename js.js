// function scatter(e){
//     e.animate({tranform:'translate(300px,900px)'},3000)
//     setTimeout(scatterChestanu,5000)
// }
// var i=1;
// function scatterChestanu(){
//     arr=Array.from(document.getElementsByClassName('bubbles'));
//     if(i<arr.length){
//         console.log("hi")
//         scatter(arr[i-1])
//     }
//     else{
//         i=1;
//     }
//     i++;
//     setTimeout(scatterChestanu,5000)
// }
// scatterChestanu()
var x,y;
function scatter(){
    // document.getElementsByClassName('bubbles')[0].animate({transform:'translate(200px,400px)'},3000)
    // document.getElementsByClassName('bubbles')[1].animate({transform:'translate(300px,800px)'},3000)
    // document.getElementsByClassName('bubbles')[2].animate({transform:'translate(400px,1000px)'},3000)
    // document.getElementsByClassName('bubbles')[3].animate({transform:'translate(500px,-100px)'},3000)
    // document.getElementsByClassName('bubbles')[4].animate({transform:'translate(600px,-300px)'},3000)
    for(i in Array.from(document.getElementsByClassName('bubbles'))){
        // document.getElementsByClassName('bubbles')[i].style.background=radial-gradient(245,90,100)
        document.getElementsByClassName('bubbles')[i].animate({transform:'translate('+Math.floor(Math.random() * (+600 - +1)) + +1+'px,'+Math.floor(Math.random() * (+300 - +1)) + +1+'px)'},6000)
        document.getElementsByClassName('bubbles')[i].animate({transform:'translate('+0+'px,'+0+'px)'},6000)


    }
}
function call(){
    scatter()
    setTimeout(call,6000)
}
call()