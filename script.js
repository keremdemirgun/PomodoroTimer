const timerText = document.getElementById("timeText");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const restartBtn = document.getElementById("restartBtn");

let remaningTime = localStorage.getItem("remaningTime") || "25:00";
console.log(remaningTime);

timerText.textContent = remaningTime ? remaningTime : "25:00";

let firstMinute = remaningTime;

const parts = timerText.textContent.split(":");

let secondsLeft = Number(parts[0]) * 60 + Number(parts[1]);
let sayac = null;

startBtn.addEventListener("click", () => {
  if (sayac !== null) {
    clearInterval(sayac);
  }
  
  sayac = setInterval(() => {
    secondsLeft -= 1;
    let minutesLeft = Math.floor(secondsLeft / 60);
    let secondsLeft2 = Math.floor(secondsLeft % 60);

    localStorage.setItem("remaningTime", minutesLeft + ":" + secondsLeft2);
    
    if (secondsLeft2 < 10) {
      secondsLeft2 = "0" + secondsLeft2;
      
      if (minutesLeft == 0 && secondsLeft2 == "00") {
        clearInterval(sayac);
        alert("Bitti!");
      }
    }
    
    timerText.textContent = minutesLeft + ":" + secondsLeft2;
  }, 1000);
});

restartBtn.addEventListener("click", () => {
  clearInterval(sayac);
  timerText.textContent = "25:00";
  secondsLeft = Number(timerText.textContent.slice(0, 2)) * 60;
  remaningTime = "25:00";
  localStorage.setItem("remaningTime", "25:00");
  sayac = null;
});

stopBtn.addEventListener("click", () => {
  clearInterval(sayac);
  sayac = null;
  localStorage.setItem("remaningTime", timerText.textContent);
});

const gorevListesi = document.getElementById("gorev-listesi");
const gorevText = document.getElementById("gorevText");
const gorevEkleBtn = document.getElementById("gorevEkleBtn");
gorevEkleBtn.addEventListener("click", () => {
  let yeniGorev = gorevText.value;
  let gorevsilBtn = document.createElement("button");
  gorevsilBtn.textContent = "Sil";
  gorevsilBtn.classList.add("btn", "btn-danger", "sil-btn");

  if (yeniGorev == "") {
    alert("Bir görev yazmalısın!");
  } else {
    let li = document.createElement("li");
    li.classList.add("gorevler-container");
    li.textContent = gorevText.value;

    li.appendChild(gorevsilBtn);
    gorevListesi.appendChild(li);

    gorevsilBtn.addEventListener("click", () => {
      gorevListesi.removeChild(li);
    });
    gorevText.value = "";
  }
});
