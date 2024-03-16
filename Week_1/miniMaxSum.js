/**
 *
 * @param {Array} arr
 */
function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const fristElement = arr.shift();
  const lastElement = arr.pop();
  const middleElementsSum = arr.reduce((sum, num) => sum + num, 0);
  const minSum = fristElement + middleElementsSum;
  const maxSum = lastElement + middleElementsSum;

  console.log(minSum, maxSum);
}
