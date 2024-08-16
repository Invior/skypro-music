export const timeFormat = (time: number) => {
  if (typeof time === "number") {
    const minutes = Math.floor(time / 60);
    const seconds = +time.toFixed(0) % 60;
    let finalTime = `${minutes}:${seconds}`;
    if (seconds < 10) {
      finalTime = `${minutes}:0${seconds}`;
    }
    return finalTime;
  }
  return 0;
};
