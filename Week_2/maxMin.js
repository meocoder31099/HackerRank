/**
 *
 * @param {Number} k
 * @param {Array<Number>} arr
 * @returns {Number}
 */
function maxMin(k, arr) {
  arr.sort((a, b) => a - b);

  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= arr.length - k; i++) {
    min = Math.min(arr[i + k - 1] - arr[i], min);
  }

  return min;
}
