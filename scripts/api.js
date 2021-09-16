const inputs = document.getElementsByTagName("input");
const buttons = document.getElementsByClassName("button");


if (localStorage.getItem("timer")){
    for  (let index = 0; index < inputs.length; index++){
        inputs[index].value = Number(
            localStorage.getItem("timer").split(",")[index]
        )
    }
}

document.addEventListener("click", ({ target })=>{
    let makingWork = ["up_work","down_work","up_pause","down_pause","up_session","down_session"]
    for (let cara = 0; cara < 6; cara++){
        if (target.id === makingWork[0] || target.id === makingWork[2] || target.id === makingWork[4]){
          inputs[cara].value = Number(inputs[cara].value) + 1;
        }else if (target.id === makingWork[1] || target.id === makingWork[3] || target.id === makingWork[5]){
          inputs[cara].value = Number(inputs[cara].value) - 1;
        }
    }
      localStorage.setItem("timer", [
        inputs[0].value,
        inputs[1].value,
        inputs[2].value
      ]);
});
    // if (target.id === "up_trabalho") {
    //     inputs[0].value = Number(inputs[0].value) + 1;
    //   } else if (target.id === "down_trabalho") {
    //     inputs[0].value = Number(inputs[0].value) - 1;
    //   } else if (target.id === "down_pause") {
    //     inputs[1].value = Number(inputs[1].value) - 1;
    //   } else if (target.id === "up_pause") {
    //     inputs[1].value = Number(inputs[1].value) + 1;
    //   } else if (target.id === "up_session") {
    //     inputs[2].value = Number(inputs[2].value) + 1;
    //   } else if (target.id === "down_session") {
    //     inputs[2].value = Number(inputs[2].value) - 1;
    //   }