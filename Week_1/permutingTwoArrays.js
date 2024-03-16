/**
 *
 * @param {Number} k
 * @param {Array<Number>} A
 * @param {Array<Number>} B
 * @returns {'YES' | 'NO'}
 */
function twoArrays(k, A, B) {
  A.sort().sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  console.log({ A }, { B });

  for (let i = 0; i < A.length; i++) {
    console.log(A[i] + B[i], { k });
    if (A[i] + B[i] < k) return "NO";
  }
  return "YES";
}

// Test
// const input = `18 94
// 84 2 50 51 19 58 12 90 81 68 54 73 81 31 79 85 39 2
// 53 102 40 17 33 92 18 79 66 23 84 25 38 43 27 55 8 19`.split(/\n|\r/);

// const k = parseInt(input[0].trim().split(" ").pop());
// const A = input[1]
//   .trim()
//   .split(" ")
//   .map((e) => parseInt(e));
// const B = input[2]
//   .trim()
//   .split(" ")
//   .map((e) => parseInt(e));
// const a = twoArrays(k, A, B);

// console.log(a);
