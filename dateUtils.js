export const MILLISECONDS_DAY = 86400000;

export const butcherAlgorithm = (year) => {
  const A = year % 19;
  const B = Math.floor(year / 100);
  const C = year % 100;
  const D = Math.floor(B / 4);
  const E = B % 4;
  const F = Math.floor((B + 8) / 25);
  const G = Math.floor((B - F + 1) / 3);
  const H = (19 * A + B - D - G + 15) % 30;
  const I = Math.floor(C / 4);
  const K = C % 4;
  const L = (32 + 2 * E + 2 * I - H - K) % 7;
  const M = Math.floor((A + 11 * H + 22 * L) / 451);
  const N = H + L - 7 * M + 114;
  const month = Math.floor(N / 31);
  const day = 1 + (N % 31);

  return getFormattedDate(year, month, day);
};

export const nextDay = (day, sum) => {
  const date = new Date(day);
  const newDate =
    sum === 7
      ? date
      : new Date(
        date.getTime() + ((7 + sum - date.getUTCDay()) % 7) * MILLISECONDS_DAY
      );

  return getFormattedDate(
    newDate.getUTCFullYear(),
    newDate.getUTCMonth() + 1,
    newDate.getUTCDate()
  );
};

export const getFormattedDate = (year, month, day) => {
  return `${year}/${addZero(month)}/${addZero(day)}`;
};

export const addZero = (number = 0) => {
  return number < 10 ? `0${number}` : `${number}`;
}
