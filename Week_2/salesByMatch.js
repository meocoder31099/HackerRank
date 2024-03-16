/**
 *
 * @param {Number} n
 * @param {Array<Number>} ar
 * @returns {Number}
 */
function sockMerchant(n, ar) {
  const socks = {};
  let totalPairOfSocks = 0;

  // for (const sock of ar) {
  //   socks[sock] ? (socks[sock] = socks[sock] + 1) : (socks[sock] = 1);
  // }

  // for (const key of Object.keys(socks)) {
  //   socks[key] > 1 && (totalPairOfSocks += Math.floor(socks[key] / 2));
  // }

  for (const sock of ar) {
    socks[sock] = socks[sock] + 1 || 1;
    if (socks[sock] % 2 === 0) totalPairOfSocks++;
  }

  return totalPairOfSocks;
}
