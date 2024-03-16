/**
 * Nếu biểu diễn n dưới dạng nhị phân.
 * sum sẽ bằng 2 ** lượng bit 0 trong n
 */

/**
 *
 * @param {Number} n
 * @returns {Number}
 */
function sumXor(n) {
  if (n === 0) return 1; // n + x == (n ^ x) === 0 => sum = 1.
  return 2 ** (Number(n).toString(2).match(/0/gi)?.length || 0);
}

// const result = sumXor(0);

// console.log(result);
