// /**
//  *
//  * @param {string} string
//  * @returns {number}
//  */
// function palindromeIndex(string) {
//   let leftIdx = 0;
//   let rightIdx = string.length - 1;

//   let indexOfCharRemove = undefined;
//   /** @type {number[]} */
//   let tempLRIdx = []; // tempLRIdx[0] is leftIdx, tempLRIdx[1] is rightIdx.

//   while (leftIdx < rightIdx) {
//     if (string[leftIdx] !== string[rightIdx]) {
//       // If you have previously deleted an element, you cannot delete another element => return -1.
//       // Trong mot so truong hop, xoa phan tu o ve trai co the dan toi mot chuoi khong th la mot palindrome, hay thu xoa phan tu o phai neu co the.
//       if (indexOfCharRemove !== undefined) {
//         if (tempLRIdx.length) {
//           // Khôi phục tLeftIdx và tRightIdx, sau đó thực hiện xoá bỏ bớt một ký tự bên phải (**).
//           const tRightIdx = tempLRIdx.pop();
//           const tLeftIdx = tempLRIdx.pop();
//           leftIdx = tLeftIdx;
//           rightIdx = tRightIdx;
//           indexOfCharRemove = rightIdx;
//           rightIdx--; // Thực hiện xoá bỏ một phần tử ở vế phải bằng cách giảm chỉ số của vế phải đi một đơn vị.
//           leftIdx++;
//           rightIdx--;
//           continue;
//         } else return -1;
//       }

//       // Trong trường hợp cả vế trái và về phải khi xoá bỏ một ký tự đều giúp tạo ra một palindrome.
//       // Ví dụ "hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh" với chỉ số vế trái là 8 (c) và vế phải là 44 (w).
//       // Xoá vế trái hay vế phải của chuỗi đều thoả mãn tính chất của một palindrome.
//       // hgygsvlf(c)w...c(w)flvsgygh xoá vế trái sẽ được hgygsvlfw...c(w)flvsgygh, xoá vế phải sẽ được hgygsvlf(c)w...cflvsgygh.
//       // Ưu tiên xoá bỏ ký tự ở vế trái, nhưng cũng cần lưu lại chỉ số của vế trái và vế phải (*).
//       // Phòng trường hợp khi chúng ta tiếp tục kiểm tra chuỗi và phát hiện một cặp vế trái và phải không thoả mãn tính chất của một palindrome.
//       // Chúng ta sẽ khôi phục lại leftIdx và rightIdx từ giá trị đã lưu trước đó tại (*).
//       // Sau đó thực hiện xoá bớt một phần tử ở vế phải tại (**). Tiếp tục kiểm tra chuỗi có phải một chuỗi palindrome hay không.
//       // CHÚ Ý: Việc lưu lại chỉ số hai vế này sẽ chỉ được thực hiện một lần duy nhất.
//       // Khi cả vế trái và phải chưa từng xoá bất kỳ kí tự nào (indexOfCharRemove === undefined).
//       if (
//         indexOfCharRemove === undefined &&
//         string[leftIdx + 1] === string[rightIdx] &&
//         string[leftIdx] === string[rightIdx - 1]
//       ) {
//         tempLRIdx.push(leftIdx);
//         tempLRIdx.push(rightIdx);
//       }

//       // leftIdx + 1. Checks whether the next element on the left side is equal to the current element on the right side.
//       if (string[leftIdx + 1] === string[rightIdx]) {
//         indexOfCharRemove = leftIdx;
//         leftIdx++;
//       }
//       // rightIdx - 1. Checks whether the next element on the right side is equal to the current element on the left side.
//       else if (string[leftIdx] === string[rightIdx - 1]) {
//         indexOfCharRemove = rightIdx;
//         rightIdx--;
//       } else {
//         return -1;
//       }
//     }

//     leftIdx++;
//     rightIdx--;
//   }

//   return indexOfCharRemove ?? -1;
// }

/**
 *
 * @param {string} string
 * @returns {number}
 */
function palindromeIndex(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;

  let indexOfCharRemove = undefined;

  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) {
      // If you have previously deleted an element, you cannot delete another element => return -1.
      if (indexOfCharRemove !== undefined) return -1;

      // leftIdx + 1. Checks whether the next element on the left side is equal to the current element on the right side.
      if (
        string[leftIdx + 1] === string[rightIdx] &&
        string[leftIdx + 2] === string[rightIdx - 1]
      ) {
        indexOfCharRemove = leftIdx;
        leftIdx += 2;
        rightIdx--;
      }
      // rightIdx - 1. Checks whether the next element on the right side is equal to the current element on the left side.
      else if (
        string[leftIdx] === string[rightIdx - 1] &&
        string[leftIdx + 1] === string[rightIdx - 2]
      ) {
        indexOfCharRemove = rightIdx;
        leftIdx++;
        rightIdx -= 2;
      } else {
        return -1;
      }
    }

    leftIdx++;
    rightIdx--;
  }
  return indexOfCharRemove ?? -1;
}

// palindromeIndex("aaab");
// palindromeIndex("baa");
// palindromeIndex("aaa");
// palindromeIndex("bcbc");
// palindromeIndex("aaaaaaaaaaaaaaaaaaaaaa");
// const result = palindromeIndex(
//   "hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh"
// );
// console.log(result);
