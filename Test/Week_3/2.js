/**
 *
 * @param {number} k
 * @param {number[]} arr
 * @returns {number}
 */
function pairs(k, arr) {
  /** @type {Object<number, number>} */
  const mapNumer = {};
  let numberOfPairs = 0;

  for (const num of arr) {
    mapNumer[num] ? mapNumer[num]++ : (mapNumer[num] = 1);
  }

  while (arr.length) {
    const num = arr.pop();
    const difference = num - k;
    console.log(mapNumer[difference]);
    if (mapNumer[difference]) numberOfPairs += mapNumer[difference];
  }

  return numberOfPairs;
}

// pairs(
//   1,
//   [
//     363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912,
//     428047635, 491595254, 879792181, 1069262793,
//   ]
// );

// pairs(2, [1, 5, 3, 4, 2]);
