/**
 *
 * @param {String} s
 * @returns {'YES'| 'NO'}
 */
function isValid(s) {
  const frequencies = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (frequencies[char] === undefined) {
      frequencies[char] = 1;
      continue;
    }
    frequencies[char]++;
  }
  const frequenciesKeys = Object.keys(frequencies);

  const nKeys = {};

  for (const key of frequenciesKeys) {
    if (nKeys[frequencies[key]] === undefined) {
      nKeys[frequencies[key]] = 1;
      continue;
    }
    nKeys[frequencies[key]]++;
  }

  const keys = Object.keys(nKeys).map((e) => parseInt(e));

  if (keys.length > 2) return "NO";
  if (nKeys[1] > 1) return "NO";
  if (nKeys[1] === undefined && Math.max(...keys) - Math.min(...keys) > 1)
    return "NO";

  return "YES";
}

// const result = isValid("aaaabbcc");
// console.log(result);
