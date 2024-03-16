/**
 *
 * @param {Number} n
 * @returns {'Richard' | 'Louise'}
 */
function counterGame(n) {
  // if (n == 1) return 'Richard';
  // if (n == 2) return 'Louise';
  let player = true; // True is "Louise", False is "Richard"
  while (true) {
    const maxPower = 2 ** Math.floor(Math.log2(n));
    if (maxPower === n) n = n / 2;
    else n -= maxPower;
    if (n === 1) break;
    player = !player;
  }

  return player ? "Louise" : "Richard";
}

const b = counterGame(6);
console.log(b);
