/**
 *
 * @param {String} input
 */
function processData(input) {
  const splitinput = input.split(/\n|\r/);
  /** @type {Map<Number, null>} */
  const qhead = new Map();
  let min = Infinity;
  let n;
  for (let index = 1; index < splitinput.length; index++) {
    const query = splitinput[index].split(" ");
    if (query[1]) n = parseInt(query[1]);
    switch (query[0]) {
      case "1":
        qhead.set(n, null);
        if (min > n) min = n;
        break;
      case "2":
        qhead.delete(n);
        if (min === n) min = undefined;
        break;

      default:
        if (min === undefined) min = Math.min(...qhead.keys());
        console.log(min);
        break;
    }
  }
}
