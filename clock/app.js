const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondHand = document.querySelector("#second-hand");

setInterval(() => {
  let now = new Date();
  let hour = now.getHours() * 30;
  let minute = now.getMinutes() * 6;
  let second = now.getSeconds() * 6;

  hourHand.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  minuteHand.style.transform = `rotateZ(${minute}deg)`;
  secondHand.style.transform = `rotateZ(${second}deg)`;
});
