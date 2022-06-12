const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
handleClock();

setInterval(handleClock, 1000);

function handleClock() {
  const time = new Date();
  const secondRatio = time.getSeconds() / 60;
  const minuteRatio = (secondRatio + time.getMinutes()) / 60;
  const hourRatio = (minuteRatio + time.getHours()) / 12;

  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
}
function setRotation(elem, ratio) {
  elem.style.setProperty("--rotate", `${ratio * 360}deg`);
}
