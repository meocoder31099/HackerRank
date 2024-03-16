/**
 *
 * @param {Array} arr
 * @param {Number} totalNumbers
 */
function plusMinus(arr, totalNumbers) {
  const numbers = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  arr.reduce((numbers, num) => {
    num < 0
      ? (numbers.negative = numbers.negative + 1)
      : num === 0
      ? (numbers.zero = numbers.zero + 1)
      : (numbers.positive = numbers.positive + 1);
    return numbers;
  }, numbers);

  const positiveNumbers = (numbers.positive / totalNumbers).toFixed(6);
  const negativeNumbers = (numbers.negative / totalNumbers).toFixed(6);
  const zeroNumbers = (numbers.zero / totalNumbers).toFixed(6);

  console.log(positiveNumbers);
  console.log(negativeNumbers);
  console.log(zeroNumbers);
}
