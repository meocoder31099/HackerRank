/**
 * Chart Code
 * {: 123
 * }: 125
 * [: 91
 * ]: 93
 * (: 40
 * ): 41
 */

/**
 *
 * @param {String} s
 * @returns {'YES' | 'NO'}
 */
function isBalanced(s) {
  const bracketMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const bracketStack = [];

  // Độ dài của chuỗi không là chẵn chuỗi không thể đạt được cân bằng vì một cặp ngoặc là số chẵn.
  if (s.length % 2 !== 0) {
    return "NO";
  }

  for (let idx = 0; idx < s.length; idx++) {
    if (bracketMap[s[idx]]) {
      // Nếu giá trị của s[idx] là một ký hiệu mở ngoặc, thêm nó vào bracketMap.
      bracketStack.push(bracketMap[s[idx]]);
    } else {
      const lastBracket = bracketStack.pop();
      // Nếu giá trị của s[idx] không phải là một ký hiệu mở ngoặc hoặc là một ký tự đóng ngoặc của ký tự mở ngoặc mới nhất đã được thêm vào 'bracketStack' chuỗi là không cân bằng.
      if (s[idx] !== lastBracket) return "NO";
    }
  }

  // Các ngược được mở nhưng chưa được đóng lại, chuỗi không thể cân bằng
  if (bracketStack.length !== 0) return "NO";

  return "YES";
}

// const result = isBalanced("[(({");
// console.log(result);
