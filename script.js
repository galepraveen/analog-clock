const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".minute-hand");
const secHand = document.querySelector(".second-hand");
const digitalTime = document.querySelector(".digital-time");
const digitalHourTime = document.querySelector(".digital-time .hours");
const digitalMinTime = document.querySelector(".digital-time .minutes");
const digitalSecTime = document.querySelector(".digital-time .seconds");
const meridiem = document.querySelector(".meridiem");

setInterval(()=>{
  let time = new Date();
  let hourTime = time.getHours();
  let copyHourTime = hourTime;
  if(hourTime > 12) hourTime -= 12;
  let minTime = time.getMinutes();
  let secTime = time.getSeconds();
  
  hourHand.style.transform = `rotate(${30*hourTime+minTime/2}deg)`;
  minHand.style.transform = `rotate(${6*minTime}deg)`;
  secHand.style.transform = `rotate(${6*secTime}deg)`;
  
  digitalHourTime.textContent = hourTime > 12 ? hourTime-12 : hourTime < 10 ? `0${hourTime}`: hourTime;
  digitalMinTime.textContent = minTime < 10 ? `0${minTime}` : minTime;
  digitalSecTime.textContent = secTime < 10 ? `0${secTime}` : secTime;
  meridiem.textContent = copyHourTime > 12 ? "PM" : "AM";
  
}, 1000);