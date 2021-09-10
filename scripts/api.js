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

function bigger_check(){
    

    if (parseInt(number[0].innerHTML) == 25){
        let conv = parseInt(++number[0].innerHTML)
        par[0].innerText = conv
    }else if (parseInt(number[1].innerHTML) == 5){
        let conv = parseInt(++number[1].innerHTML)
        par[1].innerText = conv
    }else if (parseInt(++number[2].innerHTML) == 3){
        let conv = ++parseInt(++number[2].innerHTML)
        par[2].innerText = conv
    }else{
        console.log("nope")
    }
}

// function diminier_check(){
//     if (parseInt(number[0].innerHTML) == 25){
//         let conv = parseInt(++number)
//     }
// }