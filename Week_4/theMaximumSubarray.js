// /**
//  *
//  * @param {Number[]} arr
//  * @returns {Number[]}
//  */
// const minium = (arr) => {
//   const arr1 = [];

//   for (let index = 0; index < arr.length; index++) {
//     const num = arr[index];
//     if (num >= 0) {
//       if (arr1[arr1.length - 1] === undefined) arr1[0] = num;
//       else if (arr1[arr1.length - 1] < 0) arr1.push(num);
//       else arr1[arr1.length - 1] += num;
//     } else {
//       if (arr1[arr1.length - 1] < 0) arr1[arr1.length - 1] += num;
//       else arr1.push(num);
//     }
//   }
//   return arr1;
// };

// /**
//  *
//  * @param {Number[]} arr
//  * @returns {Number[]}
//  */
// const merge = (arr) => {
//   if (arr[0] > 0 && arr[1] < 0 && arr[2] > 0 && arr.length === 3) return arr;
//   const arr1 = [0];
//   let i = 0;
//   while (true) {
//     if (arr[i] >= 0) arr1[arr1.length - 1] += arr[i];
//     else if (arr[i] < 0 && i < arr.length - 1) {
//       arr[i] + arr[i + 1] >= 0
//         ? (arr1[arr1.length - 1] += arr[i] + arr[i + 1])
//         : arr1.push(arr[i]) && arr1.push(arr[i + 1]);
//       i++;
//     } else {
//       arr1.push(arr[i]);
//     }

//     i++;
//     if (!(i < arr.length)) break;
//   }

//   return arr1;
// };

// /**
//  *
//  * @param {Number[]} arr
//  * @returns {[Number, Number]}
//  */
// function maxSubarray(arr) {
//   let isAllNegative = true;
//   let max = arr[0];
//   for (const n of arr) {
//     n > 0 && (isAllNegative = false);
//     n > max && (max = n);
//   }

//   if (isAllNegative) return [max, max];

//   let sumSubarray = 0;
//   let sumSubsequences = arr.reduce((sum, value) =>
//     value > 0 ? (sum += value) : sum
//   );
//   if (sumSubsequences < max) sumSubsequences = max;

//   if (arr.length < 2) return [arr[0], arr[0]];

//   do {
//     arr = minium(arr);
//     arr = merge(arr);
//   } while (arr.length > 3);
//   {
//     // console.log(arr);
//     arr = minium(arr);
//     arr = merge(arr);
//   }

//   // console.log(arr);

//   sumSubarray = Math.max(...arr);

//   return [sumSubarray, sumSubsequences];
// }

// Su dung thuat toan Kadane de tim mang con lon nhat.
/**
 *
 * @param {Number[]} arr
 * @returns {[Number, Number]}
 */
function maxSubarray(arr) {
  let sumSubsequences = 0;
  let sumSubarray = 0;
  let maxEndingHere = 0;
  let isAllNegative = true;
  let max = arr[0];

  for (const num of arr) {
    maxEndingHere = Math.max(0, maxEndingHere + num);
    sumSubarray = Math.max(sumSubarray, maxEndingHere);
    num > 0 && (sumSubsequences += num) && (isAllNegative = false);
    num > max && (max = num);
  }

  if (isAllNegative) return [max, max];

  if (sumSubsequences < max) sumSubsequences = max;

  if (arr.length < 2) return [arr[0], arr[0]];

  return [sumSubarray, sumSubsequences];
}

// const a = maxSubarray(
//   [1, -1, -1, -1, -1, 5] || [1, 2, 3, 4] || [2, -1, 2, 3, 4, -5] || [
//       2, -1, 2, 3, 4, -5, 4, 5, 2, -10, 20, -8, 1, 2, 3,
//     ]
// );
// console.log(a);
