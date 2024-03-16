/**
 *
 * @param {String[]} grid
 * @returns {'YES' | 'NO'}
 */
function gridChallenge(grid) {
  /** @type {Number[][]} */
  const arrCharCodes = [];

  for (const string of grid) {
    const arrCharCode = [];
    for (let j = 0; j < string.length; j++) {
      arrCharCode.push(string.charCodeAt(j));
    }
    arrCharCode.sort((a, b) => a - b);
    arrCharCodes.push(arrCharCode);
  }

  console.log(arrCharCodes);

  for (let col = 0; col < arrCharCodes.length; col++) {
    for (let row = 0; row < arrCharCodes.length - 1; row++) {
      const nextRow = row + 1;
      if (arrCharCodes[row][col] > arrCharCodes[nextRow][col]) return "NO";
    }
  }

  return "YES";
}

// const check = gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"]);
const check = gridChallenge(["uxf", "vof", "hmp"]);
console.log(check);
