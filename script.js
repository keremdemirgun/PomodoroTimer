const timerText = document.getElementById("timeText");
const startBtn = document.getElementById("startBtn");

let secondsLeft = (Number(timerText.textContent.slice(0,2))) * 60;


startBtn.addEventListener("click", () =>{

    setInterval(() => {
    
        secondsLeft -= 1;
        timerText.textContent = secondsLeft;

    }, 1000);


})