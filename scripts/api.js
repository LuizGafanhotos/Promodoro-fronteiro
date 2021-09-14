var number = document.getElementsByClassName("big")
var par = document.getElementsByTagName("p")

function bigger_check(index){
    const currentNumber = numbers[index];
    currentNumber.innerText = parseInt(currentNumber.innerText) + 1;
}
function diminier_check(index){
    const currentNumber = numbers[index];
    currentNumber.innerText = parseInt(currentNumber.innerText) - 1; 
}