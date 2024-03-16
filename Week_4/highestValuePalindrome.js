/**
 *
 * @typedef { {char: String, isChange?: Boolean} } CharNode
 */

/**
 *
 * @typedef {CharNode & {mirror: CharNode}} CurrentCharNode
 */

/**
 *
 * @param {CurrentCharNode} currentChar
 * @param {CharNode} mirrorChar
 */
const change = (currentChar, mirrorChar) => {
  if (currentChar.char > mirrorChar.char) {
    mirrorChar.char = currentChar.char;
    mirrorChar["isChange"] = true;
  } else {
    currentChar.char = mirrorChar.char;
    currentChar["isChange"] = true;
  }
};

/**
 *
 * @param {String} s
 * @param {Number} n
 * @param {Number} k
 */
function highestValuePalindrome(s, n, k) {
  let midChar = undefined;
  let i = 0;
  let mirrorIndex = n - 1; // (n - 1 - i) is a mirror of i.

  const map = new Map();
  map.set("canBigger", { index: 0, queue: [] });

  if (n % 2 !== 0) {
    const mid = Math.floor(n / 2);
    midChar = s[mid];
  }

  while (i < mirrorIndex) {
    const mirrorChar = {};
    const currentChar = {
      char: s[i],
      mirror: mirrorChar,
    };

    mirrorChar["char"] = s[mirrorIndex];

    if (currentChar.char !== mirrorChar.char) {
      if (k < 1) return -1; // (K) Change is not enought to make a Palindrome.
      change(currentChar, mirrorChar);
      k--;
    }

    if (currentChar.char < "9") {
      map.get("canBigger").queue.push(currentChar);
    }

    map.set(i, currentChar);

    i++;
    mirrorIndex--;
  }

  const canBigger = map.get("canBigger");
  while (k > 0 && canBigger.index < canBigger.queue.length) {
    const { index, queue } = canBigger;

    if (k >= 2 && !queue[index].isChange && !queue[index].mirror.isChange) {
      queue[index].char = "9";
      queue[index]["isChange"] = true;
      queue[index].mirror.char = "9";
      queue[index].mirror["isChange"] = true;
      k -= 2;
    } else if (
      k > 0 &&
      (queue[index].isChange || queue[index].mirror.isChange)
    ) {
      queue[index].mirror.char = "9";
      queue[index].char = "9";

      if (!queue[index].isChange) {
        queue[index]["isChange"] = true;
      } else {
        queue[index].mirror["isChange"] = true;
      }

      k--;
    }

    canBigger.index++;
  }

  if (k > 0 && midChar && midChar < "9") {
    midChar = "9";
    k--;
  }

  map.delete("canBigger");

  let leftChar = "";
  let rightChar = "";
  for (const [i, nodeChar] of map.entries()) {
    leftChar = leftChar + nodeChar.char;
    rightChar = nodeChar.mirror.char + rightChar;
  }

  let palindrome = leftChar + (midChar || "") + rightChar;

  return palindrome;
}

highestValuePalindrome("092282", 6, 3);
