var number = document.getElementsByClassName("big")
var par = document.getElementsByTagName("p")

function bigger_check(index){
    let currentNumber = number[index].innerText
    console.log(++currentNumber)
    // if (currentNumber == 25){
    //     let conv = ++currentNumber
    //     par[0].innerText = conv
    // }else if (currentNumber == 5){
    //     let conv = ++currentNumber
    //     par[2].innerText = conv
    // }else if (currentNumber == 3){
    //     let conv = ++currentNumber
    //     par[4].innerText = conv
    // }
}
function diminier_check(index){
    let currentNumber = number[index].innerText 
    console.log(--currentNumber)
    // if (currentNumber == 25){
    //     let conv = --currentNumber
    //     par[0].innerText = conv
    // }else if (currentNumber == 5){
    //     let conv = --currentNumber
    //     par[2].innerText = conv
    // }else if (currentNumber == 3){
    //     let conv = --currentNumber
    //     par[4].innerText = conv
    // }
}