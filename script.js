const rotateIndicators = (indicatorName, ratio) => {
  const indicator = document.querySelector(indicatorName);
  indicator.style.setProperty("--rotation", ratio * 360);
};

const clockTicks = () => {
  const date = new Date();

  const secondRatio = date.getSeconds() / 60;
  const minuteRation = (secondRatio + date.getMinutes()) / 60;
  const hourRatio = (minuteRation + date.getHours()) / 12;

  rotateIndicators(".sec", secondRatio);
  rotateIndicators(".min", minuteRation);
  rotateIndicators(".hour", hourRatio);
};

setInterval(() => clockTicks(), 1000);
clockTicks();
