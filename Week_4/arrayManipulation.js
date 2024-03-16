/**
 * Thuật toán này sử dụng kỹ thuật “Difference Array”. Ý tưởng chính của kỹ thuật này là thay vì cập nhật tất cả các phần tử trong một phạm vi nhất định, chúng ta chỉ cần cập nhật hai điểm cuối cùng của phạm vi.
 * https://medium.com/@ishankkatiyar162/understanding-difference-array-the-underrated-constant-time-range-update-algorithm-part-1-e432ada7f1f5
 */

/**
 *
 * @param {Number} n
 * @param {Number[][]} queries
 * @returns {Number}
 */
function arrayManipulation(n, queries) {
  const a = Array(n).fill(0);
  let length = a.length;
  for (let query of queries) {
    a[query[0] - 1] += query[2];
    if (query[1] < n) {
      a[query[1]] -= query[2];
    }
  }

  // console.log(a);

  let max_val = a[0];
  for (let i = 1; i < length; i++) {
    a[i] += a[i - 1];
    max_val = Math.max(max_val, a[i]);
  }
  // console.log(a);
  return max_val;
}

// arrayManipulation(10, [
//   [1, 5, 3],
//   [4, 8, 7],
//   [6, 9, 1],
// ]);
