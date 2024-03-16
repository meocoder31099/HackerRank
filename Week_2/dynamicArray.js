/**
 *
 * @param {Array<Number>} arr
 * @returns {Number}
 */
const size = (arr) => {
  return arr.length;
};

/**
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} lastAnswer
 * @param {Number} n
 * @param {Number[][]} arr
 */
const q1 = (x, y, lastAnswer, n, arr) => {
  const idx = (x ^ lastAnswer) % n;
  arr[idx].push(y);
};

/**
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} lastAnswer
 * @param {Number} n
 * @param {Number[][]} arr
 * @param {Array<Number>} arrAnswers
 * @returns {Number}
 */
const q2 = (x, y, lastAnswer, n, arr, arrAnswers) => {
  const idx = (x ^ lastAnswer) % n;
  lastAnswer = arr[idx][y % size(arr[idx])];
  arrAnswers.push(lastAnswer);
  return lastAnswer;
};

/**
 *
 * @param {Number} n
 * @param {[1|2, Number, Number][]} queries
 * @returns {Array<Number>}
 */
function dynamicArray(n, queries) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  let lastAnswer = 0;
  const arrAnswers = [];

  for (const querie of queries) {
    switch (querie[0]) {
      case 1:
        q1(querie[1], querie[2], lastAnswer, n, arr);
        break;

      default:
        lastAnswer = q2(querie[1], querie[2], lastAnswer, n, arr, arrAnswers);
        break;
    }
  }
  return arrAnswers;
}
