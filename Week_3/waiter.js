const { checkPrimeSync } = require("node:crypto");

/**
 *
 * @param {Number} number
 * @returns {Number[]}
 */
const initPrimeNumber = (number) => {
  const primeNumbers = [];

  let n = BigInt(2);
  while (primeNumbers.length < number) {
    if (checkPrimeSync(n)) primeNumbers.push(Number(n));
    n++;
  }

  return primeNumbers;
};

/**
 *
 * @param {Number[]} number
 * @param {Number} q
 * @returns {Number[]}
 */
function waiter(number, q) {
  const primeNumbers = initPrimeNumber(q);
  let answers = [];
  let a = [];
  let b = [];

  while (primeNumbers.length) {
    const primeNumber = primeNumbers.shift();

    if (number.length === 0) break;

    while (number.length) {
      const n = number.pop();
      if (n % primeNumber === 0) b.unshift(n);
      else a.push(n);
    }

    if (b.length) answers = [...answers, ...b];
    number = structuredClone(a);
    a = [];
    b = [];
  }

  if (number.length) answers = [...answers, ...number.reverse()];

  return answers;
}

const result = waiter([3, 4, 7, 6, 5], 1);
console.log(result);
