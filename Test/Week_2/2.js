/**
 *
 * @param {number[]} arrayA
 * @param {number[]} arrayB
 * @returns {number}
 */
function getTotalX(arrayA, arrayB) {
  let considerNumber = Math.max(...arrayA);
  const limit = Math.max(...arrayB);

  let betweenSets = 0;

  while (considerNumber <= limit) {
    let isOkA = true;
    for (const numA of arrayA) {
      if (considerNumber % numA !== 0) {
        isOkA = false;
        break;
      }
    }

    if (!isOkA) {
      considerNumber++;
      continue;
    }

    let isOkB = true;
    for (const numB of arrayB) {
      if (numB % considerNumber !== 0) {
        isOkB = false;
        break;
      }
    }

    if (isOkB) betweenSets++;

    considerNumber++;
  }

  return betweenSets;
}

// const result = getTotalX([2, 6], [24, 36]);
// console.log(result);
