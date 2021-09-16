const cronometer = document.getElementById("cronometer")
const minuteWork = localStorage.getItem("timer").split(",")[0]
const minutePause = localStorage.getItem("timer").split(",")[1]
const session = localStorage.getItem("timer").split(",")[2]

cronometer.value = minuteWork < 10 ? "0" + minuteWork + ":00" : minuteWork + ":00";
var pause = false;

function startTime(session){
    let timer = minuteWork * 60,
    minute,
    seconds;
    setInterval(()=>{
        minute = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minute = minute < 10 ? "0" + minute : minute
        seconds = seconds < 10 ? "0" + seconds : seconds

        cronometer.value = minute + ":" + seconds

        if (!pause && --timer < 0){
            timer = minutePause * 60
        }
    }, 1000)
}
function toggle() {
    pause = !pause
}

window.onload = () =>{
    startTime(session)
    document.addEventListener("click", ({target})=>{
        if (target.id === "play_pause"){
            toggle()
        }
    })
}