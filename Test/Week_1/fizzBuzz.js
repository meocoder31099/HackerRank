/**
 *
 * @param {Number} n
 */
function fizzBuzz(n) {
  let i = 1;
  while (i <= n) {
    if (!(i % 3) && !(i % 5)) console.log("FizzBuzz");
    else if (!(i % 3)) console.log("Fizz");
    else if (!(i % 5)) console.log("Buzz");
    else console.log(i);
    i++;
  }
}
