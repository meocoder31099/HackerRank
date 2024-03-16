/**
 *
 * @param {Number} n
 * @param {Number} m
 * @returns {Number}
 */
function towerBreakers(n, m) {
  return m === 1 || n % 2 === 0 ? 2 : 1;
}

/**
 * Player 1 plays first.
 * Assuming both players always play optimally.
 * Player 1 can't win if the game starts with an even number of towers (yes, it's a very stupid game!).
 * Player 1 can't win if tower of height is 1
 */

console.log({ winner: towerBreakers(1, 4) });
