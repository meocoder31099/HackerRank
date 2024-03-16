/**
 *
 * @param {Number[]} arr
 * @param {Number[]} arrSorted
 * @returns
 */
const minSwaps = (arr, arrSorted) => {
  /** @type {Map<Number, Number>} */
  const indexMap = new Map();

  arr.forEach((value, index) => {
    indexMap.set(value, index);
  });

  let swaps = 0;
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    const sortedValue = arrSorted[index];

    if (value !== sortedValue) {
      indexMap.set(value, indexMap.get(sortedValue));
      indexMap.set(sortedValue, index);

      [arr[index], arr[indexMap.get(value)]] = [
        arr[indexMap.get(value)],
        arr[index],
      ];

      swaps++;
    }
  }
  return swaps;
};

/**
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
function lilysHomework(arr) {
  const arrSorted = structuredClone(arr).sort((a, b) => b - a);
  const arrSorted2 = structuredClone(arrSorted).reverse();

  const minimumSwaps = Math.min(
    minSwaps([...arr], arrSorted),
    minSwaps(arr, arrSorted2)
  );

  return minimumSwaps;
}

// function lilysHomework(arr) {
//   const x = [...arr].sort((a, b) => a - b);
//   const s = (a) => {
//     const map = new Map();
//     a.forEach((v, i) => map.set(v, i));
//     let p = 0;
//     for (let [i, e] of a.entries()) {
//       if (e !== x[i]) {
//         p++;
//         const j = map.get(x[i]);
//         map.set(e, j);
//         a[j] = e;
//       }
//     }
//     return p;
//   };
//   return Math.min(s([...arr]), s(arr.reverse()));
// }

// lilysHomework([3, 4, 2, 5, 1] || [7, 15, 12, 3] || [2, 5, 3, 1]);
