const timerText = document.getElementById("timeText");
const startBtn = document.getElementById("startBtn");

let secondsLeft = (Number(timerText.textContent.slice(0,2))) * 60;
let sayac = null;


startBtn.addEventListener("click", () =>{

    if(sayac !== null){
        clearInterval(sayac);

    }
    
    
    sayac = setInterval(() => {
    
        secondsLeft -= 1;
        let minutesLeft = Math.floor(secondsLeft / 60);
        let secondsLeft2 = Math.floor(secondsLeft % 60);

        if(secondsLeft2<10){
            secondsLeft2 = "0" + secondsLeft2;

                if(minutesLeft == 0 && secondsLeft2 == "00" ){
                    clearInterval(sayac);
                    alert("Bitti!");
                }

        }
        


        timerText.textContent = minutesLeft + ":" + secondsLeft2;


    }, 1000);


})