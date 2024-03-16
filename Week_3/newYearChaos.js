// Cach 1
/**
 * To solve this problem in a linear fashion, I instead calculate the offset the current element has to its starting position. I also work backwards through the array, and store the smallest value I've found so far. This leaves me with 4 cases for each element: 1. The offset is more than 2, so I print "Too chaotic" as more than 2 bribes have been used, and call return. 2. If the current element is smaller than the smallests value, I set it as the new smallest value. 3. If nothing else I add the offset to the number of bribes. 4. Finally the most tricky one, if an element has already been skipped by 1 or 2 elements, and that has left one element between those elements and the current element, and then the current element bribes the element in front of it, you get an offset of either 0 or -1, but its element is larger than the smallest value so far, so it should count as 1 bribe. It can't be 2 because then it would revert the bribe of one of the elements that bribed it initially, and the problem is to count the minimum number of bribes need to construct the current situation.
 */

/**
 *
 * @param {Number[]} q
 */
function minimumBribes(q) {
  let bribes = 0;
  let lowest = q[q.length - 1];

  for (let i = q.length - 2; i >= 0; i--) {
    const bribed = q[i] - (i + 1);

    if (bribed > 2) {
      console.log("Too chaotic");
      return;
    } else if (q[i] > lowest && bribed < 1) bribes += 1;
    else if (q[i] < lowest) lowest = q[i];
    else bribes += bribed;
  }

  console.log(bribes);
}

// Cach 2: TypeScript

// function isOrdered(q: number[]): boolean {
//   for (let i = 0; i < q.length - 1; i++) {
//     if (q[i] > q[i + 1]) return false;
//   }
//   return true;
// }
// function minimumBribes(q: number[]): void {
//   // Write your code here
//   let minBribes = 0;
//   const nChanges = new Array(q.length).fill(0);
//   while (!isOrdered(q)) {
//     for (let i = 0; i < q.length - 1; i++) {
//       if (q[i] > q[i + 1]) {
//         nChanges[q[i] - 1]++;
//         if (nChanges[q[i] - 1] > 2) {
//           console.info("Too chaotic");
//           return;
//         }
//         const temp = q[i];
//         q[i] = q[i + 1];
//         q[i + 1] = temp;
//         minBribes++;
//       }
//     }
//   }

//   console.info(minBribes);
// }

/**
 * Su dung vong lap While kiem tra isOrdered(q), neu 'q' chua duoc sap xep => q chua dung thu tu.
 *
 * For Loop:
 * Kiem tra phan tu q[i] > q[i+1].
 * * Neu q[i] > q[i+1] => q[i] đang không đứng đúng vị trí của nó nó (q[i] đã hối lộ).
 * * Tăng nChanges[q[i] - 1] lên lên1 đơn vị.
 * * Kiểm tra nếu (nChanges[q[i] - 1 > 2) console.info('Too chaotic') vì mỗi người chỉ có thể hối lộ tối đa đa 2 lần.lần
 * * Đổi vị trí của q[i] và q[i+i1]
 * * Tăng minBribes lên một đơn vị.
 *
 * Vòng lặp while lại tiếp tục kiểm tra isOrdered(q) nếu thoả kiều kiện thì chạy lại For LoopL, nếu không thì trả về console.info(minBribes).
 */

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
