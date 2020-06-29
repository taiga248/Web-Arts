const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondHand = document.querySelector("#second-hand");

const timerHour = document.querySelector("#timer__hour");
const timerMinute = document.querySelector("#timer__min");
const timerSecond = document.querySelector("#timer__sec");

setInterval(() => {
  let now = new Date();
  let hour = now.getHours() * 30;
  let minute = now.getMinutes() * 6;
  let second = now.getSeconds() * 6;

  hourHand.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  minuteHand.style.transform = `rotateZ(${minute}deg)`;
  secondHand.style.transform = `rotateZ(${second}deg)`;

  let h = now.getHours();
  let m = now.getMinutes();

  h < 10 ? (h = "0" + h) : h;
  m < 10 ? (m = "0" + m) : m;

  timerHour.textContent = h;
  timerMinute.textContent = m;
});
