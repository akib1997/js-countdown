const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const second = document.getElementById("second");

function countdown() {
  const newYearsDate = new Date("4 Sep 2021");
  const currentDate = new Date();
  let milSec = newYearsDate - currentDate;

  let sec = Math.floor(milSec / 1000) % 60;
  let min = Math.floor(milSec / 1000 / 60) % 60;
  let hou = Math.floor(milSec / 1000 / 60 / 60) % 24;
  let day = Math.floor(milSec / 1000 / 60 / 60 / 24);

  days.innerText = day;
  hours.innerText = hou;
  minutes.innerText = min;
  second.innerText = sec;
}

countdown();

setInterval(countdown, 1000);
