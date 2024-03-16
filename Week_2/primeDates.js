/**
 *
 * @param {Number} year
 */
const updateLeapYear = (year) => {
  if (year % 400 == 0) month[2] = 29;
  else if (year % 100 == 0) month[2] = 28;
  else if (year % 4 == 0) month[2] = 29;
  else month[2] = 28;

  // (0 == year % 4 && 0 != year % 100) || 0 == year % 400
  //   ? (month[2] = 29)
  //   : (month[2] = 28);
};

/**
 *
 * @param {Number} date
 * @returns {Boolean}
 */
const isDivisible = (date) => date % 4 === 0 || date % 7 === 0;

/**
 * @param {Number} d1
 * @param {Number} m1
 * @param {Number} y1
 * @param {Number} d2
 * @param {Number} m2
 * @param {Number} y2
 * @returns {Boolean}
 */
const isDone = (d1, m1, y1, d2, m2, y2) => d1 === d2 && m1 === m2 && y1 === y2;
const month = [];

const storeMonth = () => {
  month[1] = 31;
  month[2] = 28;
  month[3] = 31;
  month[4] = 30;
  month[5] = 31;
  month[6] = 30;
  month[7] = 31;
  month[8] = 31;
  month[9] = 30;
  month[10] = 31;
  month[11] = 30;
  month[12] = 31;
};

/**
 *
 * @param {Number} d1
 * @param {Number} m1
 * @param {Number} y1
 * @param {Number} d2
 * @param {Number} m2
 * @param {Number} y2
 * @returns {Number}
 */
const findPrimeDates = (d1, m1, y1, d2, m2, y2) => {
  storeMonth();
  let x;
  let result = 0;

  while (true) {
    x = d1;
    x = x * 100 + m1;
    x = x * 10000 + y1;

    if (isDivisible(x)) result++;
    if (isDone(d1, m1, y1, d2, m2, y2)) break;
    updateLeapYear(y1);
    d1++;
    if (d1 > month[m1]) {
      m1++;
      d1 = 1;
      if (m1 > 12) {
        y1++;
        m1 = 1;
      }
    }
  }

  return result;
};

// const [d1, m1, y1, d2, m2, y2] = (
//   "01-01-7580 26-07-9834" || "02-08-2025 04-09-2025"
// )
//   .split(/-| /)
//   .map((e) => parseInt(e));

// const result = findPrimeDates(d1, m1, y1, d2, m2, y2);
// console.log(result);
