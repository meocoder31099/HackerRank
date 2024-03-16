/**
 *
 * @param {string} string
 * @returns {number}
 */
function anagram(string) {
  if (string.length % 2 !== 0) return -1;
  const midIdx = string.length / 2;
  /** @type {Object<string, number>} */
  const charMap = {};

  for (let idx = 0; idx < midIdx; idx++) {
    const char = string[idx];
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  let sameChars = 0;
  for (let idx = midIdx; idx < string.length; idx++) {
    const char = string[idx];
    if (charMap[char] && charMap[char] > 0) {
      charMap[char]--;
      sameChars++;
    }
  }

  return midIdx - sameChars;
}

// const result = anagram("aaabbb");
// console.log(result);
// anagram("ab");
// anagram("abc");
// anagram("mnop");
// anagram("xyyx");
// anagram("xaxbbbxx");
