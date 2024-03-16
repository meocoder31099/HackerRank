/**
 *
 * @param {String} s
 * @returns {'pangram' | 'not pangram'}
 */
function pangrams(s) {
  return [
    ...new Set(
      s
        .toLocaleLowerCase()
        .trim()
        .split("")
        .filter((e) => e.trim())
    ),
  ].length === 26
    ? "pangram"
    : "not pangram";
}
