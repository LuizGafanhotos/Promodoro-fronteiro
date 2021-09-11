// var number = document.getElementById("number").innerText;
var number = document.getElementsByClassName("big")
var par = document.getElementsByTagName("p")
// function upper(){
//     let conv = parseInt(++number)
//     par[0].innerText = conv;
// }
// function lower(){
//     let conv = parseInt(--number)
//     par[0].innerText = conv
// }

function bigger_check(index){
    let currentNumber = parseInt(number[index].innerText)
    if (currentNumber == 25){
        let conv = ++currentNumber
        par[0].innerText = conv
    }else if (currentNumber == 5){
        let conv = ++currentNumber
        par[2].innerText = conv
    }else if (currentNumber == 3){
        let conv = ++currentNumber
        par[4].innerText = conv
    }
}