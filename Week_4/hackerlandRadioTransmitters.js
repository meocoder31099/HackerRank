const findNext = (arr, index, k) => {
  let i = index + 1;
  while (true) {
    if (arr[i] - arr[index] <= k) i++;
    else {
      i--;
      break;
    }
  }

  return i === index ? -1 : i;
};

/**
 *
 * @param {Number[]} x
 * @param {Number} k
 * @returns {Number}
 */
function hackerlandRadioTransmitters(x, k) {
  x.sort((a, b) => a - b);

  let transmitters = 0;
  let i = 0;

  while (i < x.length) {
    let next = findNext(x, i, k);
    let current = next;

    if (next !== -1) next = findNext(x, next, k);
    else {
      current = i;
    }

    transmitters++;

    next !== -1 ? (i = next + 1) : (i = current + 1);
  }

  return transmitters;
}

// console.log(hackerlandRadioTransmitters([9, 5, 4, 2, 6, 15, 12], 2));
