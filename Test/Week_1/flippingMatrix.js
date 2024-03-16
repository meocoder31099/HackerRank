// Challenge 1

/**
 *
 * @param {Array<Number>} arr
 * @returns {Number}
 */
function findMedian(arr) {
  arr.sort((a, b) => a - b);
  return arr[Math.floor(arr.length / 2)];
}

// Challenge 2

/**
 *
 * @param {Array<Array<Number>, Array<Number>>} matrix
 * @returns {Number}
 */
function flippingMatrix(matrix) {
  const matrixLength = matrix.length;
  const n = Math.floor(matrixLength / 2);
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const r1 = i;
      const r2 = matrixLength - 1 - i;
      const c1 = j;
      const c2 = matrixLength - 1 - j;
      sum += Math.max(
        Math.max(matrix[r1][c1], matrix[r1][c2]),
        Math.max(matrix[r2][c1], matrix[r2][c2])
      );
    }
  }

  return sum;
}

// Test
// const matrix = [
//   [112, 42, 83, 119],
//   [56, 125, 56, 49],
//   [15, 78, 101, 43],
//   [62, 98, 114, 108],
// ];

// console.log(flippingMatrix(matrix));

// /**
//  *
//  * @param {Array<Array, Array} matrix
//  * @param {Number} iCol
//  */
// const reverseColumn = (matrix, iCol) => {
//   const countRow = matrix.length;
//   for (let i = 0; i < Math.floor(countRow / 2); i++) {
//     const iSwap = countRow - 1 - i;
//     const temp = matrix[i][iCol];
//     matrix[i][iCol] = matrix[iSwap][iCol];
//     matrix[iSwap][iCol] = temp;
//   }
// };
