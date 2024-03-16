/**
 *
 * @param {Array<Number>} s
 * @param {Number} d
 * @param {Number} m
 * @returns {Number}
 */
function birthday(s, d, m) {
  console.log(d, m);
  let waysDivideChocolate = 0;

  for (let i = 0; i <= s.length - m; i++) {
    // let sum = s[i];
    // for (let j = 1; j < m; j++) {
    //   sum += s[i + j];
    // }
    // if (sum === d) waysDivideChocolate++;

    if (s.slice(i, i + m).reduce((sum, value) => sum + value) === d)
      waysDivideChocolate++;
  }

  return waysDivideChocolate;
}

// const arr =
//   "2 3 4 4 2 1 2 5 3 4 4 3 4 1 3 5 4 5 3 1 1 5 4 3 5 3 5 3 4 4 2 4 5 2 3 2 5 3 4 2 4 3 3 4 3 5 2 5 1 3 1 4 2 2 4 3 3 3 3 4 1 1 4 3 1 5 2 5 1 3 5 4 3 3 1 5 3 3 3 4 5 2"
//     .split(" ")
//     .map((e) => parseInt(e));
// const b = birthday(arr, 26, 8);
// console.log(b);
