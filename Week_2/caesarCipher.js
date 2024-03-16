/**
 *
 * @param {String} s
 * @param {Number} k
 * @returns {String}
 */
function caesarCipher(s, k) {
  const alphabetRotated = {};

  k = k % 26;

  for (let i = 0; i < 26; i++) {
    //For adbcd....
    const j = i + 65; // 65 = a
    alphabetRotated[j] = ((j - 65 + k) % 26) + 65;
    // For ABCD....
    const l = i + 97; // 97 = A
    alphabetRotated[l] = ((l - 97 + k) % 26) + 97;
  }

  let string = "";

  const splitChars = s.split("");

  for (const char of splitChars) {
    const charCode = char.charCodeAt();
    string += alphabetRotated[charCode]
      ? String.fromCharCode(alphabetRotated[charCode])
      : char;
  }

  return string;
}
