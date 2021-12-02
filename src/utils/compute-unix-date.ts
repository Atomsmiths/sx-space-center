function computeUnixDate(
  dateUnix: number,
  currentTime: number,
): {
  delta: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
} {
  const delta = Math.floor(currentTime - dateUnix);

  return {
    delta,
    seconds: delta % 60,
    minutes: Math.floor(delta / 60) % 60,
    hours: Math.floor(delta / 3600) % 24,
    days: Math.floor(delta / 86400),
  };
}

export { computeUnixDate };
