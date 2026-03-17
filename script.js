const timerText = document.getElementById("timeText");
const startBtn = document.getElementById("startBtn");

let secondsLeft = (Number(timerText.textContent.slice(0,2))) * 60;


startBtn.addEventListener("click", () =>{

    setInterval(() => {
    
        secondsLeft -= 1;
        minutesLeft = Math.floor(secondsLeft / 60);
        secondsLeft2 = Math.floor(secondsLeft % 60);

        if(secondsLeft2<10){
            secondsLeft2 = "0" + secondsLeft2;
        }

        timerText.textContent = minutesLeft + ":" + secondsLeft2;

    }, 1000);


})