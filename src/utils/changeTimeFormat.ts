export const changeTimeFormat = (time: Date) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
};
