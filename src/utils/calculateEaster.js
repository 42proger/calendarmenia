export function calculateEaster(year) {
  const a = year % 19,
    b = year % 4,
    c = year % 7,
    k = Math.floor(year / 100),
    p = Math.floor((13 + 8 * k) / 25),
    q = Math.floor(k / 4),
    M = (15 - p + k - q) % 30,
    N = (4 + k - q) % 7,
    d = (19 * a + M) % 30,
    e = (2 * b + 4 * c + 6 * d + N) % 7,
    f = d + e + 22;
  let easterDay; 
  let easterMonth = "04";

  if (d == 29 && e == 6) {
    easterDay = 19;
  } else if (d == 28 && e == 6 && (11 * M + 11) % 30 < 19) {
    easterDay = 18;
  } else {
    if (f <= 31) {
      easterDay = f;
      easterMonth = "03";
    } else {
      easterDay = d + e - 9;
    }
  }

  return { day: easterDay, month: easterMonth, year: year };
}
